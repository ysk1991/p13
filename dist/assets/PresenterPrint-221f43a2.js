import{f as d,h as p,j as _,ag as h,c as m,ah as u,l as n,ai as t,aj as a,y as o,F as f,ak as v,al as g,am as x,n as l,an as y,ao as b,m as k,ap as N,aq as w,_ as P}from"./nav-cfd12ad3.js";import{N as V}from"./NoteViewer-902b9163.js";import{u as j}from"./index-f1209a0c.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){p(_),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.notesHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:g(o(w))},[t("div",S,[t("div",L,[t("h1",T,a(o(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(l(!0),n(f,null,v(o(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(o(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),z])]),k(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(r).length-1?(l(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),U=P(M,[["__file","/Users/apple/Desktop/person/slidev-p13/node_modules/.pnpm/@slidev+client@0.38.5_vite@4.0.4/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{U as default};
