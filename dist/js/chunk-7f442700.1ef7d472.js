(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f442700"],{"23cd":function(t,e,a){},"3b15":function(t,e,a){"use strict";a("55bc")},"55bc":function(t,e,a){},b186:function(t,e,a){"use strict";a.r(e);var c=a("7a23");function s(t,e,a,s,n,o){const l=Object(c["K"])("FrontNavBar"),b=Object(c["K"])("router-view"),i=Object(c["K"])("ToastMessages"),r=Object(c["K"])("Footer");return Object(c["A"])(),Object(c["g"])("div",null,[Object(c["k"])(l),Object(c["k"])(b),Object(c["k"])(i),Object(c["k"])(r)])}var n=a("3568"),o=a.n(n);const l=t=>(Object(c["D"])("data-v-6be638a0"),t=t(),Object(c["B"])(),t),b={class:"bg-brown position-fixed w-100"},i={class:"container-lg"},r={class:"row justify-content-center"},d={class:"col-lg-10"},j={class:"navbar navbar-expand-sm navbar-dark pt-2 pb-2"},O={class:"container-fluid px-0"},h=l(()=>Object(c["h"])("img",{class:"logo me-2",src:o.a,alt:""},null,-1)),u=l(()=>Object(c["h"])("h1",null,"桂子飄香",-1)),g={class:"nav-item dropdown ms-auto order-sm-1"},v={class:"nav-link d-flex text-white pe-2 pe-sm-0",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},f={class:"position-relative me-2"},p=l(()=>Object(c["h"])("i",{class:"bi bi-cart3 me-1"},null,-1)),m=["cartLength"],k=l(()=>Object(c["h"])("div",{class:"d-sm-block d-none"},"購物車",-1)),x={class:"dropdown-menu shadow-lg","aria-labelledby":"navbarDropdown"},w=l(()=>Object(c["h"])("div",{class:"border-bottom pb-2 px-3 text-toffee fw-bold fs-4 text-center"},"購物車",-1)),y={key:0},C=l(()=>Object(c["h"])("div",{class:"text-center mt-4 d-flex justify-content-center flex-column"},[Object(c["h"])("i",{class:"fs-1 bi bi-exclamation-triangle-fill text-black-50"}),Object(c["h"])("span",{class:"text-black-50"},"尚未選購商品")],-1)),L={class:"text-center mt-4 mb-3 px-3"},T=Object(c["j"])("選購商品"),N={key:1,class:"overflow-scroll"},A={href:"#",class:"photo"},D=["src"],_={class:"px-3 good-title"},F={class:"mb-2"},q={class:"text-1-line fw-bold"},K={class:"fw-bold mb-2"},X={class:"btn-group"},I=["onClick"],B=l(()=>Object(c["h"])("i",{class:"bi bi-dash-lg"},null,-1)),U=[B],$=["onUpdate:modelValue","disabled","onClick"],J=["onClick"],M=l(()=>Object(c["h"])("i",{class:"bi bi-plus-lg"},null,-1)),P=[M],S={class:"fs-5 ms-auto"},V=["onClick"],Y=l(()=>Object(c["h"])("i",{class:"bi bi-trash"},null,-1)),z=[Y],E={class:"text-end px-md-3"},G={class:"fs-5 fw-bold"},H={class:"text-center mt-4 mb-3 px-3"},Q=Object(c["j"])("前往結帳"),R=Object(c["j"])("繼續選購"),W=l(()=>Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1)),Z={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},tt={class:"navbar-nav ms-auto mt-sm-0 mt-3"},et={class:"nav-item"},at=l(()=>Object(c["h"])("div",{class:"position-relative me-2"},[Object(c["h"])("i",{class:"bi bi-shop-window"})],-1)),ct=l(()=>Object(c["h"])("div",null,"商品列表",-1)),st={class:"nav-item"},nt={class:"position-relative me-3"},ot=l(()=>Object(c["h"])("i",{class:"bi bi-bookmark"},null,-1)),lt={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},bt=l(()=>Object(c["h"])("div",null,"我的收藏",-1));function it(t,e,a,s,n,o){const l=Object(c["K"])("Loading"),B=Object(c["K"])("router-link");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(l,{active:n.isLoading},null,8,["active"]),Object(c["h"])("div",b,[Object(c["h"])("div",i,[Object(c["h"])("div",r,[Object(c["h"])("div",d,[Object(c["h"])("nav",j,[Object(c["h"])("div",O,[Object(c["k"])(B,{to:"/user/home",class:"navbar-brand d-flex align-items-center"},{default:Object(c["X"])(()=>[h,u]),_:1}),Object(c["h"])("div",g,[Object(c["h"])("a",v,[Object(c["h"])("div",f,[p,0!==n.cartLength?(Object(c["A"])(),Object(c["g"])("span",{key:0,cartLength:n.cartLength,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},Object(c["N"])(n.cartLength),9,m)):Object(c["f"])("",!0)]),k]),Object(c["h"])("div",x,[w,0===n.cartLength?(Object(c["A"])(),Object(c["g"])("div",y,[C,Object(c["h"])("div",L,[Object(c["k"])(B,{to:"/user/goods",class:"btn btn-toffee w-100 d-block"},{default:Object(c["X"])(()=>[T]),_:1})])])):(Object(c["A"])(),Object(c["g"])("div",N,[n.cart.carts?(Object(c["A"])(),Object(c["g"])(c["a"],{key:0},[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(n.cart.carts,e=>(Object(c["A"])(),Object(c["g"])("div",{class:"dropdown-item pb-4 px-md-3 border-bottom d-flex mb-4",key:e.id},[Object(c["h"])("a",A,[Object(c["h"])("img",{src:e.product.imageUrl,alt:""},null,8,D)]),Object(c["h"])("div",_,[Object(c["h"])("div",F,[Object(c["h"])("div",q,Object(c["N"])(e.product.title),1)]),Object(c["h"])("div",K,"NT$ "+Object(c["N"])(e.product.price),1),Object(c["h"])("div",X,[Object(c["h"])("button",{type:"button",class:Object(c["s"])(["btn btn-outline-toffee btn-sm",{disabled:e.qty<=1}]),onClick:a=>t.updateCart(e,e.qty--)},U,10,I),Object(c["Y"])(Object(c["h"])("input",{type:"number",class:"text-center form-control rounded-0 border-start-0 border-end-0 border-toffee","onUpdate:modelValue":t=>e.qty=t,disabled:e.id===n.status.loadingItem,onClick:a=>t.updateCart(e)},null,8,$),[[c["S"],e.qty,void 0,{number:!0}]]),Object(c["h"])("button",{type:"button",class:Object(c["s"])(["btn btn-outline-toffee btn-sm",{disabled:e.qty>=10}]),onClick:a=>t.updateCart(e,e.qty++)},P,10,J)])]),Object(c["h"])("div",S,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-toffee btn-sm",onClick:t=>o.deleteCart(e)},z,8,V)])]))),128)),Object(c["h"])("div",E,[Object(c["h"])("div",G,"總計: NT$ "+Object(c["N"])(n.finalTotal),1)]),Object(c["h"])("div",H,[Object(c["k"])(B,{to:"/user/cart",class:"btn btn-toffee w-100 d-block mb-3"},{default:Object(c["X"])(()=>[Q]),_:1}),Object(c["k"])(B,{to:"/user/goods",class:"btn btn-outline-toffee w-100 d-block"},{default:Object(c["X"])(()=>[R]),_:1})])],64)):Object(c["f"])("",!0)]))])]),W,Object(c["h"])("div",Z,[Object(c["h"])("ul",tt,[Object(c["h"])("li",et,[Object(c["k"])(B,{to:"/user/goods",class:"nav-link d-flex px-3 active"},{default:Object(c["X"])(()=>[at,ct]),_:1})]),Object(c["h"])("li",st,[Object(c["k"])(B,{to:"/user/favorite",class:"nav-link d-flex px-3 active"},{default:Object(c["X"])(()=>[Object(c["h"])("div",nt,[ot,Object(c["h"])("span",lt,Object(c["N"])(o.filterFavoriteLen.length),1)]),bt]),_:1})])])])])])])])])])],64)}var rt=a("c808"),dt={inject:["emitter"],mixins:[rt["a"]],data(){return{cart:[],total:"",cartLength:"",finalTotal:"",status:{loadingItem:""},isLoading:!1}},methods:{getData(t){console.log("len:",t),this.cartLength=t},deleteCart(t){const e="https://vue3-course-api.hexschool.io/api/anpo/cart/"+t.id;this.isLoading=!0,this.$http.delete(e).then(t=>{this.isLoading=!1,this.emitter.emit("deleteCartItem",this.cart),this.getCartProducts()})}},computed:{filterFavoriteLen(){const t=this.favorite;return[...new Set(t)]}},mounted(){this.emitter.on("getNum",t=>{this.cartLength=t}),this.emitter.on("getFinalTotal",t=>{this.finalTotal=t}),this.emitter.on("getCarts",t=>{this.cart=t}),this.emitter.on("formData",t=>{this.cartLength=0}),this.emitter.on("favorite",t=>{this.favorite=t}),this.getCartProducts()}},jt=(a("3b15"),a("d959")),Ot=a.n(jt);const ht=Ot()(dt,[["render",it],["__scopeId","data-v-6be638a0"]]);var ut=ht;const gt={class:"footer bg-brown pt-2 pb-2 text-center"},vt=Object(c["h"])("p",{class:"text-light mb-0 fw-light"},"本網站僅供個人作品使用，不提供商業用途。",-1),ft=[vt];function pt(t,e){return Object(c["A"])(),Object(c["g"])("div",gt,ft)}const mt={},kt=Ot()(mt,[["render",pt]]);var xt=kt,wt=a("cfb9"),yt=a("f367"),Ct={provide(){return{emitter:wt["a"]}},components:{FrontNavBar:ut,Footer:xt,ToastMessages:yt["a"]}};a("ff90");const Lt=Ot()(Ct,[["render",s]]);e["default"]=Lt},ff90:function(t,e,a){"use strict";a("23cd")}}]);
//# sourceMappingURL=chunk-7f442700.1ef7d472.js.map