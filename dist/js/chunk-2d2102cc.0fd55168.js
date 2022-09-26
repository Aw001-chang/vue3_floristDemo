(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102cc"],{b789:function(e,t,s){"use strict";s.r(t);var c=s("7a23");const l={class:"page-body-padding container pb-7"},a={class:"row justify-content-center"},o={class:"col-lg-10 mt-5"},b=Object(c["i"])('<h1 class="text-center text-brown">購物車</h1><div class="row justify-content-center mt-5 mb-md-5"><div class="col-lg-8"><div class="row process"><div class="col-4 text-maroon text-center pb-2 border-bottom border-5 border-maroon"><span>STEP 01</span><div class="fs-5 fw-bold mt-2 mb-2">建立訂單</div></div><div class="col-4 text-maroon text-center pb-2 border-bottom border-5"><span>STEP 02</span><div class="fs-5 fw-bold mt-2 mb-2">確認付款</div></div><div class="col-4 text-maroon text-center pb-2 border-bottom border-5"><span>STEP 03</span><div class="fs-5 fw-bold mt-2 mb-2">完成訂單</div></div></div></div></div>',2),i={class:"row justify-content-between pt-7"},d={class:"col-md-6 col-lg-5 text-brown mb-5 mb-md-0"},r=Object(c["h"])("div",{class:"h4 mb-4 text-center text-md-start"},"訂購商品",-1),n={class:"photo"},m=["src"],u={class:"px-3 good-title"},h={class:"text-line-height-48 mb-2"},j={class:"text-2-line fw-bold"},O={class:"fw-bold mb-2"},p={class:"btn-group"},f=["onClick"],v=Object(c["h"])("i",{class:"bi bi-dash-lg"},null,-1),g=[v],w=["onUpdate:modelValue","disabled","onClick"],x=["onClick"],k=Object(c["h"])("i",{class:"bi bi-plus-lg"},null,-1),y=[k],C={class:"fs-5 ms-auto"},V=["onClick"],S=Object(c["h"])("i",{class:"bi bi-trash"},null,-1),P=[S],T={class:"input-group mb-3 pt-4 pb-4"},q={class:"text-end"},I={class:"fs-5 fw-bold"},U={class:"col-md-6 text-brown"},N=Object(c["h"])("div",{class:"h4 mb-4 text-brown text-center text-md-start mt-5 mt-md-0"},"訂購人資訊",-1),W={class:"mb-3"},A=Object(c["h"])("label",{class:"form-label fw-bold",for:"emil"},[Object(c["j"])("電子信箱 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),K={class:"mb-3"},L=Object(c["h"])("label",{for:"收件人姓名",class:"form-label fw-bold"},[Object(c["j"])("收件人姓名 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),$={class:"mb-3"},E=Object(c["h"])("label",{for:"收件人電話",class:"form-label fw-bold"},[Object(c["j"])("收件人電話 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),_={class:"mb-3"},F=Object(c["h"])("label",{for:"收件人地址",class:"form-label fw-bold"},[Object(c["j"])("收件人地址 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),J={class:"mb-3"},X=Object(c["h"])("label",{for:"message",class:"form-label fw-bold"},"備註",-1),Y=Object(c["h"])("div",{class:"text-center mt-5"},[Object(c["h"])("button",{type:"submit",class:"btn btn-toffee"},"送出訂單")],-1),B={key:0,class:"col-12 mt-md-5"},D={class:"d-flex border-top pt-5 justify-content-between align-center mb-4"},M=Object(c["h"])("div",{class:"h4 mb-0 text-brown"},"瀏覽紀錄",-1),R={class:"goods row"},z={class:"card h-100 position-relative"},G=Object(c["h"])("div",{class:"btn-sm rounded-circle btn-toffee position-absolute top-0 end-0 m-2"},[Object(c["h"])("i",{class:"bi bi-bookmark text-white"})],-1),H=["onClick"],Q=["src"],Z=["onClick"],ee=Object(c["h"])("i",{class:"bi bi-cart3 me-2"},null,-1),te=Object(c["j"])("加入購物車"),se=[ee,te],ce={class:"card-body text-line-height"},le={class:"h5 text-brown text-2-line"},ae={class:"text-maroon position-absolute bottom-0 pb-3"};function oe(e,t,s,v,k,S){const ee=Object(c["K"])("Loading"),te=Object(c["K"])("Field"),oe=Object(c["K"])("ErrorMessage"),be=Object(c["K"])("Form"),ie=Object(c["K"])("swiper-slide"),de=Object(c["K"])("swiper");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(ee,{active:k.isLoading},null,8,["active"]),Object(c["h"])("div",l,[Object(c["h"])("div",a,[Object(c["h"])("div",o,[b,Object(c["h"])("div",i,[Object(c["h"])("div",d,[r,k.cart.carts?(Object(c["A"])(!0),Object(c["g"])(c["a"],{key:0},Object(c["I"])(k.cart.carts,t=>(Object(c["A"])(),Object(c["g"])("div",{class:"pb-4 px-md-3 border-bottom d-flex mb-4",key:t.id},[Object(c["h"])("div",n,[Object(c["h"])("img",{src:t.product.imageUrl,alt:""},null,8,m)]),Object(c["h"])("div",u,[Object(c["h"])("div",h,[Object(c["h"])("div",j,Object(c["N"])(t.product.title),1)]),Object(c["h"])("div",O,"NT$ "+Object(c["N"])(t.product.price),1),Object(c["h"])("div",p,[Object(c["h"])("button",{type:"button",class:Object(c["s"])(["btn btn-outline-toffee",{disabled:t.qty<=1}]),onClick:s=>e.updateCart(t,t.qty--)},g,10,f),Object(c["Y"])(Object(c["h"])("input",{type:"number",class:"text-center form-control rounded-0 border-start-0 border-end-0 border-toffee","onUpdate:modelValue":e=>t.qty=e,disabled:t.id===k.status.loadingItem,onClick:s=>e.updateCart(t)},null,8,w),[[c["S"],t.qty,void 0,{number:!0}]]),Object(c["h"])("button",{type:"button",class:Object(c["s"])(["btn btn-outline-toffee",{disabled:t.qty>=10}]),onClick:s=>e.updateCart(t,t.qty++)},y,10,x)])]),Object(c["h"])("div",C,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-toffee btn-sm",onClick:e=>S.deleteCart(t)},P,8,V)])]))),128)):Object(c["f"])("",!0),Object(c["h"])("div",T,[Object(c["Y"])(Object(c["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入折扣碼","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":t[0]||(t[0]=e=>k.couponCode=e)},null,512),[[c["S"],k.couponCode]]),Object(c["h"])("button",{class:"btn btn-toffee",type:"button",onClick:t[1]||(t[1]=(...e)=>S.useCoupon&&S.useCoupon(...e))},"套用折價券")]),Object(c["h"])("div",q,[Object(c["h"])("div",I,"總計: NT$ "+Object(c["N"])(k.finalTotal),1)])]),Object(c["h"])("div",U,[N,Object(c["k"])(be,{class:"shadow p-4 mb-5 bg-body rounded",onSubmit:e.createdOrder},{default:Object(c["X"])(({errors:e})=>[Object(c["h"])("div",W,[A,Object(c["k"])(te,{name:"email",type:"email",class:Object(c["s"])(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入電子信箱",rules:"email|required",modelValue:k.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=e=>k.form.user.email=e)},null,8,["class","modelValue"]),Object(c["k"])(oe,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",K,[L,Object(c["k"])(te,{name:"收件人姓名",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":e["收件人姓名"]}]),placeholder:"請輸入收件人姓名",rules:"required",modelValue:k.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>k.form.user.name=e)},null,8,["class","modelValue"]),Object(c["k"])(oe,{name:"收件人姓名",class:"invalid-feedback"})]),Object(c["h"])("div",$,[E,Object(c["k"])(te,{name:"收件人電話",type:"number",class:Object(c["s"])(["form-control",{"is-invalid":e["收件人電話"]}]),placeholder:"請輸入收件人電話",rules:"required",modelValue:k.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>k.form.user.tel=e)},null,8,["class","modelValue"]),Object(c["k"])(oe,{name:"收件人電話",class:"invalid-feedback"})]),Object(c["h"])("div",_,[F,Object(c["k"])(te,{name:"收件人地址",type:"text",class:Object(c["s"])(["form-control",{"is-invalid":e["收件人地址"]}]),placeholder:"請輸入收件人地址",rules:"required",modelValue:k.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>k.form.user.address=e)},null,8,["class","modelValue"]),Object(c["k"])(oe,{name:"收件人地址",class:"invalid-feedback"})]),Object(c["h"])("div",J,[X,Object(c["Y"])(Object(c["h"])("textarea",{name:"",class:"form-control",rows:"3","onUpdate:modelValue":t[6]||(t[6]=e=>k.form.message=e)},null,512),[[c["S"],k.form.message]])]),Y]),_:1},8,["onSubmit"])]),0!==k.recentWatched.length?(Object(c["A"])(),Object(c["g"])("div",B,[Object(c["h"])("div",D,[M,Object(c["h"])("button",{onClick:t[7]||(t[7]=(...e)=>S.deleteStorage&&S.deleteStorage(...e)),type:"button",class:"btn btn-sm btn-outline-toffee"},"清除瀏覽紀錄")]),Object(c["h"])("div",R,[""!==k.recentWatched?(Object(c["A"])(),Object(c["e"])(de,{key:0,slidesPerView:1.7,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{1200:{slidesPerView:4,spaceBetween:24},992:{slidesPerView:3},768:{slidesPerView:3}},modules:e.modules,class:"bookSwiper rounded-4 h-100 p-2"},{default:Object(c["X"])(()=>[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(S.filterStorageItem,t=>(Object(c["A"])(),Object(c["e"])(ie,{key:t.id},{default:Object(c["X"])(()=>[Object(c["h"])("div",z,[G,Object(c["h"])("a",{class:"img-box",onClick:s=>e.getProductId(t.id)},[Object(c["h"])("img",{src:t.imageUrl,class:"card-img-top",alt:"..."},null,8,Q)],8,H),Object(c["h"])("a",{onClick:s=>e.addToCart(t),class:"add-to-cart d-block text-white text-center pt-1 pb-1 btn-toffee"},se,8,Z),Object(c["h"])("div",ce,[Object(c["h"])("div",le,Object(c["N"])(t.title),1),Object(c["h"])("span",ae,"NT$ "+Object(c["N"])(t.price),1)])])]),_:2},1024))),128))]),_:1},8,["slidesPerView","modules"])):Object(c["f"])("",!0)])])):Object(c["f"])("",!0)])])])])],64)}s("caad");var be=s("c808"),ie=s("dc76"),de={inject:["emitter"],mixins:[be["a"],ie["a"]],data(){return{allProducts:[],cart:[],total:"",finalTotal:"",status:{loadingItem:""},couponCode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},recentWatched:JSON.parse(localStorage.getItem("recentWatched"))||[],isLoading:!1}},methods:{deleteCart(e){const t="https://vue3-course-api.hexschool.io/api/anpo/cart/"+e.id;this.$http.delete(t).then(e=>{this.getCartProducts()})},useCoupon(){const e="https://vue3-course-api.hexschool.io/api/anpo/coupon",t={code:this.couponCode};this.$http.post(e,{data:t}).then(e=>{this.getCartProducts(),this.finalTotal=e.data.final_total})},deleteStorage(){this.isLoading=!0,localStorage.removeItem("recentWatched"),this.recentWatched=[];const e=this;setTimeout(()=>{this.isLoading=!1,e.scrollTop()},2e3)},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},computed:{filterStorageItem(){return this.allProducts.filter(e=>{if(this.recentWatched.includes(e.id))return e})}},mounted(){this.emitter.on("formData",e=>{this.form=e}),this.emitter.on("getCarts",e=>{this.cart=e}),this.emitter.on("getFinalTotal",e=>{this.finalTotal=e}),this.emitter.on("all",e=>{this.allProducts=e}),this.emitter.on("recentWatch",e=>{this.recentWatched=e}),this.getCartProducts(),this.getAllProducts()}},re=s("d959"),ne=s.n(re);const me=ne()(de,[["render",oe]]);t["default"]=me}}]);
//# sourceMappingURL=chunk-2d2102cc.0fd55168.js.map