(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(54),l=a.n(r),c=(a(60),a(24)),s=a(25),i=a(27),u=a(26),m=a(28),d=(a(61),a(36)),b=a.n(d),k=a(37),h=function(e){return n.a.createElement("div",{key:e.book.id[0]._,className:"summary-book",onClick:function(){return e.getSelectedBookDetails(e.book.id[0]._)}},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:e.book.best_book[0].image_url[0],height:"80",width:"80"})),n.a.createElement("td",null,n.a.createElement("tr",null,n.a.createElement("b",null,"Book Title: ")," ",e.book.best_book[0].title[0]),n.a.createElement("tr",null,n.a.createElement("b",null,"Author: ")," ",e.book.best_book[0].author[0].name[0]),n.a.createElement("tr",null,n.a.createElement("b",null,"Rating: ")," ",e.book.average_rating[0])))))},g=function(e){return n.a.createElement("div",{className:"book-list"},e.listOfBooks.map(function(t,a){return n.a.createElement(h,{book:t,getSelectedBookDetails:e.getSelectedBookDetails})}))},f=function(e){return console.log("detailedBook: "+e),n.a.createElement("div",{className:"book-detail"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:e.bookDetails.img,height:"300",width:"250"})),n.a.createElement("td",null,n.a.createElement("tr",null,n.a.createElement("b",null,"Book Title: ")," ",e.bookDetails.title),n.a.createElement("tr",null,n.a.createElement("b",null,"Author: ")," ",e.bookDetails.author),n.a.createElement("tr",null,n.a.createElement("b",null,"Rating: ")," ",e.bookDetails.ratings),n.a.createElement("tr",null,n.a.createElement("b",null,"Description: ")," ",e.bookDetails.description)))))},E=function(e){return b.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat("https://www.goodreads.com/search/index.xml","?key=").concat("3il0QOZERbgGbTyB16Vbxw","&q=").concat(e,"&format=json")).then(function(e){return e})},p=function(e){return b.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat("https://www.goodreads.com/book/show/").concat(e,".xml?key=").concat("3il0QOZERbgGbTyB16Vbxw")).then(function(e){return e})},w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={selectedBookId:"",listOfBooks:[]},a.extractBookDetails=function(e){return{author:e.GoodreadsResponse.book[0].authors[0].author[0].name[0],title:e.GoodreadsResponse.book[0].title[0],img:e.GoodreadsResponse.book[0].image_url[0],ratings:e.GoodreadsResponse.book[0].average_rating[0],description:e.GoodreadsResponse.book[0].description[0].replace(/\<br \/>/g,"\n").replace(/<b>/g,"").replace(/<\/br>/g,"").replace(/<\/b>/g,"")}},a.getBookList=function(e){a.setState(function(e,t){return{showLoading:!0}}),E(e.current.value).then(function(e){return Object(k.parseString)(e.data,function(e,t){console.log(t),a.setState(function(e,a){return{listOfBooks:t.GoodreadsResponse.search[0].results[0].work,showLoading:!1}})})})},a.getSelectedBookDetails=function(e){a.setState(function(e,t){return{showLoading:!0}}),p(e).then(function(e){return Object(k.parseString)(e.data,function(e,t){var o=a.extractBookDetails(t);a.setState(function(e,t){return{bookDetails:o,showLoading:!1}})})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a,o=this,r=n.a.createRef();return this.state.listOfBooks.length>0&&(e=n.a.createElement(g,{listOfBooks:this.state.listOfBooks,getSelectedBookDetails:this.getSelectedBookDetails})),this.state.bookDetails&&(t=n.a.createElement(f,{bookDetails:this.state.bookDetails})),this.state.showLoading&&(a=n.a.createElement("img",{src:"827.gif"})),n.a.createElement("div",null,n.a.createElement("div",{className:"loading"},a),n.a.createElement("div",{className:"search-input"},"Read Books:",n.a.createElement("input",{placeholder:"Please Search book here...",ref:r}),n.a.createElement("button",{className:"search-btn",onClick:function(){return o.getBookList(r)}},"Search Book")),n.a.createElement("div",{className:"search-results"},e),n.a.createElement("div",{className:"book-details"},t))}}]),t}(n.a.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,a){e.exports=a(101)},60:function(e,t,a){},61:function(e,t,a){},90:function(e,t){},92:function(e,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.6a726a11.chunk.js.map