(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(2),o=n.n(r),l=(n(14),n(3)),c=n(4),s=n(6),u=n(5),g=n(7),d=(n(16),{container:{width:400,backgroundColor:"rgb(248,248,248)",paddingLeft:15,paddingRight:15,position:"absolute",left:"50%",transform:"translate(-50%)"},itemContainer:{paddingBottom:15},item:{color:"rgb(19,31,49)",textDecoration:"none"},itemGreen:{color:"rgb(0,200,114)",textDecoration:"none"},itemRed:{color:"rgb(254,56,36)",textDecoration:"none"},headerText:{display:"inline-block",width:"80%"},logo:{position:"absolute",top:0,right:0,padding:10,width:"20%"}}),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={list:null,step:0,win:!1,title:null,loading:!1,imageLoading:!1,description:"",imgUrl:""},n.onClick=function(e){var t=e.target.text,i=n.state.step;if(e.preventDefault(),n.setState({title:t,step:i+1}),n.getData(t),n.checkWin(t))return n.setState({win:!0})},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.getRandomPage()}},{key:"getRandomPage",value:function(){var e=this;this.setState({loading:!0}),fetch("https://ru.wikipedia.org/w/api.php?action=query&list=random&rnlimit=5&format=json").then(function(e){return e.json()}).then(function(t){var n=t.query.random.find(function(e){return 0===e.ns&&""!==e.title});n?e.getData(n.title):e.getRandomPage(),e.setState({title:n.title})}).catch(function(t){e.getRandomPage(),console.error(t)})}},{key:"getData",value:function(e){var t=this;this.setState({loading:!0}),fetch("https://ru.wikipedia.org/w/api.php?action=query&pllimit=max&titles=".concat(e,"&prop=links&&format=json")).then(function(e){return e.json()}).then(function(e){return t.parseData(e)}).catch(function(e){return console.error(e)}),fetch("https://ru.wikipedia.org/w/api.php?action=query&titles=".concat(e,"&prop=description&&format=json")).then(function(e){return e.json()}).then(function(e){var n=e.query.pages[Object.keys(e.query.pages)].description;t.setState({loading:!1,description:n})}).catch(function(e){return console.error(e)}),this.getImageName(e)}},{key:"getImageName",value:function(e){var t=this;this.setState({imageLoading:!0}),fetch("https://ru.wikipedia.org/w/api.php?action=query&titles=".concat(e,"&prop=images&&format=json")).then(function(e){return e.json()}).then(function(e){var n=e.query.pages[Object.keys(e.query.pages)].images[0].title;n?t.getImageUrl(n):t.setState({imgUrl:null,imageLoading:!1})}).catch(function(e){t.setState({imgUrl:null,imageLoading:!1}),console.log(e)})}},{key:"getImageUrl",value:function(e){var t=this;fetch("https://ru.wikipedia.org/w/api.php?action=query&titles=".concat(e,"&iiprop=url&prop=imageinfo&&format=json")).then(function(e){return e.json()}).then(function(e){var n=e.query.pages[Object.keys(e.query.pages)].imageinfo[0].url;t.setState({imgUrl:n,imageLoading:!1})}).catch(function(e){return console.error(e)})}},{key:"getCurrentLink",value:function(e){return!(!isNaN(+e.title[0])||"."===e.title[0]||-1!==e.title.indexOf("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f")||-1!==e.title.indexOf("\u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u044f")||-1!==e.title.indexOf("\u0428\u0430\u0431\u043b\u043e\u043d")||-1!==e.title.indexOf("\u041f\u0440\u043e\u0435\u043a\u0442")||-1!==e.title.indexOf("\u041c\u043e\u0434\u0443\u043b\u044c")||-1!==e.title.indexOf("\u0424\u0430\u0439\u043b")||-1!==e.title.indexOf("\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a"))}},{key:"renderHeader",value:function(){var e=this.state,t=e.description,n=e.loading,i=e.imageLoading,r=e.title,o=e.imgUrl;return a.a.createElement("div",{style:d.headerContainer},a.a.createElement("div",{style:d.headerText},a.a.createElement("h2",null,!n&&r),a.a.createElement("h4",null,t)),o&&!i&&a.a.createElement("img",{style:d.logo,src:o,alt:r}))}},{key:"parseData",value:function(e){var t=this,n=e.query.pages[Object.keys(e.query.pages)].links,i=n?n.filter(function(e){return t.getCurrentLink(e)}).map(function(e,n){return a.a.createElement("div",{key:n,style:d.itemContainer},a.a.createElement("a",{href:"foo",onClick:t.onClick,key:n,style:d.item},e.title))}):null;this.setState({list:i||null})}},{key:"checkWin",value:function(e){return["\u0413\u0438\u0442\u043b\u0435\u0440, \u0410\u0434\u043e\u043b\u044c\u0444","\u0410\u0434\u043e\u043b\u044c\u0444 \u0413\u0438\u0442\u043b\u0435\u0440","\u0413\u0438\u0442\u043b\u0435\u0440"].find(function(t){return t===e})}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.step,i=t.win,r=t.list;return i?a.a.createElement("div",{style:d.itemContainer},a.a.createElement("a",{href:"foo",onClick:function(t){t.preventDefault(),e.setState({loading:!0,win:!1}),e.getRandomPage()},style:d.itemGreen},"win! ".concat(n," step!  go next"))):null!==r?r:a.a.createElement("div",{style:d.itemContainer},a.a.createElement("a",{href:"foo",onClick:function(t){t.preventDefault(),e.setState({loading:!0,win:!1}),e.getRandomPage()},style:d.itemRed},"lose! ".concat(n," step!  go next")))}},{key:"renderLoading",value:function(){return a.a.createElement("p",null,"wait..")}},{key:"render",value:function(){var e=this.state.loading;return a.a.createElement("div",{style:d.container},!e&&this.renderHeader(),e?this.renderLoading():this.renderContent())}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.d4bab5d2.chunk.js.map