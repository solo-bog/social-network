(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{102:function(e,s,a){"use strict";a.r(s);var t=a(16),i=a(15),c=a(51),n=a(1),o=(a(0),a(21)),d=a(90),l=a.n(d),g=a(8),r=function(e){var s=e.id,a=e.img,t=e.name,i="/dialogs/".concat(s);return Object(n.jsxs)(g.b,{className:l.a.dialog,to:i,activeClassName:l.a.active,children:[Object(n.jsx)("div",{className:l.a.dialogImage,children:Object(n.jsx)("img",{src:a,alt:"avatar"})}),Object(n.jsx)("div",{className:l.a.dialogsInfo,children:Object(n.jsx)("span",{children:t})})]})},j=function(e){var s=e.isMy,a=e.message;return Object(n.jsxs)("div",{className:"".concat(l.a.message," ").concat(s?l.a.myMessage:""),children:[Object(n.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859",alt:"foto"}),Object(n.jsx)("div",{className:l.a.messageText,children:a})]})},m=a(33),u=a(17),b=function(e){return Object(n.jsx)(o.b,{onSubmit:function(s){e.addNewMessage(s.textMessage)},children:function(e){var s=e.handleSubmit;return Object(n.jsxs)("form",{className:l.a.messagesInput,onSubmit:s,children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{validate:u.c,placeholder:"Enter text...",name:"textMessage",component:m.b})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",children:"Send"})})]})}})},_=function(e){var s=e.dialogsPage,a=e.addNewMessage,t=s,i=t.dialogs.map((function(e){return Object(n.jsx)(r,{name:e.name,id:e.id,img:e.img},e.id)})),c=t.messages.map((function(e){return Object(n.jsx)(j,{message:e.message,id:e.id,isMy:e.isMy},e.id)}));return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:l.a.dialogs,children:[Object(n.jsx)("div",{className:l.a.dialogsItems,children:i}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:l.a.messages,children:c}),Object(n.jsx)("div",{children:Object(n.jsx)(b,{addNewMessage:a})})]})]})})},x=a(89);s.default=Object(i.d)(x.a,Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addNewMessage:function(s){e(Object(c.a)(s))}}})))(_)},89:function(e,s,a){"use strict";var t=a(1),i=(a(0),a(5)),c=a(16),n=function(e){return{isAuth:e.auth.isAuth}};s.a=function(e){return Object(c.b)(n)((function(s){return s.isAuth?Object(t.jsx)(e,{}):Object(t.jsx)(i.a,{to:"/login"})}))}},90:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__S0nSV",dialogsItems:"Dialogs_dialogsItems__2mGt1",dialog:"Dialogs_dialog__e-fNE",active:"Dialogs_active__G_DeA",dialogImage:"Dialogs_dialogImage__1JP85",dialogsInfo:"Dialogs_dialogsInfo__2bIyR",messages:"Dialogs_messages__2ITMS",message:"Dialogs_message__3w7Hx",myMessage:"Dialogs_myMessage__3YYGz",messageText:"Dialogs_messageText__1Yxzl",messagesInput:"Dialogs_messagesInput__Id-x5"}}}]);
//# sourceMappingURL=5.105b86cb.chunk.js.map