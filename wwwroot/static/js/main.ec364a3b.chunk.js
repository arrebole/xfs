(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{133:function(e,t,a){e.exports=a(277)},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(5),c=a.n(r),o=(a(138),a(35)),i=a(36),s=a(39),u=a(37),m=a(40),d=a(9),p=a(279),h=a(280),f=(a(139),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("nav",null,l.a.createElement("span",null,"GKD")))}}]),t}(l.a.Component)),E=(a(140),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-contents"},l.a.createElement("p",null,"V0.1.0 | \u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668 "),l.a.createElement("p",null,"Copyright \u24b8 2019 ",l.a.createElement("strong",null,"futanaicha.net")," , LLC. All rights reserved.")))}}]),t}(l.a.Component)),g=(a(141),function(e){function t(e){var a,n=this;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&(console.log(e),a.setState({loading:!1}),e.file.response.code>=0?a.setState({url:e.file.response.data.url}):alert("\u4e0a\u4f20\u5931\u8d25")):a.setState({loading:!0})},a.UploadButton=function(){return l.a.createElement("div",{className:"upload-button"},l.a.createElement(d.a,{type:a.state.loading?"loading":"plus",style:{fontSize:24}}),l.a.createElement("div",{className:"ant-upload-text"},"Upload"))},a.FsUpload=function(){return l.a.createElement("section",{className:"container upload-container"},l.a.createElement(p.a,{name:"file",listType:"picture-card",className:"uploader",showUploadList:!1,onChange:a.handleChange,action:"/api/upload"},""!==a.state.url?l.a.createElement("img",{src:a.state.url,alt:"file",style:{width:"100%"}}):l.a.createElement(n.UploadButton,null)))},a.ResInfo=function(){return l.a.createElement("section",{className:"container res-container"},l.a.createElement("div",{className:"res-contents"},l.a.createElement(h.a,{value:a.state.url,size:"large"})))},a.state={loading:!1,url:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home"},l.a.createElement(f,null),l.a.createElement("article",{className:"home-contents"},l.a.createElement(this.ResInfo,null),l.a.createElement(this.FsUpload,null)),l.a.createElement(E,null))}}]),t}(l.a.Component)),v=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[133,1,2]]]);
//# sourceMappingURL=main.ec364a3b.chunk.js.map