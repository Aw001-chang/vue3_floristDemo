(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2114"],{"7cb4":function(e,t,s){"use strict";s.r(t);var c=s("7a23");const a={class:"page-body-padding container pb-7"},l={class:"row justify-content-center"},r={class:"col-lg-10"},d=Object(c["i"])('<nav aria-label="breadcrumb"><ol class="breadcrumb mt-5 mb-5"><li class="breadcrumb-item"><a href="#" class="text-brown">首頁</a></li><li class="breadcrumb-item active" aria-current="page">商品</li></ol></nav><h1 class="text-center text-brown">購物車</h1><div class="row justify-content-center mt-5 mb-md-5"><div class="col-lg-8"><div class="row process"><div class="col-4 text-maroon text-center pb-2 border-bottom border-5 border-maroon"><span>STEP 01</span><div class="fs-5 fw-bold mt-2 mb-2">建立訂單</div></div><div class="col-4 text-maroon text-center px-0 pb-2 border-bottom border-5 border-maroon"><span>STEP 02</span><div class="fs-5 fw-bold mt-2 mb-2">確認付款</div></div><div class="col-4 text-maroon text-center px-0 pb-2 border-bottom border-5"><span>STEP 03</span><div class="fs-5 fw-bold mt-2 mb-2">完成訂單</div></div></div></div></div>',3),o={class:"row pt-7 text-center text-sm-start"},b=Object(c["h"])("div",{class:"d-sm-flex justify-content-start align-items-end mb-3"},[Object(c["h"])("div",{class:"h4 text-brown mb-0"},"訂單編號"),Object(c["h"])("span",{class:"text-danger ms-sm-2 fw-bold"},"複製以保存您的訂單編號，便於查找訂單狀態")],-1),i={class:"d-sm-flex justify-content-between align-items-center"},n={class:"h5 mb-0 fw-bold text-brown"},m={class:"row justify-content-between pt-7"},h={class:"col-md-6 col-lg-5 text-brown mb-5 mb-md-0"},j=Object(c["h"])("div",{class:"h4 mb-4 text-center text-md-start"},"訂購商品",-1),O={class:"photo"},p=["src"],v={class:"px-3 good-title"},u={class:"text-line-height-48 mb-2"},f={class:"text-2-line fw-bold"},x={class:"fw-bold mb-2"},g={class:"fs-5 ms-auto text-toffee"},w={class:"text-end"},y={class:"fs-5 fw-bold text-toffee"},I={class:"col-md-6 text-brown"},k=Object(c["h"])("div",{class:"h4 mb-4 text-brown text-center text-md-start mt-5 mt-md-0"},"訂購人資訊",-1),L={class:"mb-3"},N=Object(c["h"])("label",{class:"form-label fw-bold"},[Object(c["j"])("電子信箱 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),T=["value"],A={class:"mb-3"},$=Object(c["h"])("label",{class:"form-label fw-bold"},[Object(c["j"])("收件人姓名 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),S=["value"],E={class:"mb-3"},P=Object(c["h"])("label",{class:"form-label fw-bold"},[Object(c["j"])("收件人電話 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),z=["value"],C={class:"mb-3"},J=Object(c["h"])("label",{class:"form-label fw-bold"},[Object(c["j"])("收件人地址 "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),_=["value"],q={class:"mb-3"},F=Object(c["h"])("label",{class:"form-label fw-bold"},"備註",-1),K=["value"],U={class:"mb-3"},Z=Object(c["h"])("label",{class:"form-label fw-bold"},"付款狀態",-1),B={key:0,class:"text-muted"},D={key:1,class:"text-success"},G={key:0,class:"text-center mt-5"},H=Object(c["h"])("button",{type:"submit",class:"btn btn-toffee"},"確認付款",-1),M=[H];function Q(e,t,s,H,Q,R){const V=Object(c["K"])("Loading");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(V,{active:Q.isLoading},null,8,["active"]),Object(c["h"])("div",a,[Object(c["h"])("div",l,[Object(c["h"])("div",r,[d,Object(c["h"])("div",o,[b,Object(c["h"])("div",i,[Object(c["h"])("div",n,Object(c["N"])(Q.orderId),1),Object(c["h"])("button",{type:"button",onClick:t[0]||(t[0]=e=>R.copyOrderId(Q.orderId)),class:"btn btn-toffee mt-3 mt-sm-0"},"複製訂單編號")])]),Object(c["h"])("div",m,[Object(c["h"])("div",h,[j,(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(Q.order.products,e=>(Object(c["A"])(),Object(c["g"])("div",{class:"pb-4 px-md-3 border-bottom d-flex mb-4",key:e.id},[Object(c["h"])("div",O,[Object(c["h"])("img",{src:e.product.imageUrl,alt:""},null,8,p)]),Object(c["h"])("div",v,[Object(c["h"])("div",u,[Object(c["h"])("div",f,Object(c["N"])(e.product.title),1)]),Object(c["h"])("div",x,"NT$ "+Object(c["N"])(e.product.price),1)]),Object(c["h"])("div",g," x"+Object(c["N"])(e.qty),1)]))),128)),Object(c["h"])("div",w,[Object(c["h"])("div",y,"總計: NT$ "+Object(c["N"])(Q.order.total),1)])]),Object(c["h"])("div",I,[k,Object(c["h"])("form",{class:"shadow p-4 mb-5 bg-body rounded",onSubmit:t[1]||(t[1]=Object(c["Z"])((...e)=>R.payOrder&&R.payOrder(...e),["prevent"]))},[Object(c["h"])("div",L,[N,Object(c["h"])("input",{type:"email",class:"form-control",placeholder:"請輸入電子信箱",value:Q.order.user.email,disabled:""},null,8,T)]),Object(c["h"])("div",A,[$,Object(c["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入收件人姓名",value:Q.order.user.name,disabled:""},null,8,S)]),Object(c["h"])("div",E,[P,Object(c["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入收件人電話",value:Q.order.user.tel,disabled:""},null,8,z)]),Object(c["h"])("div",C,[J,Object(c["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入收件人地址",value:Q.order.user.address,disabled:""},null,8,_)]),Object(c["h"])("div",q,[F,Object(c["h"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:Q.order.message,disabled:""},null,8,K)]),Object(c["h"])("div",U,[Z,Q.order.is_paid?(Object(c["A"])(),Object(c["g"])("div",D,"付款完成")):(Object(c["A"])(),Object(c["g"])("div",B,"尚未付款"))]),!1===Q.order.is_paid?(Object(c["A"])(),Object(c["g"])("div",G,M)):Object(c["f"])("",!0)],32)])])])])])],64)}var R={inject:["emitter"],data(){return{orderId:"",order:{user:{}},isLoading:!1}},methods:{getOders(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/anpo/order/"+this.orderId;this.$http.get(e).then(e=>{this.isLoading=!1,this.order=e.data.order})},copyOrderId(e){navigator.clipboard.writeText(e).then(()=>{this.emitter.emit("push-message",{style:"success",title:"您已成功複製優惠碼!"})})},payOrder(){const e="https://vue3-course-api.hexschool.io/api/anpo/pay/"+this.orderId;this.isLoading=!0,this.$http.post(e).then(e=>{this.isLoading=!1,console.log("zz",e),e.data.success&&this.getOders()})}},created(){this.orderId=this.$route.params.orderId,this.getOders()}},V=s("d959"),W=s.n(V);const X=W()(R,[["render",Q]]);t["default"]=X}}]);
//# sourceMappingURL=chunk-2d0e2114.ca3728d8.js.map