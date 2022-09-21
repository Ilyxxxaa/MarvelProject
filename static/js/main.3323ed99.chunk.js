(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),s=a.n(c),i=a(2),o=a(3),l=a(5),h=a(4),d=(a(15),a(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=a(6),m=a.n(j),b=a(7),p=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKEY="apikey=05cc59364374d4f0369a60eed8bf2e89",this._baseOffset=197,this.getResourse=function(){var e=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(m.a.mark((function e(){var a,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:t._baseOffset,e.next=3,t.getResourse("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKEY));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKEY));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},f=a.p+"static/media/loader.a6a3a828.gif",O=(a(18),function(){return Object(d.jsx)("div",{className:"spinner__container",children:Object(d.jsx)("img",{src:f,alt:"loader"})})}),v=a.p+"static/media/error.42292aa1.gif",_=function(){return Object(d.jsx)("img",{src:v,alt:"error",style:{display:"block",width:250,height:250,margin:"0 auto",objectFit:"contain"}})},x=(a(19),a.p+"static/media/mjolnir.61f31e18.png"),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={char:{},loading:!0,error:!1},n.marvelService=new p,n.onCharLoading=function(){n.setState({loading:!0})},n.onCharLoaded=function(e){n.setState({char:e,loading:!1,error:!1})},n.onError=function(){n.setState({loading:!1,error:!0})},n.updateChar=function(){var e=Math.floor(400*Math.random()+1011e3);n.onCharLoading(),n.marvelService.getCharacter(e).then(n.onCharLoaded).catch(n.onError)},console.log("constructor"),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("mount"),this.updateChar()}},{key:"componentDidUpdate",value:function(){console.log("update component")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e=this;console.log("render");var t=this.state,a=t.loading,n=t.char,r=t.error,c=r?Object(d.jsx)(_,{}):null,s=a?Object(d.jsx)(O,{}):null,i=r||a?null:Object(d.jsx)(N,{char:n});return Object(d.jsxs)("div",{className:"randomchar",children:[c,s,i,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",children:Object(d.jsx)("div",{className:"inner",onClick:function(){return e.updateChar()},children:"try it"})}),Object(d.jsx)("img",{src:x,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),N=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:a}),Object(d.jsx)("p",{className:"randomchar__descr",children:n}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:c,target:"_blank",className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,target:"_blank",className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},C=g,k=a(9),y=(a(20),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={chars:[],loading:!0,error:!1,newItemLoading:!1,offset:197,charEnded:!1},e.marvelService=new p,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){return{chars:[].concat(Object(k.a)(e.chars),Object(k.a)(t)),loading:!1,error:!1,newItemLoading:!1,offset:e.offset+9,charEnded:a}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.renderItems=function(t){var a=t.map((function(t,a){return Object(d.jsx)(w,{src:t.thumbnail,name:t.name,id:t.id,onCharSelected:e.props.onCharSelected,index:a},t.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"render",value:function(){var e=this,t=this.state,a=t.chars,n=t.loading,r=t.error,c=t.newItemLoading,s=t.offset,i=t.charEnded,o=this.renderItems(a),l=r?Object(d.jsx)(_,{}):null,h=n?Object(d.jsx)(O,{}):null,u=n||r?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,h,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:c,style:{display:i?"none":"block"},onClick:function(){return e.onRequest(s)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),w=function(e){var t=e.src,a=e.name,n=e.id,r=e.onCharSelected,c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(c={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",onClick:function(){r(n)},children:[Object(d.jsx)("img",{src:t,alt:a,style:c}),Object(d.jsx)("div",{className:"char__name",children:a})]},n)},S=y,L=(a(21),a.p,a(22),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:null,loading:!1,error:!1},e.marvelService=new p,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoading=function(){e.setState({loading:!0})},e.onCharLoaded=function(t){e.setState({char:t,loading:!1,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=t||a||n?null:Object(d.jsx)(L,{}),c=n?Object(d.jsx)(_,{}):null,s=a?Object(d.jsx)(O,{}):null,i=n||a||!t?null:Object(d.jsx)(I,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[r,c,s,i]})}}]),a}(n.Component),I=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:r,alt:a,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:a}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:n}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There are no comics for this hero",i.map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},F=E,R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(_,{}):this.props.children}}]),a}(n.Component),D=a.p+"static/media/vision.067d4ae1.png",M=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(R,{children:Object(d.jsx)(C,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(R,{children:Object(d.jsx)(S,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(R,{children:Object(d.jsx)(F,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:D,alt:"vision"})]})]})}}]),a}(n.Component);a(23);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.3323ed99.chunk.js.map