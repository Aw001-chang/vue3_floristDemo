(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(s,e,t){"use strict";t.r(e);var n=t("7a23");const a={class:"container mt-5"},o={class:"col-md-6"},r=Object(n["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},i=Object(n["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},l=Object(n["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(n["h"])("div",{class:"text-end mt-4"},[Object(n["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function b(s,e,t,b,p,h){return Object(n["A"])(),Object(n["g"])("div",a,[Object(n["h"])("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=Object(n["Z"])((...s)=>h.signIn&&h.signIn(...s),["prevent"]))},[Object(n["h"])("div",o,[r,Object(n["h"])("div",c,[i,Object(n["Y"])(Object(n["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>p.user.username=s)},null,512),[[n["S"],p.user.username]])]),Object(n["h"])("div",d,[l,Object(n["Y"])(Object(n["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>p.user.password=s)},null,512),[[n["S"],p.user.password]])]),u])],32)])}var p={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then(s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`divingToken=${e}; expires=${new Date(t)}`,this.$router.push("/dashboard/products")}})}}},h=t("d959"),m=t.n(h);const j=m()(p,[["render",b]]);e["default"]=j}}]);
//# sourceMappingURL=chunk-2d2086b7.230f94f4.js.map