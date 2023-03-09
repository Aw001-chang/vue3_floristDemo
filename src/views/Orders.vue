<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-xl mt-5">
    <h1>訂單</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.user }}</td>
          <td>
            <ul>
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }}, 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch$(item.id)`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              >
              <label class="form-check-label" :for="`paidSwitch$(item.id)`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openOrderModal(item)"
              >檢視</button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  </div>
  <OrderModal
    ref="orderModal"
    :order="tempOrder"
    @update-order="updatePaid"
  ></OrderModal>
  <delModal
    ref="delModal"
    :item="tempOrder"
    @delete-item="deleteOrder"
  ></delModal>
</template>

<script>
import OrderModal from '../components/OrderModal.vue'
import delModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'
export default {
  inject: [
    'emitter'
  ],
  data () {
    return {
      isLoading: false,
      orders: {},
      pagination: {},
      tempOrder: {}
    }
  },
  components: {
    OrderModal,
    delModal,
    Pagination
  },
  methods: {
    openOrderModal (item) {
      this.tempOrder = { ...item }
      const orderConponent = this.$refs.orderModal
      orderConponent.showModal()
    },
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(api).then((res) => {
        this.isLoading = false
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      })
    },
    updatePaid (item) {
      this.isLoading = true
      this.tempOrder = item
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      const orderConponent = this.$refs.orderModal
      this.$http.put(api, { data: paid }).then((res) => {
        orderConponent.hideModal()
        this.isLoading = false
        this.getOrders(this.currentPage)
        this.emitter.emit('push-message', {
          style: 'success',
          title: '更新付款狀態'
        })
      })
    },
    // 刪除
    openDelModal (item) {
      this.tempOrder = { ...item }
      const orderConponent = this.$refs.delModal
      orderConponent.showModal()
    },
    deleteOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(api).then((res) => {
        console.log(res.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getOrders()
        this.$emitter.emit('push-message', {
          style: 'success',
          title: '刪除訂單成功'
        })
      })
    }
  },
  created () {
    this.getOrders()
    console.log('order', this.orders)
  }
}
</script>

<style>

</style>
