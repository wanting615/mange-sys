import"./base-295e6725.js";/* empty css                   */import{d as C,e as V,b as $}from"./el-popper-5757448a.js";import{b as g}from"./el-input-c1d1c214.js";import{E as S,b as A,a as B}from"./el-menu-item-6f94a37f.js";import{d as M,x as U,u as N,r as R,z as F,o as t,c as u,e as r,w as a,F as i,E as v,n as c,g as _,t as T,K,G as z,s as D,C as G,D as j,A as q}from"./index-8e5c6ca0.js";import{g as H}from"./doc-a460a9ac.js";import{_ as J}from"./drawer.vue_vue_type_style_index_0_lang-e0452a47.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./aria-bc8e8b0f.js";import"./vnode-d81291be.js";import"./el-form-item-aaab0f09.js";/* empty css                */import"./el-checkbox-e51c4648.js";import"./scroll-c996a468.js";import"./index-bb5a5ed8.js";const P=l=>(G("data-v-ebe60760"),l=l(),j(),l),Q=P(()=>q("i",{class:"el-icon-message"},null,-1)),W=M({__name:"doc",setup(l){const m=U(),x=N(),e=R({docTypeDrawer:!1,docTypeList:[],acitveDocIndex:""});H().then(s=>{if(e.docTypeList=s.data.filter(o=>o.disabled!==0),e.docTypeList.forEach(o=>{o.routerUrls=[],o.contentTypes.forEach(d=>{var p;return(p=o.routerUrls)==null?void 0:p.push({name:d,url:`/doc/${o.id}/${d}`})})}),m.params.id==null&&e.docTypeList[0]){const o=`/doc/${e.docTypeList[0].id}/${e.docTypeList[0].contentTypes[0]}`;x.push(o),e.acitveDocIndex=o}else e.acitveDocIndex=decodeURI(m.path)});const b=()=>{e.docTypeDrawer=!0},w=s=>{typeof s!="boolean"&&e.docTypeList.push(s)};return(s,o)=>{const d=S,p=A,E=B,h=g,I=C,f=F("router-view"),L=V,k=$;return t(),u(i,null,[r(k,null,{default:a(()=>[r(I,{width:"150px"},{default:a(()=>[r(E,{"default-active":e.acitveDocIndex,router:!0},{default:a(()=>[(t(!0),u(i,null,v(e.docTypeList,n=>(t(),c(p,{key:n.id,index:n.type+""},{title:a(()=>[Q,_(" "+T(n.name),1)]),default:a(()=>[(t(!0),u(i,null,v(n.routerUrls,y=>(t(),c(d,{index:y.url},{default:a(()=>[_(T(y.name),1)]),_:2},1032,["index"]))),256))]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"]),r(h,{type:"primary",class:"add-doc-type",onClick:b},{default:a(()=>[_("添加文档类型")]),_:1})]),_:1}),r(L,null,{default:a(()=>[s.$route.meta.keepAlive?(t(),c(f,{key:0},{default:a(({Component:n})=>[(t(),c(K,null,[(t(),c(z(n)))],1024))]),_:1})):D("",!0),s.$route.meta.keepAlive?D("",!0):(t(),c(f,{key:1}))]),_:1})]),_:1}),r(J,{modelValue:e.docTypeDrawer,"onUpdate:modelValue":o[0]||(o[0]=n=>e.docTypeDrawer=n),onCloseDarwer:w},null,8,["modelValue"])],64)}}});const _e=O(W,[["__scopeId","data-v-ebe60760"]]);export{_e as default};