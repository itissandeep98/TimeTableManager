(this.webpackJsonptimetablemanager=this.webpackJsonptimetablemanager||[]).push([[0],{279:function(e,t,a){e.exports=a(490)},291:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyDi8aKVrP7uo1wN5MH0UFLqau0uuKdCkao","authDomain":"timetable-c8e24.firebaseapp.com","databaseURL":"https://timetable-c8e24.firebaseio.com","projectId":"timetable-c8e24","storageBucket":"timetable-c8e24.appspot.com","messagingSenderId":"276119617717","appId":"1:276119617717:web:c0f0edf103342f6b767efc","measurementId":"G-2BRVMTLV32"}')},490:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),o=a.n(l),c=(a(96),a(23)),s=a(39),i=a.n(s),u=a(32),d=a(70),m=a(26),h=a(27),p=a(21),f=a(28),E=a(29),v=a(41),b=a(247),g=a.n(b);a(491),a(289),a(492);var y=a(291),C=g.a.initializeApp(y),k=C.analytics(),O=C,j=a(124),S=a.n(j),x=function(){return function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"EXTRA_LINKS_FETCH_LOADING"}),e.abrupt("return",O.database().ref("/extra").on("value",(function(e){t({type:"EXTRA_LINKS_FETCH_SUCCESS",links:e.val()})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=a(512);function N(e){var t=e.day.map((function(e){return r.a.createElement("td",{style:e.length>1?{background:"#eb4034"}:null,className:e.length>0?"border":null,key:Math.random()},r.a.createElement(w.a,{items:e}))}));return r.a.createElement("tr",null,t)}var T=a(498),L=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.data[0],t=this.props.data.slice(1);if(t){var a=t.map((function(e){return r.a.createElement(N,{day:e,key:Math.random()})})),n=e.map((function(e){return r.a.createElement("th",{key:e},e)}));return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(T.a,{striped:!0,hover:!0,responsive:!0,className:"border"},r.a.createElement("thead",null,r.a.createElement("tr",null,n)),r.a.createElement("tbody",null,a),r.a.createElement("thead",null,r.a.createElement("tr",null,n))))}return r.a.createElement("h2",null," Something Wrong happend",r.a.createElement("span",{className:"fa fa-filter"}))}}]),a}(n.Component),_=a(515),F=a(513),I=a(499),A=a(500),D=[[[],["9:00-10:30"],["10:30-12"],["12:00-1:30"],["1:30-2:30"],["2:30-4:00"],["4:00-5:30"]],[["Mon"],[],[],[],[],[],[]],[["Tue"],[],[],[],[],[],[]],[["Wed"],[],[],[],[],[],[]],[["Thu"],[],[],[],[],[],[]],[["Fri"],[],[],[],[],[],[]]],H=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={schedule:JSON.parse(JSON.stringify(D))},n.handleCourseChange=n.handleCourseChange.bind(Object(p.a)(n)),n.updateSchedule=n.updateSchedule.bind(Object(p.a)(n)),n.findpos=n.findpos.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"findpos",value:function(e){for(var t=this.props.schedule.monsoon,a=[],n=1;n<=5;n++)for(var r=1;r<=6;r++)t[n.toString()][r.toString()].includes(e)&&a.push([n,r]);return a}},{key:"updateSchedule",value:function(){for(var e=JSON.parse(JSON.stringify(D)),t=0;t<this.props.selectedCourses.length;t++)for(var a=this.findpos(this.props.selectedCourses[t]),n=0;n<a.length;n++){var r=a[n][0],l=a[n][1];e[r][l].push(this.props.selectedCourses[t])}this.setState({schedule:e})}},{key:"handleCourseChange",value:function(e,t){var a=this,n=(t||e.target).value;this.props.addCourse(n).then((function(e){return a.updateSchedule()}))}},{key:"print",value:function(){for(var e=0;e<this.props.selectedCourses.length;e++)k.logEvent(this.props.selectedCourses[e]);window.print()}},{key:"render",value:function(){var e=this,t=null;return t=this.props.isLoading?[{key:"loading",value:"loading",text:r.a.createElement(I.a,null),disabled:!0}]:this.props.errmess?[{key:"error",value:this.props.errmess,text:this.props.errmess,onClick:function(){return window.location.reload()}}]:Object.keys(this.props.info).map((function(t){return{key:e.props.info[t].id,text:e.props.info[t].title+" - "+e.props.info[t].code+" - "+t,value:t}})),r.a.createElement("div",{className:"container"},r.a.createElement(A.a,{onClick:function(t){return e.print()},className:"d-print-none printbutton"},r.a.createElement("span",{className:"fa fa-file"})," Print To pdf"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement(L,{data:this.state.schedule})),r.a.createElement(_.a,{className:"d-print-none"},r.a.createElement(F.a,{placeholder:"Select Courses",fluid:!0,multiple:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:t,value:this.props.selectedCourses,onChange:this.handleCourseChange})))}}]),a}(n.Component);function M(e){return r.a.createElement("div",{className:"container d-print-none implinks"},r.a.createElement("br",null),r.a.createElement("h2",null,"Important Links"),e.offl_page&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:e.course_desc,target:"_blank",rel:"noopener noreferrer"},"Course Descriptions")),r.a.createElement("li",null,"Current Time Table ",r.a.createElement("a",{href:e.offl_page.link,target:"_blank",rel:"noopener noreferrer"},"(",e.offl_page.sem,")"))))}var U=a(62),R=a(501),K=a(502),W=a(503),J=a(268),G=a(63),B=a(511),P=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={message:"",showA:!1,type:""},n.showAlert=n.showAlert.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.toggleAlert=n.toggleAlert.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleKeyDown",value:function(e){e.target.style.height="inherit",e.target.style.height="".concat(Math.min(e.target.scrollHeight+30,800),"px")}},{key:"showAlert",value:function(e,t){this.setState({showA:!0,message:t,type:e})}},{key:"toggleAlert",value:function(){this.setState({showA:!this.state.showA})}},{key:"onSubmit",value:function(e){var t=this,a={emailto:"itissandeep98@gmail.com",message:e.message,subject:"TimeTableManager: Message from "+e.name};S.a.get("https://jsonserver-f.herokuapp.com/sendmail",{params:a}).then((function(e){t.showAlert("info","Feedback Sent ;)")})),this.props.resetFeedbackform(),k.logEvent("feedback_sent")}},{key:"render",value:function(){var e=this;return r.a.createElement(J.a,{id:"chatbutton",circular:!0,icon:!0,color:"black",className:"d-print-none"},r.a.createElement(G.a,{name:"chat",size:"large"}),r.a.createElement(B.a,{trigger:"legacy",placement:"top",target:"chatbutton"},r.a.createElement(R.a,{className:"text-center"},r.a.createElement(K.a,{color:this.state.type,isOpen:this.state.showA,toggle:this.toggleAlert},this.state.message),r.a.createElement(U.Form,{model:"feedback",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(W.a,null,r.a.createElement(U.Control.text,{model:".name",className:"form-control feed-input",name:"name",placeholder:"Name"})),r.a.createElement(W.a,null,r.a.createElement(U.Control.textarea,{model:".message",className:"form-control feed-input",name:"message",placeholder:"Feedback",rows:5,onKeyDown:this.handleKeyDown})),r.a.createElement(J.a,{circular:!0,positive:!0}," ",r.a.createElement("span",{className:"fa fa-paper-plane"})," Send")))))}}]),a}(n.Component),z=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.info;return 0===this.props.selectedCourses.length?r.a.createElement("div",null):r.a.createElement("div",{className:"container text-center"},r.a.createElement(T.a,{responsive:!0,className:"border"},r.a.createElement("thead",{style:{backgroundColor:"#a09e9e3b"}},r.a.createElement("tr",null,r.a.createElement("td",null,"Course Code"),r.a.createElement("td",null,"Instructor"),r.a.createElement("td",null,"Class Link"),r.a.createElement("td",null,"Comments"))),r.a.createElement("tbody",null,this.props.selectedCourses.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,e[t].inst),r.a.createElement("td",null,r.a.createElement("a",{href:e[t].link,target:"_blank",rel:"noopener noreferrer"},e[t].link)),r.a.createElement("td",null,e[t].desc))})))))}}]),a}(n.Component),X=a(504),V=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={selctedCourse:[]},n.addCourse=n.addCourse.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"addCourse",value:function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(u.a)({},this.state.selctedCourse,{selctedCourse:t}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.props.fetchInfo(),this.props.fetchSchedule(),this.props.fetchExtra(),k.logEvent("page_visited")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{selectedCourses:this.state.selctedCourse,addCourse:this.addCourse,schedule:this.props.schedule.schedule,isLoading:this.props.info.isLoading,errmess:this.props.info.errmess,info:this.props.info.info}),r.a.createElement(M,this.props.extra.links),r.a.createElement("div",{className:"container"},r.a.createElement(X.a,{horizontal:!0},"updated on 27 Aug 2020")),r.a.createElement(P,{resetFeedbackform:this.props.resetFeedbackform}),r.a.createElement(z,{selectedCourses:this.state.selctedCourse,info:this.props.info.info}))}}]),a}(n.Component),q=Object(v.connect)((function(e){return{schedule:e.schedule,info:e.info,extra:e.extra}}),(function(e){return{resetFeedbackform:function(){e(U.actions.reset("feedback"))},fetchInfo:function(){return e(function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"INFO_FETCH_LOADING"}),e.abrupt("return",O.database().ref("/info").on("value",(function(e){t({type:"INFO_FETCH_SUCCESS",info:e.val()})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},fetchSchedule:function(){return e(function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SCHEDULE_FETCH_LOADING"}),e.abrupt("return",O.database().ref("/schedule").on("value",(function(e){t({type:"SCHEDULE_FETCH_SUCCESS",schedule:e.val()})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},fetchExtra:function(){return e(x())}}}))(V),$=a(505),Q=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).textInput=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.handleKeyDown()})),this.handleKeyDown()}},{key:"handleKeyDown",value:function(){this.textInput.style.height="inherit",this.textInput.style.height="".concat(window.innerHeight-90,"px"),this.textInput.style.width="".concat(this.textInput.parentElement.clientWidth-20,"px")}},{key:"downloadFile",value:function(e,t){e.preventDefault();var a=document.createElement("a"),n=new Blob([t],{type:"text/plain"});a.href=URL.createObjectURL(n),a.download="db.json",document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}},{key:"copyText",value:function(e){e.preventDefault();var t=this.textInput;t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")}},{key:"render",value:function(){var e=this,t=JSON.stringify(this.props.doc,null,4);return r.a.createElement($.a,null,r.a.createElement(J.a,{onClick:function(a){return e.downloadFile(a,t)}},"Download"),r.a.createElement(J.a,{onClick:function(t){return e.copyText(t)}},"Copy"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(W.a,null,r.a.createElement("textarea",{ref:function(t){return e.textInput=t},value:t,readOnly:!0})))}}]),a}(n.Component),Y=a(506),Z=a(507),ee=a(508),te=a(509),ae=[{key:1,value:"Mon",text:"Mon"},{key:2,value:"Tue",text:"Tue"},{key:3,value:"Wed",text:"Wed"},{key:4,value:"Thur",text:"Thur"},{key:5,value:"Fri",text:"Fri"}],ne=[{key:1,value:"9:00",text:"9:00"},{key:2,value:"9:30",text:"9:30"},{key:3,value:"10:00",text:"10:00"},{key:4,value:"10:30",text:"10:30"},{key:5,value:"11:00",text:"11:00"},{key:6,value:"11:30",text:"11:30"},{key:7,value:"12:00",text:"12:00"},{key:8,value:"12:30",text:"12:30"},{key:9,value:"1:00",text:"1:00"},{key:10,value:"1:30",text:"1:30"},{key:11,value:"2:00",text:"2:00"},{key:12,value:"2:30",text:"2:30"},{key:13,value:"3:00",text:"3:00"},{key:14,value:"3:30",text:"3:30"},{key:15,value:"4:00",text:"4:00"},{key:16,value:"4:30",text:"4:30"},{key:17,value:"5:00",text:"5:00"},{key:18,value:"5:30",text:"5:30"}],re=a(123),le=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={day:"",stime:"",etime:""},n.onSlotChange=n.onSlotChange.bind(Object(p.a)(n)),n.addslot=n.addslot.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"onSlotChange",value:function(e,t){var a=(t||e.target).value;this.setState(Object(re.a)({},t.name,a))}},{key:"addslot",value:function(e){e.preventDefault();var t=1,a=this.props.slots;a.length>0&&(t=a[a.length-1].key+1);var n={key:t,day:this.state.day,stime:this.state.stime,etime:this.state.etime};this.props.addslot(n),this.setState({day:"",stime:"",etime:""})}},{key:"render",value:function(){return r.a.createElement(W.a,null,r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(F.a,{placeholder:"Select Day",fluid:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:ae,value:this.state.day,onChange:this.onSlotChange,name:"day"})),r.a.createElement(Z.a,null,r.a.createElement(F.a,{placeholder:"Start Time",fluid:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:ne,value:this.state.stime,onChange:this.onSlotChange,name:"stime",disabled:""===this.state.day})),r.a.createElement(Z.a,null,r.a.createElement(F.a,{placeholder:"End Time",fluid:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:ne,value:this.state.etime,onChange:this.onSlotChange,name:"etime",disabled:""===this.state.day||""===this.state.stime})),r.a.createElement(Z.a,{sm:2},r.a.createElement(J.a,{icon:!0,floated:"right",color:"green",onClick:this.addslot,disabled:""===this.state.day||""===this.state.stime||""===this.state.etime},r.a.createElement("span",{className:"fa fa-check"})," "))))}}]),a}(n.Component),oe=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChange=n.onChange.bind(Object(p.a)(n)),n.addslot=n.addslot.bind(Object(p.a)(n)),n.deleteSlot=n.deleteSlot.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"onChange",value:function(e){this.props.onCoursechange(e.target.name,e.target.value)}},{key:"addslot",value:function(e){var t=this.props.course.slots.concat(e);this.props.onCoursechange("slots",t)}},{key:"deleteSlot",value:function(e,t){e.preventDefault();var a=this.props.course.slots.filter((function(e){return e.key!==t}));this.props.onCoursechange("slots",a)}},{key:"render",value:function(){var e=this,t=this.props.course,a=t.slots.map((function(t){return r.a.createElement(W.a,{key:t.key},r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(F.a,{placeholder:"Select Day",fluid:!0,options:ae,value:t.day,disabled:!0})),r.a.createElement(Z.a,null,r.a.createElement(F.a,{placeholder:"Start Time",fluid:!0,options:ne,value:t.stime,disabled:!0})),r.a.createElement(Z.a,null,r.a.createElement(F.a,{placeholder:"End Time",fluid:!0,options:ne,value:t.etime,disabled:!0})),r.a.createElement(Z.a,{sm:2},r.a.createElement(J.a,{icon:!0,floated:"right",color:"red",onClick:function(a){return e.deleteSlot(a,t.key)}},r.a.createElement("span",{className:"fa fa-times-circle"})," "))))}));return r.a.createElement("div",{className:"container text-center"},r.a.createElement($.a,null,r.a.createElement(W.a,null,r.a.createElement(ee.a,null,"Course Name"),r.a.createElement(te.a,{value:t.text,name:"text",onChange:this.onChange})),r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(W.a,null,r.a.createElement(ee.a,null,"Course Code"),r.a.createElement(te.a,{value:t.code,name:"code",onChange:this.onChange}))),r.a.createElement(Z.a,null,r.a.createElement(W.a,null,r.a.createElement(ee.a,null,"Acronym"),r.a.createElement(te.a,{value:t.value,name:"value",onChange:this.onChange})))),r.a.createElement("h3",null,"Slots"),r.a.createElement(le,{addslot:this.addslot,slots:t.slots}),a,r.a.createElement(J.a,{primary:!0,onClick:this.props.addCourse}," Add")))}}]),a}(n.Component),ce=a(267),se=a(514),ie=a(262);function ue(e){var t=e.doc,a=e.deleteCourse,l=e.editCourse,o=Object(n.useState)(-1),c=Object(ce.a)(o,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center"},"All Courses"),t.map((function(e){return r.a.createElement(se.a,{key:e.key,fluid:!0,styled:!0},r.a.createElement(se.a.Title,{active:s===e.key,onClick:function(){return t=e.key,void i(s===t?-1:t);var t}},r.a.createElement(G.a,{name:"dropdown"}),e.text,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ie.a,null,r.a.createElement(J.a,{icon:!0,color:"olive",onClick:function(t){return l(t,e.key)}},r.a.createElement(G.a,{name:"edit"})),r.a.createElement(J.a.Or,null),r.a.createElement(J.a,{icon:!0,color:"google plus",onClick:function(t){return a(t,e.key)}},r.a.createElement(G.a,{name:"delete"})))),r.a.createElement(se.a.Content,{active:s===e.key},r.a.createElement("strong",null,"Acronym: ")," ",r.a.createElement("p",null,e.value),r.a.createElement("strong",null,"Course Code: ")," ",r.a.createElement("p",null,e.code),r.a.createElement("strong",null,"Slots: ")," ",r.a.createElement("ul",null,e.slots.map((function(e){return r.a.createElement("li",null,e.day," ",e.stime,"-",e.etime)})))))})))}var de=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={doc:[],course:{key:"",text:"",value:"",code:"",slots:[]}},n.addCourse=n.addCourse.bind(Object(p.a)(n)),n.deleteCourse=n.deleteCourse.bind(Object(p.a)(n)),n.editCourse=n.editCourse.bind(Object(p.a)(n)),n.onCoursechange=n.onCoursechange.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){document.title="Admin"}},{key:"onCoursechange",value:function(e,t){var a=Object(u.a)({},this.state.course);a[e]=t,this.setState({course:a})}},{key:"addCourse",value:function(e){e.preventDefault();var t=1,a=this.state.doc;a.length>0&&(t=a[a.length-1].key+1);var n=this.state.course;n.key=t;var r=this.state.doc.concat(n);this.setState({doc:r,course:{key:"",text:"",value:"",code:"",slots:[]}})}},{key:"deleteCourse",value:function(e,t){e.preventDefault();var a=this.state.doc.filter((function(e){return e.key!==t}));this.setState({doc:a})}},{key:"editCourse",value:function(e,t){e.preventDefault();var a=this.state.doc.filter((function(e){return e.key===t}))[0];this.deleteCourse(e,t),this.setState({course:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"constructor-fluid"},r.a.createElement("div",{className:"row d-none d-md-flex"},r.a.createElement("div",{className:"col-6"},r.a.createElement(oe,{addCourse:this.addCourse,course:this.state.course,onCoursechange:this.onCoursechange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ue,{doc:this.state.doc,deleteCourse:this.deleteCourse,editCourse:this.editCourse})),r.a.createElement("div",{className:"col-6"},r.a.createElement(Q,{doc:this.state.doc}))),r.a.createElement("div",{className:"container text-center d-md-none"},r.a.createElement("h1",null,"This Page is not available for Small Screens")))}}]),a}(n.Component),me=a(84),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-print-none"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:"/TimeTableManager/assets/images/IIIT-Delhi.png",alt:"IIIT-Delhi",className:"img-fluid"})),r.a.createElement("div",{className:"col d-none d-lg-block"},r.a.createElement("img",{src:"/TimeTableManager/assets/images/logo.png",alt:"logo",height:"80px",className:"float-right"})))),r.a.createElement("div",{className:"navbar-dark  d-print-none"},r.a.createElement("div",{className:"container"},r.a.createElement(me.b,{to:"/"},"HOME"),r.a.createElement(me.b,{to:"/ttpdf"},"TIMETABLE"),r.a.createElement("a",{href:"http://techtree.iiitd.edu.in/",target:"_blank",rel:"noopener noreferrer"},"TECHTREE"))),r.a.createElement("br",null))},pe=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchExtra()}},{key:"render",value:function(){var e=this.props.extra.links.ttpdf;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement("div",{className:"text-center d-print-none"},r.a.createElement("embed",{src:e,type:"application/pdf",width:"100%",height:"770px"})):r.a.createElement(I.a,null))}}]),a}(n.Component),fe=Object(v.connect)((function(e){return{extra:e.extra}}),(function(e){return{fetchExtra:function(){return e(x())}}}))(pe);var Ee=Object(c.g)((function(){return r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:function(){return r.a.createElement(q,null)}}),r.a.createElement(c.b,{exact:!0,path:"/ttpdf",component:function(){return r.a.createElement(fe,null)}}),r.a.createElement(c.b,{exact:!0,path:"/admin",component:function(){return r.a.createElement(de,null)}}),r.a.createElement(c.a,{to:"/"})))}));var ve=function(){return r.a.createElement(me.a,{basename:"/TimeTableManager"},r.a.createElement("div",{className:"App"},r.a.createElement(Ee,null)))},be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(485),a(486),a(487),a(488);var ye=a(44),Ce=a(265),ke=(a(489),{isLoading:!1}),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCHEDULE_FETCH_LOADING":return Object(u.a)({},e,{isLoading:!0});case"SCHEDULE_FETCH_SUCCESS":var a=t.schedule;return Object(u.a)({},e,{schedule:a,errmess:null});case"SCHEDULE_FETCH_FAILED":return Object(u.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},je={isLoading:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INFO_FETCH_LOADING":return Object(u.a)({},e,{isLoading:!0});case"INFO_FETCH_SUCCESS":var a=t.info;return Object(u.a)({},e,{info:a,errmess:null,isLoading:!1});case"INFO_FETCH_FAILED":return Object(u.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},xe={isLoading:!0,links:{}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EXTRA_LINKS_FETCH_LOADING":return Object(u.a)({},e,{isLoading:!0});case"EXTRA_LINKS_FETCH_SUCCESS":var a=t.links;return Object(u.a)({},e,{links:a,errmess:null,isLoading:!1});case"EXTRA_LINKS_FETCH_FAILED":return Object(u.a)({},e,{errmess:t.errmess,isLoading:!1});default:return e}},Ne=Object(ye.combineReducers)(Object(u.a)({schedule:Oe,info:Se,extra:we},Object(U.createForms)({feedback:{name:"",message:""}}))),Te=Object(ye.createStore)(Ne,Object(ye.applyMiddleware)(Ce.a));o.a.render(r.a.createElement(v.Provider,{store:Te},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TimeTableManager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TimeTableManager","/service-worker.js");be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()},96:function(e,t,a){}},[[279,1,2]]]);
//# sourceMappingURL=main.df366050.chunk.js.map