import React, { Component } from 'react';
import logo from './images/meyer-logo.png';
import wechat from './images/wechat.jpg';
import './css/main.min.css';
import Swiper from 'swiper';
import $ from 'jquery';
import Swipe from 'react-easy-swipe';
import 'bootstrap';

class SingleThumb extends Component {

  constructor() {
    super()
    this.state = {
      clickedItemSrc: "",
      clickedItemAlt: ""
    }
  }

  handleClick = (e) => {

    const clickedSrc = e.target.getAttribute("original");
    const clickedAlt = e.target.getAttribute("alt");

    const clickedData = [clickedSrc, clickedAlt];

    this.setState({
      clickedItemSrc: clickedSrc,
      clickedItemAlt: clickedAlt
    })

    this.props.clickedDataHandler( clickedData );

  }

  render() {

    const imageData = this.props.imageData;

    return (
      <div className="swiper-slide">
        <img thumbid={imageData.id} src={imageData.thumb_url} onClick={this.handleClick} alt={imageData.title.rendered} original={imageData.fimg_url} />
      </div>
    );

  }

}

class ImageThumbs extends Component {

  componentDidMount() {

    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);

  }

  handleClickedData = (passedData) => {
    this.props.clickedDataHandler( passedData );
  }

  render() {

    const imageList = this.props.thumbList;

    return (
      <div className="thumbs-wrap swiper-container">
        <div className="swiper-wrapper">
          {imageList.map( ( image , i ) => <SingleThumb clickedDataHandler={this.handleClickedData} key={i} imageData={image} /> )}
        </div>
      </div>
    );
  }

}

class SlideNextBtn extends Component {

  handleSlideNext = (e) => {

    e.preventDefault();

    this.props.onClickFunction(e);

  }

  render() {

    return (
      <div className="next-slide">
        <button onClick={this.handleSlideNext}  ><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
      </div>
    );

  }

}

class SlidePrewBtn extends Component {

  handleSlidePrew = (e) => {

    e.preventDefault();

    this.props.onPrewFunction(e);

  }

  render() {

    return (
      <div className="next-slide">
        <button onClick={this.handleSlidePrew}  ><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      </div>
    );

  }

}

class SlideCounts extends Component {

  render() {

    return (
      <div className="slide-counts">
        <span><span className="slide-counts-text">{this.props.countText}</span> {this.props.currentSlide}/{this.props.imageLength}</span>
      </div>
    );

  }

}

class LanguageSwitcher extends Component {

  toggleSwitcher = (e) => {

    const switcherMain = $( e.target );

    if ( switcherMain.hasClass('active') ) {
      switcherMain.removeClass('active');
      switcherMain.closest('.top-nav-bar-right').find('.lan-drop').removeClass('active');
    } else {
      switcherMain.addClass('active');
      switcherMain.closest('.top-nav-bar-right').find('.lan-drop').addClass('active');
    }

  }

  switchLanguage = (e) => {

    const clikedItem = $( e.target );

    clikedItem.closest('.top-nav-bar-right').find('.lan-drop').removeClass('active');
    clikedItem.closest('.top-nav-bar-right').find('.selected-lan').removeClass('active');

    this.props.onSelectFunction( e.target.innerText );
  }

  render() {
    return (
      <div className="top-nav-bar-right">
        <span className="selected-lan" onClick={this.toggleSwitcher}>
          <span className="mobile">{this.props.activeLan.substring(0,2)}</span>
          <span className="desktop">{this.props.activeLan}</span>
        </span>
        <div className="lan-drop">
          <span onClick={this.switchLanguage}>English</span>
          <span onClick={this.switchLanguage}>Chinese</span>
        </div>
      </div>
    );
  }
}

class SocialIcons extends Component {

  render() {
    return (
      <div className="top-nav-bar-left">
        <button type="button" data-toggle="modal" data-target="#wechatmodel"><i className="fa fa-comments" aria-hidden="true"></i></button>
        <button type="button" data-toggle="modal" data-target="#emailmodel"><i className="fa fa-envelope" aria-hidden="true"></i></button>
      </div>
    );
  }
}

class SocialModels extends Component {

  handleShare = (event) => {

    event.preventDefault();

    const submitBtn = $('body').find( '#sharelookbook' );

    submitBtn.find( 'i' ).removeClass('fa-envelope-o').addClass('fa-spinner fa-spin');

    const data = {
			'action': 'trigger_lookbook_share',
      'share_email': $('body').find('#share_email').val()
		};

		$.post('/wp-admin/admin-ajax.php', data, function(response) {
			submitBtn.find( 'i' ).removeClass('fa-envelope-o fa-spinner fa-spin').addClass('fa-check');
      submitBtn.find('span').text('Done');
		});

  }

