(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{17:function(e,t,a){e.exports={redMax:"Setter_redMax__UsxFx",redMin:"Setter_redMin__1xH9q",button:"Setter_button__2jvAp",buttons:"Setter_buttons__3K-o-",wrapper:"Setter_wrapper__1vkXw",twiceWrapper:"Setter_twiceWrapper__1PfdL",errorSpan:"Setter_errorSpan__2gcgw",span:"Setter_span__PuzYk"}},34:function(e,t,a){e.exports={display:"Display_display__3Eivr",displayRed:"Display_displayRed__uTMEE",errorMessage:"Display_errorMessage__1jv14"}},35:function(e,t,a){e.exports={buttons:"Counter_buttons__eOKAl",wrapper:"Counter_wrapper__3TaDN",setterButton:"Counter_setterButton__16Pd4"}},53:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),u=(a(53),a(23)),l=(a(54),a(92)),i=a(6),o=function(e){return Object(i.jsx)(l.a,{variant:"contained",color:"primary",onClick:e.callback,disabled:e.disable,children:e.title})},b=a(34),j=a.n(b),d=function(e){return Object(i.jsx)("div",{className:e.count===e.maxCount?j.a.displayRed:j.a.display,children:e.count})},p=a(35),x=a.n(p),O=function(e){return Object(i.jsxs)("div",{className:x.a.wrapper,children:[Object(i.jsx)(d,{maxCount:e.maxCount,count:e.count}),Object(i.jsxs)("div",{className:x.a.buttons,children:[Object(i.jsx)(o,{title:"inc",callback:e.incrementCount,disable:e.maxCount===e.count}),Object(i.jsx)(o,{title:"reset",callback:e.resetCounter,disable:e.count===e.startValue}),Object(i.jsx)(o,{title:"Set",callback:function(){e.setRender(!1)}})]})]})},_=a(91),f=function(e){return Object(i.jsx)(_.a,{id:"standard-basic",type:"number",label:e.title,value:e.value,onChange:e.callback})},v=a(17),m=a.n(v),S=function(e){var t=e.maxValue<0||e.maxValue===e.startValue||e.startValue<0||e.maxValue<e.startValue;return Object(i.jsx)("div",{className:m.a.wrapper,children:Object(i.jsxs)("div",{className:m.a.twiceWrapper,children:[Object(i.jsxs)("div",{className:m.a.inputs,children:[Object(i.jsx)("div",{children:Object(i.jsx)(f,{value:e.maxValue,callback:function(t){e.setMax(Number(t.currentTarget.value))},title:"Max value"})}),Object(i.jsx)("div",{children:Object(i.jsx)(f,{value:e.startValue,callback:function(t){e.setMin(Number(t.currentTarget.value))},title:"Min value"})})]}),t?Object(i.jsx)("span",{className:m.a.errorSpan,children:"Incorrect value!"}):Object(i.jsx)("span",{className:m.a.span,children:"Set value"}),Object(i.jsx)("div",{className:m.a.buttons,children:Object(i.jsx)(o,{disable:t,callback:function(){e.setMax(e.maxValue),e.setCounter(e.startValue),e.setRender(!0)},title:"Set"})})]})})};var g=function(){var e=Object(n.useState)(5),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(u.a)(c,2),l=s[0],o=s[1],b=a,j=l,d=Object(n.useState)(j),p=Object(u.a)(d,2),x=p[0],_=p[1];Object(n.useEffect)((function(){var e=localStorage.getItem("counterMaxValue");if(e){var t=JSON.parse(e);t>0&&r(t)}}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("counterMinValue");if(e){var t=JSON.parse(e);t>=0&&(o(t),_(t))}}),[]),Object(n.useEffect)((function(){localStorage.setItem("counterMaxValue",JSON.stringify(a))}),[a]),Object(n.useEffect)((function(){localStorage.setItem("counterMinValue",JSON.stringify(l))}),[l]);var f=Object(n.useState)(!0),v=Object(u.a)(f,2),m=v[0],g=v[1];return Object(i.jsx)("div",{className:"App",children:m?Object(i.jsx)(O,{startValue:j,maxCount:b,count:x,incrementCount:function(){x<b&&_(++x)},resetCounter:function(){_(j)},setRender:g}):Object(i.jsx)(S,{setCounter:_,maxValue:a,setMax:r,startValue:l,setMin:o,setRender:g})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),h()}},[[61,1,2]]]);
//# sourceMappingURL=main.8224684b.chunk.js.map