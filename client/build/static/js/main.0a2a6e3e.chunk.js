(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,a,t){e.exports=t(209)},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){},206:function(e,a,t){},207:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(36),c=t.n(r),s=t(34),i=t(18);t(122);var o=function(e){var a=e.children;return l.a.createElement("div",{className:"wrapper container-fluid"},a)},m=t(40),u=t(29),d=t(17);t(123),t(124);t(129);var p=function(e){return l.a.createElement("form",{className:"form",onSubmit:e.handleSubmitForm},l.a.createElement("p",{className:"form-title"},"SIGN UP"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"NAME"),l.a.createElement("input",Object.assign({type:"text",className:"form-control usernameInput",name:"username",placeholder:"Insert your username"},e))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"EMAIL"),l.a.createElement("input",Object.assign({type:"email",className:"form-control emailInput2",name:"email",id:"exampleInputEmail1",placeholder:"example@email.com","aria-describedby":"emailHelp"},e))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"PASSWORD"),l.a.createElement("input",Object.assign({type:"password",className:"form-control passwordInput2",name:"password",id:"exampleInputPassword1",placeholder:"Password"},e))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 toLogin-col"},l.a.createElement("a",{href:"/login",className:"toLogin"},"Already a member?",l.a.createElement("span",null,l.a.createElement("strong",null," LOG IN")))),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{className:"signupBtn"},"SIGN UP"))))};t(130);var E=function(){return l.a.createElement("div",{className:"footer"},"Copyright \xa9 2020")},g=t(38),v=t.n(g),f=function(e){return v.a.post("/api/users/login",e)},h=function(e){return v.a.post("/api/users/signup",e)},N=function(){return v.a.get("/api/users/user/")},b=function(e){return v.a.post("/api/flightInfo/flight",e)},y=function(e){return v.a.post("/api/trip/createTrip",e)},O=function(){return v.a.get("/api/users/userTrip")},x=function(e){return v.a.post("/api/baggage/checklist",e)},j=function(){return v.a.get("/api/trip/tripInfo")};var D=function(){var e=Object(i.f)(),a=Object(n.useState)({username:"",email:"",password:""}),t=Object(d.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({}),o=Object(d.a)(s,2),g=(o[0],o[1]);return l.a.createElement("div",null,l.a.createElement(p,{onChange:function(e){e.preventDefault();var a=e.target.value;console.log(e.target.name),c(Object(u.a)(Object(u.a)({},r),{},Object(m.a)({},e.target.name,a)))},handleSubmitForm:function(a){a.preventDefault(),h(r).then((function(a){g(a.data),e.push({pathname:"/login"})})).catch((function(e){return console.log(e)}))}}),l.a.createElement(E,null))};t(147);var C=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{className:"form",onSubmit:e.handleSubmitForm},l.a.createElement("p",{className:"form-title"},"LOG IN"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"EMAIL"),l.a.createElement("input",Object.assign({type:"email",className:"form-control emailInput",id:"exampleInputEmail1",name:"email",placeholder:"example@email.com","aria-describedby":"emailHelp"},e))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"PASSWORD"),l.a.createElement("input",Object.assign({type:"password",class:"form-control passwordInput",name:"password",placeholder:"Enter your password",id:"exampleInputPassword1"},e))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 toLogin-col"},l.a.createElement("a",{href:"/",className:"toLogin"},"Don't have an account?",l.a.createElement("span",null,l.a.createElement("strong",null," Register ")))),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{className:"btn btn-primary",type:"submit",value:"SUBMIT"},"SUBMIT")))))};var w=function(){var e=Object(i.f)(),a=Object(n.useState)({email:"",password:""}),t=Object(d.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({}),o=Object(d.a)(s,2),p=(o[0],o[1]),g=Object(n.useState)(""),v=Object(d.a)(g,2),h=(v[0],v[1]);return l.a.createElement("div",null,l.a.createElement(C,{onChange:function(e){e.preventDefault();var a=e.target.value;console.log(e.target.name),c(Object(u.a)(Object(u.a)({},r),{},Object(m.a)({},e.target.name,a)))},handleSubmitForm:function(a){a.preventDefault(),f(r).then((function(a){p(a.data),console.log(a.data._id),"Unauthorized"===a?console.log("Incorrect Password"):(h(a.data._id),e.push({pathname:"/newtrip"}))})).catch((function(e){return console.log(e)}))}}),l.a.createElement(E,null))},S=t(220),I=t(221),A=t(219);t(148),t(149);var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{class:"fas fa-bars"}))};var k=function(){return l.a.createElement(S.a,{expand:"lg",className:"navbar"},l.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"},l.a.createElement(T,null)),l.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(I.a,{className:"mr-auto"},l.a.createElement(A.a.Item,{href:"/newtrip",className:"navButton"},"NEW TRIP"),l.a.createElement(A.a.Item,{href:"/agenda",className:"navButton"},"AGENDA"))))};t(155);var q=function(e){var a=e.children;return l.a.createElement("div",{className:"container header"},a)},F=(t(156),t(75)),P=t(76),L=t(55),H=t(83),R=t(81),B=t(77),M=t.n(B),G=(t(165),t(89),function(e){Object(H.a)(t,e);var a=Object(R.a)(t);function t(e){var n;return Object(F.a)(this,t),(n=a.call(this,e)).handleDayChange=n.handleDayChange.bind(Object(L.a)(n)),n.state={selectedDay:void 0},n}return Object(P.a)(t,[{key:"handleDayChange",value:function(e){this.setState({selectedDay:e});var a={target:{name:"departureDate",value:e}};this.props.onChange(a),console.log(this.state)}},{key:"render",value:function(){var e=this.state.selectedDay;return l.a.createElement("div",{style:{color:"#192433"}},e&&l.a.createElement("p",null,"Day: ",e.toLocaleDateString()),l.a.createElement(M.a,{placeholder:"Departing",selectedDay:e,onDayChange:this.handleDayChange}))}}]),t}(l.a.Component)),W=(t(166),function(e){Object(H.a)(t,e);var a=Object(R.a)(t);function t(e){var n;return Object(F.a)(this,t),(n=a.call(this,e)).handleDayChange=n.handleDayChange.bind(Object(L.a)(n)),n.state={selectedDay:void 0},n}return Object(P.a)(t,[{key:"handleDayChange",value:function(e){this.setState({selectedDay:e});var a={target:{name:"arrivalDate",value:e}};this.props.onChange(a)}},{key:"render",value:function(){var e=this.state.selectedDay;return l.a.createElement("div",{className:"dayPickerInput"},e&&l.a.createElement("p",null,"Day: ",e.toLocaleDateString()),l.a.createElement(M.a,{placeholder:"Returning",onDayChange:this.handleDayChange}))}}]),t}(l.a.Component));var U=function(e){return l.a.createElement("div",{className:"container infoTripCont"},l.a.createElement("form",{className:"form newtrip-container"},l.a.createElement("h5",{className:"newtrip-form-title"},"PLAN YOUR NEXT TRIP!"),l.a.createElement("div",{className:"row firstRow"},l.a.createElement("div",{className:"col-lg-3 col-sm-6"},l.a.createElement("div",{className:"input-group-prepend mb-3"},l.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{class:"fas fa-plane-departure"})),l.a.createElement("input",Object.assign({type:"text",name:"origin",className:"newtrip-form-control form-control",placeholder:"Origin"},e)))),l.a.createElement("div",{className:"col-lg-3 col-sm-6"},l.a.createElement("div",{className:"input-group-prepend mb-3"},l.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{class:"fas fa-plane-arrival"})),l.a.createElement("input",Object.assign({type:"text",name:"destination",className:"newtrip-form-control form-control",placeholder:"Destination"},e)))),l.a.createElement("div",{className:"col-lg-6 col-sm-12"},l.a.createElement("div",{className:"input-group-prepend mb-3"},l.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{class:"fas fa-plane"})),l.a.createElement("select",Object.assign({className:"custom-select newtrip-form-control",name:"category",id:"inputGroupSelect01"},e),l.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Category"),l.a.createElement("option",null,"Business"),l.a.createElement("option",null,"Vacation"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-sm-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"input-group-prepend mb-3"},l.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{class:"fas fa-user-friends"})),l.a.createElement("select",Object.assign({className:"custom-select newtrip-form-control",name:"numberOfPeople",id:"inputGroupSelect01"},e),l.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"0"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5")))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"finput-group mb-3"},l.a.createElement(G,Object.assign({className:"custom-select newtrip-form-control",name:"departure",id:"inputGroupSelect01"},e)))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement(W,Object.assign({className:"custom-select newtrip-form-control",name:"arrival",id:"inputGroupSelect01"},e)))))),l.a.createElement("div",{className:"col-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"},l.a.createElement("div",{className:"input-group-prepend mb-3"},l.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{class:"fas fa-pen-alt"})),l.a.createElement("input",Object.assign({type:"text",className:"newtrip-form-control form-control",name:"tripname",placeholder:"Name your trip"},e))))),l.a.createElement("button",{className:"btn btn-primary",onClick:e.getFlights},"Search")))};t(167);var V=function(e){console.log(e);var a=function(e){return e.split("T")[1]},t=function(e){return e.split("T")[1]};return l.a.createElement(l.a.Fragment,null,0!==e.flightInfo.length?e.flightInfo.map((function(n){var r=n.id,c=n.itineraries,s=(n.oneWay,n.price),i=n.travelerPricings;return l.a.createElement("div",{className:"container resultsCont"},l.a.createElement("div",{className:"row flights-container"},l.a.createElement("div",{className:"col-10 col-lg-10 col-md-9 col-sm-10 col-xs-12"},l.a.createElement("div",{className:"flight-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Airline"))),l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Departure"))),l.a.createElement("div",{className:"col tripHeader"}),l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Arrival"))),l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Duration")))),l.a.createElement("div",{className:"row departureRow"},l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"query-text2"},c[0].segments[0].carrierCode)),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text2"},a(c[0].segments[0].departure.at)),l.a.createElement("p",{className:"country query-text2"},c[0].segments[0].departure.iataCode))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("i",{class:"fas fa-plane-departure"}),l.a.createElement("p",{className:"scale query-text2"},c[0].segments.length>1?c[0].segments.length-1+" Scale(s)":"Direct"))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text2"},a(c[0].segments[c[0].segments.length-1].arrival.at)),l.a.createElement("p",{className:"country query-text2"},c[0].segments[c[0].segments.length-1].arrival.iataCode))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"duration query-text2"},t(c[0].duration)))),l.a.createElement("div",{className:"row arrivalRow"},l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"query-text2"},c[1].segments[0].carrierCode)),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text2"},a(c[1].segments[0].departure.at)),l.a.createElement("p",{className:"country query-text2"},c[1].segments[0].departure.iataCode))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("i",{class:"fas fa-plane-departure"}),l.a.createElement("p",{className:"scale query-text2"},c[1].segments.length>1?c[1].segments.length-1+" Scale(s)":"Direct"))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text2"},a(c[1].segments[c[1].segments.length-1].arrival.at)),l.a.createElement("p",{className:"country query-text2"},c[1].segments[c[1].segments.length-1].arrival.iataCode))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"duration query-text2"},t(c[0].duration)))))),l.a.createElement("div",{className:"col-2 col-lg-2 col-md-3 col-sm-2 col-xs-4 buttonCont"},l.a.createElement("div",{className:"priceInfo"},l.a.createElement("p",{className:"price query-text2"},2*i[0].price.total," ",s.currency),l.a.createElement("p",{className:"general-content query-text2"},"per person"),l.a.createElement("div",{className:"selectBtn"},l.a.createElement("button",{type:"button",class:"btn btn-outline-primary ",onClick:e.handleFlights,"data-toggle":"modal","data-value":r,"data-target":"#staticBackdrop"},"Details"))))))})):l.a.createElement(l.a.Fragment,null))};t(168);var _=function(){return l.a.createElement("div",{className:"container imageCont"},l.a.createElement("h4",{className:"loadingMsg"},"Searching for flights..."),l.a.createElement("img",{className:"loading",src:"https://i.pinimg.com/originals/43/3b/6c/433b6c5336c72a21bcfd9db8d831562a.gif"}))},z=t(218),J=t(215),Y=t(216),Z=t(217),X=t(109);t(169);var K=function(e){console.log(e.oneFlight);var a=function(e){return e.split("T")[1]},t=function(e){var a=e.split("T");return console.log(a),a[0]},n=function(e){return e.split("T")[1]},r=e.oneFlight[0];return l.a.createElement(z.a,Object.assign({},e,{size:"md",className:"modal-cont","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(z.a.Header,{closeButton:!0},l.a.createElement(z.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title"},"Flight Details")),l.a.createElement(z.a.Body,null,r?l.a.createElement(J.a,null,l.a.createElement(Y.a,null,l.a.createElement(Z.a,{xs:6,md:6},l.a.createElement("div",null,l.a.createElement("h6",{className:"departure-title"},"Departure"),console.log(null===r||void 0===r?void 0:r.itineraries[0].segments[0].departure.at),l.a.createElement("p",{className:"flight-info"},l.a.createElement("strong",null,"Date:")," ",t(null===r||void 0===r?void 0:r.itineraries[0].segments[(null===r||void 0===r?void 0:r.itineraries[0].segments.length)-1].departure.at)),l.a.createElement("p",{className:"flight-info"},l.a.createElement("strong",null,"Departure Time:")," ",l.a.createElement("span",null,a(null===r||void 0===r?void 0:r.itineraries[0].segments[0].departure.at))),l.a.createElement("p",{className:"flight-info"},l.a.createElement("strong",null,"Duration:")," ",l.a.createElement("span",null,n(null===r||void 0===r?void 0:r.itineraries[0].duration))),l.a.createElement("p",null,l.a.createElement("strong",null,"Stops: "),l.a.createElement("span",null,(null===r||void 0===r?void 0:r.itineraries[0].segments.length)-1)))),l.a.createElement(Z.a,{xs:6,md:6},l.a.createElement("div",null,l.a.createElement("h6",{className:"departure-title"},"Arrival"),l.a.createElement("p",{className:"flight-info"},l.a.createElement("strong",null,"Date:")," ",t(null===r||void 0===r?void 0:r.itineraries[1].segments[(null===r||void 0===r?void 0:r.itineraries[1].segments.length)-1].departure.at)),l.a.createElement("p",{className:"flight-info"},l.a.createElement("strong",null,"Departure Time:")," ",l.a.createElement("span",null,a(null===r||void 0===r?void 0:r.itineraries[1].segments[(null===r||void 0===r?void 0:r.itineraries[1].segments.length)-1].departure.at))),l.a.createElement("p",{className:"flight-info"},l.a.createElement("strong",null,"Duration:")," ",l.a.createElement("span",null,n(null===r||void 0===r?void 0:r.itineraries[1].duration))),l.a.createElement("p",null,l.a.createElement("strong",null,"Stops: "),l.a.createElement("span",null,(null===r||void 0===r?void 0:r.itineraries[1].segments.length)-1))))),l.a.createElement("div",null,l.a.createElement("hr",null)),l.a.createElement(Y.a,null,l.a.createElement(Z.a,{xs:6,md:6},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Luggage: "),l.a.createElement("i",{class:"fas fa-suitcase-rolling"})),l.a.createElement("p",null,l.a.createElement("strong",null,"Class: "),l.a.createElement("span",null,null===r||void 0===r?void 0:r.travelerPricings[0].fareDetailsBySegment[0].cabin)),l.a.createElement("p",null,l.a.createElement("strong",null,"Available seats:")," ",null===r||void 0===r?void 0:r.numberOfBookableSeats))),l.a.createElement(Z.a,{xs:6,md:6},l.a.createElement("p",null,l.a.createElement("strong",null,"Adult Price:")," ",2*(null===r||void 0===r?void 0:r.travelerPricings[0].price.total)," ",r.price.currency),l.a.createElement("p",null,l.a.createElement("strong",null,"Child Price:")," ",2*r.travelerPricings[1].price.total," ",r.price.currency),l.a.createElement("p",null,l.a.createElement("strong",null,"Total:")," ",r.price.total," ",r.price.currency)))):""),l.a.createElement(z.a.Footer,null,l.a.createElement(X.a,{onClick:e.onHide},"Close"),l.a.createElement(X.a,{onClick:e.chooseFlight},"Choose")))};var Q=function(){var e=Object(i.f)(),a=Object(n.useState)({origin:"",destination:"",category:"",numberOfPeople:"",departureDate:"",arrivalDate:"",tripname:"",price:"",children:1,travelClass:null,nonStop:null,currencyCode:"MXN",maxPrice:null}),t=Object(d.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)([]),p=Object(d.a)(s,2),g=p[0],v=p[1],f=Object(n.useState)({}),h=Object(d.a)(f,2),O=h[0],x=h[1],j=Object(n.useState)(!1),D=Object(d.a)(j,2),C=D[0],w=D[1],S=Object(n.useState)(!1),I=Object(d.a)(S,2),A=I[0],T=I[1],F=Object(n.useState)([]),P=Object(d.a)(F,2),L=P[0],H=P[1];return Object(n.useEffect)((function(){console.log(g),N().then((function(e){console.log(e.data),x(e.data)}))}),[g]),l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement(o,null,l.a.createElement(q,null,l.a.createElement("h4",null,"Welcome ",O.username)),l.a.createElement(U,{onChange:function(e){console.log(e),e.preventDefault&&e.preventDefault();var a=e.target.value;console.log(e.target.name),c(Object(u.a)(Object(u.a)({},r),{},Object(m.a)({},e.target.name,a))),console.log(r)},getFlights:function(e){e.preventDefault(),w(!0),console.log(r),b(r).then((function(e){console.log(e.data),v(e.data),console.log("NEW TRIP FILE",g),w(!1)})).catch((function(e){console.log(e)}))}}),C?l.a.createElement(_,null):l.a.createElement(V,{flightInfo:g,handleFlights:function(e){console.log(e.target.getAttribute("data-value"));var a=e.target.getAttribute("data-value"),t=g.filter((function(e){return e.id==a}));console.log(t),H(t),T(!0)}}),l.a.createElement(K,{oneFlight:L,show:A,onHide:function(){T(!1)},chooseFlight:function(){console.log(L);var a={userId:O._id,price:L[0].price.total,currency:L[0].price.currency,durationDepart:L[0].itineraries[0].duration,durationArr:L[0].itineraries[1].duration,iataDeparture:L[0].itineraries[0].segments[0].departure.iataCode,iataArrival:L[0].itineraries[0].segments[L[0].itineraries[0].segments.length-1].arrival.iataCode,iataDeparture2:L[0].itineraries[1].segments[0].departure.iataCode,iataArrival2:L[0].itineraries[1].segments[L[0].itineraries[1].segments.length-1].arrival.iataCode,departureTime:L[0].itineraries[0].segments[0].departure.at,arrivalTime:L[0].itineraries[0].segments[L[0].itineraries[0].segments.length-1].departure.at,departureTime2:L[0].itineraries[1].segments[0].departure.at,arrivalTime2:L[0].itineraries[1].segments[L[0].itineraries[1].segments.length-1].departure.at,airlineDeparture:L[0].itineraries[0].segments[0].carrierCode,airlineArrival:L[0].itineraries[1].segments[0].carrierCode};y({info:r,extraInfo:a}).then((function(a){console.log(a),e.push({pathname:"/checklist"})}))}})),l.a.createElement(E,null))};l.a.createContext({origin:"",destination:"",category:"",numberOfPeople:"",departureDate:"",arrivalDate:"",tripname:"",price:"",children:"",travelClass:"",nonStop:"",currencyCode:""}),l.a.createContext({originLocationCode:"",destinationLocationCode:"",departureDate:"",returnDate:"",adults:"",children:"",travelClass:"",nonStop:"",currencyCode:"",flightInfo:[]});var $=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null,l.a.createElement(q,null),l.a.createElement(V,null)),l.a.createElement(E,null))};t(170);var ee=function(e){return console.log(e.tripsInfo),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container trips-list"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h5",{className:"card-header trips-heading"},"MY TRIPS"),l.a.createElement("ul",{className:"list-group tripsList"},0!==e.tripsInfo.length?e.tripsInfo.map((function(a){var t=a.tripName,n=a._id;return l.a.createElement("li",{name:"tripname",className:"list-group-item card-text tripName"},l.a.createElement("div",{onClick:e.filterFlight,"data-value":n},t),l.a.createElement("button",{type:"button","data-toggle":"modal",className:"btn btn-primary",onClick:e.getChecklist,"data-value":n},l.a.createElement("i",{class:"fas fa-clipboard-list"})))})):l.a.createElement(l.a.Fragment,null)))))};t(171);var ae=function(e){var a=e.flight;return console.log("HOLA!!!!!!!!!!!!!!!!!!!!!!",e,a),l.a.createElement(l.a.Fragment,null,0!==a.length?a.map((function(e){return l.a.createElement("div",{className:"agenda-tit"},l.a.createElement("div",{className:"row title-info"},l.a.createElement("div",{className:"col-6 agenda-title"},l.a.createElement("p",null,e.tripName)),l.a.createElement("div",{className:"col-3 agenda-date"},l.a.createElement("p",null,"Date: ",e.departureDate.split("T")[0])),l.a.createElement("div",{className:"col-3 trip-type"},l.a.createElement("p",null,e.category))))})):l.a.createElement(l.a.Fragment,null))};t(172);var te=function(e){var a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container agenda-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-12 card"},l.a.createElement("div",{className:"col-12 card-header agenda-heading"},"AGENDA"),l.a.createElement("div",{className:"card-body agenda-content"},a)))))},ne=(t(173),t(80)),le=t(114),re=(t(204),t(205),"pk.eyJ1IjoidmlkZWw5MCIsImEiOiJja2V3MjNkNWswZ2VlMnhueHhnaDJwdGRoIn0.TQT1TtsKgP3VhcnzHvUDZA"),ce=function(){var e=Object(n.useState)({latitude:19.421949,longitude:-99.134391,zoom:11}),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useRef)(),s=Object(n.useCallback)((function(e){return r(e)}),[]),i=Object(n.useCallback)((function(e){return s(Object(u.a)(Object(u.a)({},e),{transitionDuration:1e3}))}),[]);return l.a.createElement("div",{style:{height:"50vh"}},l.a.createElement(ne.b,Object.assign({ref:c},t,{width:"100%",height:"200px",onViewportChange:s,mapStyle:"mapbox://styles/videl90/ckex2tjbe006a1aqpspx6eduu",mapboxApiAccessToken:re}),l.a.createElement(le.a,{mapRef:c,width:"1000px",border:"solid 1px#FF8023",onViewportChange:i,mapboxApiAccessToken:re,position:"top-left"})))};var se=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"hotel-container"},l.a.createElement("div",{className:"your-flight-info"},"SEARCH FOR ANY LOCATION"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-xs-12"},l.a.createElement("div",{className:"google-maps"},l.a.createElement(ce,null))))))};t(206);var ie=function(e){console.log(e.flight);var a=function(e){return e.split("T")[1]},t=function(e){return e.split("T")[1]};return l.a.createElement(l.a.Fragment,null,0!==e.flight.length?e.flight.map((function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-12 col-md-12 col-sm-12"},l.a.createElement("div",{className:"flight-container-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Airline"))),l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Departure"))),l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Arrival"))),l.a.createElement("div",{className:"col tripHeader"},l.a.createElement("strong",null,l.a.createElement("p",{className:"query-text2"},"Duration")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"query-text"},e.airlineDeparture)),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text"},a(e.departureTime)),l.a.createElement("p",{className:"country query-text"},e.iataDeparture))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text"},a(e.arrivalTime)),l.a.createElement("p",{className:"country query-text"},e.iataArrival))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"duration query-text"},t(e.durationDepart)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"query-text"},e.airlineArrival)),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text"},a(e.departureTime2)),l.a.createElement("p",{className:"country query-text"},e.iataDeparture2))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("div",null,l.a.createElement("p",{className:"hour query-text"},a(e.arrivalTime2)),l.a.createElement("p",{className:"country query-text"},e.iataArrival2))),l.a.createElement("div",{className:"col",align:"center"},l.a.createElement("p",{className:"duration query-text"},t(e.durationArr)))))))})):l.a.createElement(l.a.Fragment,null))};t(207);var oe=function(e){var a=e.oneList;return console.log("MODAL",e,a),l.a.createElement(z.a,Object.assign({},e,{size:"sm",className:"modal-cont","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show}),l.a.createElement(z.a.Header,{closeButton:!0},l.a.createElement(z.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title"},null===a||void 0===a?void 0:a.tripName)),l.a.createElement(z.a.Body,null,l.a.createElement(J.a,null,l.a.createElement(Y.a,null,l.a.createElement(Z.a,{xs:12,md:12,lg:12},l.a.createElement(Y.a,null,l.a.createElement("table",{className:"listTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"List of items"))),l.a.createElement("tbody",null,null===a||void 0===a?void 0:a.checklist[0].items.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e))}))))))))),l.a.createElement(z.a.Footer,null,l.a.createElement(X.a,{onClick:e.onHide},"Close")))};var me=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),s=Object(d.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(!1),p=Object(d.a)(u,2),g=p[0],v=p[1];function f(e){e.preventDefault();var a=e.currentTarget.getAttribute("data-value"),n=t.filter((function(e){return e._id===a}));console.log(a,n),m(n)}return Object(n.useEffect)((function(){j().then((function(e){console.log(e.data),r(e.data)}))}),[]),l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement(o,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"},l.a.createElement(ee,{tripsInfo:t,filterFlight:f,getChecklist:function(e){e.preventDefault(),console.log("HOLA",e.target),f(e),v(!0)}})),l.a.createElement("div",{className:"col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12"},l.a.createElement(te,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-12 col-md-12 col-sm-12"},l.a.createElement(ae,{flight:i}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-12 col-md-12 col-sm-12"},l.a.createElement(ie,{flight:i}))),l.a.createElement("div",{className:"row"},l.a.createElement(se,null))))),l.a.createElement(oe,{oneList:i[0],show:g,onHide:function(){v(!1)}})),l.a.createElement(E,null))};var ue=function(e){var a=e.children;return l.a.createElement("div",{className:"wrapper container"},a)};t(208);var de=function(e){return console.log(e.items),console.log(e.items.items),l.a.createElement("ul",{class:"list-group checklistList"},l.a.createElement("li",{className:"list-group-item active"},"Travel Checklist"),0!==e.items.items?e.items.items.map((function(a,t){return l.a.createElement("li",{className:"list-group-item"},a,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.removeItem(t)}},l.a.createElement("i",{class:"fas fa-eraser"})))})):l.a.createElement(l.a.Fragment,null))},pe=[];var Ee=function(){var e=Object(i.f)(),a=Object(n.useRef)(),t=Object(n.useState)({items:[]}),r=Object(d.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)({}),m=Object(d.a)(o,2),u=(m[0],m[1]),p=Object(n.useState)({}),g=Object(d.a)(p,2),v=g[0],f=g[1];return Object(n.useEffect)((function(){console.log(c),O().then((function(e){console.log(e.data),f(e.data),u(e.data.trips[e.data.trips.length-1])}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(q,null,l.a.createElement("h5",null,"Your trip ",l.a.createElement("span",null,l.a.createElement("strong",null))," has been saved! Create your travel checklist")),l.a.createElement(ue,null,l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{class:"fas fa-tasks"}))),l.a.createElement("input",{type:"text",ref:a,class:"form-control",placeholder:"Add an item","aria-label":"Username","aria-describedby":"basic-addon1"})),l.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault();var t=a.current.value;pe.push(t),s({items:pe}),console.log(c),a.current.value=""},class:"btn btn-primary"},"Add"),l.a.createElement(de,{items:c,removeItem:function(e){console.log(e);var a=c.items;a.splice(e,1),s({items:a})}}),l.a.createElement("button",{onClick:function(){console.log(v),console.log(c);var a=v.trips[v.trips.length-1]._id;x({id:a,baggage:c}).then((function(a){console.log(a),e.push({pathname:"/agenda"})}))},class:"btn btn-primary"},"Save")),l.a.createElement(E,null))};var ge=function(){return l.a.createElement(o,null,l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:D}),l.a.createElement(i.a,{exact:!0,path:"/login",component:w}),l.a.createElement(i.a,{exact:!0,path:"/newtrip",component:Q}),l.a.createElement(i.a,{exact:!0,path:"/flightresults",component:$}),l.a.createElement(i.a,{exact:!0,path:"/agenda",component:me}),l.a.createElement(i.a,{exact:!0,path:"/checklist",component:Ee})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.0a2a6e3e.chunk.js.map