  render() {
    return (

      <div>
        <div className="modal fade social-models-wrap" id="wechatmodel" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="wechatmodelLabel">WeChat QR Code</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body social-models">
                <img src={wechat} alt="WeChat QR" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade social-models-wrap" id="emailmodel" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="wechatmodelLabel">Share This Look Book</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="" method="post" id="lookBookShare" onSubmit={this.handleShare} >
                <div className="modal-body social-models">
                    <div className="form-group">
                      <input type="email" className="form-control" id="share_email" name="share_email" placeholder="Enter email address" required />
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" id="sharelookbook" >
                    <i className="fa fa-envelope-o"></i>
                    <span>Share</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

class App extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      imageList: [],
      bigImageUrl: "",
      bigImgageAlt: "",
      isSliderActive: false,
      sliderData: null,
      currentSlide: 1,
      pageAcfData: [],
      language: 'English',
      titleOne: '',
      titleTwo: '',
      slideNumText: '',
      copyrightText: ''
    }
  }

  componentDidMount() {

    fetch( window.location.origin + '/wp-json/wp/v2/slides/?per_page=100' )
      .then(response => response.json())
      .then(data => this.setState({ imageList: data, bigImageUrl: data[0].fimg_url, bigImgageAlt: data[0].title.rendered }));

    fetch( window.location.origin + '/wp-json/acf/v3/pages')
      .then(response => response.json())
      .then(data => this.setState({
        pageAcfData: data,
        titleOne: data[0].acf.gallery_title_one,
        titleTwo: data[0].acf.gallery_title_two,
        slideNumText: data[0].acf.slide_number_text,
        copyrightText: data[0].acf.copyright_text
      }));

    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 100);

    let thumbSwiper = null;

