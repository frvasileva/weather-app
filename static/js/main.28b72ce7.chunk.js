(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,function(e,c,t){},,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),n=t.n(a),i=t(5),r=t.n(i),l=(t(11),t(12),t(2)),o=(t(4),function(e){var c=e.element;return Object(s.jsxs)("div",{children:[e.isExpanded&&Object(s.jsxs)("p",{children:["Humidity: ",c.day.avghumidity," %"]}),e.isExpanded&&Object(s.jsxs)("p",{children:["Chance of rain: ",c.day.daily_chance_of_rain," %"]}),e.isExpanded&&Object(s.jsxs)("p",{children:["Chance of snow: ",c.day.daily_chance_of_snow," %"]})]})}),d=function(e){var c=e.element,t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1],d=Object(a.useState)("fas fa-chevron-circle-down"),j=Object(l.a)(d,2),b=j[0],h=j[1];return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("span",{className:"day-of-week",children:c.date})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("img",{src:c.day.condition.icon,alt:c.day.condition.text,className:"small-icon"})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsxs)("span",{className:"daily-temperatures",children:[c.day.mintemp_c," / ",c.day.maxtemp_c," \xb0C"]})}),Object(s.jsx)("div",{className:"col-1",children:Object(s.jsx)("div",{className:"expander-wrapper",children:Object(s.jsx)("i",{className:b,onClick:function(){r(!i),h(i?"fas fa-chevron-circle-down":"fas fa-chevron-circle-up")}})})}),Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)(o,{isExpanded:i,element:c})})]})},j=function(e){var c=e.forecastDays;return c?Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)("ul",{className:"list-group-flush",children:c.map((function(e){return Object(s.jsx)("li",{className:"list-group-item",children:Object(s.jsx)(d,{element:e})},e.date)}))})})})})}):Object(s.jsx)("div",{children:"Loading ..."})},b=function(e){var c=e.forecastHours.forecastday[0].hour;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)("ul",{className:"list-group-flush",children:c.map((function(e){return Object(s.jsx)("li",{className:"list-group-item",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-8",children:[" ",e.time.split(" ")[1]," -"," ",Object(s.jsxs)("strong",{children:[e.temp_c," \xb0C "]})]}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("img",{className:"icon",src:e.condition.icon,alt:e.condition.text})})]})},e.time_epoch)}))})})})})})},h=(t(13),function(e){var c=e.location||"Pernik",t=Object(a.useState)(c),n=Object(l.a)(t,2),i=(n[0],n[1],"//api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q="+c+"&days=5"),r=Object(a.useState)(null),o=Object(l.a)(r,2),d=o[0],h=o[1];return Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){h(e)}))}),[i]),d?Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsxs)("div",{className:"main-current-weather-info",children:[Object(s.jsxs)("div",{className:"location",children:[d.location.name,", ",d.location.country]}),Object(s.jsxs)("div",{className:"temperature",children:[" ",d.current.temp_c," \xb0C"]}),Object(s.jsxs)("div",{className:"temperature-feels-like",children:["Feels like ",d.current.feelslike_c," \xb0C"]}),Object(s.jsx)("img",{src:d.current.condition.icon,alt:d.current.condition.text}),Object(s.jsx)("div",{className:"weather-condition-text",children:d.current.condition.text})]})})}),Object(s.jsx)(j,{forecastDays:d.forecast.forecastday}),Object(s.jsx)(b,{forecastHours:d.forecast})]}),")"]}):Object(s.jsx)("div",{children:"Loading ..."})}),m=(t(14),function(){var e=Object(a.useState)("Plovdiv"),c=Object(l.a)(e,2),t=c[0],n=c[1],i=Object(a.useState)("Plovdiv"),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(a.useState)(!0),b=Object(l.a)(j,2),m=b[0],u=b[1];return console.log(t),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"search-by-location-wrapper",children:Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),void 0===t||""===t?u(!1):(u(!0),d(t)),console.log(">>>>>> form submitted")},children:Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"col-9",children:[Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Search location",value:t,onChange:function(e){n(e.target.value),void 0!==e.target.value&&""!=e.target.value.trim()&&u(!0)}}),!m&&Object(s.jsx)("span",{children:"Choose location"})]}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-light btn-block",children:"Seach"})})]})})}),Object(s.jsx)(h,{location:o})]})});var u=function(){return Object(s.jsxs)("div",{className:"app-wrapper day",children:[Object(s.jsx)("header",{className:"App-header"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(m,{})})})})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),O()}],[[15,1,2]]]);
//# sourceMappingURL=main.28b72ce7.chunk.js.map