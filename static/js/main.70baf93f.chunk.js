(this.webpackJsonptimetablemanager=this.webpackJsonptimetablemanager||[]).push([[0],{270:function(e,t,a){e.exports=a(480)},412:function(e,t,a){},480:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),o=a.n(l),c=(a(90),a(22)),s=a(27),i=a(28),u=a(29),d=a(30),m=a(50),h=a(160),p=a.n(h),f=a(238),v=a(116),E=a.n(v),b=a(35),g=a(20),y=a(500);function k(e){var t=e.day.map((function(e){return r.a.createElement("td",{style:e.length>1?{background:"#eb4034"}:null,className:e.length>0?"border":null,key:1e4*Math.random().toPrecision(4)},r.a.createElement(y.a,{items:e}))}));return r.a.createElement("tr",null,t)}var C=a(486),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data[0],t=this.props.data.slice(1);if(t){var a=t.map((function(e){return r.a.createElement(k,{day:e,key:1e4*Math.random().toPrecision(4)})})),n=e.map((function(e){return r.a.createElement("th",{key:e},e)}));return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(C.a,{striped:!0,hover:!0,responsive:!0,className:"border"},r.a.createElement("thead",null,r.a.createElement("tr",null,n)),r.a.createElement("tbody",null,a),r.a.createElement("thead",null,r.a.createElement("tr",null,n))))}return r.a.createElement("h2",null," Something Wrong happend",r.a.createElement("span",{className:"fa fa-filter"}))}}]),a}(n.Component),S=a(503),j=a(501),w=a(487),x=a(488),T=[[[],["9:00-10:30"],["10:30-12"],["12:00-1:30"],["1:30-2:30"],["2:30-4:00"],["4:00-5:30"]],[["Mon"],[],[],[],[],[],[]],[["Tue"],[],[],[],[],[],[]],[["Wed"],[],[],[],[],[],[]],[["Thu"],[],[],[],[],[],[]],[["Fri"],[],[],[],[],[],[]]],N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={courses:[],schedule:JSON.parse(JSON.stringify(T))},n.handleCourseChange=n.handleCourseChange.bind(Object(g.a)(n)),n.updateSchedule=n.updateSchedule.bind(Object(g.a)(n)),n.findpos=n.findpos.bind(Object(g.a)(n)),n.tableData=r.a.createRef(),n}return Object(i.a)(a,[{key:"findpos",value:function(e){for(var t=this.props.schedule.monsoon,a=[],n=1;n<=5;n++)for(var r=1;r<=6;r++)t[n.toString()][r.toString()].includes(e)&&a.push([n,r]);return a}},{key:"updateSchedule",value:function(){for(var e=JSON.parse(JSON.stringify(T)),t=0;t<this.state.courses.length;t++)for(var a=this.findpos(this.state.courses[t]),n=0;n<a.length;n++){var r=a[n][0],l=a[n][1];e[r][l].push(this.state.courses[t])}this.setState({schedule:e})}},{key:"handleCourseChange",value:function(e,t){var a=this,n=(t||e.target).value;this.setState(Object(b.a)({},this.state.courses,{courses:n}),(function(){return a.updateSchedule()}))}},{key:"render",value:function(){var e=null;return e=this.props.isLoading?[{key:"loading",value:"loading",text:r.a.createElement(w.a,null),disabled:!0}]:this.props.errmess?[{key:"error",value:this.props.errmess,text:this.props.errmess,onClick:function(){return window.location.reload()}}]:this.props.courses.monsoon,r.a.createElement("div",{className:"container"},r.a.createElement(x.a,{onClick:function(e){return window.print()},className:"d-print-none printbutton"},r.a.createElement("span",{className:"fa fa-file"})," Print To pdf"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement(O,{data:this.state.schedule,ref:this.tableData})),r.a.createElement(S.a,{className:"d-print-none"},r.a.createElement(j.a,{placeholder:"Select Courses",fluid:!0,multiple:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:e,value:this.state.courses,onChange:this.handleCourseChange})))}}]),a}(n.Component),A=a(489),D=(a(412),function(){return r.a.createElement("div",{className:"container d-print-none"},r.a.createElement("br",null),r.a.createElement("h2",null,"Important Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://drive.google.com/drive/folders/1YqptkWKt6iKvoImkJYRlB_2yRH69K_D2",target:"_blank",rel:"noopener noreferrer"},"Course Descriptions")),r.a.createElement("li",null,"Current Time Table ",r.a.createElement("a",{href:"https://iiitd.ac.in/academics/m2020",target:"_blank",rel:"noopener noreferrer"},"(Monsoon 2020)"))),r.a.createElement(A.a,{horizontal:!0},"updated on 19 Aug 2020"))}),F=a(58),_=a(490),L=a(491),M=a(492),I=a(259),H=a(59),R=a(499),U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={message:"",showA:!1,type:""},n.showAlert=n.showAlert.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.toggleAlert=n.toggleAlert.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"handleKeyDown",value:function(e){e.target.style.height="inherit",e.target.style.height="".concat(Math.min(e.target.scrollHeight+30,800),"px")}},{key:"showAlert",value:function(e,t){this.setState({showA:!0,message:t,type:e})}},{key:"toggleAlert",value:function(){this.setState({showA:!this.state.showA})}},{key:"onSubmit",value:function(e){var t=this,a={emailto:"itissandeep98@gmail.com",message:e.message,subject:"TimeTableManager: Message from "+e.name};E.a.get("https://jsonserver-f.herokuapp.com/sendmail",{params:a}).then((function(e){t.showAlert("info","Feedback Sent ;)")})),this.props.resetFeedbackform()}},{key:"render",value:function(){var e=this;return r.a.createElement(I.a,{id:"chatbutton",circular:!0,icon:!0,color:"black",className:"d-print-none"},r.a.createElement(H.a,{name:"chat",size:"large"}),r.a.createElement(R.a,{trigger:"legacy",placement:"top",target:"chatbutton"},r.a.createElement(_.a,{className:"text-center"},r.a.createElement(L.a,{color:this.state.type,isOpen:this.state.showA,toggle:this.toggleAlert},this.state.message),r.a.createElement(F.Form,{model:"feedback",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(M.a,null,r.a.createElement(F.Control.text,{model:".name",className:"form-control feed-input",name:"name",placeholder:"Name"})),r.a.createElement(M.a,null,r.a.createElement(F.Control.textarea,{model:".message",className:"form-control feed-input",name:"message",placeholder:"Feedback",rows:5,onKeyDown:this.handleKeyDown})),r.a.createElement(I.a,{circular:!0,positive:!0}," ",r.a.createElement("span",{className:"fa fa-paper-plane"})," Send")))))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{courses:this.props.courses.courses,schedule:this.props.schedule.schedule,isLoading:this.props.courses.isLoading,errmess:this.props.courses.errmess}),r.a.createElement(D,null),r.a.createElement(U,{resetFeedbackform:this.props.resetFeedbackform}),r.a.createElement("div",{className:"text-center d-none d-md-block d-print-none"},r.a.createElement("embed",{src:"/TimeTableManager/assets/timetable.pdf",type:"application/pdf",width:"70%",height:"800px"})))}}]),a}(n.Component),K=Object(m.connect)((function(e){return{courses:e.courses,schedule:e.schedule}}),(function(e){return{fetchData:function(){return e(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DATA_FETCH_LOADING"}),e.next=3,E.a.get("https://jsonserver-f.herokuapp.com/itissandeep98/TimeTableManager").then((function(e){e.data.errmess?t({type:"DATA_FETCH_FAILED",errmess:"Error in fetched data. Try reloading"}):(t({type:"COURSE_FETCH_SUCCESS",courses:e.data.courses}),t({type:"SCHEDULE_FETCH_SUCCESS",schedule:e.data.schedule}))})).catch((function(e){t({type:"DATA_FETCH_FAILED",errmess:"Error in connection with Server. Try reloading"})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},resetFeedbackform:function(){e(F.actions.reset("feedback"))}}}))(W),J=a(493),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).textInput=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.handleKeyDown()})),this.handleKeyDown()}},{key:"handleKeyDown",value:function(){this.textInput.style.height="inherit",this.textInput.style.height="".concat(window.innerHeight-90,"px"),this.textInput.style.width="".concat(this.textInput.parentElement.clientWidth-20,"px")}},{key:"downloadFile",value:function(e,t){e.preventDefault();var a=document.createElement("a"),n=new Blob([t],{type:"text/plain"});a.href=URL.createObjectURL(n),a.download="db.json",document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}},{key:"copyText",value:function(e){e.preventDefault();var t=this.textInput;t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")}},{key:"render",value:function(){var e=this,t=JSON.stringify(this.props.doc,null,4);return r.a.createElement(J.a,null,r.a.createElement(I.a,{onClick:function(a){return e.downloadFile(a,t)}},"Download"),r.a.createElement(I.a,{onClick:function(t){return e.copyText(t)}},"Copy"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.a,null,r.a.createElement("textarea",{ref:this.textInput,value:t,readOnly:!0})))}}]),a}(n.Component),B=a(494),z=a(495),G=a(496),Y=a(497),q=[{key:1,value:"Mon",text:"Mon"},{key:2,value:"Tue",text:"Tue"},{key:3,value:"Wed",text:"Wed"},{key:4,value:"Thur",text:"Thur"},{key:5,value:"Fri",text:"Fri"}],$=[{key:1,value:"9:00",text:"9:00"},{key:2,value:"9:30",text:"9:30"},{key:3,value:"10:00",text:"10:00"},{key:4,value:"10:30",text:"10:30"},{key:5,value:"11:00",text:"11:00"},{key:6,value:"11:30",text:"11:30"},{key:7,value:"12:00",text:"12:00"},{key:8,value:"12:30",text:"12:30"},{key:9,value:"1:00",text:"1:00"},{key:10,value:"1:30",text:"1:30"},{key:11,value:"2:00",text:"2:00"},{key:12,value:"2:30",text:"2:30"},{key:13,value:"3:00",text:"3:00"},{key:14,value:"3:30",text:"3:30"},{key:15,value:"4:00",text:"4:00"},{key:16,value:"4:30",text:"4:30"},{key:17,value:"5:00",text:"5:00"},{key:18,value:"5:30",text:"5:30"}],Q=a(117),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={day:"",stime:"",etime:""},n.onSlotChange=n.onSlotChange.bind(Object(g.a)(n)),n.addslot=n.addslot.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"onSlotChange",value:function(e,t){var a=(t||e.target).value;this.setState(Object(Q.a)({},t.name,a))}},{key:"addslot",value:function(e){e.preventDefault();var t=1,a=this.props.slots;a.length>0&&(t=a[a.length-1].key+1);var n={key:t,day:this.state.day,stime:this.state.stime,etime:this.state.etime};this.props.addslot(n),this.setState({day:"",stime:"",etime:""})}},{key:"render",value:function(){return r.a.createElement(M.a,null,r.a.createElement(B.a,null,r.a.createElement(z.a,null,r.a.createElement(j.a,{placeholder:"Select Day",fluid:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:q,value:this.state.day,onChange:this.onSlotChange,name:"day"})),r.a.createElement(z.a,null,r.a.createElement(j.a,{placeholder:"Start Time",fluid:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:$,value:this.state.stime,onChange:this.onSlotChange,name:"stime",disabled:""===this.state.day})),r.a.createElement(z.a,null,r.a.createElement(j.a,{placeholder:"End Time",fluid:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:$,value:this.state.etime,onChange:this.onSlotChange,name:"etime",disabled:""===this.state.day||""===this.state.stime})),r.a.createElement(z.a,{sm:2},r.a.createElement(I.a,{icon:!0,floated:"right",color:"green",onClick:this.addslot,disabled:""===this.state.day||""===this.state.stime||""===this.state.etime},r.a.createElement("span",{className:"fa fa-check"})," "))))}}]),a}(n.Component),X=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=n.onChange.bind(Object(g.a)(n)),n.addslot=n.addslot.bind(Object(g.a)(n)),n.deleteSlot=n.deleteSlot.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"onChange",value:function(e){this.props.onCoursechange(e.target.name,e.target.value)}},{key:"addslot",value:function(e){var t=this.props.course.slots.concat(e);this.props.onCoursechange("slots",t)}},{key:"deleteSlot",value:function(e,t){e.preventDefault();var a=this.props.course.slots.filter((function(e){return e.key!==t}));this.props.onCoursechange("slots",a)}},{key:"render",value:function(){var e=this,t=this.props.course,a=t.slots.map((function(t){return r.a.createElement(M.a,{key:t.key},r.a.createElement(B.a,null,r.a.createElement(z.a,null,r.a.createElement(j.a,{placeholder:"Select Day",fluid:!0,options:q,value:t.day,disabled:!0})),r.a.createElement(z.a,null,r.a.createElement(j.a,{placeholder:"Start Time",fluid:!0,options:$,value:t.stime,disabled:!0})),r.a.createElement(z.a,null,r.a.createElement(j.a,{placeholder:"End Time",fluid:!0,options:$,value:t.etime,disabled:!0})),r.a.createElement(z.a,{sm:2},r.a.createElement(I.a,{icon:!0,floated:"right",color:"red",onClick:function(a){return e.deleteSlot(a,t.key)}},r.a.createElement("span",{className:"fa fa-times-circle"})," "))))}));return r.a.createElement("div",{className:"container text-center"},r.a.createElement(J.a,null,r.a.createElement(M.a,null,r.a.createElement(G.a,null,"Course Name"),r.a.createElement(Y.a,{value:t.text,name:"text",onChange:this.onChange})),r.a.createElement(B.a,null,r.a.createElement(z.a,null,r.a.createElement(M.a,null,r.a.createElement(G.a,null,"Course Code"),r.a.createElement(Y.a,{value:t.code,name:"code",onChange:this.onChange}))),r.a.createElement(z.a,null,r.a.createElement(M.a,null,r.a.createElement(G.a,null,"Acronym"),r.a.createElement(Y.a,{value:t.value,name:"value",onChange:this.onChange})))),r.a.createElement("h3",null,"Slots"),r.a.createElement(V,{addslot:this.addslot,slots:t.slots}),a,r.a.createElement(I.a,{primary:!0,onClick:this.props.addCourse}," Add")))}}]),a}(n.Component),Z=a(258),ee=a(502),te=a(253);function ae(e){var t=e.doc,a=e.deleteCourse,l=e.editCourse,o=Object(n.useState)(-1),c=Object(Z.a)(o,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center"},"All Courses"),t.map((function(e){return r.a.createElement(ee.a,{key:e.key,fluid:!0,styled:!0},r.a.createElement(ee.a.Title,{active:s===e.key,onClick:function(){return t=e.key,void i(s===t?-1:t);var t}},r.a.createElement(H.a,{name:"dropdown"}),e.text,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(te.a,null,r.a.createElement(I.a,{icon:!0,color:"olive",onClick:function(t){return l(t,e.key)}},r.a.createElement(H.a,{name:"edit"})),r.a.createElement(I.a.Or,null),r.a.createElement(I.a,{icon:!0,color:"google plus",onClick:function(t){return a(t,e.key)}},r.a.createElement(H.a,{name:"delete"})))),r.a.createElement(ee.a.Content,{active:s===e.key},r.a.createElement("strong",null,"Acronym: ")," ",r.a.createElement("p",null,e.value),r.a.createElement("strong",null,"Course Code: ")," ",r.a.createElement("p",null,e.code),r.a.createElement("strong",null,"Slots: ")," ",r.a.createElement("ul",null,e.slots.map((function(e){return r.a.createElement("li",null,e.day," ",e.stime,"-",e.etime)})))))})))}var ne=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={doc:[],course:{key:"",text:"",value:"",code:"",slots:[]}},n.addCourse=n.addCourse.bind(Object(g.a)(n)),n.deleteCourse=n.deleteCourse.bind(Object(g.a)(n)),n.editCourse=n.editCourse.bind(Object(g.a)(n)),n.onCoursechange=n.onCoursechange.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Admin"}},{key:"onCoursechange",value:function(e,t){var a=Object(b.a)({},this.state.course);a[e]=t,this.setState({course:a})}},{key:"addCourse",value:function(e){e.preventDefault();var t=1,a=this.state.doc;a.length>0&&(t=a[a.length-1].key+1);var n=this.state.course;n.key=t;var r=this.state.doc.concat(n);this.setState({doc:r,course:{key:"",text:"",value:"",code:"",slots:[]}})}},{key:"deleteCourse",value:function(e,t){e.preventDefault();var a=this.state.doc.filter((function(e){return e.key!==t}));this.setState({doc:a})}},{key:"editCourse",value:function(e,t){e.preventDefault();var a=this.state.doc.filter((function(e){return e.key===t}))[0];this.deleteCourse(e,t),this.setState({course:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"constructor-fluid"},r.a.createElement("div",{className:"row d-none d-md-flex"},r.a.createElement("div",{className:"col-6"},r.a.createElement(X,{addCourse:this.addCourse,course:this.state.course,onCoursechange:this.onCoursechange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ae,{doc:this.state.doc,deleteCourse:this.deleteCourse,editCourse:this.editCourse})),r.a.createElement("div",{className:"col-6"},r.a.createElement(P,{doc:this.state.doc}))),r.a.createElement("div",{className:"container text-center d-md-none"},r.a.createElement("h1",null,"This Page is not available for Small Screens")))}}]),a}(n.Component),re=a(87),le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:"/TimeTableManager/assets/images/IIIT-Delhi.png",alt:"IIIT-Delhi",className:"img-fluid"})),r.a.createElement("div",{className:"col d-none d-lg-block"},r.a.createElement("img",{src:"/TimeTableManager/assets/images/logo.png",alt:"logo",height:"80px",className:"float-right"})))),r.a.createElement("div",{className:"navbar-dark  d-print-none"},r.a.createElement("div",{className:"container"},r.a.createElement(re.b,{to:"/",className:"active"},"HOME"),r.a.createElement("a",{href:"http://techtree.iiitd.edu.in/",target:"_blank",rel:"noopener noreferrer"},"TECHTREE"))),r.a.createElement("br",null))};var oe=Object(c.g)((function(){return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:function(){return r.a.createElement(K,null)}}),r.a.createElement(c.b,{exact:!0,path:"/admin",component:function(){return r.a.createElement(ne,null)}}),r.a.createElement(c.a,{to:"/"})))}));var ce=function(){return r.a.createElement(re.a,{basename:"/TimeTableManager"},r.a.createElement("div",{className:"App"},r.a.createElement(oe,null)))},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(475),a(476),a(477),a(478);var ue=a(40),de=a(256),me=(a(479),{isLoading:!0}),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_FETCH_LOADING":return Object(b.a)({},e,{isLoading:!0});case"COURSE_FETCH_SUCCESS":var a=t.courses;return Object(b.a)({},e,{courses:a,errmess:null,isLoading:!1});case"DATA_FETCH_FAILED":return Object(b.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},pe={},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCHEDULE_FETCH_SUCCESS":var a=t.schedule;return Object(b.a)({},e,{schedule:a,errmess:null});default:return e}},ve=Object(ue.combineReducers)(Object(b.a)({courses:he,schedule:fe},Object(F.createForms)({feedback:{name:"",message:""}}))),Ee=Object(ue.createStore)(ve,Object(ue.applyMiddleware)(de.a));o.a.render(r.a.createElement(m.Provider,{store:Ee},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TimeTableManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TimeTableManager","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(t,e)}))}}()},90:function(e,t,a){}},[[270,1,2]]]);
//# sourceMappingURL=main.70baf93f.chunk.js.map