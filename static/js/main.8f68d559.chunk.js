(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(4),a=n.n(c),o=(n(14),n(3)),i=n.n(o),u=n(5),h=n(6),l=n(7),j=n(9),d=n(8),m=(n(16),n(0)),x=function(e){return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(m.jsx)("h2",{children:e.monster.name}),Object(m.jsx)("p",{children:e.monster.email})]})},f=(n(18),function(e){return Object(m.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(m.jsx)(x,{monster:e})}))})}),p=(n(19),function(e){var t=e.placeHolder,n=e.handleTextChange;return Object(m.jsx)("input",{className:"search-box",type:"search",placeHolder:t,onChange:n})}),b=(n(20),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={monsters:[{name:"sharooq"},{name:"naveen"},{name:"jefree"}],searchText:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,this.setState({monsters:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchText,s=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Monsters Rolodex"}),Object(m.jsx)(p,{placeHolder:"Search Text",handleTextChange:function(t){return e.setState({searchText:t.target.value})}}),Object(m.jsx)(f,{monsters:s})]})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.8f68d559.chunk.js.map