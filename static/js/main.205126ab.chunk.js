(this.webpackJsonptimetablemanager=this.webpackJsonptimetablemanager||[]).push([[0],{155:function(e,t,a){},241:function(e,t,a){e.exports=a(420)},246:function(e,t,a){},420:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),c=a.n(s),o=(a(246),a(35)),l=a(36),i=a(37),u=a(38),m=a(99),h=a(19),d=a(133),p=a.n(d),f=a(208),v=a(93),E=a.n(v),b=a(48),g=a(428),O=a(429),C=a(430),S=a(445),j=a(431),y=a(432),k=(a(155),a(74)),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{onClick:this.toggleNav}),r.a.createElement(C.a,{className:"mr-auto",href:"/"},"Time Table Creator"),r.a.createElement(S.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(j.a,{navbar:!0},r.a.createElement(y.a,null,r.a.createElement(k.b,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")))))),r.a.createElement("hr",null))}}]),a}(n.Component),N=a(50),T=a(441);function A(e){var t=e.day.map((function(e){return r.a.createElement("td",{style:e.length>1?{background:"#eb4034"}:null,className:e.length>0?"border":null},r.a.createElement(T.a,{items:e}))}));return r.a.createElement("tr",null,t)}var _=a(433),F=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.data.slice(1),t=this.props.data[0];if(e){var a=e.map((function(e){return r.a.createElement(A,{day:e})})),n=t.map((function(e){return r.a.createElement("th",null,e)}));return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(_.a,{striped:!0,hover:!0,responsive:!0,className:"border"},r.a.createElement("thead",null,n),r.a.createElement("tbody",null,a),r.a.createElement("thead",null,n)))}return r.a.createElement("h2",null," Something Wrong happend",r.a.createElement("span",{className:"fa fa-filter"}))}}]),a}(n.Component),D=a(444),L=a(439),x=a(435),H=a(442),U=a(434),W=[[[],["9:00-10:30"],["10:30-12"],["12:00-1:30"],["1:30-2:30"],["2:30-4:00"],["4:00-5:30"]],[["Mon"],[],[],[],[],[],[]],[["Tue"],[],[],[],[],[],[]],[["Wed"],[],[],[],[],[],[]],[["Thu"],[],[],[],[],[],[]],[["Fri"],[],[],[],[],[],[]]],M=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={courses:[],schedule:JSON.parse(JSON.stringify(W)),season:!1},n.handleCourseChange=n.handleCourseChange.bind(Object(b.a)(n)),n.updateSchedule=n.updateSchedule.bind(Object(b.a)(n)),n.findpos=n.findpos.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"findpos",value:function(e){var t=this.props.schedule.monsoon;this.state.season&&(t=this.props.schedule.winter);for(var a=[],n=1;n<=5;n++)for(var r=1;r<=6;r++)t[n.toString()][r.toString()].includes(e)&&a.push([n,r]);return a}},{key:"updateSchedule",value:function(){for(var e=JSON.parse(JSON.stringify(W)),t=0;t<this.state.courses.length;t++)for(var a=this.findpos(this.state.courses[t]),n=0;n<a.length;n++){var r=a[n][0],s=a[n][1];e[r][s].push(this.state.courses[t])}this.setState({schedule:e})}},{key:"handleCourseChange",value:function(e,t){var a=this,n=(t||e.target).value;this.setState(Object(N.a)({},this.state.courses,{courses:n}),(function(){return a.updateSchedule()}))}},{key:"onChange",value:function(){this.setState({season:!this.state.season,courses:[]})}},{key:"render",value:function(){var e=null;return this.props.isLoading?e=[{key:"loading",value:r.a.createElement(U.a,null),text:r.a.createElement(U.a,null),disabled:!0}]:this.props.errmess?e=[{key:"error",value:this.props.errmess,text:this.props.errmess,disabled:!0}]:(e=this.props.courses.monsoon,this.state.season&&(e=this.props.courses.winter)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(F,{data:this.state.schedule})),r.a.createElement("hr",null),r.a.createElement(D.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(L.a,null,r.a.createElement(L.a.Field,{inline:!0},r.a.createElement("label",null,"Monsoon"),r.a.createElement(x.a,{slider:!0,disabled:!0,checked:this.state.season,onChange:this.onChange.bind(this)}),r.a.createElement("label",null,"Winter")))),r.a.createElement(H.a,{placeholder:"Select Courses",fluid:!0,multiple:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:e,value:this.state.courses,onChange:this.handleCourseChange})))}}]),a}(n.Component),R=a(227),I=a(440),J=a(443),B=a(51),G=a(436),P=a(437),z=a(438),$=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t={emailto:"itissandeep98@gmail.com",message:this.message.value,subject:"TimeTableManager: Message from "+this.name.value};E.a.get("https://jsonserver-f.herokuapp.com/sendmail",{params:t}),this.name.value="",this.message.value=""}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement(G.a,{onSubmit:this.onSubmit.bind(this)},r.a.createElement(P.a,null,r.a.createElement(z.a,{type:"text",name:"name",placeholder:"Name",innerRef:function(t){return e.name=t}})),r.a.createElement(P.a,null,r.a.createElement(z.a,{type:"textarea",name:"message",placeholder:"Feedback",innerRef:function(t){return e.message=t}})),r.a.createElement(J.a,{circular:!0,floated:!0,positive:!0}," ",r.a.createElement("span",{className:"fa fa-paper-plane"})," Send")))}}]),a}(n.Component),q=function(){var e=Object(n.useState)(!1),t=Object(R.a)(e,2),a=t[0],s=t[1];return r.a.createElement("div",{className:"text-center"},r.a.createElement(g.a,null,r.a.createElement(j.a,{navbar:!0}),r.a.createElement(j.a,{navbar:!0},r.a.createElement(y.a,null,r.a.createElement(I.a,{content:r.a.createElement($,null),on:"click",onClose:function(){return s(!1)},onOpen:function(){return s(!0)},open:a,trigger:r.a.createElement(J.a,{circular:!0,icon:!0,color:"black"},r.a.createElement(B.a,{name:"chat",size:"large"})),position:"top right"})))))},K=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/home",component:function(){return r.a.createElement(M,{courses:e.props.courses.courses,schedule:e.props.schedule,isLoading:e.props.courses.isLoading,errmess:e.props.courses.errmess})}}),r.a.createElement(h.a,{to:"/home"})),r.a.createElement(q,null))}}]),a}(n.Component),Q=Object(h.g)(Object(m.b)((function(e){return{courses:e.courses,schedule:e.schedule.schedule}}),(function(e){return{fetchData:function(){return e(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DATA_FETCH_LOADING"}),e.next=3,E.a.get("https://jsonserver-f.herokuapp.com/itissandeep98/TimeTableManager").then((function(e){e.data.errmess?t({type:"DATA_FETCH_FAILED",errmess:"Error in fetched data. Try reloading"}):(t({type:"COURSE_FETCH_SUCCESS",courses:e.data.courses}),t({type:"SCHEDULE_FETCH_SUCCESS",schedule:e.data.schedule}))})).catch((function(e){t({type:"DATA_FETCH_FAILED",errmess:"Error in connection with Server. Try reloading"})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(K));var V=function(){return r.a.createElement(k.a,{basename:"/TimeTableManager"},r.a.createElement("div",{className:"App"},r.a.createElement(Q,null)))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(416),a(417),a(418),a(419);var Z=a(56),ee=a(225),te=a(226),ae=a.n(te),ne={isLoading:!0},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_FETCH_LOADING":return Object(N.a)({},e,{isLoading:!0});case"COURSE_FETCH_SUCCESS":var a=t.courses;return Object(N.a)({},e,{courses:a,errmess:null,isLoading:!1});case"DATA_FETCH_FAILED":return Object(N.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},se={},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCHEDULE_FETCH_SUCCESS":var a=t.schedule;return Object(N.a)({},e,{schedule:a,errmess:null});default:return e}},oe=Object(Z.c)({courses:re,schedule:ce}),le=Object(Z.d)(oe,Object(Z.a)(ee.a,ae.a));c.a.render(r.a.createElement(m.a,{store:le},r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TimeTableManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TimeTableManager","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()}},[[241,1,2]]]);
//# sourceMappingURL=main.205126ab.chunk.js.map