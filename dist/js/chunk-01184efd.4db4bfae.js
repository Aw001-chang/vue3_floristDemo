(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01184efd"],{"34d5":function(t,e,c){"use strict";c("cc8b")},5489:function(t,e,c){},b186:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s={class:"userboard"};function b(t,e,c,b,o,n){const l=Object(a["K"])("FrontNavBar"),i=Object(a["K"])("router-view"),r=Object(a["K"])("ToastMessages"),d=Object(a["K"])("Footer");return Object(a["A"])(),Object(a["g"])("div",s,[Object(a["k"])(l),Object(a["k"])(i),Object(a["k"])(r),Object(a["k"])(d)])}var o=c("3568"),n=c.n(o);const l=t=>(Object(a["D"])("data-v-2bc5a94c"),t=t(),Object(a["B"])(),t),i={class:"bg-brown position-fixed w-100"},r={class:"container-lg"},d={class:"row justify-content-center"},j={class:"col-lg-10"},O={class:"navbar navbar-expand-sm navbar-dark pt-2 pb-2"},h={class:"container-fluid px-0"},u=l(()=>Object(a["h"])("img",{class:"logo me-2",src:n.a,alt:""},null,-1)),g=l(()=>Object(a["h"])("h1",null,"桂子飄香",-1)),v={class:"nav-item dropdown ms-auto order-sm-1 d-flex"},p={class:"position-relative me-2"},f=l(()=>Object(a["h"])("i",{class:"bi bi-bookmark me-1"},null,-1)),m={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},k=l(()=>Object(a["h"])("div",{class:"d-sm-block d-none"},"我的收藏",-1)),x={class:"nav-link d-flex text-white pe-2 pe-sm-0",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},w={class:"position-relative me-2"},y=l(()=>Object(a["h"])("i",{class:"bi bi-cart3 me-1"},null,-1)),C=["cartLength"],L=l(()=>Object(a["h"])("div",{class:"d-sm-block d-none"},"購物車",-1)),T={class:"dropdown-menu shadow-lg","aria-labelledby":"navbarDropdown"},A=l(()=>Object(a["h"])("div",{class:"border-bottom pb-2 px-3 text-toffee fw-bold fs-4 text-center"},"購物車",-1)),N={key:0},D=l(()=>Object(a["h"])("div",{class:"text-center mt-4 d-flex justify-content-center flex-column"},[Object(a["h"])("i",{class:"fs-1 bi bi-exclamation-triangle-fill text-black-50"}),Object(a["h"])("span",{class:"text-black-50"},"尚未選購商品")],-1)),_={class:"text-center mt-4 mb-3 px-3"},q=Object(a["j"])("選購商品"),F={key:1,class:"overflow-scroll"},K={href:"#",class:"photo"},X=["src"],I={class:"px-3 good-title"},B={class:"mb-2"},U={class:"text-1-line fw-bold"},$={class:"fw-bold mb-2"},J={class:"btn-group"},M=["onClick"],P=l(()=>Object(a["h"])("i",{class:"bi bi-dash-lg"},null,-1)),S=[P],V=["onUpdate:modelValue","disabled","onClick"],Y=["onClick"],z=l(()=>Object(a["h"])("i",{class:"bi bi-plus-lg"},null,-1)),E=[z],G={class:"fs-5 ms-auto"},H=["onClick"],Q=l(()=>Object(a["h"])("i",{class:"bi bi-trash"},null,-1)),R=[Q],W={class:"text-end px-3"},Z={class:"fs-5 fw-bold"},tt={class:"text-center mt-4 mb-3 px-3"},et=Object(a["j"])("前往結帳"),ct=Object(a["j"])("繼續選購"),at=l(()=>Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1)),st={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},bt={class:"navbar-nav ms-auto mt-sm-0 mt-3"},ot={class:"nav-item"},nt=l(()=>Object(a["h"])("div",{class:"position-relative me-2"},[Object(a["h"])("i",{class:"bi bi-shop-window"})],-1)),lt=l(()=>Object(a["h"])("div",null,"商品列表",-1));function it(t,e,c,s,b,o){const n=Object(a["K"])("Loading"),l=Object(a["K"])("router-link");return Object(a["A"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(n,{active:b.isLoading},null,8,["active"]),Object(a["h"])("div",i,[Object(a["h"])("div",r,[Object(a["h"])("div",d,[Object(a["h"])("div",j,[Object(a["h"])("nav",O,[Object(a["h"])("div",h,[Object(a["k"])(l,{to:"/",class:"navbar-brand d-flex align-items-center"},{default:Object(a["X"])(()=>[u,g]),_:1}),Object(a["h"])("div",v,[Object(a["k"])(l,{to:"/favorite",class:"nav-link d-flex text-white pe-2 pe-sm-0"},{default:Object(a["X"])(()=>[Object(a["h"])("div",p,[f,0!==t.favorite.length?(Object(a["A"])(),Object(a["g"])("span",m,Object(a["N"])(t.favorite.length),1)):Object(a["f"])("",!0)]),k]),_:1}),Object(a["h"])("a",x,[Object(a["h"])("div",w,[y,0!==b.cartLength?(Object(a["A"])(),Object(a["g"])("span",{key:0,cartLength:b.cartLength,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},Object(a["N"])(b.cartLength),9,C)):Object(a["f"])("",!0)]),L]),Object(a["h"])("div",T,[A,0===b.cartLength?(Object(a["A"])(),Object(a["g"])("div",N,[D,Object(a["h"])("div",_,[Object(a["k"])(l,{to:"/goods",class:"btn btn-toffee w-100 d-block"},{default:Object(a["X"])(()=>[q]),_:1})])])):(Object(a["A"])(),Object(a["g"])("div",F,[b.cart.carts?(Object(a["A"])(),Object(a["g"])(a["a"],{key:0},[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["I"])(b.cart.carts,e=>(Object(a["A"])(),Object(a["g"])("div",{class:"dropdown-item pb-4 px-md-3 border-bottom d-flex mb-4",key:e.id},[Object(a["h"])("a",K,[Object(a["h"])("img",{src:e.product.imageUrl,alt:""},null,8,X)]),Object(a["h"])("div",I,[Object(a["h"])("div",B,[Object(a["h"])("div",U,Object(a["N"])(e.product.title),1)]),Object(a["h"])("div",$,"NT$ "+Object(a["N"])(e.product.price),1),Object(a["h"])("div",J,[Object(a["h"])("button",{type:"button",class:Object(a["s"])(["btn btn-outline-toffee btn-sm",{disabled:e.qty<=1}]),onClick:c=>t.updateCart(e,e.qty--)},S,10,M),Object(a["Y"])(Object(a["h"])("input",{type:"number",class:"text-center form-control rounded-0 border-start-0 border-end-0 border-toffee","onUpdate:modelValue":t=>e.qty=t,disabled:e.id===b.status.loadingItem,onClick:c=>t.updateCart(e)},null,8,V),[[a["S"],e.qty,void 0,{number:!0}]]),Object(a["h"])("button",{type:"button",class:Object(a["s"])(["btn btn-outline-toffee btn-sm",{disabled:e.qty>=10}]),onClick:c=>t.updateCart(e,e.qty++)},E,10,Y)])]),Object(a["h"])("div",G,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-toffee btn-sm",onClick:t=>o.deleteCart(e)},R,8,H)])]))),128)),Object(a["h"])("div",W,[Object(a["h"])("div",Z,"總計: NT$ "+Object(a["N"])(b.finalTotal),1)]),Object(a["h"])("div",tt,[Object(a["k"])(l,{to:"/cart",class:"btn btn-toffee w-100 d-block mb-3"},{default:Object(a["X"])(()=>[et]),_:1}),Object(a["k"])(l,{to:"/goods",class:"btn btn-outline-toffee w-100 d-block"},{default:Object(a["X"])(()=>[ct]),_:1})])],64)):Object(a["f"])("",!0)]))])]),at,Object(a["h"])("div",st,[Object(a["h"])("ul",bt,[Object(a["h"])("li",ot,[Object(a["k"])(l,{to:"/goods",class:"nav-link d-flex px-3 active"},{default:Object(a["X"])(()=>[nt,lt]),_:1})])])])])])])])])])],64)}var rt=c("c808"),dt={inject:["emitter"],mixins:[rt["a"]],data(){return{cart:[],total:"",cartLength:"",finalTotal:"",status:{loadingItem:""},isLoading:!1}},methods:{getData(t){this.cartLength=t},deleteCart(t){const e="https://vue3-course-api.hexschool.io/api/anpo/cart/"+t.id;this.isLoading=!0,this.$http.delete(e).then(t=>{this.isLoading=!1,this.emitter.emit("deleteCartItem",this.cart),this.getCartProducts()})}},computed:{filterFavoriteLen(){const t=this.favorite;return[...new Set(t)]}},mounted(){this.emitter.on("getNum",t=>{this.cartLength=t}),this.emitter.on("getFinalTotal",t=>{this.finalTotal=t}),this.emitter.on("getCarts",t=>{this.cart=t}),this.emitter.on("formData",t=>{this.cartLength=0}),this.emitter.on("favorite",t=>{this.favorite=t}),this.getCartProducts()}},jt=(c("34d5"),c("d959")),Ot=c.n(jt);const ht=Ot()(dt,[["render",it],["__scopeId","data-v-2bc5a94c"]]);var ut=ht;const gt={class:"footer bg-brown pt-2 pb-2 text-center w-100"},vt=Object(a["h"])("p",{class:"text-light mb-0 fw-light"},"本網站僅供個人作品使用，不提供商業用途。",-1),pt=[vt];function ft(t,e){return Object(a["A"])(),Object(a["g"])("div",gt,pt)}const mt={},kt=Ot()(mt,[["render",ft]]);var xt=kt,wt=c("cfb9"),yt=c("f367"),Ct={provide(){return{emitter:wt["a"]}},components:{FrontNavBar:ut,Footer:xt,ToastMessages:yt["a"]}};c("e1bd");const Lt=Ot()(Ct,[["render",b]]);e["default"]=Lt},cc8b:function(t,e,c){},e1bd:function(t,e,c){"use strict";c("5489")}}]);
//# sourceMappingURL=chunk-01184efd.4db4bfae.js.map