<template>
  <Loading :active="isLoading"></Loading>
  <div class="page-body-padding container pb-7">
    <div class="row justify-content-center">
      <div class="col-lg-10 mt-5">
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <div class="img-box">
              <img :src="product.imageUrl" alt="">
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="ms-lg-4">
              <h1 class="mb-4 text-maroon">{{product.title}}</h1>
              <span class="mb-2 text-decoration-line-through">NT$&nbsp;{{product.origin_price}}</span>
              <h3 class="text-toffee">NT$&nbsp;{{product.price}}</h3>
              <div class="mt-4 mb-4">
                <label for="inputState" class="form-label">請選擇數量:</label>
                <select id="inputState" class="form-select" v-model.number="product.qty">
                  <option value="0" selected disabled>請選擇數量</option>
                  <option :value="qty" v-for="qty in 10" :key="qty">
                    {{qty}}
                  </option>
                </select>
              </div>
              <div class="row justify-content-between">
                <div class="col-lg-6 mb-3 mb-lg-0">
                  <button class="btn btn-outline-toffee w-100" @click="toggleFavorite(product)">
                    <i class="bi bi-bookmark me-2"></i>加入收藏
                  </button>
                </div>
                <div class="col-lg-6 mb-4">
                  <button class="btn btn-toffee w-100" @click="addToCart(product)">
                    <i class="bi bi-cart3 me-2"></i>加入購物車
                  </button>
                </div>
              </div>
              <div class="pb-4 pt-4">
                <div class="h4 mb-4 text-maroon">活動資訊</div>
                <table class="table table-borderless mb-0">
                  <tr>
                    <th>預約須知:</th>
                    <td>活動日 5 天前需付款完成</td>
                  </tr>
                  <tr>
                    <th>活動所在地:</th>
                    <td>活動日 5 天前需付款完成</td>
                  </tr>
                  <tr>
                    <th>活動地址:</th>
                    <td>10491台北市中山區中山北路三段181號</td>
                  </tr>
                  <tr>
                    <th>活動語言:</th>
                    <td>中文</td>
                  </tr>
                  <tr>
                    <th>開放入場時間:</th>
                    <td>活動開始前 10 分鐘</td>
                  </tr>
                  <tr>
                    <th>活動長度:</th>
                    <td>2.5 小時</td>
                  </tr>
                  <tr>
                    <th>最低年齡限制:</th>
                    <td>6 歲以上</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div>
              <div class="pb-4 pt-4 mb-4">
                <div class="h4 mb-4 text-maroon">活動內容</div>
                <ul class="ps-3">
                  <li class="mb-2">課程時間：2.5~3小時 (依照個人手感不同速度不同）</li>
                  <li class="mb-2">費用包含教學、材料、茶水點心、場地</li>
                  <li class="mb-2">體驗過程中可製作不只一件作品，多一件另收材料費</li>
                  <li class="mb-2">可現場訂購產品，均打八折優惠</li>
                  <li class="mb-2">小班教學，1人可以報名，每一時段以4人為上限，不開放旁聽。</li>
                  <li class="mb-2">完成作品如需郵寄，每件依作品大小另加費用</li>
                </ul>
              </div>
              <div class="pb-4">
                <div class="h4 mb-4 text-maroon">注意事項</div>
                <ul class="ps-3">
                  <li class="mb-2">因應新冠肺炎疫情，近期若有相關國內外旅遊或接觸史或是有發燒及上呼吸道症狀者，，請進行居家檢疫十四天，勿報名課程。</li>
                  <li class="mb-2">工作室不定時消毒清潔環境與工具，請學員安心使用。</li>
                  <li class="mb-2">課程中老師及學員皆須全程配戴口罩。</li>
                </ul>
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
export default {
  inject: [
    'emitter'
  ],
  mixins: [
    GoodsMixins
  ],
  data () {
    return {
      product: {}
    }
  },
  mounted () {
    this.emitter.on('productInfo', (item) => {
      this.product = item
    })
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
.title{
  width: 120px;
}
th{
  width: 118px;
}
</style>
