<template>
  <div class="dashboard">
    <div class="page">
      <AsideNavbar></AsideNavbar>
      <ToastMessages></ToastMessages>
      <div class="page-wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AsideNavbar from '../components/AsideNavbar.vue'
import emitter from '@/methods/emitter.js'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  provide () {
    return {
      emitter
    }
  },
  components: {
    AsideNavbar,
    ToastMessages
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)divingToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>

<style lang="scss">
  .dashboard{
    .page{
      dispaly:flex;
      flex-direction: column;
      position: relative;
      min-height: 100vh;
      .page-wrapper{
        margin-left: 15rem;
      }
    }
  }
</style>
