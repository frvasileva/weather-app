(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,c,t){},24:function(e,c,t){},25:function(e,c,t){},26:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),n=t.n(a),i=t(17),r=t.n(i),l=(t(24),t(10)),d=function(){return{isDawn:function(){var e=(new Date).getHours();return e>=6&&e<8},isDay:function(){var e=(new Date).getHours();return e>=8&&e<18},isSusnetDusk:function(){var e=(new Date).getHours();return e>=18&&e<20},isNight:function(){var e=(new Date).getHours();return e>=18&&e<23||e>=0&&e<6}}},o=t(7),j=t(2),h=(t(25),function(e){var c=e.hours;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)("ul",{className:"temperature-by-hour-list-wrapper",children:c.map((function(e){return Object(s.jsx)("li",{className:"hour-item",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsxs)("div",{className:"item-wrapper",children:[Object(s.jsxs)("p",{children:[" ",e.time.split(" ")[1]]}),Object(s.jsx)("img",{className:"icon weather-icon",src:e.condition.icon,alt:e.condition.text}),Object(s.jsx)("p",{className:"condition-text-small",children:e.condition.text}),Object(s.jsx)("p",{children:Object(s.jsxs)("strong",{children:[e.temp_c.toFixed()," \xb0C "]})})]})})})},e.time)}))})})})})}),b=(t(13),function(e){var c=e.element;return e.isExpanded?Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-4 item-wrapper",children:[Object(s.jsx)("span",{className:"wi wi-humidity",title:"Humidity"}),c.day.avghumidity," %",Object(s.jsx)("span",{className:"weather-label-info",children:"Humidity"})]}),Object(s.jsxs)("div",{className:"col-4 item-wrapper",children:[Object(s.jsx)("span",{className:"wi wi-night-showers",title:"Showers"}),c.day.daily_chance_of_rain," %",Object(s.jsx)("span",{className:"weather-label-info",children:"Rain"})]}),Object(s.jsxs)("div",{className:"col-4 item-wrapper",children:[Object(s.jsx)("span",{className:"wi wi-snowflake-cold",title:"Snow"}),c.day.daily_chance_of_snow," %",Object(s.jsx)("span",{className:"weather-label-info",children:"Snow"})]})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)(h,{hours:c.hour})})})]}):Object(s.jsx)("div",{})}),m=function(e){var c=e.element,t=Object(a.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1],l=Object(a.useState)("fas fa-chevron-circle-down"),d=Object(o.a)(l,2),j=d[0],h=d[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row weather-by-day-row",onClick:function(){r(!i),h(i?"fas fa-chevron-circle-down":"fas fa-chevron-circle-up")},children:[Object(s.jsx)("div",{className:"col-md-4 col-4",children:Object(s.jsx)("span",{className:"day-of-week",children:c.date})}),Object(s.jsx)("div",{className:"col-md-2 col-2",children:Object(s.jsx)("img",{src:c.day.condition.icon,alt:c.day.condition.text,className:"small-icon"})}),Object(s.jsx)("div",{className:"col-md-4 col-4",children:Object(s.jsxs)("span",{className:"daily-temperatures",children:[c.day.mintemp_c.toFixed()," / ",c.day.maxtemp_c.toFixed()," \xb0C"]})}),Object(s.jsx)("div",{className:"col-md-1 col-2",children:Object(s.jsx)("div",{className:"expander-wrapper",children:Object(s.jsx)("i",{className:j})})})]}),Object(s.jsx)("div",{className:i?"row expanded-row":"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)(b,{isExpanded:i,element:c,className:"weather-by-hours"})})})]})},u=function(e){var c=e.forecastDays;return c?Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsx)("ul",{className:"list-group-flush",children:c.map((function(e){return Object(s.jsx)("li",{className:"list-group-item",children:Object(s.jsx)(m,{element:e})},e.date)}))})})})}):Object(s.jsx)("div",{children:"Loading ..."})},x=(t(26),function(){var e,c=Object(j.e)(),t=null!==(e=new URLSearchParams(c.search).get("term"))&&void 0!==e?e:"Sofia",n="";""!==t&&(n="//api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q="+t+"&days=5");var i=Object(a.useState)(null),r=Object(o.a)(i,2),l=r[0],d=r[1],h=function(){fetch(n).then((function(e){return e.json()})).then((function(e){e.error&&1006===e.error.code?d(void 0):d(e)}))};return Object(a.useEffect)((function(){h();var e=setInterval((function(){h()}),1e5);return function(){return clearInterval(e)}}),[n]),"undefined"===typeof l?Object(s.jsx)("div",{children:Object(s.jsx)("div",{class:"alert alert-secondary",role:"alert",children:"No such location!"})}):l?Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md",children:Object(s.jsxs)("div",{className:"main-current-weather-info",children:[Object(s.jsxs)("div",{className:"location",children:[l.location.name,", ",l.location.country]}),Object(s.jsxs)("div",{className:"temperature",children:[" ",l.current.temp_c," \xb0C"]}),Object(s.jsxs)("div",{className:"temperature-feels-like",children:["Feels like ",l.current.feelslike_c," \xb0C"]}),Object(s.jsx)("img",{src:l.current.condition.icon,alt:l.current.condition.text}),Object(s.jsx)("div",{className:"weather-condition-text",children:l.current.condition.text}),Object(s.jsxs)("div",{className:"last-updated-info",children:["Last updated: ",l.current.last_updated]})]})})}),Object(s.jsx)(u,{forecastDays:l.forecast.forecastday})]})}):Object(s.jsx)("div",{children:"Loading ..."})}),O=(t(32),function(){var e,c=Object(j.e)(),t=Object(j.d)(),n=null!==(e=new URLSearchParams(c.search).get("term"))&&void 0!==e?e:"",i=Object(a.useState)(n),r=Object(o.a)(i,2),l=r[0],d=r[1],h=Object(a.useState)(!0),b=Object(o.a)(h,2),m=b[0],u=b[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"search-by-location-wrapper",children:Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),void 0===l||""===l?u(!1):(u(!0),t.push("?term=".concat(l)))},children:Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"col-8",children:[Object(s.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Search location",value:l,onChange:function(e){d(e.target.value),void 0!==e.target.value&&""!==e.target.value.trim()&&u(!0)}}),!m&&Object(s.jsx)("span",{children:"Choose location"})]}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-light btn-block btn-lg",children:"Seach"})})]})})}),Object(s.jsx)(x,{})]})});t(33);var v=function(){var e=d(),c="dawn";return e.isDay()&&(c="day"),e.isSusnetDusk()&&(c="sunset-dusk"),e.isNight()&&(c="night"),c="wrapper "+c,Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{className:c,children:[Object(s.jsx)("header",{className:"App-header"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"app-wrapper",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(O,{})})})})})]})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),p()}},[[34,1,2]]]);
//# sourceMappingURL=main.712a94fb.chunk.js.map