import{B as y}from"./Checkbox.cv4w58s0.js";import{G as N,a as O}from"./Row.h4gujlzc.js";import"./translations.b896ab1m.js";import{_ as k}from"./_plugin-vue_export-helper.oebm7xum.js";import{_ as e}from"./default-i18n.hohxoesu.js";import{v as i,o as l,c as p,C as r,l as c,x as u,t as d,F as I,J as C,k as U,a as v,b as _}from"./runtime-dom.esm-bundler.h3clfjuw.js";const o="all-in-one-seo-pack",B={components:{BaseCheckbox:y,GridColumn:N,GridRow:O},props:{options:{type:Object,required:!0},mainOptions:Object,global:Boolean},data(){return{settings:[{value:"noindex",label:e("No Index",o)},{value:"nofollow",label:e("No Follow",o)},{value:"noarchive",label:e("No Archive",o)},{value:"notranslate",label:e("No Translate",o)},{value:"noimageindex",label:e("No Image Index",o)},{value:"nosnippet",label:e("No Snippet",o)},{value:"noodp",label:e("No ODP",o)}],globalSettings:[{value:"noindexPaginated",label:e("No Index Paginated",o)},{value:"nofollowPaginated",label:e("No Follow Paginated",o)},{value:"noindexFeed",label:e("No Index RSS Feeds",o)}],strings:{useDefaultSettings:e("Use Default Settings",o),robotsMeta:e("Robots meta:",o),maxSnippet:e("Max Snippet",o),maxVideoPreview:e("Max Video Preview",o),maxImagePreview:e("Max Image Preview",o),standard:e("Standard",o),none:e("None",o),large:e("Large",o)}}},watch:{noindex(s){this.mainOptions&&(this.mainOptions.show=!s)},default(s){if(this.mainOptions){if(s){this.mainOptions.show=!0;return}this.mainOptions.show=!this.noindex}}},computed:{robotsSettings(){return this.global?this.settings.concat(this.globalSettings):this.settings},noindex(){return this.options.noindex},default(){return this.options.default},imagePreviewOptions(){return[{label:this.strings.none,value:"none"},{label:this.strings.standard,value:"standard"},{label:this.strings.large,value:"large"}]}},methods:{getImagePreviewOption(s){return this.imagePreviewOptions.find(a=>a.value===s)}}},F={class:"aioseo-robots-meta"},M={key:0,class:"global-robots-settings aioseo-description"},D={class:"global-robots-settings-options"},R={key:0,class:"max-snippet aioseo-description"},z={class:"max-video-preview aioseo-description"},A={key:1,class:"max-image-preview aioseo-description"};function L(s,a,t,G,m,g){const x=i("base-toggle"),f=i("base-checkbox"),w=i("grid-column"),h=i("grid-row"),b=i("base-input"),V=i("base-select");return l(),p("div",F,[r(x,{modelValue:t.options.default,"onUpdate:modelValue":a[0]||(a[0]=n=>t.options.default=n)},{default:c(()=>[u(d(m.strings.useDefaultSettings),1)]),_:1},8,["modelValue"]),t.options.default?_("",!0):(l(),p("div",M,[u(d(m.strings.robotsMeta)+" ",1),r(h,{class:"settings"},{default:c(()=>[(l(!0),p(I,null,C(g.robotsSettings,(n,P)=>(l(),U(w,{key:P,xl:"3",md:"4",sm:"6"},{default:c(()=>[r(f,{size:"medium",modelValue:t.options[n.value],"onUpdate:modelValue":S=>t.options[n.value]=S},{default:c(()=>[u(d(n.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1}),v("div",D,[t.options.nosnippet?_("",!0):(l(),p("div",R,[u(d(m.strings.maxSnippet)+" ",1),r(b,{type:"number",size:"medium",modelValue:t.options.maxSnippet,"onUpdate:modelValue":a[1]||(a[1]=n=>t.options.maxSnippet=n)},null,8,["modelValue"])])),v("div",z,[u(d(m.strings.maxVideoPreview)+" ",1),r(b,{type:"number",size:"medium",modelValue:t.options.maxVideoPreview,"onUpdate:modelValue":a[2]||(a[2]=n=>t.options.maxVideoPreview=n)},null,8,["modelValue"])]),t.options.noimageindex?_("",!0):(l(),p("div",A,[u(d(m.strings.maxImagePreview)+" ",1),r(V,{size:"medium",options:g.imagePreviewOptions,modelValue:g.getImagePreviewOption(t.options.maxImagePreview),"onUpdate:modelValue":a[3]||(a[3]=n=>t.options.maxImagePreview=n.value)},null,8,["options","modelValue"])]))])]))])}const K=k(B,[["render",L]]);export{K as C};
