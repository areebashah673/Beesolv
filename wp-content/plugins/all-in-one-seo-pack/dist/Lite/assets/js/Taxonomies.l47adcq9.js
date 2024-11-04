import{b as D,u as P,j as B}from"./index.ba51ghj9.js";import{u as O}from"./PostTypes.pd67gy5m.js";import{A as j,T as L}from"./TitleDescription.lzx9mbqe.js";import{C as q}from"./Card.0q0mr1wq.js";import{C as w}from"./Tabs.opo0ypfq.js";import{C as E}from"./Tooltip.i4md1nj9.js";import{a as F}from"./index.kaabvvzj.js";import"./translations.b896ab1m.js";import{c as p,F as b,J as h,v as m,o as r,k as S,l as a,a as o,G as I,x as u,t as n,C as _,q as N,T as R}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{_ as V}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as e,a as T}from"./default-i18n.hohxoesu.js";import"./helpers.lwqbledo.js";import"./constants.hcfrsngk.js";import"./JsonValues.g6ep3o3z.js";import"./RadioToggle.cler7vn3.js";import"./RobotsMeta.nthz6djw.js";import"./Checkbox.cv4w58s0.js";import"./Checkmark.d5kkjaf5.js";import"./Row.h4gujlzc.js";import"./SettingsRow.d9u0swi1.js";import"./Editor.ipgvvrs0.js";import"./isEqual.dwjbg1yu.js";import"./_baseIsEqual.j7gru8tk.js";import"./_getTag.fx9iqlmr.js";import"./_baseClone.n1l9l19s.js";import"./_arrayEach.n8ou32wp.js";import"./Caret.dwp6xpza.js";import"./Tags.mkuonlme.js";import"./postSlug.ms4f44w2.js";import"./metabox.y83zoorm.js";import"./cleanForSlug.dzbbaoug.js";import"./toString.oppn28a8.js";import"./_baseTrim.ohbpllmu.js";import"./_stringToArray.mpukyt2g.js";import"./_baseSet.ipousrvi.js";import"./regex.bekpgw04.js";import"./GoogleSearchPreview.mmblg2b4.js";import"./HtmlTagsEditor.irue4ytl.js";import"./UnfilteredHtml.o4azp64h.js";import"./Slide.dop8j51m.js";import"./vue-router.eypfdvl5.js";import"./TruSeoScore.das28gz4.js";import"./ProBadge.e32os6n3.js";import"./Information.djrr3pec.js";import"./Ellipse.mhzh8c2h.js";const s="all-in-one-seo-pack",z={setup(){const{getPostIconClass:l}=O();return{getPostIconClass:l,optionsStore:D(),rootStore:P(),settingsStore:B()}},components:{Advanced:j,CoreCard:q,CoreMainTabs:w,CoreTooltip:E,SvgCircleQuestionMark:F,TitleDescription:L},data(){return{internalDebounce:null,strings:{label:e("Label:",s),name:e("Slug:",s),postTypes:e("Post Types:",s),ctaButtonText:e("Unlock Custom Taxonomies",s),ctaDescription:T(e("%1$s %2$s lets you set the SEO title and description for custom taxonomies. You can also control all of the robots meta and other options just like the default category and tags taxonomies.",s),"AIOSEO","Pro"),ctaHeader:T(e("Custom Taxonomy Support is a %1$s Feature",s),"PRO")},tabs:[{slug:"title-description",name:e("Title & Description",s),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:e("Advanced",s),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{taxonomies(){return this.rootStore.aioseo.postData.taxonomies}},methods:{processChangeTab(l,g){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${l}SA`,value:g}),setTimeout(()=>{this.internalDebounce=!1},50))}}},M={class:"aioseo-search-appearance-taxonomies"},U={class:"aioseo-description"},G=o("br",null,null,-1),H=o("br",null,null,-1),J=o("br",null,null,-1);function Q(l,g,Y,i,c,f){const C=m("svg-circle-question-mark"),v=m("core-tooltip"),k=m("core-main-tabs"),A=m("core-card");return r(),p("div",M,[(r(!0),p(b,null,h(f.taxonomies,(t,x)=>(r(),S(A,{key:x,slug:`${t.name}SA`},{header:a(()=>[o("div",{class:I(["icon dashicons",i.getPostIconClass(t.icon)])},null,2),u(" "+n(t.label)+" ",1),_(v,{"z-index":"99999"},{tooltip:a(()=>[o("div",U,[u(n(c.strings.label)+" ",1),o("strong",null,n(t.label),1),G,u(" "+n(c.strings.name)+" ",1),o("strong",null,n(t.name),1),H,u(" "+n(c.strings.postTypes),1),J,o("ul",null,[(r(!0),p(b,null,h(t.postTypes,(d,y)=>(r(),p("li",{key:y},[o("strong",null,n(d),1)]))),128))])])]),default:a(()=>[_(C)]),_:2},1024)]),tabs:a(()=>[_(k,{tabs:c.tabs,showSaveButton:!1,active:i.settingsStore.settings.internalTabs[`${t.name}SA`],internal:"",onChanged:d=>f.processChangeTab(t.name,d)},null,8,["tabs","active","onChanged"])]),default:a(()=>[_(R,{name:"route-fade",mode:"out-in"},{default:a(()=>[(r(),S(N(i.settingsStore.settings.internalTabs[`${t.name}SA`]),{object:t,separator:i.optionsStore.options.searchAppearance.global.separator,options:i.optionsStore.dynamicOptions.searchAppearance.taxonomies[t.name],type:"taxonomies","show-bulk":!1},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const Vt=V(z,[["render",Q]]);export{Vt as default};
