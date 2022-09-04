<template>
  <aside class="navbar navbar-vertical navbar-expand-lg bg-brown">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark">
        <router-link to="/user/home" class="text-white">
          <img src="../../public/florist_logo.png" class="logo me-2" alt="">桂子飄香
        </router-link>
      </h1>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav pt-lg-3">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link text-white">
              <i class="bi bi-shop-window me-2"></i>
              <span class="nav-link-title">
                產品
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link text-white">
              <i class="bi bi-card-list me-2"></i>
              <span class="nav-link-title">
                訂單
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link text-white">
              <i class="bi bi-ticket-perforated me-2"></i>
              <span class="nav-link-title">
                優惠券
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="logout">
              <i class="bi bi-box-arrow-right me-2"></i>
              <span class="nav-link-title">
                登出
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api, this.user)
        .then((res) => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/helps/_asideNavbar.scss";
.logo{
  width: 38px;
}
</style>
