(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/meyer-logo.a0c30efd.png"},14:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a.n(r),c=(a(19),a(1)),s=a(3),o=a(2),d=a(4),m=a(5),u=a(11),h=a.n(u),g=(a(21),a(13)),p=a(6),f=a.n(p),v=a(12),b=a.n(v),E=(a(27),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).handleClick=function(t){var a=t.target.getAttribute("original"),n=t.target.getAttribute("alt"),i=[a,n];e.setState({clickedItemSrc:a,clickedItemAlt:n}),e.props.clickedDataHandler(i)},e.state={clickedItemSrc:"",clickedItemAlt:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.imageData;return i.a.createElement("div",{className:"swiper-slide"},i.a.createElement("img",{src:e.media_details.sizes.slide_thumb.source_url,onClick:this.handleClick,alt:e.title.rendered,original:e.guid.rendered}))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleClickedData=function(e){a.props.clickedDataHandler(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},0)}},{key:"render",value:function(){var e=this,t=this.props.thumbList;return i.a.createElement("div",{className:"thumbs-wrap swiper-container"},i.a.createElement("div",{className:"swiper-wrapper"},t.map(function(t,a){return i.a.createElement(E,{clickedDataHandler:e.handleClickedData,key:a,imageData:t})})))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleSlideNext=function(e){e.preventDefault(),a.props.onClickFunction(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"next-slide"},i.a.createElement("button",{onClick:this.handleSlideNext},i.a.createElement("i",{className:"fa fa-arrow-down","aria-hidden":"true"})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleSlidePrew=function(e){e.preventDefault(),a.props.onPrewFunction(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"next-slide"},i.a.createElement("button",{onClick:this.handleSlidePrew},i.a.createElement("i",{className:"fa fa-arrow-up","aria-hidden":"true"})))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"slide-counts"},i.a.createElement("span",null,i.a.createElement("span",{className:"slide-counts-text"},"Look")," ",this.props.currentSlide,"/",this.props.imageLength))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleClickedData=function(e){a.setState({bigImageUrl:e[0],bigImgageAlt:e[1]})},a.triggerNextSlide=function(e){a.state.sliderData.slideNext();var t=a.state.imageList.length;a.state.currentSlide<a.state.imageList.length&&(t=a.state.currentSlide+1),setTimeout(function(){window.dispatchEvent(new Event("resize")),a.setState({bigImageUrl:f()("body").find(".swiper-slide-active").find("img").attr("original"),bigImgageAlt:f()("body").find(".swiper-slide-active").find("img").attr("alt"),currentSlide:t})},100)},a.triggerPrewSlide=function(e){a.state.sliderData.slidePrev();var t=1;a.state.currentSlide>2&&(t=a.state.currentSlide-1),setTimeout(function(){window.dispatchEvent(new Event("resize")),a.setState({bigImageUrl:f()("body").find(".swiper-slide-active").find("img").attr("original"),bigImgageAlt:f()("body").find(".swiper-slide-active").find("img").attr("alt"),currentSlide:t})},100)},a.state={imageList:[],bigImageUrl:"",bigImgageAlt:"",isSliderActive:!1,sliderData:null,currentSlide:1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://meyer.test/wp-json/wp/v2/media/?per_page=100").then(function(e){return e.json()}).then(function(t){return e.setState({imageList:t,bigImageUrl:t[0].guid.rendered,bigImgageAlt:t[0].title.rendered})}),setTimeout(function(){window.dispatchEvent(new Event("resize"))},100);var t=null;!1===this.state.isSliderActive&&(t=new g.a(".thumbs-wrap",{direction:"vertical",slidesPerView:1,height:160}),this.setState({isSliderActive:!0,sliderData:t}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App full-height"},i.a.createElement("div",{className:"container-fluid slide-share-wrap full-height"},i.a.createElement("div",{className:"row no-gutters full-height"},i.a.createElement("div",{className:"col-sm-12 col-md-12 col-xl-3"},i.a.createElement("div",{className:"slide-share-left full-height"},i.a.createElement(k,{currentSlide:this.state.currentSlide,imageLength:this.state.imageList.length}),i.a.createElement("a",{href:"/",className:"site-logo"},i.a.createElement("img",{src:h.a,className:"img-responsive",alt:"app-logo"})),i.a.createElement(w,{clickedDataHandler:this.handleClickedData,thumbList:this.state.imageList}),i.a.createElement(N,{onClickFunction:this.triggerNextSlide}),i.a.createElement("div",{className:"top-nav-bar-right"},i.a.createElement("span",null,"English")))),i.a.createElement("div",{className:"col-sm-12 col-md-12 col-xl-6"},i.a.createElement("div",{className:"slide-share-middle full-height"},i.a.createElement(b.a,{onSwipeRight:this.triggerPrewSlide,onSwipeLeft:this.triggerNextSlide},i.a.createElement("img",{src:this.state.bigImageUrl,alt:this.state.bigImgageAlt})))),i.a.createElement("div",{className:"col-sm-12 col-md-12 col-xl-3"},i.a.createElement("div",{className:"slide-share-right full-height"},i.a.createElement("div",{className:"top-nav-bar"},i.a.createElement("div",{className:"top-nav-bar-left"},i.a.createElement("span",null," ",i.a.createElement("i",{className:"fa fa-comments","aria-hidden":"true"})),i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})),i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),i.a.createElement("div",{className:"top-nav-bar-right"},i.a.createElement("span",null,"English"))),i.a.createElement("div",{className:"slides-info"},i.a.createElement("span",{className:"title-one"},"Autumn 2018"),i.a.createElement("h1",null,"Meyer Trousers"),i.a.createElement(k,{currentSlide:this.state.currentSlide,imageLength:this.state.imageList.length})),i.a.createElement("div",{className:"slides-bottom-ctrl"},i.a.createElement("div",{className:"bottom-ctrl-btns"},i.a.createElement(N,{onClickFunction:this.triggerNextSlide}),i.a.createElement(S,{onPrewFunction:this.triggerPrewSlide})),i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-copyright","aria-hidden":"true"})," Photo By Meyer ")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.fd8dc6d5.chunk.js.map