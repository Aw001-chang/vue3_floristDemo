(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75de2bb6"],{"12e1":function(t,e,a){},5489:function(t,e,a){},"98ec":function(t,e,a){"use strict";a("12e1")},b186:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const s={class:"userboard"};function b(t,e,a,b,n,o){const l=Object(c["K"])("FrontNavBar"),i=Object(c["K"])("router-view"),r=Object(c["K"])("ToastMessages"),d=Object(c["K"])("Footer");return Object(c["A"])(),Object(c["g"])("div",s,[Object(c["k"])(l),Object(c["k"])(i),Object(c["k"])(r),Object(c["k"])(d)])}var n=a("3568"),o=a.n(n);const l=t=>(Object(c["D"])("data-v-94ab8894"),t=t(),Object(c["B"])(),t),i={class:"bg-brown w-100"},r={class:"container-lg"},d={class:"row justify-content-center"},j={class:"col-lg-10"},O={class:"navbar navbar-expand-sm navbar-dark pt-2 pb-2"},h={class:"container-fluid px-0"},u=l(()=>Object(c["h"])("img",{class:"logo me-2",src:o.a,alt:""},null,-1)),g=l(()=>Object(c["h"])("h1",null,"桂子飄香",-1)),v={class:"nav-item dropdown ms-auto order-sm-1 d-flex"},p={class:"position-relative me-2"},f=l(()=>Object(c["h"])("i",{class:"bi bi-bookmark me-1"},null,-1)),m={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},k=l(()=>Object(c["h"])("div",{class:"d-sm-block d-none"},"我的收藏",-1)),x={class:"nav-link d-flex text-white pe-2 pe-sm-0",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},w={class:"position-relative me-2"},y=l(()=>Object(c["h"])("i",{class:"bi bi-cart3 me-1"},null,-1)),C=["cartLength"],L=l(()=>Object(c["h"])("div",{class:"d-sm-block d-none"},"購物車",-1)),T={class:"dropdown-menu shadow-lg","aria-labelledby":"navbarDropdown"},A=l(()=>Object(c["h"])("div",{class:"border-bottom pb-2 px-3 text-toffee fw-bold fs-4 text-center"},"購物車",-1)),N={key:0},D=l(()=>Object(c["h"])("div",{class:"text-center mt-4 d-flex justify-content-center flex-column"},[Object(c["h"])("i",{class:"fs-1 bi bi-exclamation-triangle-fill text-black-50"}),Object(c["h"])("span",{class:"text-black-50"},"尚未選購商品")],-1)),_={class:"text-center mt-4 mb-3 px-3"},q=Object(c["j"])("選購商品"),F={key:1,class:"overflow-scroll"},K={href:"#",class:"photo"},X=["src"],I={class:"px-3 good-title"},B={class:"mb-2"},U={class:"text-1-line fw-bold"},$={class:"fw-bold mb-2"},J={class:"btn-group"},M=["onClick"],P=l(()=>Object(c["h"])("i",{class:"bi bi-dash-lg"},null,-1)),S=[P],V=["onUpdate:modelValue","disabled","onClick"],Y=["onClick"],z=l(()=>Object(c["h"])("i",{class:"bi bi-plus-lg"},null,-1)),E=[z],G={class:"fs-5 ms-auto"},H=["onClick"],Q=l(()=>Object(c["h"])("i",{class:"bi bi-trash"},null,-1)),R=[Q],W={class:"text-end px-3"},Z={class:"fs-5 fw-bold"},tt={class:"text-center mt-4 mb-3 px-3"},et=Object(c["j"])("前往結帳"),at=Object(c["j"])("繼續選購"),ct=l(()=>Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1)),st={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},bt={class:"navbar-nav ms-auto mt-sm-0 mt-3"},nt={class:"nav-item"},ot=l(()=>Object(c["h"])("div",{class:"position-relative me-2"},[Object(c["h"])("i",{class:"bi bi-shop-window"})],-1)),lt=l(()=>Object(c["h"])("div",null,"商品列表",-1));function it(t,e,a,s,b,n){const o=Object(c["K"])("Loading"),l=Object(c["K"])("router-link");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(o,{active:b.isLoading},null,8,["active"]),Object(c["h"])("div",i,[Object(c["h"])("div",r,[Object(c["h"])("div",d,[Object(c["h"])("div",j,[Object(c["h"])("nav",O,[Object(c["h"])("div",h,[Object(c["k"])(l,{to:"/",class:"navbar-brand d-flex align-items-center"},{default:Object(c["X"])(()=>[u,g]),_:1}),Object(c["h"])("div",v,[Object(c["k"])(l,{to:"/favorite",class:"nav-link d-flex text-white pe-2 pe-sm-0"},{default:Object(c["X"])(()=>[Object(c["h"])("div",p,[f,0!==t.favorite.length?(Object(c["A"])(),Object(c["g"])("span",m,Object(c["N"])(t.favorite.length),1)):Object(c["f"])("",!0)]),k]),_:1}),Object(c["h"])("a",x,[Object(c["h"])("div",w,[y,0!==b.cartLength?(Object(c["A"])(),Object(c["g"])("span",{key:0,cartLength:b.cartLength,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},Object(c["N"])(b.cartLength),9,C)):Object(c["f"])("",!0)]),L]),Object(c["h"])("div",T,[A,0===b.cartLength?(Object(c["A"])(),Object(c["g"])("div",N,[D,Object(c["h"])("div",_,[Object(c["k"])(l,{to:"/goods",class:"btn btn-toffee w-100 d-block"},{default:Object(c["X"])(()=>[q]),_:1})])])):(Object(c["A"])(),Object(c["g"])("div",F,[b.cart.carts?(Object(c["A"])(),Object(c["g"])(c["a"],{key:0},[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(b.cart.carts,e=>(Object(c["A"])(),Object(c["g"])("div",{class:"dropdown-item pb-4 px-md-3 border-bottom d-flex mb-4",key:e.id},[Object(c["h"])("a",K,[Object(c["h"])("img",{src:e.product.imageUrl,alt:""},null,8,X)]),Object(c["h"])("div",I,[Object(c["h"])("div",B,[Object(c["h"])("div",U,Object(c["N"])(e.product.title),1)]),Object(c["h"])("div",$,"NT$ "+Object(c["N"])(e.product.price),1),Object(c["h"])("div",J,[Object(c["h"])("button",{type:"button",class:Object(c["s"])(["btn btn-outline-toffee btn-sm",{disabled:e.qty<=1}]),onClick:a=>t.updateCart(e,e.qty--)},S,10,M),Object(c["Y"])(Object(c["h"])("input",{type:"number",class:"text-center form-control rounded-0 border-start-0 border-end-0 border-toffee","onUpdate:modelValue":t=>e.qty=t,disabled:e.id===b.status.loadingItem,onClick:a=>t.updateCart(e)},null,8,V),[[c["S"],e.qty,void 0,{number:!0}]]),Object(c["h"])("button",{type:"button",class:Object(c["s"])(["btn btn-outline-toffee btn-sm",{disabled:e.qty>=10}]),onClick:a=>t.updateCart(e,e.qty++)},E,10,Y)])]),Object(c["h"])("div",G,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-toffee btn-sm",onClick:t=>n.deleteCart(e)},R,8,H)])]))),128)),Object(c["h"])("div",W,[Object(c["h"])("div",Z,"總計: NT$ "+Object(c["N"])(b.finalTotal),1)]),Object(c["h"])("div",tt,[Object(c["k"])(l,{to:"/cart",class:"btn btn-toffee w-100 d-block mb-3"},{default:Object(c["X"])(()=>[et]),_:1}),Object(c["k"])(l,{to:"/goods",class:"btn btn-outline-toffee w-100 d-block"},{default:Object(c["X"])(()=>[at]),_:1})])],64)):Object(c["f"])("",!0)]))])]),ct,Object(c["h"])("div",st,[Object(c["h"])("ul",bt,[Object(c["h"])("li",nt,[Object(c["k"])(l,{to:"/goods",class:"nav-link d-flex px-3 active"},{default:Object(c["X"])(()=>[ot,lt]),_:1})])])])])])])])])])],64)}var rt=a("c808"),dt={inject:["emitter"],mixins:[rt["a"]],data(){return{cart:[],total:"",cartLength:"",finalTotal:"",status:{loadingItem:""},isLoading:!1}},methods:{getData(t){this.cartLength=t},deleteCart(t){const e="https://vue3-course-api.hexschool.io/api/anpo/cart/"+t.id;this.isLoading=!0,this.$http.delete(e).then(t=>{this.isLoading=!1,this.emitter.emit("deleteCartItem",this.cart),this.getCartProducts()})}},computed:{filterFavoriteLen(){const t=this.favorite;return[...new Set(t)]}},mounted(){this.emitter.on("getNum",t=>{this.cartLength=t}),this.emitter.on("getFinalTotal",t=>{this.finalTotal=t}),this.emitter.on("getCarts",t=>{this.cart=t}),this.emitter.on("formData",t=>{this.cartLength=0}),this.emitter.on("favorite",t=>{this.favorite=t}),this.getCartProducts()}},jt=(a("98ec"),a("d959")),Ot=a.n(jt);const ht=Ot()(dt,[["render",it],["__scopeId","data-v-94ab8894"]]);var ut=ht;const gt={class:"footer bg-brown pt-2 pb-2 text-center w-100"},vt=Object(c["h"])("p",{class:"text-light mb-0 fw-light"},"本網站僅供個人作品使用，不提供商業用途。",-1),pt=[vt];function ft(t,e){return Object(c["A"])(),Object(c["g"])("div",gt,pt)}const mt={},kt=Ot()(mt,[["render",ft]]);var xt=kt,wt=a("cfb9"),yt=a("f367"),Ct={provide(){return{emitter:wt["a"]}},components:{FrontNavBar:ut,Footer:xt,ToastMessages:yt["a"]}};a("e1bd");const Lt=Ot()(Ct,[["render",b]]);e["default"]=Lt},e1bd:function(t,e,a){"use strict";a("5489")}}]);
//# sourceMappingURL=chunk-75de2bb6.8d8e12db.js.map