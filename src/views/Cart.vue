<template>
  <Loading :active="isLoading"></Loading>
  <div class="page-body-padding container pb-7">
    <div class="row justify-content-center">
      <div class="col-lg-10 mt-5">
        <h1 class="text-center text-brown">購物車</h1>
        <div class="row justify-content-center mt-5 mb-md-5">
          <div class="col-lg-8">
            <div class="row process">
              <div class="col-4 text-maroon text-center pb-2 border-bottom border-5 border-maroon">
                <span>STEP 01</span>
                <div class="fs-5 fw-bold mt-2 mb-2">建立訂單</div>
              </div>
              <div class="col-4 text-maroon text-center pb-2 border-bottom border-5">
                <span>STEP 02</span>
                <div class="fs-5 fw-bold mt-2 mb-2">確認付款</div>
              </div>
              <div class="col-4 text-maroon text-center pb-2 border-bottom border-5">
                <span>STEP 03</span>
                <div class="fs-5 fw-bold mt-2 mb-2">完成訂單</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between pt-7">
          <div class="col-md-6 col-lg-5 text-brown mb-5 mb-md-0">
            <div class="h4 mb-4 text-center text-md-start">訂購商品</div>
            <template v-if="cart.carts">
              <div class="pb-4 px-md-3 border-bottom d-flex mb-4" v-for="item in cart.carts" :key="item.id">
                <div class="photo">
                  <img :src="item.product.imageUrl" alt="">
                </div>
                <div class="px-3 good-title">
                  <div class="text-line-height-48 mb-2">
                    <div class="text-2-line fw-bold">{{item.product.title}}</div>
                  </div>
                  <div class="fw-bold mb-2">NT$&nbsp;{{item.product.price}}</div>
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-outline-toffee"
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
                      class="btn btn-outline-toffee"
                      @click="updateCart(item, item.qty++)"
                      :class="{'disabled' : item.qty >= 10}"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <div class="fs-5 ms-auto">
                  <button type="button" class="btn btn-outline-toffee btn-sm" @click="deleteCart(item)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </template>
            <div class="input-group mb-3 pt-4 pb-4">
              <input type="text" class="form-control" placeholder="請輸入折扣碼" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="couponCode">
              <button class="btn btn-toffee" type="button" @click="useCoupon">套用折價券</button>
            </div>
            <div class="text-end">
              <div class="fs-5 fw-bold">總計:&nbsp;NT$&nbsp;{{finalTotal}}</div>
            </div>
          </div>
          <div class="col-md-6 text-brown">
            <div class="h4 mb-4 text-brown text-center text-md-start mt-5 mt-md-0">訂購人資訊</div>
            <Form class="shadow p-4 mb-5 bg-body rounded" @submit="createdOrder" v-slot="{ errors }">
              <div class="mb-3">
                <label class="form-label fw-bold" for="emil">電子信箱
                  <span class="text-danger">*</span>
                </label>
                <Field name="email" type="email" class="form-control"
                        placeholder="請輸入電子信箱"
                        :class="{'is-invalid': errors['email'] }"
                        rules="email|required"
                        v-model="form.user.email">
                </Field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="收件人姓名" class="form-label fw-bold">收件人姓名
                  <span class="text-danger">*</span>
                </label>
                <Field name="收件人姓名" type="text" class="form-control"
                        placeholder="請輸入收件人姓名"
                        :class="{'is-invalid': errors['收件人姓名'] }"
                        rules="required"
                        v-model="form.user.name">
                </Field>
                <ErrorMessage name="收件人姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="收件人電話" class="form-label fw-bold">收件人電話
                  <span class="text-danger">*</span>
                </label>
                <Field name="收件人電話" type="number" class="form-control"
                        placeholder="請輸入收件人電話"
                        :class="{'is-invalid': errors['收件人電話']}"
                        rules="required"
                        v-model="form.user.tel">
                </Field>
                <ErrorMessage name="收件人電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="收件人地址" class="form-label fw-bold">收件人地址
                  <span class="text-danger">*</span>
                </label>
                <Field name="收件人地址"  type="text" class="form-control"
                        placeholder="請輸入收件人地址"
                        :class="{'is-invalid': errors['收件人地址']}"
                        rules="required"
                        v-model="form.user.address">
                </Field>
                <ErrorMessage name="收件人地址" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label fw-bold">備註</label>
                <textarea name="" class="form-control" rows="3" v-model="form.message"></textarea>
              </div>
              <div class="text-center mt-5">
                <button type="submit" class="btn btn-toffee">送出訂單</button>
              </div>
            </Form>
          </div>
          <div class="col-12 mt-md-5" v-if="recentWatched.length !== 0">
            <div class="d-flex border-top  pt-5 justify-content-between align-center mb-4">
              <div class="h4 mb-0 text-brown">瀏覽紀錄</div>
              <button @click="deleteStorage" type="button" class="btn btn-sm btn-outline-toffee">清除瀏覽紀錄</button>
            </div>
            <div class="goods row">
              <template v-if="recentWatched !== ''">
                <swiper
                  :slidesPerView="1.7"
                  :spaceBetween="20"
                  :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                  }"
                  :breakpoints="{
                    '768': {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                  }"
                  :modules="modules"
                  class="bookSwiper rounded-4 h-100 p-2">
                  <swiper-slide
                    v-for="item in filterStorageItem"
                    :key="item.id"
                  >
                    <div class="card h-100 position-relative">
                      <div class="btn-sm rounded-circle btn-toffee position-absolute top-0 end-0 m-2">
                        <i class="bi bi-bookmark text-white"></i>
                      </div>
                      <a class="img-box" @click="getProductId(item.id)">
                        <img :src="item.imageUrl" class="card-img-top" alt="...">
                      </a>
                      <a @click="addToCart(item)" class="add-to-cart d-block text-white text-center pt-1 pb-1 btn-toffee"><i class="bi bi-cart3 me-2"></i>加入購物車</a>
                      <div class="card-body text-line-height">
                        <div class="h5 text-brown text-2-line">{{item.title}}</div>
                        <span class="text-maroon position-absolute bottom-0 pb-3">NT$&nbsp;{{item.price}}</span>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsMixins from '@/mixins/goodsMixins'
