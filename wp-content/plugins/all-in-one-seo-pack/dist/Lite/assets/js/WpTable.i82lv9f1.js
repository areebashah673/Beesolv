import{j as C}from"./index.ba51ghj9.js";import{u as K}from"./ScrollTo.ntqtkazp.js";import{g as t,f as M,y as U}from"./runtime-dom.esm-bundler.h3clfjuw.js";const E=(d={})=>{const{changeItemsPerPageSlug:c,fetchData:h,orderBy:P,orderDir:y,pageNumber:b,resetSelectedFilters:T=()=>{},resultsPerPage:_,selectedFilters:m,slug:S,tableId:D,tableRef:i,wpTableLoading:F}=d,v=t("all"),o=P||t(null),f=y||t(null),a=b||t(1),s=t(_||20),u=t(null),g=m||t(null),L=t(0),l=F||t(!1),p=C(),x=K().scrollTo,A=()=>(l.value=!0,r().then(()=>{l.value=!1,i==null||i.editRow(null)})),B=({filters:e,term:n=null,number:W=null})=>{l.value=!0,g.value=e,u.value=n??u.value,a.value=W??a.value,r(e).then(()=>l.value=!1)},I=e=>{var n;typeof e=="object"&&(e=(n=e==null?void 0:e.target)==null?void 0:n.value),a.value=1,u.value=e,l.value=!0,r().then(()=>l.value=!1)},w=e=>{a.value=e,l.value=!0,r().then(()=>l.value=!1)},j=e=>{v.value=e.slug,u.value=null,a.value=1,l.value=!0,T(),r().then(()=>l.value=!1)},N=e=>{a.value=1,s.value=e,l.value=!0,p.changeItemsPerPage({slug:c,value:e}).then(()=>r().then(()=>x(D))).then(()=>l.value=!1)},O=(e,n)=>(n.target.blur(),o.value=e.slug,f.value=o.value!==e.slug?e.sortDir:e.sortDir==="asc"?"desc":"asc",l.value=!0,r().then(()=>l.value=!1)),R=M(()=>a.value===1?0:(a.value-1)*s.value),r=(e=g.value)=>h({slug:S,orderBy:o.value,orderDir:f.value,limit:s.value,offset:R.value,searchTerm:u.value,filter:v.value,additionalFilters:e});return U(()=>{c&&(s.value=p.settings.tablePagination[c]||s.value)}),{filter:v,orderBy:o,orderDir:f,pageNumber:a,processAdditionalFilters:B,processChangeItemsPerPage:N,processFetchTableData:r,processFilterTable:j,processPagination:w,processSearch:I,processSort:O,refreshTable:A,resultsPerPage:s,searchTerm:u,selectedFilters:g,wpTableKey:L,wpTableLoading:l}};export{E as u};
