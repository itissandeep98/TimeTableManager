(this.webpackJsonptimetablemanager=this.webpackJsonptimetablemanager||[]).push([[0],{155:function(e,t,a){},240:function(e,t,a){e.exports=a(419)},245:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),c=a.n(s),l=(a(245),a(35)),o=a(36),i=a(37),u=a(38),m=a(98),h=a(19),d=a(132),p=a.n(d),E=a(208),v=a(92),f=a.n(v),b=a(47),g=a(428),O=a(429),C=a(430),j=a(444),y=a(431),S=a(432),k=(a(155),a(74)),T=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{onClick:this.toggleNav}),r.a.createElement(C.a,{className:"mr-auto",href:"/"},"Time Table Creator"),r.a.createElement(j.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(y.a,{navbar:!0},r.a.createElement(S.a,null,r.a.createElement(k.b,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")))))),r.a.createElement("hr",null))}}]),a}(n.Component),N=a(50);function F(e){var t=e.course,a=Object.keys(t).map((function(e){return r.a.createElement("td",null,t[e])}));return r.a.createElement("tr",null,a)}var _=a(433),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data.slice(1),t=this.props.data[0];if(e){var a=e.map((function(e){return r.a.createElement(F,{course:e})})),n=t.map((function(e){return r.a.createElement("th",null,e)}));return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,n),r.a.createElement("tbody",null,a)))}return r.a.createElement("h2",null," Try Uploading the database file",r.a.createElement("span",{className:"fa fa-filter"}))}}]),a}(n.Component),A=a(443),D=a(439),L=a(435),H=a(441),x=a(434),U=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(l.a)(this,a);return(n=t.call(this,e)).state={courses:[],schedule:[["","9:00-10:30","10:30-12","12:00-1:30","1:30-2:30","2:30-4:00","4:00-5:30"],["Mon","","","","L","",""],["Tue","","","","U","",""],["Wed","","","","N","",""],["Thu","","","","C","",""],["Fri","","","","H","",""]],season:!1},n.handleCourseChange=n.handleCourseChange.bind(Object(b.a)(n)),n.updateSchedule=n.updateSchedule.bind(Object(b.a)(n)),n.findpos=n.findpos.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"findpos",value:function(e){var t=this.props.schedule.monsoon;this.state.season&&(t=this.props.schedule.winter);for(var a=[],n=1;n<=5;n++)for(var r=1;r<=6;r++)t[n.toString()][r.toString()].includes(e)&&a.push([n,r]);return a}},{key:"updateSchedule",value:function(){for(var e=[["","9:00-10:30","10:30-12","12:00-1:30","1:30-2:30","2:30-4:00","4:00-5:30"],["Mon","","","","L","",""],["Tue","","","","U","",""],["Wed","","","","N","",""],["Thu","","","","C","",""],["Fri","","","","H","",""]],t=0;t<this.state.courses.length;t++)for(var a=this.findpos(this.state.courses[t]),n=0;n<a.length;n++){var r=a[n][0],s=a[n][1];e[r][s]=e[r][s].concat(this.state.courses[t]),e[r][s]=e[r][s].concat(", ")}this.setState({schedule:e})}},{key:"handleCourseChange",value:function(e,t){var a=this,n=(t||e.target).value;this.setState(Object(N.a)({},this.state.courses,{courses:n}),(function(){return a.updateSchedule()}))}},{key:"onChange",value:function(){this.setState({season:!this.state.season,courses:[]})}},{key:"render",value:function(){var e=null;return this.props.isLoading?e=[{key:"loading",value:r.a.createElement(x.a,null),text:r.a.createElement(x.a,null),disabled:!0}]:this.props.errmess?e=[{key:"error",value:this.props.errmess,text:this.props.errmess,disabled:!0}]:(e=this.props.courses.monsoon,this.state.season&&(e=this.props.courses.winter)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(w,{data:this.state.schedule})),r.a.createElement("hr",null),r.a.createElement(A.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(D.a,null,r.a.createElement(D.a.Field,{inline:!0},r.a.createElement("label",null,"Monsoon"),r.a.createElement(L.a,{slider:!0,disabled:!0,checked:this.state.season,onChange:this.onChange.bind(this)}),r.a.createElement("label",null,"Winter")))),r.a.createElement(H.a,{placeholder:"Select Courses",fluid:!0,multiple:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:e,value:this.state.courses,onChange:this.handleCourseChange})))}}]),a}(n.Component),M=a(227),I=a(440),W=a(442),R=a(67),B=a(436),G=a(437),J=a(438),z=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t={emailto:"itissandeep98@gmail.com",message:this.message.value,subject:"TimeTableManager: Message from "+this.name.value};f.a.get("https://jsonserver-f.herokuapp.com/sendmail",{params:t}),this.name.value="",this.message.value=""}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement(B.a,{onSubmit:this.onSubmit.bind(this)},r.a.createElement(G.a,null,r.a.createElement(J.a,{type:"text",name:"name",placeholder:"Name",innerRef:function(t){return e.name=t}})),r.a.createElement(G.a,null,r.a.createElement(J.a,{type:"textarea",name:"message",placeholder:"Feedback",innerRef:function(t){return e.message=t}})),r.a.createElement(W.a,{circular:!0,floated:!0,positive:!0}," ",r.a.createElement("span",{className:"fa fa-paper-plane"})," Send")))}}]),a}(n.Component),$=function(){var e=Object(n.useState)(!1),t=Object(M.a)(e,2),a=t[0],s=t[1];return r.a.createElement("div",{className:"text-center"},r.a.createElement(g.a,null,r.a.createElement(y.a,{navbar:!0}),r.a.createElement(y.a,{navbar:!0},r.a.createElement(S.a,null,r.a.createElement(I.a,{content:r.a.createElement(z,null),on:"click",onClose:function(){return s(!1)},onOpen:function(){return s(!0)},open:a,trigger:r.a.createElement(W.a,{circular:!0,icon:!0,color:"black"},r.a.createElement(R.a,{name:"chat",size:"large"})),position:"top right"})))))},q=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/home",component:function(){return r.a.createElement(U,{courses:e.props.courses.courses,schedule:e.props.schedule,isLoading:e.props.courses.isLoading,errmess:e.props.courses.errmess})}}),r.a.createElement(h.a,{to:"/home"})),r.a.createElement($,null))}}]),a}(n.Component),K=Object(h.g)(Object(m.b)((function(e){return{courses:e.courses,schedule:e.schedule.schedule}}),(function(e){return{fetchData:function(){return e(function(){var e=Object(E.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DATA_FETCH_LOADING"}),e.next=3,f.a.get("https://jsonserver-f.herokuapp.com/itissandeep98/TimeTableManager").then((function(e){e.data.errmess?t({type:"DATA_FETCH_FAILED",errmess:"Error in fetched data. Try reloading"}):(t({type:"COURSE_FETCH_SUCCESS",courses:e.data.courses}),t({type:"SCHEDULE_FETCH_SUCCESS",schedule:e.data.schedule}))})).catch((function(e){t({type:"DATA_FETCH_FAILED",errmess:"Error in connection with Server. Try reloading"})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(q));var P=function(){return r.a.createElement(k.a,{basename:"/TimeTableManager"},r.a.createElement("div",{className:"App"},r.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(415),a(416),a(417),a(418);var Q=a(55),V=a(225),X=a(226),Y=a.n(X),Z={isLoading:!0},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_FETCH_LOADING":return Object(N.a)({},e,{isLoading:!0});case"COURSE_FETCH_SUCCESS":var a=t.courses;return Object(N.a)({},e,{courses:a,errmess:null,isLoading:!1});case"DATA_FETCH_FAILED":return Object(N.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},te={},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCHEDULE_FETCH_SUCCESS":var a=t.schedule;return Object(N.a)({},e,{schedule:a,errmess:null});default:return e}},ne=Object(Q.c)({courses:ee,schedule:ae}),re=Object(Q.d)(ne,Object(Q.a)(V.a,Y.a));c.a.render(r.a.createElement(m.a,{store:re},r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[240,1,2]]]);
//# sourceMappingURL=main.d20b4186.chunk.js.map