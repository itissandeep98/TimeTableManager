(this.webpackJsonptimetablemanager=this.webpackJsonptimetablemanager||[]).push([[0],{123:function(e,t,a){},279:function(e,t,a){e.exports=a(493)},284:function(e,t,a){},493:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),o=a.n(s),c=(a(284),a(51)),l=a(52),i=a(54),u=a(55),m=a(41),h=a(161),d=a.n(h),p=a(247),f=a(112),E=a.n(f),b=(a(123),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar-dark text-center d-print-none"},r.a.createElement("h1",null,"Time Table Creator")),r.a.createElement("hr",null))}),v=a(35),g=a(36),O=a(507);function C(e){var t=e.day.map((function(e){return r.a.createElement("td",{style:e.length>1?{background:"#eb4034"}:null,className:e.length>0?"border":null},r.a.createElement(O.a,{items:e}))}));return r.a.createElement("tr",null,t)}var k=a(501),S=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.data.slice(1),t=this.props.data[0];if(e){var a=e.map((function(e){return r.a.createElement(C,{day:e})})),n=t.map((function(e){return r.a.createElement("th",null,e)}));return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(k.a,{striped:!0,hover:!0,responsive:!0,className:"border"},r.a.createElement("thead",null,n),r.a.createElement("tbody",null,a),r.a.createElement("thead",null,n)))}return r.a.createElement("h2",null," Something Wrong happend",r.a.createElement("span",{className:"fa fa-filter"}))}}]),a}(n.Component),j=a(511),y=a(505),w=a(503),A=a(508),F=a(502),N=a(512),T=[[[],["9:00-10:30"],["10:30-12"],["12:00-1:30"],["1:30-2:30"],["2:30-4:00"],["4:00-5:30"]],[["Mon"],[],[],[],[],[],[]],[["Tue"],[],[],[],[],[],[]],[["Wed"],[],[],[],[],[],[]],[["Thu"],[],[],[],[],[],[]],[["Fri"],[],[],[],[],[],[]]],_=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={courses:[],schedule:JSON.parse(JSON.stringify(T)),season:!1},n.handleCourseChange=n.handleCourseChange.bind(Object(g.a)(n)),n.updateSchedule=n.updateSchedule.bind(Object(g.a)(n)),n.findpos=n.findpos.bind(Object(g.a)(n)),n}return Object(l.a)(a,[{key:"findpos",value:function(e){var t=this.props.schedule.monsoon;this.state.season&&(t=this.props.schedule.winter);for(var a=[],n=1;n<=5;n++)for(var r=1;r<=6;r++)t[n.toString()][r.toString()].includes(e)&&a.push([n,r]);return a}},{key:"updateSchedule",value:function(){for(var e=JSON.parse(JSON.stringify(T)),t=0;t<this.state.courses.length;t++)for(var a=this.findpos(this.state.courses[t]),n=0;n<a.length;n++){var r=a[n][0],s=a[n][1];e[r][s].push(this.state.courses[t])}this.setState({schedule:e})}},{key:"handleCourseChange",value:function(e,t){var a=this,n=(t||e.target).value;this.setState(Object(v.a)({},this.state.courses,{courses:n}),(function(){return a.updateSchedule()}))}},{key:"onChange",value:function(){this.setState({season:!this.state.season,courses:[]})}},{key:"render",value:function(){var e=null;return this.props.isLoading?e=[{key:"loading",value:r.a.createElement(F.a,null),text:r.a.createElement(F.a,null),disabled:!0}]:this.props.errmess?e=[{key:"error",value:this.props.errmess,text:this.props.errmess,disabled:!0}]:(e=this.props.courses.monsoon,this.state.season&&(e=this.props.courses.winter)),r.a.createElement("div",{className:"container"},r.a.createElement(N.a,{onClick:function(){return window.print()},className:"d-print-none printbutton"},r.a.createElement("span",{className:"fa fa-file"})," Print To pdf"),r.a.createElement("div",{className:"row"},r.a.createElement(S,{data:this.state.schedule})),r.a.createElement("hr",null),r.a.createElement(j.a,{className:"d-print-none"},r.a.createElement("div",{className:"text-center"},r.a.createElement(y.a,null,r.a.createElement(y.a.Field,{inline:!0},r.a.createElement("label",null,"Monsoon"),r.a.createElement(w.a,{slider:!0,disabled:!0,checked:this.state.season,onChange:this.onChange.bind(this)}),r.a.createElement("label",null,"Winter")))),r.a.createElement(A.a,{placeholder:"Select Courses",fluid:!0,multiple:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:e,value:this.state.courses,onChange:this.handleCourseChange})))}}]),a}(n.Component),D=a(265),L=a(506),H=a(509),x=a(58),M=a(510),U=a(504),I=a(57),J=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={message:"",showA:!1,type:""},n.showAlert=n.showAlert.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.toggleAlert=n.toggleAlert.bind(Object(g.a)(n)),n}return Object(l.a)(a,[{key:"showAlert",value:function(e,t){this.setState({showA:!0,message:t,type:e})}},{key:"toggleAlert",value:function(){this.setState({showA:!this.state.showA})}},{key:"onSubmit",value:function(e){var t=this,a={emailto:"itissandeep98@gmail.com",message:e.message,subject:"TimeTableManager: Message from "+e.name};E.a.get("https://jsonserver-f.herokuapp.com/sendmail",{params:a}).then((function(e){t.showAlert("info","Feedback Sent ;)")})),this.props.resetFeedbackform()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement(M.a,{color:this.state.type,isOpen:this.state.showA,toggle:this.toggleAlert},this.state.message),r.a.createElement(I.Form,{model:"feedback",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(U.a,null,r.a.createElement(I.Control.text,{model:".name",className:"form-control",name:"name",placeholder:"Name"})),r.a.createElement(U.a,null,r.a.createElement(I.Control.textarea,{model:".message",className:"form-control",name:"message",placeholder:"Feedback",rows:5})),r.a.createElement(H.a,{circular:!0,floated:!0,positive:!0}," ",r.a.createElement("span",{className:"fa fa-paper-plane"})," Send")))}}]),a}(n.Component),R=function(e){var t=Object(n.useState)(!1),a=Object(D.a)(t,2),s=a[0],o=a[1];return r.a.createElement("div",{className:"float-right d-print-none"},r.a.createElement(L.a,{content:r.a.createElement(J,{resetFeedbackform:e.resetFeedbackform}),on:"click",onClose:function(){return o(!1)},onOpen:function(){return o(!0)},open:s,trigger:r.a.createElement(H.a,{circular:!0,icon:!0,color:"black"},r.a.createElement(x.a,{name:"chat",size:"large"})),position:"top right"}))},W=function(){return r.a.createElement("div",{className:"container d-print-none"},r.a.createElement("br",null),r.a.createElement("h2",null,"Important Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://drive.google.com/drive/folders/1YqptkWKt6iKvoImkJYRlB_2yRH69K_D2",target:"_blank",rel:"noopener noreferrer"},"Course Descriptions")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://docs.google.com/document/d/1v8EJcxPvXgtNYNFtnUjrvdiP3F5UZMM3vqw7HcDsN7A",target:"_blank",rel:"noopener noreferrer"},"Review of electives")),r.a.createElement("li",null,"Current Time Table ",r.a.createElement("a",{href:"https://iiitd.ac.in/academics/m2020",target:"_blank",rel:"noopener noreferrer"},"(Monsoon 2020)"))))},P=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(_,{courses:this.props.courses.courses,schedule:this.props.schedule,isLoading:this.props.courses.isLoading,errmess:this.props.courses.errmess}),r.a.createElement(W,null),r.a.createElement(R,{resetFeedbackform:this.props.resetFeedbackform}))}}]),a}(n.Component),B=Object(m.connect)((function(e){return{courses:e.courses,schedule:e.schedule.schedule}}),(function(e){return{fetchData:function(){return e(function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DATA_FETCH_LOADING"}),e.next=3,E.a.get("https://jsonserver-f.herokuapp.com/itissandeep98/TimeTableManager").then((function(e){e.data.errmess?t({type:"DATA_FETCH_FAILED",errmess:"Error in fetched data. Try reloading"}):(t({type:"COURSE_FETCH_SUCCESS",courses:e.data.courses}),t({type:"SCHEDULE_FETCH_SUCCESS",schedule:e.data.schedule}))})).catch((function(e){t({type:"DATA_FETCH_FAILED",errmess:"Error in connection with Server. Try reloading"})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},resetFeedbackform:function(){e(I.actions.reset("feedback"))}}}))(P);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(488),a(489),a(490),a(491);var Y=a(33),q=a(264),G=(a(492),{isLoading:!0}),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_FETCH_LOADING":return Object(v.a)({},e,{isLoading:!0});case"COURSE_FETCH_SUCCESS":var a=t.courses;return Object(v.a)({},e,{courses:a,errmess:null,isLoading:!1});case"DATA_FETCH_FAILED":return Object(v.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},X={},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCHEDULE_FETCH_SUCCESS":var a=t.schedule;return Object(v.a)({},e,{schedule:a,errmess:null});default:return e}},$=Object(Y.combineReducers)(Object(v.a)({courses:z,schedule:Z},Object(I.createForms)({feedback:{name:"",message:""}}))),Q=Object(Y.createStore)($,Object(Y.applyMiddleware)(q.a));o.a.render(r.a.createElement(m.Provider,{store:Q},r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[279,1,2]]]);
//# sourceMappingURL=main.b32c232e.chunk.js.map