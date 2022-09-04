<template>
  <div class="container-xl mt-5">
    <h1>優惠券</h1>
    <div class="text-end">
      <button
        type="button"
        class="btn btn-primary"
        @click="openModal(true)"
      >新增優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false,item)"
              >編輯</button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>
  </div>
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"
  ></CouponModal>
  <DelCoupon
    ref="delCouponModal"
    :item="tempCoupon"
    @delete-item="delCoupon"
  ></DelCoupon>
</template>

<script>
import CouponModal from '../components/CouponModal.vue'
import DelCoupon from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'
export default {
  inject: [
    'emitter'
  ],
  props: {
    config: Object
  },
  components: {
    CouponModal,
    Pagination,
    DelCoupon
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      pagination: {},
      isNew: false
    }
  },
  methods: {
    openModal (isNew, item) {
      this.isNew = isNew
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      const componentCoupon = this.$refs.couponModal
      componentCoupon.showModal()
    },
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(api).then((res) => {
        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
      })
    },
    updateCoupon (tempCoupon) {
      const componentCoupon = this.$refs.couponModal
      if (this.isNew) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(api, { data: tempCoupon }).then((res) => {
          componentCoupon.hideModal()
          if (res.data.success) {
            this.getCoupons()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          }
        })
      } else {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`
        this.$http.put(api, { data: this.tempCoupon }).then((res) => {
          componentCoupon.hideModal()
          if (res.data.success) {
            this.getCoupons()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          }
        })
      }
    },
    // 刪除
    openDelModal (item) {
      this.tempCoupon = { ...item }
      const componentDelModal = this.$refs.delCouponModal
      componentDelModal.showModal()
    },
    delCoupon () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(api).then((res) => {
        this.$refs.delCouponModal.hideModal()
        this.getCoupons()
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>

<style>

</style>
