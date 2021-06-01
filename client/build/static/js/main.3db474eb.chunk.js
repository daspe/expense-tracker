(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),o=n(0),i=function(){return Object(o.jsx)("h2",{children:"Expense Tracker"})},u=n(4),l=n.n(u),j=n(8),d=n(5),b=n(20),O=n(3),p=function(t,e){switch(e.type){case"GET_TRANSACTIONS":return Object(O.a)(Object(O.a)({},t),{},{loading:!1,transactions:e.payload});case"DELETE_TRANSACTION":return Object(O.a)(Object(O.a)({},t),{},{transactions:t.transactions.filter((function(t){return t._id!==e.payload}))});case"ADD_TRANSACTION":return Object(O.a)(Object(O.a)({},t),{},{transactions:[].concat(Object(b.a)(t.transactions),[e.payload])});case"TRANSACTION_ERROR":return Object(O.a)(Object(O.a)({},t),{},{error:e.payload});default:return t}},h=n(9),x=n.n(h),f={transactions:[],error:null,loading:!0},m=Object(a.createContext)(f),v=function(t){var e=t.children,n=Object(a.useReducer)(p,f),r=Object(d.a)(n,2),c=r[0],s=r[1];function i(){return(i=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("/api/v1/transactions");case 3:e=t.sent,s({type:"GET_TRANSACTIONS",payload:e.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var u=function(){var t=Object(j.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.delete("/api/v1/transactions/".concat(e));case 3:s({type:"DELETE_TRANSACTION",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(j.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,x.a.post("/api/v1/transactions",e,n);case 4:a=t.sent,s({type:"ADD_TRANSACTION",payload:a.data.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsx)(m.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return i.apply(this,arguments)},deleteTransaction:u,addTransaction:b},children:e})},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-latn",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"USD";return t.toLocaleString(e,{style:"currency",currency:n})},N=function(){var t=Object(a.useContext)(m).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Your Balance"}),Object(o.jsx)("h1",{style:t<0?{color:"#c0392b"}:{},children:y(t)})]})},T=function(){var t=Object(a.useContext)(m).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0),n=Math.abs(t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0));return Object(o.jsxs)("div",{className:"inc-exp-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Income"}),Object(o.jsxs)("p",{className:"money plus",children:["+",y(e)]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Expense"}),Object(o.jsxs)("p",{className:"money minus",children:["-",y(n)]})]})]})},A=function(t){var e=t.data,n=Object(a.useContext)(m).deleteTransaction,r=e.amount<0?"-":"+";return Object(o.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text,Object(o.jsxs)("span",{children:[r,y(Math.abs(e.amount))]}),Object(o.jsx)("button",{className:"delete-btn",onClick:function(){return n(e._id)},children:"x"})]})},R=function(){var t=Object(a.useContext)(m),e=t.transactions,n=t.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"History"}),Object(o.jsx)("ul",{className:"list",children:0===e.length?Object(o.jsx)("h5",{children:"No transaction history..."}):e.map((function(t){return Object(o.jsx)(A,{data:t},t._id)}))})]})},C=function(){var t=Object(a.useState)(""),e=Object(d.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(0),s=Object(d.a)(c,2),i=s[0],u=s[1],l=Object(a.useState)("+"),j=Object(d.a)(l,2),b=j[0],O=j[1],p=Object(a.useContext)(m).addTransaction;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Add new transaction"}),Object(o.jsxs)("div",{className:"transaction-type",children:[Object(o.jsx)("button",{className:"btn ".concat("+"===b?"trans-income-btn":"trans-default-btn"),onClick:function(){return O("+")},children:"Income"}),Object(o.jsx)("button",{className:"btn ".concat("-"===b?"trans-expense-btn":"trans-default-btn"),onClick:function(){return O("-")},children:"Expense"})]}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:Math.abs(+i)*("+"===b?1:-1)};p(e),r(""),u(0)},children:[Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"text",children:"Text"}),Object(o.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(o.jsx)("input",{type:"number",value:i,onChange:function(t){return u(t.target.value)},placeholder:"Enter amount..."})]}),Object(o.jsx)("button",{className:"btn",type:"submit",children:"Add transaction"})]})]})};n(45);var g=function(){return Object(o.jsxs)(v,{children:[Object(o.jsx)(i,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(N,{}),Object(o.jsx)(T,{}),Object(o.jsx)(C,{}),Object(o.jsx)(R,{})]})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3db474eb.chunk.js.map