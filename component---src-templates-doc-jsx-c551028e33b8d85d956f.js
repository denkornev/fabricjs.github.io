(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1J7U":function(e,t,n){},"3Smn":function(e,t,n){},DjDE:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d})),n.d(t,"query",(function(){return s}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("L12J"),i=n("hktZ"),c=n("ne29"),u=n("dmsj");function d(e){var t=e.pageContext,n=e.data;return r.a.createElement(o.a,{leftSidebar:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,"Guides"),r.a.createElement("nav",{id:"topics","aria-label":"Contents"},r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(l.a,{onClick:function(){e(!1)},title:"Introduction",to:"/docs"},"Introduction")),t.docList.map((function(a){var o=a.title,c=a.slug;return r.a.createElement("li",{key:c},r.a.createElement(l.a,{onClick:function(){e(!1)},activeClassName:"active",title:o,to:c},o),t.slug===c&&r.a.createElement(i.a,{hideSidebar:function(){e(!1)},tableOfContentsHtml:n.docPage.toc}))})))))}},r.a.createElement(u.a,{title:n.docPage.frontmatter.title}),r.a.createElement("nav",{id:"breadcrumb-nav","aria-label":"breadcrumb"},r.a.createElement(l.a,{to:"/docs"},"Guide docs")," ",">"," ",r.a.createElement("span",null,n.docPage.frontmatter.title)),r.a.createElement("h1",null,n.docPage.frontmatter.title),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:n.docPage.html}}),r.a.createElement(c.a,{prev:t.prev||{title:"Introduction",slug:"/docs"},next:t.next}))}var s="73599506"},L12J:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),l=n("ySCG"),o=n("YaUY");n("dGsL");function i(e){var t=e.children,n=r.a.useState(!1),a=n[0],l=n[1];return r.a.createElement("aside",{className:a?"open":"closed",id:"sidebarLeft"},r.a.createElement("div",{role:"button",tabIndex:0,onClick:function(){return l(!1)},id:"sidebarLeftModalBg"}),r.a.createElement("button",{onClick:function(){return l(!a)}}),r.a.createElement("div",{id:"sideBarLeftContentWrap"},t(l)))}function c(e){var t=e.children,n=e.leftSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),n&&"function"==typeof n&&r.a.createElement(i,null,(function(e){return n(e)})),r.a.createElement("main",null,t),r.a.createElement(o.a,null))}c.defaultProps={leftSidebar:null}},dGsL:function(e,t,n){},hktZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("KKXr");var a=n("q1tI"),r=n.n(a);n("1J7U");var l=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).doScrolling=function(e,t){if(e){var n,a=t||500,r=window.pageYOffset||0,l=e.getBoundingClientRect().top;l-=60,window.requestAnimationFrame((function e(t){var o=t-(n=n||t),i=Math.min(o/a,1);window.scrollTo(0,r+l*i),o<a&&window.requestAnimationFrame(e)}))}},t.handleClick=function(e){if("undefined"!=typeof window&&(e.preventDefault(),"A"===e.target.tagName)){var n=t.props.hideSidebar,a=document.getElementById(e.target.href.split("#")[1]);a&&t.doScrolling(a,500),n&&"function"==typeof n&&n()}},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.tableOfContentsHtml;return r.a.createElement("nav",{onClick:this.handleClick,role:"button",id:"table-of-contents",dangerouslySetInnerHTML:{__html:e}})},a}(r.a.Component);l.defaultProps={hideSidebar:null,tableOfContentsHtml:null}},ne29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz");n("3Smn");function o(e){var t=e.prev,n=e.next;return r.a.createElement("nav",{id:"prevNextPostLinks"},(t||n)&&r.a.createElement("ul",null,t&&r.a.createElement("li",{className:"prevPost"},r.a.createElement(l.a,{to:t.slug},t.title)),n&&r.a.createElement("li",{className:"nextPost"},r.a.createElement(l.a,{to:n.slug},n.title))))}o.defaultProps={prev:null,next:null}}}]);
//# sourceMappingURL=component---src-templates-doc-jsx-c551028e33b8d85d956f.js.map