(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c48a"],{f329:function(e,t,o){"use strict";o.r(t);var n=o("7a23");const l={class:"container-xl mt-5"},c=Object(n["createElementVNode"])("h1",null,"優惠券",-1),a={class:"text-end"},d={class:"table mt-4"},s=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"名稱"),Object(n["createElementVNode"])("th",null,"折扣百分比"),Object(n["createElementVNode"])("th",null,"到期日"),Object(n["createElementVNode"])("th",null,"是否啟用"),Object(n["createElementVNode"])("th",null,"編輯")])],-1),i={key:0,class:"text-success"},p={key:1,class:"text-muted"},r={class:"btn-group"},u=["onClick"],m=["onClick"];function b(e,t,o,b,h,j){const O=Object(n["resolveComponent"])("Pagination"),E=Object(n["resolveComponent"])("CouponModal"),V=Object(n["resolveComponent"])("DelCoupon");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",l,[c,Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=e=>j.openModal(!0))},"新增優惠券 ")]),Object(n["createElementVNode"])("table",d,[s,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(h.coupons,t=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.title),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.percent)+"%",1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.$filters.date(t.due_date)),1),Object(n["createElementVNode"])("td",null,[1===t.is_enabled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",i,"啟用")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",p,"未啟用"))]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>j.openModal(!1,t)},"編輯",8,u),Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>j.openDelModal(t)},"刪除",8,m)])])]))),128))])]),Object(n["createVNode"])(O,{pages:h.pagination,onEmitPages:j.getCoupons},null,8,["pages","onEmitPages"])]),Object(n["createVNode"])(E,{ref:"couponModal",coupon:h.tempCoupon,onUpdateCoupon:j.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(n["createVNode"])(V,{ref:"delCouponModal",item:h.tempCoupon,onDeleteItem:j.delCoupon},null,8,["item","onDeleteItem"])],64)}const h={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},j={class:"modal-dialog",role:"document"},O={class:"modal-content"},E=Object(n["createElementVNode"])("div",{class:"modal-header"},[Object(n["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),Object(n["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},N={class:"mb-3"},C=Object(n["createElementVNode"])("label",{for:"title"},"標題",-1),g={class:"mb-3"},v=Object(n["createElementVNode"])("label",{for:"coupon_code"},"優惠碼",-1),f={class:"mb-3"},k=Object(n["createElementVNode"])("label",{for:"due_date"},"到期日",-1),M={class:"mb-3"},y=Object(n["createElementVNode"])("label",{for:"price"},"折扣百分比",-1),x={class:"mb-3"},w={class:"form-check"},_=Object(n["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),D={class:"modal-footer"},B=Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function $(e,t,o,l,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",h,[Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("div",O,[E,Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("div",N,[C,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>c.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[n["vModelText"],c.tempCoupon.title]])]),Object(n["createElementVNode"])("div",g,[v,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=e=>c.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[n["vModelText"],c.tempCoupon.code]])]),Object(n["createElementVNode"])("div",f,[k,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>c.due_date=e)},null,512),[[n["vModelText"],c.due_date]])]),Object(n["createElementVNode"])("div",M,[y,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=e=>c.tempCoupon.percent=e),placeholder:"請輸入折扣百分比"},null,512),[[n["vModelText"],c.tempCoupon.percent,void 0,{number:!0}]])]),Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("div",w,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>c.tempCoupon.is_enabled=e),id:"is_enabled"},null,512),[[n["vModelCheckbox"],c.tempCoupon.is_enabled]]),_])])]),Object(n["createElementVNode"])("div",D,[B,Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",c.tempCoupon))},"更新優惠券 ")])])])],512)}var U=o("519a"),T={props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date)},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[U["a"]]},P=o("d959"),L=o.n(P);const S=L()(T,[["render",$]]);var F=S,I=o("6ff1"),J=o("1799"),q={inject:["emitter"],props:{config:Object},components:{CouponModal:F,Pagination:J["a"],DelCoupon:I["a"]},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},pagination:{},isNew:!1}},methods:{openModal(e,t){this.isNew=e,this.tempCoupon=e?{due_date:(new Date).getTime()/1e3}:{...t};const o=this.$refs.couponModal;o.showModal()},getCoupons(e=1){const t="https://vue3-course-api.hexschool.io/api/anpo/admin/coupons?page="+e;this.$http.get(t).then(e=>{this.coupons=e.data.coupons,this.pagination=e.data.pagination})},updateCoupon(e){const t=this.$refs.couponModal;if(this.isNew){const o="https://vue3-course-api.hexschool.io/api/anpo/admin/coupon";this.$http.post(o,{data:e}).then(e=>{t.hideModal(),e.data.success?(this.getCoupons(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")})})}else{const o="https://vue3-course-api.hexschool.io/api/anpo/admin/coupon/"+e.id;this.$http.put(o,{data:this.tempCoupon}).then(e=>{t.hideModal(),e.data.success?(this.getCoupons(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")})})}},openDelModal(e){this.tempCoupon={...e};const t=this.$refs.delCouponModal;t.showModal()},delCoupon(){const e="https://vue3-course-api.hexschool.io/api/anpo/admin/coupon/"+this.tempCoupon.id;this.$http.delete(e).then(e=>{this.$refs.delCouponModal.hideModal(),this.getCoupons()})}},created(){this.getCoupons()}};const z=L()(q,[["render",b]]);t["default"]=z}}]);
//# sourceMappingURL=chunk-2d22c48a.1b8b1be6.js.map