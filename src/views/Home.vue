<template>
  <div class="home">
    <img src="../assets/images/banner.jpg" class="w-100" alt="">
    <section class="pt-7 pb-7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-md-3 col-sm-6 text-center text-maroon mb-4 mb-sm-5 mb-md-0">
                <div class="fs-1 mb-sm-4 mb-2">
                  <i class="bi bi-geo-fill"></i>
                </div>
                <div class="h5 fw-normal">便捷的地點</div>
              </div>
              <div class="col-md-3 col-sm-6 text-center text-maroon mb-4 mb-sm-5 mb-md-0">
                <div class="fs-1 mb-sm-4 mb-2">
                  <i class="bi bi-emoji-smile"></i>
                </div>
                <div class="h5 fw-normal">專業師資熱情教學</div>
              </div>
              <div class="col-md-3 col-sm-6 text-center text-maroon mb-4 mb-sm-5 mb-md-0">
                <div class="fs-1 mb-sm-4 mb-2">
                  <i class="bi bi-droplet-half"></i>
                </div>
                <div class="h5 fw-normal">環保再生理念</div>
              </div>
              <div class="col-md-3 col-sm-6 text-center text-maroon mb-4 mb-sm-5 mb-md-0">
                <div class="fs-1 mb-sm-4 mb-2">
                  <i class="bi bi-hammer"></i>
                </div>
                <div class="h5 fw-normal">手作獨一無二</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid class-ad pt-sm-5 pb-sm-5">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-lg-10 text-center text-brown">
            <div class="h1 mb-4">秋季花藝班</div>
            <p class="mb-5">學習基礎花藝所須之花卉知識，到花器選搭、基礎實作等課程，讓你能夠親手做出喜愛的花藝作品，增加生活的樂趣！</p>
            <router-link @click="goToClass" to="/goods" class="btn btn-lg btn-outline-toffee">詳細資訊</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="container pt-7 pb-7">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-12 mb-4">
                  <img src="../assets/images/index-service01.png" alt="">
                </div>
                <div class="col-6 mb-4">
                  <img src="../assets/images/index-service02.png" alt="">
                </div>
                <div class="col-6 mb-4">
                  <img src="../assets/images/index-service03.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-6 mb-4">
                      <img src="../assets/images/index-service04.png" alt="">
                    </div>
                    <div class="col-6 mb-4">
                      <img src="../assets/images/index-service05.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-6 mb-4">
                      <img src="../assets/images/index-service06.png" alt="">
                    </div>
                    <div class="col-6 mb-4">
                      <img src="../assets/images/index-service07.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <img src="../assets/images/index-service08.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid coupon pt-7 pb-7 text-center">
      <div class="h1 mb-5 text-white">花藝陶器下午茶體驗</div>
      <router-link to="/goods" class="btn btn-lg btn-outline-orange">詳細資訊</router-link>
    </section>
    <section class="container pt-7 pb-7">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="d-flex justify-content-between align-items-center mb-5">
            <div class="h1 text-brown">最新商品</div>
            <router-link to="/goods" class="btn btn-outline-toffee btn-sm">查看更多</router-link>
          </div>
          <div class="goods row">
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
                v-for="item in products"
                :key="item.id"
              >
                <div class="card h-100 position-relative">
                  <div class="btn-sm rounded-scircle btn-toffee position-absolute top-0 end-0 m-2" @click="addTofavorite(item.id)">
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoodsMixins from '@/mixins/goodsMixins'
import SwiperMixins from '@/mixins/swiperMixins'

export default {
  name: 'Home',
  inject: [
    'emitter'
  ],
  mixins: [
    GoodsMixins,
    SwiperMixins
  ],
  data () {
    return {
      products: ''
    }
  },
  mounted () {
    this.emitter.on('products', (item) => {
      this.products = item
    })
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
  *{
    img{
      width: 100%;
    }
  }
  body{
    background-color: #FEF9F5;
  }
  .class-ad{
    background-color: #F3E7DD;
    position: relative;
    &:before{
      content: '';
      display: block;
      width: 157px;
      height: 194px;
      background-image: url('../assets/images/decoration-leave-top.png');
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top:0;
      right:20%;
    }
    &:after{
      content: '';
      display: block;
      width: 157px;
      height: 194px;
      background-image: url('../assets/images/decoration-leave-bottom.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      position: absolute;
      bottom:0;
      right:30%;
    }
  }
  .coupon{
    background-image: url('../assets/images/coupon-banner.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media(max-width:545px){
    .class-ad{
      padding-top: 60px;
      padding-bottom: 60px;
      &:before{
        width: 80px;
        right:0;
      }
      &:after{
        right:auto;
        left: 0;
        width: 100px;
        background-position: bottom;
      }
    }
  }
</style>
