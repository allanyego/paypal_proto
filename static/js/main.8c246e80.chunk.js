(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(4),r=a(7),l=a(6),s=a(0),o=a.n(s),u=a(5),i=a(1);function m(){var e=Object(s.useState)(.5),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),r=Object(i.a)(c,2),l=r[0],u=r[1],m=Object(s.useState)(!1),d=Object(i.a)(m,2),v=d[0],b=d[1],f=Object(s.useState)(""),E=Object(i.a)(f,2),h=E[0],j=E[1],O=Object(s.useRef)(a),g=Object(s.useRef)(l),N=function(e,t){if(!g.current)return t.order.create({purchase_units:[{amount:{value:O.current},payee:{email_address:"sb-vxlkm2646812@personal.example.com"}}]});b(!0)},y=function(e,t){return t.order.capture().then((function(e){var t=Object(i.a)(e.purchase_units,1)[0],a=t.amount,n=t.shipping;j("Successfully sent ".concat(a.currency_code+a.value," to ").concat(n.name.full_name,"."))}))};Object(s.useEffect)((function(){var e=window.paypal;e&&e.Buttons({createOrder:N,onApprove:y}).render("#paypal-btn-container")}),[]);return o.a.createElement("div",{className:"columns is-vcentered",style:{height:"100vh",justifyContent:"center"}},o.a.createElement("div",{className:"column is-one-third"},!!h&&o.a.createElement(p,{variant:"is-success",onClose:function(){return j("")}},h),v&&o.a.createElement(p,{variant:"is-danger",onClose:function(){b(!1)}},"You can send at least ",o.a.createElement("strong",null,"$0.50"),"."),o.a.createElement("div",{className:"card px-3 pt-4"},o.a.createElement("div",{className:"content"},o.a.createElement("form",null,o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"label"},"Amount to send ($)"),o.a.createElement("div",{className:"control".concat(l?" has-icons-right":"")},o.a.createElement("input",{className:"input",type:"number",onChange:function(e){var t=+e.target.value||0,c=t<.5;u(c),g.current=c,c||b(!1),n(t),O.current=t,console.log("Data",a,l)},value:a,placeholder:"e.g 43.55"}),l&&o.a.createElement("span",{className:"icon is-small is-right"},o.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),l&&o.a.createElement("p",{className:"help is-danger"},"Value should be at least 0.50")),o.a.createElement("div",{id:"paypal-btn-container"}))))))}function p(e){var t=e.variant,a=e.onClose,n=e.children;return o.a.createElement("div",{className:"notification ".concat(t||"")},o.a.createElement("button",{className:"delete",onClick:a}),n)}a(13);var d=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={name:"React"},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(m,null)}}]),a}(s.Component);Object(u.render)(o.a.createElement(d,null),document.getElementById("app"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8c246e80.chunk.js.map