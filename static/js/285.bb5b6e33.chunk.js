"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{6255:function(e,n,t){t.d(n,{C1:function(){return o},Do:function(){return d},FO:function(){return s},JE:function(){return l},T9:function(){return c},fM:function(){return m}});var r,a=t(1413),i=t(184),o=function(e){return e||"number"===typeof e?void 0:"Required"},s=(r=15,function(e){return e&&e.length>r?"Must be ".concat(r," characters or less"):void 0}),u=function(e){return function(n){return n&&n.length<e?"Must be ".concat(e," characters or more"):void 0}},l=u(2),c=u(7),d=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},m=function(e){var n=e.input,t=e.label,r=e.type,o=e.meta,s=o.touched,u=o.error,l=o.warning;return(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:t}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",(0,a.Z)((0,a.Z)({},n),{},{placeholder:t,type:r})),s&&(u&&(0,i.jsx)("span",{children:u})||l&&(0,i.jsx)("span",{children:l}))]})]})}},285:function(e,n,t){t.r(n);var r=t(2791),a=t(8687),i=t(6139),o=t(1232),s=t(9273),u=t(6255),l=t(184);n.default=(0,o.Z)({form:"register"})((function(e){var n=e.handleSubmit,t=e.pristine,o=e.reset,c=e.submitting,d=(0,a.I0)(),m=(0,r.useRef)(null),f=function(e){(e.email||e.password||e.name)&&(m.current=d((0,s.z2)({name:e.name,email:e.email,password:e.password})))};return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(f)(e)},children:[(0,l.jsx)(i.Z,{name:"name",type:"text",component:u.fM,label:"Name",validate:[u.C1,u.JE]}),(0,l.jsx)(i.Z,{name:"email",type:"email",component:u.fM,label:"Email",validate:[u.C1,u.Do]}),(0,l.jsx)(i.Z,{name:"password",type:"password",component:u.fM,label:"Password",validate:[u.C1,u.FO,u.T9]}),(0,l.jsx)(i.Z,{name:"confirm_password",type:"password",component:u.fM,label:"Confirm Password",validate:[u.C1,u.FO,u.T9]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{type:"submit",disabled:t||c,children:"Submit"}),(0,l.jsx)("button",{type:"button",disabled:t||null===m.current,onClick:function(){var e;return null===(e=m.current)||void 0===e?void 0:e.abort()},children:"Cancel register"}),(0,l.jsx)("button",{type:"button",disabled:t||c,onClick:o,children:"Clear Form"})]})]})}))}}]);
//# sourceMappingURL=285.bb5b6e33.chunk.js.map