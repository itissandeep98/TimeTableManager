(this.webpackJsonptimetablemanager=this.webpackJsonptimetablemanager||[]).push([[0],{102:function(e,t,n){},206:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyDi8aKVrP7uo1wN5MH0UFLqau0uuKdCkao","authDomain":"timetable-c8e24.firebaseapp.com","databaseURL":"https://timetable-c8e24.firebaseio.com","projectId":"timetable-c8e24","storageBucket":"timetable-c8e24.appspot.com","messagingSenderId":"276119617717","appId":"1:276119617717:web:c0f0edf103342f6b767efc","measurementId":"G-2BRVMTLV32"}')},258:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(33),s=n.n(c),i=(n(102),n(18)),o=n(15),l=n(184),d=n(82),u=n(41),j=n(99),b=n(48),f=n.n(b),h="INFO_FETCH_FAILED",O="INFO_FETCH_LOADING",p="INFO_FETCH_SUCCESS",x="SCHEDULE_FETCH_FAILED",g="SCHEDULE_FETCH_LOADING",m="SCHEDULE_FETCH_SUCCESS",v="EXTRA_LINKS_FETCH_FAILED",w="EXTRA_LINKS_FETCH_LOADING",k="EXTRA_LINKS_FETCH_SUCCESS",y=n(177);n(259),n(204),n(260);var S=n(206),C=y.a.initializeApp(S),N=C.analytics(),E=C,L=n(105),A=n.n(L),T=n(5),I=["MO","TU","WE","TH","FR"],_=["01/17/2022 8:30:00","01/17/2022 10:00:00","01/17/2022 11:30:00","01/17/2022 01:00:00","01/17/2022 01:30:00","01/17/2022 03:00:00","01/17/2022 04:30:00"];var F=function(e){var t=new Date(e),n=new Date(t.getTime()+54e5);return[t.toISOString().replaceAll("-","").replaceAll(":","").replaceAll(".","").slice(0,-3),n.toISOString().replaceAll("-","").replaceAll(":","").replaceAll(".","").slice(0,-3)]},D=Object(u.b)((function(e){return{info:e.info}}))((function(e){var t=e.info.info,n=e.daynum,r=e.day.map((function(e,r){return Object(T.jsx)("td",{style:e.length>1?{background:"#f5ae33"}:null,className:e.length>0?"border":null,children:Object(T.jsx)("div",{className:"d-flex flex-column",children:e.map((function(e,a){var c,s,i;return 0===r?e:Object(T.jsx)("a",{href:"https://calendar.google.com/calendar/r/eventedit?text=".concat(null===(c=t[e])||void 0===c?void 0:c.title,"&dates=").concat(F(_[r-1])[0],"Z/").concat(F(_[r-1])[1],"Z&details=").concat((null===(s=t[e])||void 0===s?void 0:s.link)+" "+(null===(i=t[e])||void 0===i?void 0:i.desc),"&recur=RRULE:FREQ%3DWEEKLY;BYDAY%3D").concat(I[n],";UNTIL%3D20220502T000000Z&sf=true"),target:"_blank",rel:"noreferrer",children:e})}))})},Math.random())}));return Object(T.jsx)("tr",{children:r})})),H=n(270),U=n(271);var M=function(e){var t=e.data[0],n=e.data.slice(1);if(n){var r=n.map((function(e,t){return Object(T.jsx)(D,{day:e,daynum:t},t)})),a=t.map((function(e){return Object(T.jsx)("th",{children:e},e)}));return Object(T.jsx)(H.a,{className:"text-center",children:Object(T.jsxs)(U.a,{striped:!0,hover:!0,responsive:!0,className:"border",children:[Object(T.jsx)("thead",{children:Object(T.jsx)("tr",{children:a})}),Object(T.jsx)("tbody",{children:r}),Object(T.jsx)("thead",{children:Object(T.jsx)("tr",{children:a})})]})})}return Object(T.jsxs)("h2",{children:["Something Wrong happend",Object(T.jsx)("span",{className:"fa fa-filter"})]})},R=n(285),W=n(282),J=n(272),K=n(273),B=n(274),P=n(275),z=[[[],["8:30-10:00"],["10:00-11:30"],["11:30-1:00"],["1:00-1:30"],["1:30-3:00"],["3:00-4:30"],["4:30-6:00"]],[["Mon"],[],[],[],[],[],[],[]],[["Tue"],[],[],[],[],[],[],[]],[["Wed"],[],[],[],[],[],[],[]],[["Thu"],[],[],[],[],[],[],[]],[["Fri"],[],[],[],[],[],[],[]]];var G=function(e){var t=Object(r.useState)(JSON.parse(JSON.stringify(z))),n=Object(d.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){i()}),[e.selectedCourses]);var s=function(t){for(var n=e.schedule.monsoon,r=[],a=1;a<=5;a++)for(var c=1;c<=7;c++)n[a.toString()][c.toString()].includes(t)&&r.push([a,c]);return r},i=function(){for(var t=JSON.parse(JSON.stringify(z)),n=0;n<e.selectedCourses.length;n++)for(var r=s(e.selectedCourses[n]),a=0;a<r.length;a++){var i=r[a][0],o=r[a][1];t[i][o].push(e.selectedCourses[n])}c(t)},o=null;return o=e.isLoading?[{key:"loading",value:"loading",text:Object(T.jsx)(J.a,{}),disabled:!0}]:e.errmess?[{key:"error",value:e.errmess,text:e.errmess,onClick:function(){return window.location.reload()}}]:Object.keys(e.info).map((function(t){return{key:e.info[t].id,text:e.info[t].title+" - "+e.info[t].code+" - "+t,value:t}})),Object(T.jsxs)(K.a,{children:[Object(T.jsxs)(B.a,{onClick:function(e){return window.print()},className:"d-print-none printbutton rounded-pill mr-1 shadow",children:[Object(T.jsx)("span",{className:"fa fa-file"})," Print"]}),Object(T.jsxs)(B.a,{onClick:function(e){navigator.share?navigator.share({title:"Time Table Manager",text:"My Selected courses",url:window.location.href}).catch(console.error):navigator.clipboard.writeText("".concat(window.location.href))},className:"d-print-none printbutton rounded-pill shadow",children:[Object(T.jsx)("span",{className:"fa fa-share"})," Copy Url"]}),Object(T.jsx)("div",{className:"float-right d-print-none",children:Object(T.jsx)("a",{href:"https://github.com/itissandeep98/TimeTableManager",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"},children:Object(T.jsx)("span",{className:"fa  fa-github fa-3x"})})}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)(P.a,{children:Object(T.jsx)(M,{data:a})}),Object(T.jsx)(R.a,{className:"d-print-none",children:Object(T.jsx)(W.a,{placeholder:"Select Courses",fluid:!0,multiple:!0,defaultOpen:!0,search:!0,openOnFocus:!0,clearable:!0,selection:!0,options:o,value:e.selectedCourses,onChange:function(t,n){var r=(n||t.target).value;r=r.filter((function(t){return e.info[t]})),e.addCourse(r)}})})]})};function V(e){return Object(T.jsxs)(K.a,{className:"d-print-none implinks",children:[Object(T.jsx)("br",{}),Object(T.jsx)("h2",{children:"Important Links"}),e.offl_page&&Object(T.jsx)("ul",{children:Object(T.jsxs)("li",{children:["Official Page"," ",Object(T.jsxs)("a",{href:e.offl_page.link,target:"_blank",rel:"noopener noreferrer",children:["(",e.offl_page.sem,")"]})]})})]})}var X=n(36),Y=n(276),Z=n(277),q=n(278),Q=n(279),$=n(280),ee=n(284),te=n(91),ne=n(283);var re=function(e){var t=Object(r.useState)({message:"",showA:!1,type:""}),n=Object(d.a)(t,2),a=n[0],c=n[1],s=function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(X.a)({},e.target.name,e.target.value)))};return Object(T.jsxs)(ee.a,{id:"chatbutton",circular:!0,icon:!0,color:"black",className:"d-print-none",children:[Object(T.jsx)(te.a,{name:"chat",size:"large"}),Object(T.jsx)(ne.a,{trigger:"legacy",placement:"top",target:"chatbutton",children:Object(T.jsx)(Y.a,{className:"text-center",children:Object(T.jsxs)(K.a,{fluid:!0,className:" p-0",children:[Object(T.jsxs)("p",{children:["Or mail directly at"," ",Object(T.jsx)("a",{href:"mailto:itissandeep98@gmail.com",target:"blank",children:"itissandeep98@gmail.com"})]}),Object(T.jsx)(Z.a,{color:a.type,isOpen:a.showA,toggle:function(){c(Object(o.a)(Object(o.a)({},a),{},{showA:!a.showA}))},children:a.message}),Object(T.jsxs)(q.a,{children:[Object(T.jsx)(Q.a,{children:Object(T.jsx)($.a,{name:"name",placeholder:"Name",value:a.name,onChange:s})}),Object(T.jsx)(Q.a,{children:Object(T.jsx)($.a,{type:"textarea",name:"feedback",placeholder:"Feedback",rows:5,value:a.feedback,onChange:s,onKeyDown:function(e){e.target.style.height="inherit",e.target.style.height="".concat(Math.min(e.target.scrollHeight+30,800),"px")}})}),Object(T.jsxs)(ee.a,{circular:!0,positive:!0,onClick:function(e){e.preventDefault();var t={emailto:"itissandeep98@gmail.com",message:a.feedback,subject:"TimeTableManager: Message from "+a.name};A.a.get("https://jsonserver-f.herokuapp.com/sendmail",{params:t}).then((function(e){var t,n;t="info",n="Feedback Sent ;)",c(Object(o.a)(Object(o.a)({},a),{},{showA:!0,message:n,type:t}))})),N.logEvent("feedback_sent")},children:[Object(T.jsx)("span",{className:"fa fa-paper-plane"})," Send"]})]})]})})})]})};var ae=function(e){var t=e.info;if(0===e.selectedCourses.length)return Object(T.jsx)("div",{});var n=function(e){return null===e||void 0===e?void 0:e.split("/")[0]};return Object(T.jsx)(K.a,{className:"text-center",children:Object(T.jsxs)(U.a,{responsive:!0,className:"border",children:[Object(T.jsx)("thead",{style:{backgroundColor:"#a09e9e3b"},children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"Course Code"}),Object(T.jsx)("td",{children:"Instructor"}),Object(T.jsx)("td",{children:"Class Link"}),Object(T.jsx)("td",{children:"Comments"})]})}),t&&Object(T.jsx)("tbody",{children:e.selectedCourses.map((function(e,r){var a;return t[e]&&Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsxs)("a",{href:"http://techtree.iiitd.edu.in/viewDescription/filename?="+n(null===t||void 0===t||null===(a=t[e])||void 0===a?void 0:a.code),target:"_blank",rel:"noopener noreferrer",children:[t[e].code," - ",e]})}),Object(T.jsx)("td",{children:t[e].inst}),Object(T.jsx)("td",{children:Object(T.jsx)("a",{href:t[e].link,target:"_blank",rel:"noopener noreferrer",children:t[e].link})}),Object(T.jsx)("td",{children:t[e].desc})]},r)}))})]})})},ce=n(281);var se=Object(u.b)((function(e){return{schedule:e.schedule,info:e.info,extra:e.extra}}),(function(e){return{fetchInfo:function(){return e(function(){var e=Object(j.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.abrupt("return",E.database().ref("/info").on("value",(function(e){t({type:p,info:e.val()})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},fetchSchedule:function(){return e(function(){var e=Object(j.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g}),e.abrupt("return",E.database().ref("/schedule").on("value",(function(e){t({type:m,schedule:e.val()})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(i.g)();return Object(r.useEffect)((function(){e.info.info||(e.fetchInfo(),e.fetchSchedule(),N.logEvent("page_visited")),function(){if(s.location.search.length>1){var e=Array.from(new Set(JSON.parse(decodeURI(s.location.search.slice(1).replaceAll(",",'","').replaceAll("[",'["').replaceAll("]",'"]')))));window.history.replaceState(null,null,"?"+JSON.stringify(e).replaceAll('"',"")),c(e)}}()}),[]),Object(T.jsxs)("div",{children:[e.info.info&&e.schedule.schedule&&Object(T.jsx)(G,{selectedCourses:a,addCourse:function(e){c(Object(l.a)(e)),window.history.replaceState(null,null,"?"+JSON.stringify(e).replaceAll('"',""))},schedule:e.schedule.schedule,isLoading:e.info.isLoading,errmess:e.info.errmess,info:e.info.info}),Object(T.jsx)(V,Object(o.a)({},e.extra.links)),Object(T.jsx)(K.a,{children:Object(T.jsxs)(ce.a,{horizontal:!0,children:["updated on ",e.extra.links.last_updated]})}),Object(T.jsx)(re,{resetFeedbackform:e.resetFeedbackform}),Object(T.jsx)(ae,{selectedCourses:a,info:e.info.info})]})})),ie=n(65),oe=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K.a,{children:Object(T.jsxs)(P.a,{className:"row d-print-none",children:[Object(T.jsx)(H.a,{children:Object(T.jsx)("img",{src:"./assets/images/IIIT-Delhi.png",alt:"IIIT-Delhi",className:"img-fluid"})}),Object(T.jsx)(H.a,{className:"d-none d-lg-block",children:Object(T.jsx)("img",{src:"./assets/images/logo.png",alt:"logo",height:"80px",className:"float-right"})})]})}),Object(T.jsx)("div",{className:"navbar-dark  d-print-none",children:Object(T.jsxs)(K.a,{children:[Object(T.jsx)(ie.b,{to:"/",children:"HOME"}),Object(T.jsx)(ie.b,{to:"/ttpdf",children:"TIMETABLE"}),Object(T.jsx)("a",{href:"http://techtree.iiitd.edu.in/",target:"_blank",rel:"noopener noreferrer",children:"TECHTREE"})]})}),Object(T.jsx)("br",{})]})};var le=Object(u.b)((function(e){return{extra:e.extra}}))((function(e){var t=e.extra.links.ttpdf;return Object(T.jsx)(T.Fragment,{children:t?Object(T.jsx)("div",{className:"text-center d-print-none",children:Object(T.jsx)("embed",{src:t,type:"application/pdf",width:"100%",height:"770px"})}):Object(T.jsx)(J.a,{})})}));var de=Object(i.h)((function(){var e=Object(u.c)();return Object(r.useEffect)((function(){e(function(){var e=Object(j.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:w}),e.abrupt("return",E.database().ref("/extra").on("value",(function(e){t({type:k,links:e.val()})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(T.jsxs)("div",{children:[Object(T.jsx)(oe,{}),Object(T.jsxs)(i.d,{children:[Object(T.jsx)(i.b,{exact:!0,path:"/",component:function(){return Object(T.jsx)(se,{})}}),Object(T.jsx)(i.b,{exact:!0,path:"/ttpdf",component:function(){return Object(T.jsx)(le,{})}}),Object(T.jsx)(i.a,{to:"/"})]})]})}));var ue=function(){return Object(T.jsx)(ie.a,{basename:".",children:Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(de,{})})})},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(253),n(254),n(255),n(256);var fe=n(98),he=n(182),Oe=(n(257),{isLoading:!1}),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case m:var n=t.schedule;return Object(o.a)(Object(o.a)({},e),{},{schedule:n,errmess:null});case x:return Object(o.a)(Object(o.a)({},e),{},{errmess:t.errmess,isLoading:!1});default:return e}},xe={isLoading:!0},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case p:var n=t.info;return Object(o.a)(Object(o.a)({},e),{},{info:n,errmess:null,isLoading:!1});case h:return Object(o.a)(Object(o.a)({},e),{},{errmess:t.errmess,isLoading:!1});default:return e}},me={isLoading:!0,links:{}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case k:var n=t.links;return Object(o.a)(Object(o.a)({},e),{},{links:n,errmess:null,isLoading:!1});case v:return Object(o.a)(Object(o.a)({},e),{},{errmess:t.errmess,isLoading:!1});default:return e}},we=Object(fe.b)({schedule:pe,info:ge,extra:ve}),ke=Object(fe.c)(we,Object(fe.a)(he.a));s.a.render(Object(T.jsx)(u.a,{store:ke,children:Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(ue,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()}},[[258,1,2]]]);