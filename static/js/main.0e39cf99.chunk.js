(this["webpackJsonpnew-react-project"]=this["webpackJsonpnew-react-project"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=(n(13),n(5)),i=(n(14),n(1)),s=n(2),u=n(4),m=n(3),d=o.a.createContext(),p={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginTop:"1.5rem"},input:{margin:"1rem"}};var f=function(e){var t=e.todo,n=e.index,l=e.onChange,r=Object(a.useContext)(d).removeTodo,c=["chkbox"];return t.completed&&c.push("done"),o.a.createElement("ul",null,o.a.createElement("label",null,o.a.createElement("li",{className:"li-items",style:p.li},o.a.createElement("span",{className:c.join(" ")},o.a.createElement("input",{type:"checkbox",checked:t.completed,style:p.input,onChange:function(){return l(t.id)}}),o.a.createElement("span",null),o.a.createElement("strong",null,n+1)," \xa0 ",t.title),o.a.createElement("button",{className:"rm",onClick:r.bind(null,t.id)},"\xd7"))))},h={ul:{listStyle:"none",margin:0,padding:0}},E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){localStorage.setItem("itemKey",JSON.stringify(this.props.todos))}},{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("itemKey"));console.log(this.props.todos),console.log(e),console.log(null===e),null==e?this.props.setLocalTodo(this.props.todos):this.props.setLocalTodo(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("ul",{style:h.ul},this.props.todos.map((function(t,n){return o.a.createElement(f,{todo:t,key:t.id,index:n,onChange:e.props.onToggle})})))}}]),n}(o.a.Component),g=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"}},o.a.createElement("div",{className:"lds-dual-ring"}))},b=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={isOpen:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"info-button infb1-s infb1-p",onClick:function(){return e.setState({isOpen:!0})}},"Information"),this.state.isOpen&&o.a.createElement("div",{className:"modal",onClick:function(){return e.setState({isOpen:!1})}},o.a.createElement("div",{className:"modal-body"},o.a.createElement("h1",null,"Information about this Todo"),o.a.createElement("p",null,"You can create new tasks, highlight completed ones, and delete redundant ones "),o.a.createElement("div",{className:"anim-button"},o.a.createElement("a",{onClick:function(){return e.setState({isOpen:!1})}},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),"Close")))))}}]),n}(o.a.Component)),v=o.a.lazy((function(){return n.e(3).then(n.bind(null,17))}));var y=function(){var e=o.a.useState([]),t=Object(c.a)(e,2),n=t[0],l=t[1],r=o.a.useState(!0),i=Object(c.a)(r,2),s=i[0],u=i[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){setTimeout((function(){l(e),u(!1)}),2e3)}))}),[]),o.a.createElement(d.Provider,{value:{removeTodo:function(e){l(n.filter((function(t){return t.id!==e})))}}},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"head-title"},o.a.createElement("h1",null,"Todo list"),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement(b,null)),o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("p",null,"Loading....")},o.a.createElement(v,{onCreate:function(e){l(n.concat([{title:e,id:Date.now(),completed:!1}]))}})),s&&o.a.createElement(g,null),n.length?o.a.createElement(E,{setLocalTodo:function(e){l(n=e)},todos:n,onToggle:function(e){l(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):s?null:o.a.createElement("p",null,"No todos!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0e39cf99.chunk.js.map