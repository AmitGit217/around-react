(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/Vector.2f623b33.svg"},23:function(e,t,a){e.exports=a(48)},32:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),i=(a(32),a(22)),l=a(2),u=a(7),s=a(8),m=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(u.a)(this,e),this.baseUrl=a,this.headers=n}return Object(s.a)(e,[{key:"_customFetch",value:function(e,t){return fetch(e,t).then(function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})}},{key:"getUserInfo",value:function(){return this._customFetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers})}},{key:"getInitialCards",value:function(){return this._customFetch("".concat(this.baseUrl,"/cards"),{headers:this.headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._customFetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"PUT"}):this._customFetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"DELETE"})}},{key:"deleteCard",value:function(e){return this._customFetch("".concat(this.baseUrl,"/cards/").concat(e),{headers:this.headers,method:"DELETE"})}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return this._customFetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify({name:t,about:a})})}},{key:"updateAvatarImage",value:function(e){var t=e.avatar;return this._customFetch("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify({avatar:t})})}},{key:"addCard",value:function(e){var t=e.name,a=e.link;return this._customFetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify({name:t,link:a})})}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/cohort-3-en",headers:{authorization:"4f091419-1c89-4f29-928b-74f786fd1208","Content-Type":"application/json"}}),p=(a(41),a(19)),d=a.n(p);function f(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header__vector",src:d.a,alt:"logo"}),c.a.createElement("span",{className:"header__line"}))}a(42);var b=Object(n.createContext)();function _(e){var t=e.card,a=e.likeCounter,r=e.onCardClick,o=e.onDeleteClick,i=e.name,l=e.onLike,u=Object(n.useContext)(b);var s=!!(t.owner._id===u._id)||"card__removeButton_hidden",m=!!t.likes.some(function(e){return e._id===u._id})&&"card__like-button_active ";return c.a.createElement("div",{className:"card",key:t._id},c.a.createElement("img",{className:"card__image",src:t.link,alt:"placeHolder",onClick:function(){r(t)}}),c.a.createElement("button",{className:"card__removeButton ".concat(s),onClick:function(){o(t)}}),c.a.createElement("div",{className:"card__social-brand"},c.a.createElement("h2",{className:"card__caption"},i),c.a.createElement("div",{className:"card__like"},c.a.createElement("button",{className:"card__like-button ".concat(m),type:"button",onClick:function(){l(t)}}),c.a.createElement("p",{className:"card__like-counter"},a))))}function h(e){var t=e.onEditAvatarClick,a=e.onEditProfileClick,r=e.onAddPlaceClick,o=e.onCardClick,i=e.onDeleteClick,l=(e.onDeleteSubmit,e.onLike),u=e.cards,s=Object(n.useContext)(b),m=s.name,p=s.about,d=s.avatar;return c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"profile"},c.a.createElement("img",{className:"profile__avatar-image",alt:"profile",src:d}),c.a.createElement("button",{className:"profile__overlay",onClick:t}),c.a.createElement("div",{className:"profile__info"},c.a.createElement("div",{className:"profile__top-info"},c.a.createElement("h1",{className:"profile__name"},m),c.a.createElement("button",{onClick:a,className:"profile__edit-button",type:"button",id:"profilePopup__edit-button"})),c.a.createElement("p",{className:"profile__description"},p)),c.a.createElement("button",{className:"profile__add-button",type:"button",onClick:r})),c.a.createElement("section",{className:"elements"},u.map(function(e){return c.a.createElement(_,{card:e,key:e._id,link:e.link,name:e.name,likeCounter:e.likes.length,onCardClick:o,onDeleteClick:i,onLike:l})})))}a(43);function v(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2021 Around The U.S."))}var E=a(5),k=a(6);a(44);function C(e){var t=e.isOpen,a=e.onClose,n=e.submitText,r=e.title,o=e.name,i=e.children,l=e.onSubmit;return c.a.createElement("div",{className:"popup popup_type_".concat(o," ").concat(t?"popup_show":"")},c.a.createElement("div",{className:"popup__wrapper"},c.a.createElement("button",{className:"popup__close-button",type:"button",onClick:a}),c.a.createElement("form",{className:"popup__form",onSubmit:l},c.a.createElement("h2",{className:"popup__title"},r),i,c.a.createElement("button",{className:"popup__submit",type:"submit"},n))))}var O=function(e){var t=e.isOpen,a=e.onClose,r=e.onCardsUpdate,o=e.submitText,i=Object(n.useState)({name:"",link:""}),u=Object(l.a)(i,2),s=u[0],m=u[1];function p(e){var t=e.target,a=t.name,n=t.value;m(Object(k.a)({},s,Object(E.a)({},a,n)))}return Object(n.useEffect)(function(){m(function(e){return Object(k.a)({},e,{name:"",link:""})})},[t]),c.a.createElement(C,{name:"addImage",title:"New place",submitText:o||"Create",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:s.name,link:s.link})}},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{onChange:p,value:s.name||"",className:"popup__input",type:"text",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),c.a.createElement("span",{className:"popup__input-error name-input-error"})),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{onChange:p,value:s.link||"",className:"popup__input",type:"url",name:"link",placeholder:"Image Link",required:!0}),c.a.createElement("span",{className:"popup__input-error link-input-error"})))};function g(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"popup popup_image ".concat(e.isOpen?"popup_show":"")},c.a.createElement("div",{className:"popup__wrapper"},c.a.createElement("button",{className:"popup__close-button popup__close-button_image",onClick:e.onClose}),c.a.createElement("img",{className:"popup__image",src:"".concat(e.card.link),alt:e.card.caption}),c.a.createElement("p",{className:"popup__caption"},e.card.caption))))}var N=Object(n.createContext)(),j=Object(n.createContext)();var S=function(e){var t=e.isOpen,a=e.onClose,r=e.onUserUpdate,o=e.submitText,i=Object(n.useContext)(b),u=i.name,s=i.about,m=Object(n.useState)({name:u,about:s}),p=Object(l.a)(m,2),d=p[0],f=p[1];function _(e){var t=e.target,a=t.name,n=t.value;f(Object(k.a)({},d,Object(E.a)({},a,n)))}return Object(n.useEffect)(function(){f({name:u,about:s})},[u,s]),c.a.createElement(C,{isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:d.name,about:d.about})},name:"editProfileText",title:"Edit profile",submitText:o||"Save"},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{className:"popup__input",name:"name",type:"text",placeholder:"Full Name",minLength:2,maxLength:40,required:!0,value:d.name||"",onChange:_}),c.a.createElement("span",{className:"popup__input-error name-input-error"})),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{className:"popup__input",name:"about",type:"text",placeholder:"Description",minLength:2,maxLength:200,required:!0,value:d.about||"",onChange:_}),c.a.createElement("span",{className:"popup__input-error job-input-error"})))};var y=function(e){var t=e.isOpen,a=e.onClose,r=e.onAvatarUpdate,o=e.submitText,i=Object(n.useRef)();return Object(n.useEffect)(function(){i.current.value=""},[t]),c.a.createElement(C,{isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({avatar:i.current.value})},name:"editAvatar",title:"Change profile picture",submitText:o||"Save"},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{ref:i,defaultValue:"",className:"popup__input",type:"url",name:"url-input",placeholder:"Image Link",required:!0}),c.a.createElement("span",{className:"popup__input-error url-input-error"})))};var x=function(e){var t=e.onClose,a=e.isOpen,r=e.onSubmitHandler,o=e.submitText,i=Object(n.useContext)(j);return c.a.createElement(C,{name:"confirm",title:"Are you sure?",submitText:o||"Yes",onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),r(i)}})};a(47);var T=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),u=Object(l.a)(o,2),s=u[0],p=u[1],d=Object(n.useState)({}),_=Object(l.a)(d,2),E=_[0],k=_[1],C=Object(n.useState)(!1),T=Object(l.a)(C,2),U=T[0],L=T[1],P=Object(n.useState)(!1),F=Object(l.a)(P,2),D=F[0],w=F[1],A=Object(n.useState)(!1),I=Object(l.a)(A,2),q=I[0],H=I[1],J=Object(n.useState)(!1),B=Object(l.a)(J,2),R=B[0],V=B[1],z=Object(n.useState)({name:"",link:""}),M=Object(l.a)(z,2),Y=M[0],G=M[1],K=Object(n.useState)(""),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Z=Object(n.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1];function ae(){V(!1),L(!1),H(!1),te(!1),w(!1)}function ne(e){X("Saving..."),m.deleteCard(e._id).then(function(t){r(function(t){return t.filter(function(t){return t._id!==e._id})})}).then(ae()).catch(function(e){return console.log(e)}).finally(function(){return X("")})}return Object(n.useEffect)(function(){m.getUserInfo().then(function(e){k(e)}).catch(function(e){return console.log(e)})},[]),Object(n.useEffect)(function(){m.getInitialCards().then(function(e){r(e)}).catch(function(e){return console.log(e)})},[]),c.a.createElement(b.Provider,{value:E},c.a.createElement(N.Provider,{value:a},c.a.createElement(j.Provider,{value:s},c.a.createElement(g,{card:Y,onClose:ae,isOpen:ee,submitText:W}),c.a.createElement(x,{onClose:ae,onSubmitHandler:ne,isOpen:D,submitText:W}),c.a.createElement(y,{isOpen:R,onClose:ae,onAvatarUpdate:function(e){var t=e.avatar;X("Saving..."),m.updateAvatarImage({avatar:t}).then(function(e){k(e)}).then(console.log()).then(ae()).catch(function(e){return console.log(e)}).finally(function(){return X("")})},submitText:W}),c.a.createElement(S,{isOpen:U,onClose:ae,onUserUpdate:function(e){var t=e.name,a=e.about;X("Saving..."),m.setUserInfo({name:t,about:a}).then(function(e){k(e)}).then(ae()).catch(function(e){return console.log(e)}).finally(function(){return X("")})},submitText:W}),c.a.createElement(O,{isOpen:q,onClose:ae,onCardsUpdate:function(e){var t=e.name,n=e.link;X("Saving..."),m.addCard({name:t,link:n}).then(function(e){r([e].concat(Object(i.a)(a)))}).then(ae()).catch(function(e){return console.log(e)}).finally(function(){return X("")})},submitText:W}),c.a.createElement(f,null),c.a.createElement(h,{onAddPlaceClick:function(){H(!0)},onEditProfileClick:function(){L(!0)},onEditAvatarClick:function(){V(!0)},onCardClick:function(e){te(!0),G({name:e.name,link:e.link})},onLike:function(e){var t=e.likes.some(function(e){return e._id===E._id});m.changeLikeCardStatus(e._id,!t).then(function(t){r(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){return console.log(e)})},onDeleteClick:function(e){w(!0),p(e)},onDeleteSubmit:ne,cards:a}),c.a.createElement(v,null))))},U=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,49)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null))),U()}},[[23,3,2]]]);
//# sourceMappingURL=main.c6d25c75.chunk.js.map