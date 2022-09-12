<template>
  <div class="userboard">
    <FrontNavBar></FrontNavBar>
    <router-view></router-view>
    <ToastMessages></ToastMessages>
    <Footer></Footer>
  </div>
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'
import Footer from '@/components/Footer.vue'
import emitter from '@/methods/emitter.js'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  provide () {
    return {
      emitter
    }
  },
  components: {
    FrontNavBar,
    Footer,
    ToastMessages
  }
}
</script>

<style lang="scss">
.userboard{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
  .goods{
    .card{
      .btn-sm{
        opacity: 0.75;
        &:hover{
          opacity: 1 !important;
          cursor: pointer;
        }
      }
      .img-box{
        height: 200px;
        overflow: hidden;
      }
    }
  }
  .dropdown-menu{
    top:53px !important;
  }
  @media(max-width:575.98px){
    .process{
      .fs-5{
        font-size: 1rem !important;
      }
    }
  }
</style>
