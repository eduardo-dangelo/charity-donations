(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(n,t,e){n.exports=e(71)},46:function(n,t,e){},47:function(n,t,e){},71:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(16),i=e.n(o),c=(e(46),e(3)),l=e(4),u=e(7),s=e(5),p=e(6),d=e(2),f=(e(47),e(10)),m=e(11),h=e(15),b=e(23),g=e.n(b),v="SET_CHARITY",y="SET_DONATIONS",O="SET_LOADING_STATUS",j="SET_ERROR",E={isLoading:!1,donations:[],charity:null,error:null};var x=function(n){return{type:O,payload:n}},w=function(n){return{type:v,payload:n}},k=function(n){return{type:y,payload:n}},C=function(n){return{type:v,payload:n}},D={getCharity:function(n){var t="https://api.justgiving.com/".concat("e68b7227","/v1/charity/").concat(n);return function(n){return n(x(!0)),n(w(null)),g.a.get(t).then(function(t){n(x(!1)),n(w(t.data))}).catch(function(t){n(x(!1)),n(C(t))})}},getCharityDonations:function(n){var t="https://api.justgiving.com/".concat("e68b7227","/v1/charity/").concat(n,"/donations");return function(n){return n(x(!0)),n(k({donations:[]})),g.a.get(t).then(function(t){n(x(!1)),n(k(t.data))}).catch(function(t){n(x(!1)),n(C(t))})}}},_=e(1);function S(){var n=Object(d.a)(["\n  margin: 0;\n  font-weight: 300;\n"]);return S=function(){return n},n}function T(){var n=Object(d.a)(["\n  background: #fdfdfe;\n  border-bottom: 1px solid lightgray;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return T=function(){return n},n}var N=_.a.div(T()),A=_.a.h2(S()),R=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"handleChange",value:function(n){var t=this.props.actions;t.getCharity(n.target.value),t.getCharityDonations(n.target.value)}},{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(A,null,"Charity Donations"),r.a.createElement("select",{onChange:this.handleChange.bind(this)},r.a.createElement("option",{value:"183092"},"British Heart Foundation"),r.a.createElement("option",{value:"2116"},"Macmimlan Cancer Support"),r.a.createElement("option",{value:"2357"},"Cancer Research UK"),r.a.createElement("option",{value:"13441"},"Ofam"),r.a.createElement("option",{value:"183560"},"National Trust"),r.a.createElement("option",{value:"1870"},"Save the Children")))}}]),t}(r.a.Component),F=Object(m.b)(null,function(n){return{actions:Object(f.b)(D,n)}})(R);function I(){var n=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n  \n  img {\n    flex: 1;\n    width: 100%;\n  }\n"]);return I=function(){return n},n}function U(){var n=Object(d.a)(["\n  text-align: justify;\n"]);return U=function(){return n},n}function L(){var n=Object(d.a)(["\n  width: 200px;\n  margin-right: 30px;\n"]);return L=function(){return n},n}var W=_.a.div(L()),z=_.a.p(U()),X=_.a.div(I()),B=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.charity;return r.a.createElement(W,null,r.a.createElement(X,null,r.a.createElement("img",{src:n.logoAbsoluteUrl,alt:""})),r.a.createElement(z,null,n.description))}}]),t}(r.a.Component),H=e(17),J=e.n(H),M=e(38),V=e.n(M),G=e(18);function K(){var n=Object(d.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  \n  svg {\n    font-size: 3rem;\n    color: lightgray;\n    animation: "," 1.4s linear infinite;\n  }\n"]);return K=function(){return n},n}function Y(){var n=Object(d.a)(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(359deg); }\n"]);return Y=function(){return n},n}var Z=Object(_.b)(Y()),$=_.a.div(K(),Z),q=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(G.b,null))}}]),t}(r.a.Component);function P(){var n=Object(d.a)(["\n  text-align: left;\n  width: auto;\n  float: left;\n  \n  svg {\n    font-size: 2rem;\n  }\n"]);return P=function(){return n},n}function Q(){var n=Object(d.a)(["\n  max-width: 300px;\n  \n  p {\n    margin-top: 0;\n  }\n"]);return Q=function(){return n},n}function nn(){var n=Object(d.a)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: flex-start;\n  padding: 15px 15px 0;\n  transition: .3s ease;\n  border-radius: 4px;\n  \n  &:hover {\n    background: white;\n    box-shadow: 0 2px 6px rgba(0,0,0,0.1);\n    cursor: pointer;\n    \n    "," {\n      border-color: transparent;\n    }\n  }\n  \n  img {\n    width: 50px;\n    height: 50px;\n    margin-right: 15px;\n    border-radius: 50%;\n    box-shadow: 0 2px 6px rgba(0,0,0,0.1);\n  }\n  \n  &:last-child {\n  \n    "," {\n      border-bottom: none;\n    }\n  }\n  \n  h3 {\n    color: #ac29b5;\n    margin: 0;\n  }\n \n"]);return nn=function(){return n},n}function tn(){var n=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  align-items: flex-start;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n"]);return tn=function(){return n},n}function en(){var n=Object(d.a)(["\n  margin-top: 30px;\n"]);return en=function(){return n},n}var an=_.a.div(en()),rn=_.a.div(tn()),on=_.a.div(nn(),rn,rn),cn=_.a.div(Q()),ln=_.a.div(P()),un=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.donations;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Donations"),r.a.createElement(an,null,r.a.createElement(J.a,{bottom:!0,cascade:!0},r.a.createElement("div",null,n.length>0&&n.map(function(n,t){return r.a.createElement(on,{key:t},r.a.createElement("img",{src:n.imageUrl,alt:n.donorDisplayName}),r.a.createElement(rn,null,r.a.createElement(cn,null,r.a.createElement("h2",null,n.donorDisplayName),r.a.createElement("p",null,n.message)),r.a.createElement("h3",null,r.a.createElement(V.a,{top:!0,cascade:!0},r.a.createElement("div",null,n.amount&&"\xa3".concat(n.amount.toFixed(2)))))))}))),0===n.length&&r.a.createElement(ln,null,r.a.createElement(q,null))))}}]),t}(r.a.Component);function sn(){var n=Object(d.a)(['\n  background: #28b12c;\n  padding: 8px 25px;\n  border: none;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  float: left;\n  \n  svg {\n    margin-left: 5px;\n  }\n  \n  &:before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    transform: rotateZ(-45deg);\n    background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,0));\n    position: absolute;\n    left: -100%;\n    opacity: .2;\n  }\n  \n  &:hover {\n    box-shadow: inset 0 2px 8px rgba(0,0,0,0.2);\n    \n    &:before {\n      left: 100%;\n      transition: .4s ease;\n    }\n  }\n']);return sn=function(){return n},n}function pn(){var n=Object(d.a)(['\n  float: left;\n  width: 50%;\n  margin-bottom: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  \n  p {\n    float: left;\n  }\n \n  h1 {\n    color: #ac29b5;\n    font-size: 2.5rem;\n    position: relative;\n    cursor: pointer;\n    float: left;\n    \n    &:before {\n      content: "";\n      position: absolute;\n      width: 0;\n      height: 2px;\n      background: #ac29b5;\n      bottom: 2px;\n      transition: .4s ease;\n      \n    }\n    \n    &:hover {\n      &:before {\n        width: 100%;\n      }\n    }\n  }\n']);return pn=function(){return n},n}function dn(){var n=Object(d.a)(["\n  margin: 15px 0;\n  width: 100%;\n  overflow: auto;\n"]);return dn=function(){return n},n}var fn=_.a.div(dn()),mn=_.a.div(pn()),hn=_.a.button(sn()),bn=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.charity;return r.a.createElement(r.a.Fragment,null,n.donationDisplayAmounts&&r.a.createElement(fn,null,n.donationDisplayAmounts.map(function(n){return r.a.createElement(mn,{key:n.amount},r.a.createElement("h1",null,r.a.createElement(J.a,{cascade:!0},r.a.createElement("div",null,n.name))),r.a.createElement("p",null,n.description),r.a.createElement(hn,null,"Donate",r.a.createElement(G.a,null)))})))}}]),t}(r.a.Component);function gn(){var n=Object(d.a)(["\n  max-width: 600px;\n  width: 100%;\n  display: table;\n  \n  \n  h1, h2 {\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: 5px;\n    font-weight: 300;\n  }\n"]);return gn=function(){return n},n}function vn(){var n=Object(d.a)(["\n  border: 1px solid lightgray;\n  padding: 15px;\n  display: flex;\n  align-items: stretch;\n  justify-content: flex-start;\n  margin: auto;\n  max-width: 800px;\n  background: #fbfcfd;\n  border-radius: 4px;\n  font-weight: 300;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  min-height: 400px;\n"]);return vn=function(){return n},n}var yn=_.a.div(vn()),On=_.a.div(gn()),jn=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.charityDonations,t=n.charity,e=n.donations;return r.a.createElement(yn,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{charity:t}),r.a.createElement(On,null,r.a.createElement("h1",null,t.name),r.a.createElement("h2",null,t.impactStatementWhat),r.a.createElement("h2",null,t.impactStatementWhy),r.a.createElement(bn,{charity:t}),r.a.createElement(un,{donations:e}))):r.a.createElement(q,null))}}]),t}(r.a.Component),En=Object(m.b)(function(n){return{charityDonations:n.charityDonations}})(jn);function xn(){var n=Object(d.a)(["\n  padding: 15px;\n"]);return xn=function(){return n},n}var wn=_.a.div(xn()),kn=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(l.a)(t,[{key:"componentWillMount",value:function(){var n=this.props.actions;n.getCharity("183092"),n.getCharityDonations("183092")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(wn,null,r.a.createElement(En,null)))}}]),t}(a.Component),Cn=Object(m.b)(null,function(n){return{actions:Object(f.b)(D,n)}})(kn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Dn=Object(f.c)({charityDonations:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(h.a)({},n,{charity:t.payload});case y:return Object(h.a)({},n,{donations:t.payload.donations});case O:return Object(h.a)({},n,{isLoading:t.payload});case j:return Object(h.a)({},n,{error:t.payload});default:return n}}}),_n=e(39),Sn=Object(f.a)(_n.a)(f.d);i.a.render(r.a.createElement(m.a,{store:Sn(Dn,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(Cn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.e9c929a8.chunk.js.map