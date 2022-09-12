<template>
  <!-- <Loading :active="isLoading"></Loading> -->
  <div class="page-body-padding container pb-7">
    <div class="row justify-content-center">
      <div class="col-xl-10 mt-5">
        <div class="h1 text-brown mb-3 text-center text-sm-start">我的收藏</div>
        <div class="d-sm-flex justify-content-between align-items-center mb-5 text-center">
          <span v-if="favorite.length !== 0">顯示所有&nbsp;{{favorite.length}}&nbsp;個結果</span>
          <span v-else class="text-muted">目前尚無收藏品項</span>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div class="goods row">
              <div class="col-sm-6 col-lg-3 mb-4" v-for="item in favorite" :key="item.id">
                <div class="card h-100 position-relative">
                  <div
                    class="btn-sm rounded-circle btn-toffee position-absolute top-0 end-0 m-2"
                    @click="toggleFavorite(item)"
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
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
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
      favoriteData: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  computed: {
    filterStorageFavorite () {
      return this.favoriteData.filter((item) => {
        if (this.favorite.includes(item.id)) {
          return item
        }
      })
    },
    filterFavoriteLen () {
      const array = this.favorite
      return [...new Set(array)]
    }
  },
  mounted () {
    this.emitter.on('all', (item) => {
      this.favoriteData = item
    })
    this.emitter.on('favorite', (item) => {
      this.favorite = item
    })
    this.getAllProducts()
  }
}
</script>

<style lang="scss" scoped>
.add-to-cart{
  cursor: pointer;
}
</style>
