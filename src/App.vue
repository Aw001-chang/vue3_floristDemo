<template>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/all.scss";
*{
  h1{
    margin-bottom: 0;
  }
  a{
    text-decoration: none;
  }
  p{
    letter-spacing: 0.025rem;
  }
  ul{
    margin: 0;
  }
}
.pt-7{
  padding-top: 96px;
}
.pb-7{
  padding-bottom: 96px;
}
.page-body-padding{
  padding-top: 56px;
}
img{
  width: 100%;
}
.text-line-height{
  height: 120px;
}
.text-line-height-48{
  height: 48px;
}
.text-2-line{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;   /*省略第n行後的文字*/
  -webkit-box-orient: vertical;
  white-space:break-spaces;
}
.text-1-line{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;   /*省略第n行後的文字*/
  -webkit-box-orient: vertical;
  white-space:break-spaces;
}
.good-title{
  width: 60%;
}
.photo{
  width: 74px;
}
</style>
