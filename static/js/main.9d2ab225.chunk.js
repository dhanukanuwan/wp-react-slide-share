(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);a(74);var n=a(0),i=a.n(n),l=a(45),r=a.n(l),s=(a(114),a(2)),c=a(5),o=a(3),d=a(6),m=a(7),h=a(68),u=a.n(h),g=a(69),f=a.n(g),p=(a(116),a(72)),v=a(1),b=a.n(v),E=a(70),w=a.n(E),y=(a(121),a(71)),N=a.n(y),O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={clickedItemSrc:"",clickedItemAlt:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.imageData,t="";return parseInt(b()(window).width(),10)>1023&&(t=i.a.createElement("img",{className:"swiper-lazy","data-src":e.thumb_url,alt:e.title.rendered})),i.a.createElement("div",{className:"swiper-slide",thumbid:e.id,original:e.fimg_url,alt:e.title.rendered,highres:e.highres_url},t)}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleClickedData=function(e){a.props.clickedDataHandler(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},800)}},{key:"render",value:function(){var e=this,t=this.props.thumbList;return i.a.createElement("div",{className:"thumbs-wrap swiper-container"},i.a.createElement("div",{className:"swiper-wrapper"},t.map(function(t,a){return i.a.createElement(O,{clickedDataHandler:e.handleClickedData,key:a,imageData:t})})))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleSlideNext=function(e){e.preventDefault(),a.props.onClickFunction(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"next-slide"},i.a.createElement("button",{onClick:this.handleSlideNext},i.a.createElement("i",{className:"fa fa-arrow-down","aria-hidden":"true"})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleSlidePrew=function(e){e.preventDefault(),a.props.onPrewFunction(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"next-slide"},i.a.createElement("button",{onClick:this.handleSlidePrew},i.a.createElement("i",{className:"fa fa-arrow-up","aria-hidden":"true"})))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"slide-counts"},i.a.createElement("span",null,i.a.createElement("span",{className:"slide-counts-text"},this.props.countText)," ",this.props.currentSlide,"/",this.props.imageLength))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).toggleSwitcher=function(e){var t=b()(e.target);t.hasClass("active")?(t.removeClass("active"),t.closest(".top-nav-bar-right").find(".lan-drop").removeClass("active")):(t.addClass("active"),t.closest(".top-nav-bar-right").find(".lan-drop").addClass("active"))},a.switchLanguage=function(e){var t=b()(e.target);t.closest(".top-nav-bar-right").find(".lan-drop").removeClass("active"),t.closest(".top-nav-bar-right").find(".selected-lan").removeClass("active"),a.props.onSelectFunction(e.target.innerText)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"top-nav-bar-right"},i.a.createElement("span",{className:"selected-lan",onClick:this.toggleSwitcher},i.a.createElement("span",{className:"mobile"},this.props.activeLan.substring(0,2)),i.a.createElement("span",{className:"desktop"},this.props.activeLan)),i.a.createElement("div",{className:"lan-drop"},i.a.createElement("span",{onClick:this.switchLanguage},"English"),i.a.createElement("span",{onClick:this.switchLanguage},"Chinese")))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"top-nav-bar-left"},i.a.createElement("button",{type:"button","data-toggle":"modal","data-target":"#wechatmodel"},i.a.createElement("i",{className:"fa fa-comments","aria-hidden":"true"})),i.a.createElement("button",{type:"button","data-toggle":"modal","data-target":"#emailmodel"},i.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleShare=function(e){e.preventDefault();var t=b()("body").find("#sharelookbook");t.find("i").removeClass("fa-envelope-o").addClass("fa-spinner fa-spin");var a={action:"trigger_lookbook_share",share_email:b()("body").find("#share_email").val()};b.a.post("/wp-admin/admin-ajax.php",a,function(e){t.find("i").removeClass("fa-envelope-o fa-spinner fa-spin").addClass("fa-check"),t.find("span").text("Done")})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"modal fade social-models-wrap",id:"wechatmodel"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title",id:"wechatmodelLabel"},"WeChat QR Code"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("div",{className:"modal-body social-models"},i.a.createElement("img",{src:f.a,alt:"WeChat QR"})),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Close"))))),i.a.createElement("div",{className:"modal fade social-models-wrap",id:"emailmodel"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title",id:"wechatmodelLabel"},"Share This Look Book"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("form",{action:"",method:"post",id:"lookBookShare",onSubmit:this.handleShare},i.a.createElement("div",{className:"modal-body social-models"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",className:"form-control",id:"share_email",name:"share_email",placeholder:"Enter email address",required:!0}))),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),i.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"sharelookbook"},i.a.createElement("i",{className:"fa fa-envelope-o"}),i.a.createElement("span",null,"Share"))))))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleClickedData=function(e){a.setState({bigImageUrl:e[0],bigImgageAlt:e[1]})},a.triggerNextSlide=function(e){a.state.sliderData.slideNext();var t=a.state.imageList.length;a.state.currentSlide<a.state.imageList.length&&(t=a.state.currentSlide+1),setTimeout(function(){window.dispatchEvent(new Event("resize"));var e=b()("body").find(".swiper-slide-active").attr("thumbid"),n=b()("body").find(".swiper-slide-prev").attr("thumbid"),i=b()("body").find(".swiper-slide-active").attr("alt"),l=(b()("body").find(".swiper-slide-active").attr("original"),b()("body").find(".spinner-border")),r=b()("body").find(".swiper-slide-active").attr("highres"),s=b()("body").find(".slide-share-middle").find("#image"+e),c=b()("body").find(".slide-share-middle").find("#image"+n);s.length>0&&s.removeClass("fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated").addClass("fadeInRight animated"),c.length>0&&c.removeClass("fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated").addClass("fadeOutLeft animated"),l.length>0&&l.remove(),a.setState({currentSlide:t,bigImgageAlt:i,bigImageUrl:r})},100)},a.triggerPrewSlide=function(e){a.state.sliderData.slidePrev();var t=1;a.state.currentSlide>2&&(t=a.state.currentSlide-1),setTimeout(function(){window.dispatchEvent(new Event("resize"));var e=b()("body").find(".swiper-slide-active").attr("thumbid"),n=b()("body").find(".swiper-slide-next").attr("thumbid"),i=b()("body").find(".swiper-slide-active").attr("alt"),l=(b()("body").find(".swiper-slide-active").attr("original"),b()("body").find(".swiper-slide-active").attr("highres")),r=b()("body").find(".slide-share-middle").find("#image"+e),s=b()("body").find(".slide-share-middle").find("#image"+n);r.length>0&&r.removeClass("fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated").addClass("fadeInLeft animated"),s.length>0&&s.removeClass("fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated").addClass("fadeOutRight animated"),a.setState({currentSlide:t,bigImgageAlt:i,bigImageUrl:l})},100)},a.triggerLanSwitch=function(e){a.setState({language:e});var t=null,n=null,i=null,l=null;"English"===e?(t=a.state.pageAcfData[0].acf.gallery_title_one,n=a.state.pageAcfData[0].acf.gallery_title_two,i=a.state.pageAcfData[0].acf.slide_number_text,l=a.state.pageAcfData[0].acf.copyright_text):(t=a.state.pageAcfData[0].acf.gallery_title_one_chinese,n=a.state.pageAcfData[0].acf.gallery_title_two_chinese,i=a.state.pageAcfData[0].acf.slide_number_text_chinese,l=a.state.pageAcfData[0].acf.copyright_text_chinese),a.setState({titleOne:t,titleTwo:n,slideNumText:i,copyrightText:l})},a.state={imageList:[],bigImageUrl:"",bigImgageAlt:"",isSliderActive:!1,sliderData:null,currentSlide:1,pageAcfData:[],language:"English",titleOne:"",titleTwo:"",slideNumText:"",copyrightText:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(window.location.origin+"/wp-json/wp/v2/slides/?per_page=100").then(function(e){return e.json()}).then(function(t){return e.setState({imageList:t,bigImageUrl:t[0].highres_url,bigImgageAlt:t[0].title.rendered})}),fetch(window.location.origin+"/wp-json/acf/v3/pages").then(function(e){return e.json()}).then(function(t){return e.setState({pageAcfData:t,titleOne:t[0].acf.gallery_title_one,titleTwo:t[0].acf.gallery_title_two,slideNumText:t[0].acf.slide_number_text,copyrightText:t[0].acf.copyright_text})});var t=null;!1===this.state.isSliderActive&&(t=new p.a(".thumbs-wrap",{direction:"vertical",slidesPerView:1,height:160,preloadImages:!1,lazy:{loadPrevNext:!0,loadPrevNextAmount:4}}),setTimeout(function(){window.dispatchEvent(new Event("resize"))},500),this.setState({isSliderActive:!0,sliderData:t}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App full-height"},i.a.createElement("div",{className:"container-fluid slide-share-wrap full-height"},i.a.createElement("div",{className:"row no-gutters full-height"},i.a.createElement("div",{className:"col-sm-12 col-md-3 col-xl-3 slide-share-left-wrap"},i.a.createElement("div",{className:"slide-share-left full-height"},i.a.createElement(k,{currentSlide:this.state.currentSlide,imageLength:this.state.imageList.length}),i.a.createElement("a",{href:"/",className:"site-logo"},i.a.createElement("img",{src:u.a,className:"img-responsive",alt:"app-logo"})),i.a.createElement(j,{clickedDataHandler:this.handleClickedData,thumbList:this.state.imageList}),i.a.createElement(C,{onClickFunction:this.triggerNextSlide}),i.a.createElement(x,{activeLan:this.state.language,onSelectFunction:this.triggerLanSwitch}))),i.a.createElement("div",{className:"col-sm-12 col-md-6 col-xl-6 slide-share-middle-wrap"},i.a.createElement("div",{className:"slide-share-middle full-height",style:{height:b()(window).height()-178}},i.a.createElement(w.a,{onSwipeRight:this.triggerPrewSlide,onSwipeLeft:this.triggerNextSlide},this.state.imageList.map(function(e,t){return i.a.createElement("div",{id:"image"+e.id,className:"layzyload-wrap",key:t},i.a.createElement(N.a,{offsetHorizontal:100},i.a.createElement("img",{src:e.fimg_url,alt:e.title.rendered})))}),i.a.createElement("div",{className:"spinner-border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading..."))),i.a.createElement("div",{className:"img-zoom"},i.a.createElement("button",{type:"button","data-toggle":"modal","data-target":"#zoomContainer"},i.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),i.a.createElement("div",{className:"col-sm-12 col-md-3 col-xl-3 slide-share-right-wrap"},i.a.createElement("div",{className:"slide-share-right full-height"},i.a.createElement("div",{className:"top-nav-bar"},i.a.createElement(L,null),i.a.createElement(x,{activeLan:this.state.language,onSelectFunction:this.triggerLanSwitch})),i.a.createElement("div",{className:"slides-info"},i.a.createElement("span",{className:"title-one"},this.state.bigImgageAlt),i.a.createElement("h1",null,this.state.titleTwo),i.a.createElement(k,{countText:this.state.slideNumText,currentSlide:this.state.currentSlide,imageLength:this.state.imageList.length}),i.a.createElement("div",{className:"mobile-footer"},i.a.createElement("span",{className:"mobile-copyright"},i.a.createElement("i",{className:"fa fa-copyright","aria-hidden":"true"})," ",this.state.copyrightText," "),i.a.createElement(L,null))),i.a.createElement("div",{className:"slides-bottom-ctrl"},i.a.createElement("div",{className:"bottom-ctrl-btns"},i.a.createElement(C,{onClickFunction:this.triggerNextSlide}),i.a.createElement(S,{onPrewFunction:this.triggerPrewSlide})),i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-copyright","aria-hidden":"true"})," ",this.state.copyrightText," ")))))),i.a.createElement(_,null),i.a.createElement("div",{className:"modal fade social-models-wrap zoom-model ",id:"zoomContainer"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-xl",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-body social-models"},i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")),i.a.createElement("img",{src:this.state.bigImageUrl,alt:this.state.bigImgageAlt}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a.p+"static/media/meyer-logo.a0c30efd.png"},69:function(e,t,a){e.exports=a.p+"static/media/wechat.471b5ba8.jpg"},73:function(e,t,a){e.exports=a(129)}},[[73,2,1]]]);
//# sourceMappingURL=main.9d2ab225.chunk.js.map