    if ( this.state.isSliderActive === false ) {

      thumbSwiper = new Swiper( '.thumbs-wrap', {
          direction: 'vertical',
          slidesPerView: 1,
          height: 160
      });

      this.setState({
        isSliderActive: true,
        sliderData: thumbSwiper
      });

    }

  }

  handleClickedData = (passedData) => {
    this.setState({
      bigImageUrl: passedData[0],
      bigImgageAlt: passedData[1]
    });
  }

  triggerNextSlide = (passedData) => {

    this.state.sliderData.slideNext();
    let nextNumber = this.state.imageList.length;

    if ( this.state.currentSlide < this.state.imageList.length ) {
      nextNumber = this.state.currentSlide + 1;
    }

    setTimeout(() => {

      window.dispatchEvent(new Event('resize'));

      const displayedImageID = $('body').find( '.swiper-slide-active' ).find( 'img' ).attr( 'thumbid' );
      const prevImageID = $('body').find( '.swiper-slide-prev' ).find( 'img' ).attr( 'thumbid' );
      const displayedImageAlt = $('body').find( '.swiper-slide-active' ).find( 'img' ).attr( 'alt' );
      const displayedImageUrl = $('body').find( '.swiper-slide-active' ).find( 'img' ).attr( 'original' );
      const loadingIcon = $('body').find( '.spinner-border' );

      const displayedImage = $( 'body' ).find( '.slide-share-middle' ).find( '#image' + displayedImageID );
      const prevImage = $( 'body' ).find( '.slide-share-middle' ).find( '#image' + prevImageID );

      if ( displayedImage.length > 0 ) {
        displayedImage.removeClass('fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated').addClass('fadeInRight animated');
      }

      if ( prevImage.length > 0 ) {
        prevImage.removeClass('fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated').addClass('fadeOutLeft animated');
      }

      if ( loadingIcon.length > 0 ) {
        loadingIcon.remove();
      }


      this.setState({
        currentSlide: nextNumber,
        bigImgageAlt: displayedImageAlt,
        bigImageUrl: displayedImageUrl
      });

    }, 100);

  }

  triggerPrewSlide = (passedData) => {

    this.state.sliderData.slidePrev();
    let prevNumber = 1;

    if ( this.state.currentSlide > 2 ) {
      prevNumber = this.state.currentSlide - 1;
    }

    setTimeout(() => {

      window.dispatchEvent(new Event('resize'));

      const displayedImageID = $('body').find( '.swiper-slide-active' ).find( 'img' ).attr( 'thumbid' );
      const nextImageID = $('body').find( '.swiper-slide-next' ).find( 'img' ).attr( 'thumbid' );
      const displayedImageAlt = $('body').find( '.swiper-slide-active' ).find( 'img' ).attr( 'alt' );
      const displayedImageUrl = $('body').find( '.swiper-slide-active' ).find( 'img' ).attr( 'original' );

      const displayedImage = $( 'body' ).find( '.slide-share-middle' ).find( '#image' + displayedImageID );
      const nextImage = $( 'body' ).find( '.slide-share-middle' ).find( '#image' + nextImageID );

      if ( displayedImage.length > 0 ) {
        displayedImage.removeClass('fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated').addClass('fadeInLeft animated');
      }

      if ( nextImage.length > 0 ) {
        nextImage.removeClass('fadeOutLeft fadeInRight fadeOutRight fadeInLeft animated').addClass('fadeOutRight animated');
      }

      this.setState({
        currentSlide: prevNumber,
        bigImgageAlt: displayedImageAlt,
        bigImageUrl: displayedImageUrl
      });

    }, 100);

  }

  triggerLanSwitch = ( selectedLan ) => {

    this.setState({
      language: selectedLan
    });

    let titleOne = null;
    let titleTwo = null;
    let slideNumText = null;
    let copyrightText = null;

    if ( selectedLan === 'English' ) {
      titleOne = this.state.pageAcfData[0].acf.gallery_title_one;
      titleTwo = this.state.pageAcfData[0].acf.gallery_title_two;
      slideNumText = this.state.pageAcfData[0].acf.slide_number_text;
      copyrightText = this.state.pageAcfData[0].acf.copyright_text;
    } else {
      titleOne = this.state.pageAcfData[0].acf.gallery_title_one_chinese;
      titleTwo = this.state.pageAcfData[0].acf.gallery_title_two_chinese;
      slideNumText = this.state.pageAcfData[0].acf.slide_number_text_chinese;
      copyrightText = this.state.pageAcfData[0].acf.copyright_text_chinese;
    }

    this.setState({
      titleOne: titleOne,
      titleTwo: titleTwo,
      slideNumText: slideNumText,
      copyrightText: copyrightText
    });

  }

  render() {

    return (
      <div className="App full-height">
        <div className="container-fluid slide-share-wrap full-height">
          <div className="row no-gutters full-height">
            <div className="col-sm-12 col-md-3 col-xl-3 slide-share-left-wrap">
              <div className="slide-share-left full-height">

                <SlideCounts currentSlide={this.state.currentSlide} imageLength={this.state.imageList.length} />

                <a href="/" className="site-logo">
                  <img src={logo} className="img-responsive" alt="app-logo" />
                </a>

                <ImageThumbs clickedDataHandler={this.handleClickedData} thumbList={this.state.imageList} />

                <SlideNextBtn onClickFunction={this.triggerNextSlide} />

                <LanguageSwitcher activeLan={this.state.language} onSelectFunction={this.triggerLanSwitch} />

              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-xl-6 slide-share-middle-wrap">
              <div className="slide-share-middle full-height" style={{height: ( $(window).height() - 178 ) }}>
                <Swipe onSwipeRight={this.triggerPrewSlide} onSwipeLeft={this.triggerNextSlide}>
                  {this.state.imageList.map( ( image , i ) => <img id={'image' + image.id} src={image.fimg_url} alt={image.title.rendered} key={i} /> )}
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </Swipe>

                <div className="img-zoom">
                  <button type="button" data-toggle="modal" data-target="#zoomContainer" >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>

              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-xl-3 slide-share-right-wrap">

              <div className="slide-share-right full-height">

                <div className="top-nav-bar">
                  <SocialIcons />

                  <LanguageSwitcher activeLan={this.state.language} onSelectFunction={this.triggerLanSwitch} />

                </div>

                <div className="slides-info">
                  <span className="title-one">{this.state.bigImgageAlt}</span>
                  <h1>{this.state.titleTwo}</h1>

                  <SlideCounts countText={this.state.slideNumText} currentSlide={this.state.currentSlide} imageLength={this.state.imageList.length} />

                  <div className="mobile-footer">
                    <span className="mobile-copyright"><i className="fa fa-copyright" aria-hidden="true"></i> {this.state.copyrightText} </span>

                    <SocialIcons />
                  </div>

                </div>

                <div className="slides-bottom-ctrl">
                  <div className="bottom-ctrl-btns">
                    <SlideNextBtn onClickFunction={this.triggerNextSlide} />
                    <SlidePrewBtn onPrewFunction={this.triggerPrewSlide} />
                  </div>
                  <span><i className="fa fa-copyright" aria-hidden="true"></i> {this.state.copyrightText} </span>
                </div>

              </div>

            </div>

          </div>
        </div>

        <SocialModels />
        <div className="modal fade social-models-wrap zoom-model " id="zoomContainer" >
          <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-body social-models">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <img src={this.state.bigImageUrl} alt={this.state.bigImgageAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