import SwiperMixins from '@/mixins/swiperMixins'
export default {
  inject: [
    'emitter'
  ],
  mixins: [
    GoodsMixins,
    SwiperMixins
  ],
  data () {
    return {
      allProducts: [],
      cart: [],
      total: '',
      finalTotal: '',
      status: {
        loadingItem: ''
      },
      couponCode: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      recentWatched: JSON.parse(localStorage.getItem('recentWatched')) || [],
      isLoading: false
    }
  },
  methods: {
    deleteCart (item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.delete(api).then((res) => {
        this.getCartProducts()
      })
    },
    useCoupon () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const codeName = {
        code: this.couponCode
      }
      this.$http.post(api, { data: codeName }).then((res) => {
        this.getCartProducts()
        this.finalTotal = res.data.final_total
      })
    },
    deleteStorage () {
      this.isLoading = true
      localStorage.removeItem('recentWatched')
      this.recentWatched = []
      const vm = this
      setTimeout(() => {
        this.isLoading = false
        vm.scrollTop()
      }, 2000)
    },
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  computed: {
    filterStorageItem () {
      return this.allProducts.filter((item) => {
        if (this.recentWatched.includes(item.id)) {
          return item
        }
      })
    }
  },
  mounted () {
    this.emitter.on('formData', (data) => {
      this.form = data
    })
    this.emitter.on('getCarts', (item) => {
      this.cart = item
    })
    this.emitter.on('getFinalTotal', (finalTotal) => {
      this.finalTotal = finalTotal
    })
    this.emitter.on('all', (item) => {
      this.allProducts = item
    })
    this.emitter.on('recentWatch', (item) => {
      this.recentWatched = item
    })
    this.getCartProducts()
    this.getAllProducts()
  }
}
</script>
