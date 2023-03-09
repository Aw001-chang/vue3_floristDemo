<template>
  <Loading :active="isLoading"></Loading>
  <div class="page-body-padding container pb-7">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mt-5 mb-5">
            <li class="breadcrumb-item"><a href="#" class="text-brown">首頁</a></li>
            <li class="breadcrumb-item active" aria-current="page">商品</li>
          </ol>
        </nav>
        <h1 class="text-center text-brown">購物車</h1>
        <div class="row justify-content-center mt-5 mb-md-5">
          <div class="col-lg-8">
            <div class="row process">
              <div class="col-4 text-maroon text-center pb-2 border-bottom border-5 border-maroon">
                <span>STEP 01</span>
                <div class="fs-5 fw-bold mt-2 mb-2">建立訂單</div>
              </div>
              <div class="col-4 text-maroon text-center px-0 pb-2 border-bottom border-5 border-maroon">
                <span>STEP 02</span>
                <div class="fs-5 fw-bold mt-2 mb-2">確認付款</div>
              </div>
              <div class="col-4 text-maroon text-center px-0 pb-2 border-bottom border-5">
                <span>STEP 03</span>
                <div class="fs-5 fw-bold mt-2 mb-2">完成訂單</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-7 text-center text-sm-start">
          <div class="d-sm-flex justify-content-start align-items-end mb-3">
            <div class="h4 text-brown mb-0">訂單編號</div>
            <span class="text-danger ms-sm-2 fw-bold">複製以保存您的訂單編號，便於查找訂單狀態</span>
          </div>
          <div class="d-sm-flex justify-content-between align-items-center">
            <div class="h5 mb-0 fw-bold text-brown">{{orderId}}</div>
            <button type="button" @click="copyOrderId(orderId)" class="btn btn-toffee mt-3 mt-sm-0">複製訂單編號</button>
          </div>
        </div>
        <div class="row justify-content-between pt-7">
          <div class="col-md-6 col-lg-5 text-brown mb-5 mb-md-0">
            <div class="h4 mb-4 text-center text-md-start">訂購商品</div>
            <div class="pb-4 px-md-3 border-bottom d-flex mb-4" v-for="item in order.products" :key="item.id">
              <div class="photo">
                <img :src="item.product.imageUrl" alt="">
              </div>
              <div class="px-3 good-title">
                <div class="text-line-height-48 mb-2">
                  <div class="text-2-line fw-bold">{{item.product.title}}</div>
                </div>
                <div class="fw-bold mb-2">NT$&nbsp;{{item.product.price}}</div>
                <!-- <span class="text-danger">已套用優惠券</span> -->
                <!-- <div class="btn-group">
                  <button type="button" class="btn btn-outline-toffee disabled">
                    <i class="bi bi-dash-lg"></i>
                  </button>
                  <input type="number" class="text-center form-control rounded-0 border-start-0 border-end-0 border-toffee" value="1">
                  <button type="button" class="btn btn-outline-toffee">
                    <i class="bi bi-plus-lg"></i>
                  </button>
                </div> -->
              </div>
              <div class="fs-5 ms-auto text-toffee">
                x{{item.qty}}
              </div>
            </div>
            <div class="text-end">
              <div class="fs-5 fw-bold text-toffee">總計:&nbsp;NT$&nbsp;{{order.total}}</div>
            </div>
          </div>
          <div class="col-md-6 text-brown">
            <div class="h4 mb-4 text-brown text-center text-md-start mt-5 mt-md-0">訂購人資訊</div>
            <form class="shadow p-4 mb-5 bg-body rounded" @submit.prevent="payOrder">
              <div class="mb-3">
                <label class="form-label fw-bold">電子信箱
                  <span class="text-danger">*</span>
                </label>
                <input type="email" class="form-control" placeholder="請輸入電子信箱" :value="order.user.email" disabled>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">收件人姓名
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" placeholder="請輸入收件人姓名" :value="order.user.name" disabled>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">收件人電話
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" placeholder="請輸入收件人電話" :value="order.user.tel" disabled>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">收件人地址
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" placeholder="請輸入收件人地址" :value="order.user.address" disabled>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">備註</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :value="order.message" disabled></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">付款狀態</label>
                <div v-if="!order.is_paid" class="text-muted">尚未付款</div>
                <div v-else class="text-success">付款完成</div>
              </div>
              <div class="text-center mt-5" v-if="order.is_paid === false">
                <button type="submit" class="btn btn-toffee">確認付款</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: [
    'emitter'
  ],
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      },
      isLoading: false
    }
  },
  methods: {
    getOders () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(api).then((res) => {
        this.isLoading = false
        this.order = res.data.order
      })
    },
    copyOrderId (orderId) {
      navigator.clipboard.writeText(orderId).then(() => {
        this.emitter.emit('push-message', {
          style: 'success',
          title: '您已成功複製優惠碼!'
        })
      })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          this.getOders()
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOders()
  }
}
</script>
