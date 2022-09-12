export default {
  inject: [
    'emitter'
  ],
  data () {
    return {
      allProducts: [],
      products: [],
      product: {},
      cart: [],
      cartLength: '',
      finalTotal: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        }
      },
      isLoading: false,
      recentWatched: JSON.parse(localStorage.getItem('recentWatched')) || [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      favoriteId: JSON.parse(localStorage.getItem('favoriteId')) || [],
      favoriteLens: ''
    }
  },
  methods: {
    getAllProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.allProducts = res.data.products
        this.isLoading = false
        this.emitter.emit('all', this.allProducts)
      })
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        this.pagination = res.data.pagination
        this.emitter.emit('products', this.products)
      })
    },
    getCartProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        this.cart = res.data.data
        this.total = res.data.data.total
        this.finalTotal = res.data.data.final_total
        this.cartLength = res.data.data.carts.length
        this.emitter.emit('getNum', this.cartLength)
        this.emitter.emit('getFinalTotal', this.finalTotal)
        this.emitter.emit('getCarts', this.cart)
      })
    },
    // 至商品詳情頁
    getProductId (id) {
      this.recentWatched.push(id)
      localStorage.setItem('recentWatched', JSON.stringify(this.recentWatched))
      this.emitter.emit('recentWatch', this.recentWatched)
      this.$router.push(`infomation/${id}`)
    },
    // 商品詳情頁資訊
    getProduct () {
      const id = this.$route.params.id
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.product = res.data.product
        this.product.qty = 1
        // this.sortWatched(this.product)
        this.isLoading = false
        this.emitter.emit('productInfo', this.product)
      })
    },
    addToCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.post(api, { data: cart }).then((res) => {
        this.isLoading = false
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已成功加入購物車!'
        })
        this.getCartProducts()
      })
    },
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.status.loadingItem = item.id
      this.$http.put(api, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        this.getCartProducts()
      })
    },
    // 送出訂單
    createdOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order }).then((res) => {
        const orderId = res.data.orderId
        if (res.data.success) {
          this.emitter.emit('formData', this.form)
          this.cartLength = ''
          this.$router.push(`checkout/${orderId}`)
        }
      })
    },
    toggleFavorite (product) {
      const mach = this.favorite.findIndex((item) => item.id === product.id)
      if (mach === -1) {
        this.favorite.push(product)
        this.favoriteId.push(product.id)
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已成功加入收藏清單!'
        })
      } else if (mach > -1) {
        this.favorite.splice(mach, 1)
        this.favoriteId.splice(mach, 1)
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已成功移除收藏清單!'
        })
      }
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      localStorage.setItem('favoriteId', JSON.stringify(this.favoriteId))
      this.emitter.emit('favorite', this.favorite)
    }
  },
  mounted () {
    this.emitter.on('deleteCartItem', (item) => {
      this.cart = item
    })
  }
}
