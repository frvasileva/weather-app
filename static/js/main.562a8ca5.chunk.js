(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{115:function(e,c,s){},178:function(e,c,s){},179:function(e,c,s){},313:function(e,c,s){},316:function(e,c,s){},317:function(e,c,s){},318:function(e,c,s){},319:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s(0),n=s.n(a),i=s(78),r=s.n(i),l=(s(178),s(15)),d=s(79),j=s(18),o=(s(179),function(e){var c=e.hours;return Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md",children:Object(t.jsx)("ul",{className:"temperature-by-hour-list-wrapper",children:c.map((function(e){return Object(t.jsx)("li",{className:"hour-item",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-4 col-3",children:Object(t.jsx)("div",{className:"item-wrapper",children:Object(t.jsxs)("p",{children:[" ",e.time.split(" ")[1]]})})}),Object(t.jsx)("div",{className:"col-md-1 col-1",children:Object(t.jsx)("img",{className:"icon weather-icon",src:e.condition.icon,alt:e.condition.text})}),Object(t.jsx)("div",{className:"col-md-3 col-4",children:Object(t.jsx)("p",{className:"condition-text-small",children:e.condition.text})}),Object(t.jsx)("div",{className:"col-md-4 col-3",children:Object(t.jsx)("p",{className:"temperature-value",children:Object(t.jsxs)("strong",{children:[e.temp_c.toFixed()," \xb0C "]})})})]})},e.time)}))})})})})}),h=s(322),m=s(167),b=s(326),u=s(163),x=s(164),O=s(70),v=(s(115),function(e){var c=e.element,s=c.hour.map((function(e){return{x:e.time.substr(11,6),y:e.temp_c,label:e.time.substr(11,6),style:{fontSize:10},rotation:34,labelAnchorY:e.time.substr(11,6),chance_of_rain:e.chance_of_rain,humidity:e.humidity,icon:e.condition.icon}}));function a(e){var c=e.payload,s=e.label;return e.active?Object(t.jsxs)("div",{className:"custom-tooltip",children:[Object(t.jsxs)("span",{className:"label",children:[s," \u0447. "]}),Object(t.jsx)("hr",{}),Object(t.jsx)("img",{src:c[0].payload.icon,alt:"weather icon",className:"weather-icon"}),Object(t.jsxs)("span",{className:"value",children:[Math.round(c[0].value),"\xb0C "]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("span",{className:"desc",children:[c[0].payload.chance_of_rain,"% Rain"]}),Object(t.jsxs)("span",{className:"desc",children:[c[0].payload.humidity,"% Humidity"]})]}):null}return e.isExpanded?Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-4 item-wrapper",children:[Object(t.jsx)("span",{className:"wi wi-humidity",title:"Humidity"}),Object(t.jsxs)("span",{className:"item-value",children:[" ",c.day.avghumidity," %"]}),Object(t.jsx)("span",{className:"weather-label-info",children:"Humidity"})]}),Object(t.jsxs)("div",{className:"col-4 item-wrapper",children:[Object(t.jsx)("span",{className:"wi wi-night-showers",title:"Showers"}),Object(t.jsxs)("span",{className:"item-value",children:[c.day.daily_chance_of_rain," %"]}),Object(t.jsx)("span",{className:"weather-label-info",children:"Rain"})]}),Object(t.jsxs)("div",{className:"col-4 item-wrapper",children:[Object(t.jsx)("span",{className:"wi wi-snowflake-cold",title:"Snow"}),Object(t.jsxs)("span",{className:"item-value",children:[c.day.daily_chance_of_snow," %"]}),Object(t.jsx)("span",{className:"weather-label-info",children:"Snow"})]})]}),Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"col-md",children:[Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsxs)(h.a,{width:500,height:300,data:s,children:[Object(t.jsx)(m.a,{type:"monotone",dataKey:"y",stroke:"#8884d8"}),Object(t.jsx)(b.a,{stroke:"#ccc",strokeDasharray:"3 3"}),Object(t.jsx)(u.a,{dataKey:"x"}),Object(t.jsx)(x.a,{}),Object(t.jsx)(O.a,{content:Object(t.jsx)(a,{})})," "]})]})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md",children:Object(t.jsx)(o,{hours:c.hour})})})]}):Object(t.jsx)("div",{})}),p=function(e){var c=e.element,s=Object(a.useState)(!1),n=Object(l.a)(s,2),i=n[0],r=n[1],d=Object(a.useState)("fas fa-chevron-circle-down"),j=Object(l.a)(d,2),o=j[0],h=j[1],m=new Date(c.date);return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"row weather-by-day-row",onClick:function(){r(!i),h(i?"fas fa-chevron-circle-down":"fas fa-chevron-circle-up")},children:[Object(t.jsx)("div",{className:"col-md-4 col-4",children:Object(t.jsx)("span",{className:"day-of-week",children:m.toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric"})})}),Object(t.jsx)("div",{className:"col-md-2 col-2",children:Object(t.jsx)("img",{src:c.day.condition.icon,alt:c.day.condition.text,className:"small-icon"})}),Object(t.jsx)("div",{className:"col-md-4 col-4",children:Object(t.jsxs)("span",{className:"daily-temperatures",children:[c.day.mintemp_c.toFixed()," /"," ",c.day.maxtemp_c.toFixed()," \xb0C"]})}),Object(t.jsx)("div",{className:"col-md-1 col-2",children:Object(t.jsx)("div",{className:"expander-wrapper",children:Object(t.jsx)("i",{className:o})})})]}),Object(t.jsx)("div",{className:i?"row expanded-row":"row",children:Object(t.jsxs)("div",{className:"col-md",children:[" ",Object(t.jsx)(v,{isExpanded:i,element:c,className:"weather-by-hours"})]})})]})},N=function(e){var c=e.forecastDays;return c?Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{className:"tile-header",children:"Next 3 days:"}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md",children:Object(t.jsx)("ul",{className:"list-group-flush",children:c.map((function(e){return Object(t.jsx)("li",{className:"list-group-item",children:Object(t.jsx)(p,{element:e})},e.date)}))})})})]}):Object(t.jsx)("div",{children:"Loading ..."})},f=function(e){switch(e){case 1:return"Good";case 2:return"Moderate";case 3:return"Unhealthy for sensitive group";case 4:return"Unhealthy";case 5:return"Very Unhealthy";case 6:return"Hazardous";default:return"Info missing"}},w=(s(313),n.a.createContext({weatherType:"sunny",setWeatherType:function(){}})),y=function(e){return console.log("weather",e),e?(e=e.toLowerCase()).includes("rain")?"rain":e.includes("sun")?"sun":e.includes("wind")?"wind":e.includes("fog")?"fog":e.includes("snow")?"snow":e.includes("wind")?"wind":e.includes("sleet")?"sleet":e.includes("cloud")||e.includes("overcast")?"cloud":"n/a":"n/a"},g=function(){var e,c=Object(j.e)(),s=null!==(e=new URLSearchParams(c.search).get("term"))&&void 0!==e?e:"Sofia",n="";""!==s&&(n="//api.weatherapi.com/v1/forecast.json?key=a074730b7e2a496cb3c110546221301&q="+s+"&days=3&aqi=yes&alerts=yes");var i=Object(a.useState)(null),r=Object(l.a)(i,2),d=r[0],o=r[1],h=Object(a.useContext)(w).setWeatherType,m=function(){fetch(n).then((function(e){return e.json()})).then((function(e){e.error&&1006===e.error.code?o(void 0):o(e)}))};h(y(null===d||void 0===d?void 0:d.current.condition.text));return Object(a.useEffect)((function(){m();var e=setInterval((function(){m()}),1e5);return function(){return clearInterval(e)}}),[n]),"undefined"===typeof d?Object(t.jsx)("div",{children:Object(t.jsx)("div",{class:"alert alert-secondary",role:"alert",children:"No such location!"})}):d?Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md",children:Object(t.jsxs)("div",{className:"main-current-weather-info",children:[Object(t.jsxs)("div",{className:"location",children:[d.location.name,", ",d.location.country]}),Object(t.jsxs)("div",{className:"temperature",children:[" ",Math.round(d.current.temp_c)," \xb0C"]}),Object(t.jsxs)("div",{className:"temperature-feels-like",children:["Feels like ",Math.round(d.current.feelslike_c)," \xb0C"]}),Object(t.jsxs)("div",{className:"weather-condition",children:[Object(t.jsx)("img",{src:d.current.condition.icon,alt:d.current.condition.text,className:"weather-icon"}),Object(t.jsx)("span",{className:"weather-condition-text",children:d.current.condition.text})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-4",children:[Object(t.jsx)("span",{className:"label",children:"Air Quality: "}),Object(t.jsxs)("span",{className:"value",children:[" ",f(d.current.air_quality["us-epa-index"])]})]}),Object(t.jsxs)("div",{className:"col-4",children:[Object(t.jsx)("span",{className:"label",children:"Humidity: "}),Object(t.jsxs)("span",{className:"value",children:[" ",d.current.humidity,"%"]})]}),Object(t.jsxs)("div",{className:"col-4",children:[Object(t.jsx)("span",{className:"label",children:"Wind: "}),Object(t.jsxs)("span",{className:"value",children:[d.current.wind_kph," km/h"]})]})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"last-updated-info",children:["Last updated: ",d.current.last_updated]})]})})}),Object(t.jsx)(N,{forecastDays:d.forecast.forecastday})]})}):Object(t.jsx)("div",{children:"Loading ..."})},_=(s(316),function(){var e,c=Object(j.e)(),s=Object(j.d)(),n=null!==(e=new URLSearchParams(c.search).get("term"))&&void 0!==e?e:"",i=Object(a.useState)(n),r=Object(l.a)(i,2),d=r[0],o=r[1],h=Object(a.useState)(!0),m=Object(l.a)(h,2),b=m[0],u=m[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{className:"search-by-location-wrapper",children:Object(t.jsx)("form",{onSubmit:function(e){e.preventDefault(),void 0===d||""===d?u(!1):(u(!0),s.push("?term=".concat(d)))},children:Object(t.jsxs)("div",{className:"form-row",children:[Object(t.jsxs)("div",{className:"col-8",children:[Object(t.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Search location",value:d,onChange:function(e){o(e.target.value),void 0!==e.target.value&&""!==e.target.value.trim()&&u(!0)}}),!b&&Object(t.jsx)("span",{children:"Choose location"})]}),Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("button",{type:"submit",className:"btn btn-light btn-block btn-lg",children:"Seach"})})]})})}),Object(t.jsx)(g,{})]})});s(317),s(318);var S=function(){var e=Object(a.useState)("sunny"),c=Object(l.a)(e,2),s=c[0],n={weatherType:s,setWeatherType:c[1]},i="wrapper "+s;return Object(t.jsx)(d.a,{children:Object(t.jsx)(w.Provider,{value:n,children:Object(t.jsxs)("div",{className:i,children:[Object(t.jsx)("header",{className:"App-header"}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"app-wrapper",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(_,{})})})})})]})})})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,328)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;s(e),t(e),a(e),n(e),i(e)}))};r.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(S,{})}),document.getElementById("root")),k()}},[[319,1,2]]]);
//# sourceMappingURL=main.562a8ca5.chunk.js.map