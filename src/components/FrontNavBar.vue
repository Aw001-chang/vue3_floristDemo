<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-brown position-fixed w-100">
    <div class="container-lg">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <nav class="navbar navbar-expand-sm navbar-dark pt-2 pb-2">
            <div class="container-fluid px-0">
              <router-link to="/user/home" class="navbar-brand d-flex align-items-center">
                <img class="logo me-2" src="../../public/florist_logo.png" alt="">
                <h1>桂子飄香</h1>
              </router-link>
              <div class="nav-item dropdown ms-auto order-sm-1">
                <a class="nav-link d-flex text-white pe-2 pe-sm-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="position-relative me-2">
                    <i class="bi bi-cart3 me-1"></i>
                    <span
                      :cartLength="cartLength"
                      v-if="cartLength !== 0"
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{cartLength}}
                    </span>
                  </div>
                  <div class="d-sm-block d-none">購物車</div>
                </a>
                <div class="dropdown-menu shadow-lg" aria-labelledby="navbarDropdown">
                  <div class="border-bottom pb-2 px-3 text-toffee fw-bold fs-4 text-center">購物車</div>
                  <!-- 以下為 購物車尚未選購商品 -->
                  <div v-if="cartLength === 0">
                    <div class="text-center mt-4 d-flex justify-content-center flex-column">
                      <i class="fs-1 bi bi-exclamation-triangle-fill text-black-50"></i>
                      <span class="text-black-50">尚未選購商品</span>
                    </div>
                    <div class="text-center mt-4 mb-3 px-3">
                      <router-link to="/user/goods" class="btn btn-toffee w-100 d-block">選購商品</router-link>
                    </div>
                  </div>
                  <!-- 以下為 購物車已已選購商品 -->
                  <div class="overflow-scroll" v-else>
                    <template v-if="cart.carts">
                      <div class="dropdown-item pb-4 px-md-3 border-bottom d-flex mb-4" v-for="item in cart.carts" :key="item.id">
                        <a href="#" class="photo">
                          <img :src="item.product.imageUrl" alt="">
                        </a>
                        <div class="px-3 good-title">
                          <div class="mb-2">
                            <div class="text-1-line fw-bold">{{item.product.title}}</div>
                          </div>
                          <div class="fw-bold mb-2">NT$&nbsp;{{item.product.price}}</div>
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-outline-toffee btn-sm"
                              @click="updateCart(item, item.qty--)"
                              :class="{'disabled' : item.qty <= 1}"
                            >
                              <i class="bi bi-dash-lg"></i>
                            </button>
                            <input
                              type="number"
                              class="text-center form-control rounded-0 border-start-0 border-end-0 border-toffee"
                              v-model.number="item.qty"
                              :disabled="item.id === status.loadingItem"
                              @click="updateCart(item)"
                            >
                            <button
                              type="button"
                              class="btn btn-outline-toffee btn-sm"
                              @click="updateCart(item, item.qty++)"
                              :class="{'disabled' : item.qty >= 10}"
                            >
                              <i class="bi bi-plus-lg"></i>
                            </button>
                          </div>
                        </div>
                        <div class="fs-5 ms-auto">
                          <button
                            type="button" class="btn btn-outline-toffee btn-sm"
                            @click="deleteCart(item)"
                            >
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                      <div class="text-end px-md-3">
                        <div class="fs-5 fw-bold">總計:&nbsp;NT$&nbsp;{{finalTotal}}</div>
                      </div>
                      <div class="text-center mt-4 mb-3 px-3">
                        <router-link to="/user/cart"  class="btn btn-toffee w-100 d-block mb-3">前往結帳</router-link>
                        <router-link to="/user/goods"  class="btn btn-outline-toffee w-100 d-block">繼續選購</router-link>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto mt-sm-0 mt-3">
                  <li class="nav-item">
                    <router-link to="/user/goods" class="nav-link d-flex px-3 active">
                      <div class="position-relative me-2">
                        <i class="bi bi-shop-window"></i>
                      </div>
                      <div>商品列表</div>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/user/favorite" class="nav-link d-flex px-3 active">
                      <div class="position-relative me-3">
                        <i class="bi bi-bookmark"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {{filterFavoriteLen.length}}
                        </span>
                      </div>
                      <div>我的收藏</div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsMixins from '@/mixins/goodsMixins'
export default {
  inject: [
    'emitter'
  ],
  mixins: [
    GoodsMixins
  ],
  data () {
    return {
      cart: [],
      total: '',
      cartLength: '',
      finalTotal: '',
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  methods: {
    getData (len) {
      console.log('len:', len)
      this.cartLength = len
    },
    deleteCart (item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.$http.delete(api).then((res) => {
        this.isLoading = false
        this.emitter.emit('deleteCartItem', this.cart)
        this.getCartProducts()
      })
    }
  },
  computed: {
    filterFavoriteLen () {
      const array = this.favorite
      return [...new Set(array)]
    }
  },
  mounted () {
    this.emitter.on('getNum', (num) => {
      this.cartLength = num
    })
    this.emitter.on('getFinalTotal', (finalTotal) => {
      this.finalTotal = finalTotal
    })
    this.emitter.on('getCarts', (item) => {
      this.cart = item
    })
    this.emitter.on('formData', (data) => {
      this.cartLength = 0
    })
    this.emitter.on('favorite', (item) => {
      this.favorite = item
    })
    this.getCartProducts()
  }
}
</script>

<style lang="scss" scoped>
  *{
    z-index: 100;
  }
  h1{
    font-size: 1.125rem;
    letter-spacing: 0.05rem;
  }
  .logo{
    width: 38px;
  }
  .dropdown-menu{
    width: 360px;
    left:auto;
    right:-118%;
    top:50px !important;
    transform: .3s ease-out;
    .overflow-scroll{
      height: 300px;
    }
  }
  .dropdown-item{
    &:hover{
      background-color: transparent !important;
    }
  }
  @media(min-width:545px){
    .dropdown-menu{
      left:auto !important;
      right:0 !important;
    }
  }
</style>
