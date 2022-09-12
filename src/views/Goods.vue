<template>
  <Loading :active="isLoading"></Loading>
  <div class="page-body-padding container pb-7">
    <div class="row justify-content-center">
      <div class="col-xl-10 mt-5">
        <div class="row">
          <div class="accordion col-md-3 col-12 mb-5 mb-md-0" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button bg-brown text-white fs-5 pt-4 pb-4"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  類別
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" @click="accordionCollapseBack" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body p-0">
                  <ul class="list-group rounded-0">
                    <li
                      class="list-group-item"
                      @click="category = '', getProducts(page = 1)"
                      :class="{'active' : category === '' }"
                    >全部</li>
                    <li
                      class="list-group-item"
                      @click="category = '花束', getProducts(page = 1)"
                      :class="{'active' : category === '花束' }"
                    >花束</li>
                    <li
                      class="list-group-item"
                      @click="category = '盆花', getProducts(page = 1)"
                      :class="{'active' : category === '盆花' }"
                    >盆花</li>
                    <li
                      class="list-group-item"
                      @click="category = '課程', getProducts(page = 1)"
                      :class="{'active' : category === '課程' }"
                    >課程</li>
                    <!-- <li
                      class="list-group-item"
                      v-for="item in filterCategory"
                      :key="item.id"
                      @click="category = item, getProducts(page = 1)"
                      :class="{'active' : category === item }"
                    >{{item}}</li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="h1 text-brown mb-3 text-center text-sm-start" v-if="category === ''">全部</div>
            <div class="h1 text-brown mb-3 text-center text-sm-start" v-else>{{category}}</div>
            <div class="d-sm-flex justify-content-between align-items-center mb-5 text-center">
              <span>顯示所有&nbsp;{{categoryNum.length}}&nbsp;個結果</span>
              <select
                class="form-select w-auto m-auto m-sm-0 mt-2 mt-sm-0"
                aria-label="Default select"
                v-model="searchSelected"
                @change="searchSelect($event)"
                >
                <option value="null" disabled selected>依照條件搜尋</option>
                <option
                  :value="item.value"
                  v-for="item in sortModel" :key="item.index"
                >{{item.option}}
                </option>
              </select>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div class="goods row">
                  <template v-if="category === ''">
                    <div class="col-sm-6 col-lg-4 mb-4" v-for="item in products" :key="item.id">
                      <div class="card h-100 position-relative">
                        <div
                          class="btn-sm rounded-scircle btn-toffee position-absolute top-0 end-0 m-2" @click="toggleFavorite(item)"
                          :class="{ 'opacity-100': favorite.includes(item)}">
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
                    </div>
                  </template>
                  <template  v-if="category !== ''">
                    <div class="col-sm-6 col-lg-4 mb-4" v-for="item in filterData" :key="item.id">
                      <div class="card h-100 position-relative">
                        <div
                          class="btn-sm rounded-scircle btn-toffee position-absolute top-0 end-0 m-2" @click="toggleFavorite(item)"
                          :class="{ 'opacity-100': favorite.includes(item)}">
                          <i class="bi bi-bookmark text-white"></i>
                        </div>
                        <a class="img-box" @click="getProductId(item.id)">
                          <img :src="item.imageUrl" class="card-img-top" alt="...">
                        </a>
                        <a @click="addToCart(item)" class="add-to-cart d-block text-white text-center pt-1 pb-1 btn-toffee">
                          <i class="bi bi-cart3 me-2"></i>加入購物車
                        </a>
                        <div class="card-body text-line-height">
                          <div class="h5 text-brown text-2-line">{{item.title}}</div>
                          <span class="text-maroon position-absolute bottom-0 pb-3">NT$&nbsp;{{item.price}}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
            </div>
            <div class="row justify-content-center" v-if="categoryNum.length > 10">
              <div class="w-auto mt-5" >
                <Pagination
                  :pages="pagination"
                  @emit-pages="getProducts"
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsMixins from '@/mixins/goodsMixins'
import Pagination from '../components/Pagination.vue'
export default {
  inject: [
    'emitter'
  ],
  components: {
    Pagination
  },
  mixins: [
    GoodsMixins
  ],
  data () {
    return {
      isLoading: false,
      allProducts: [],
      products: [],
      pagination: {},
      isActive: true,
      // 商品類別
      category: '',
      // 商品類別頁
      currentPage: [],
      sortModel: [
        {
          option: '價錢:低-高',
          value: 'forNew'
        },
        {
          option: '價錢:高-低',
          value: 'forPrice'
        }
      ],
      searchSelected: null,
      searchSelectItems: []
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(api).then((res) => {
        console.log('api:', api)
        this.products = res.data.products
        this.pagination = res.data.pagination
        this.searchSelected = null
      })
    },
    searchSelect (event) {
      this.searchSelected = event.target.value
      if (this.category === '') {
        // this.allProducts
        console.log('===')
        const hasPrice = this.products.filter((item) => {
          if (item.price !== '' && item.price !== undefined) {
            return item
          }
        })
        if (this.searchSelected === 'forNew') {
          const sortPriceA = hasPrice.sort((a, b) => {
            return a.price - b.price
          })
          this.products = sortPriceA
        } else if (this.searchSelected === 'forPrice') {
          const sortPriceB = hasPrice.sort((a, b) => {
            return b.price - a.price
          })
          this.products = sortPriceB
        }
      } else if (this.category !== '') {
        console.log('!==')
        // this.products
        const hasAllPrice = this.allProducts.filter((item) => {
          if (item.price !== '' && item.price !== undefined) {
            return item
          }
        })
        if (this.searchSelected === 'forNew') {
          const sortPriceA = hasAllPrice.sort((a, b) => {
            return a.price - b.price
          })
          this.allProducts = sortPriceA
        } else if (this.searchSelected === 'forPrice') {
          const sortPriceB = hasAllPrice.sort((a, b) => {
            return b.price - a.price
          })
          this.allProducts = sortPriceB
        }
      }
    },
    accordionCollapseBack () {
      if (window.matchMedia('(max-width: 575px)').matches) {
        const accordionButton = document.querySelector('.accordion-button')
        accordionButton.click()
      }
    }
  },
  computed: {
    // 類別
    filterCategory () {
      const array = this.allProducts.map((item) => item.category)
      return [...new Set(array)]
    },
    filterData () {
      return this.allProducts.filter((item) => {
        if (this.category === '') {
          return this.allProducts
        } else if (this.category === item.category) {
          return this.allProducts
        }
      })
    },
    // 類別的商品數量
    categoryNum () {
      return this.allProducts.filter((item) => {
        if (this.category === '') {
          return this.allProducts
        } else if (this.category === item.category) {
          return item
        }
      })
    }
  },
  mounted () {
    this.emitter.on('all', (item) => {
      this.allProducts = item
    })
    this.getProducts()
    this.getAllProducts()
  }
}
</script>

<style lang="scss" scoped>
  @media (min-width: 576px){
    .accordion-button {
      pointer-events:none;
      &:after{
        background-image: none;
      }
    }
    .collapse {
      &:not(.show) {
        display: block;
      }
    }
  }
  a{
    cursor: pointer;
  }
  .list-group{
    .active{
      background-color: #9d5219 !important;
      border-color:#9d5219;
    }
    .list-group-item{
      cursor: pointer;
    }
  }
  @media(max-width:575px){
    .accordion-button{
      &:after{
        display: block;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  </svg>');
      }
    }
  }
</style>
