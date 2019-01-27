import React, { Component } from 'react';
import logo from './images/meyer-logo.png';
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
        <img src={imageData.media_details.sizes.slide_thumb.source_url} onClick={this.handleClick} alt={imageData.title.rendered} original={imageData.guid.rendered} />
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
        <span><span className="slide-counts-text">Look</span> {this.props.currentSlide}/{this.props.imageLength}</span>
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
      currentSlide: 1
    }
  }

  componentDidMount() {

    fetch( window.location.origin + '/wp-json/wp/v2/media/?per_page=100')
      .then(response => response.json())
      .then(data => this.setState({ imageList: data, bigImageUrl: data[0].guid.rendered, bigImgageAlt: data[0].title.rendered }));

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


      this.setState({
        bigImageUrl: $('body').find( '.swiper-slide-active' ).find( 'img' ).attr('original'),
        bigImgageAlt: $('body').find( '.swiper-slide-active' ).find( 'img' ).attr('alt'),
        currentSlide: nextNumber
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

      this.setState({
        bigImageUrl: $('body').find( '.swiper-slide-active' ).find( 'img' ).attr('original'),
        bigImgageAlt: $('body').find( '.swiper-slide-active' ).find( 'img' ).attr('alt'),
        currentSlide: prevNumber
      });

    }, 100);

  }

  render() {
    return (
      <div className="App full-height">
        <div className="container-fluid slide-share-wrap full-height">
          <div className="row no-gutters full-height">
            <div className="col-sm-12 col-md-12 col-xl-3">
              <div className="slide-share-left full-height">

                <SlideCounts currentSlide={this.state.currentSlide} imageLength={this.state.imageList.length} />

                <a href="/" className="site-logo">
                  <img src={logo} className="img-responsive" alt="app-logo" />
                </a>

                <ImageThumbs clickedDataHandler={this.handleClickedData} thumbList={this.state.imageList} />

                <SlideNextBtn onClickFunction={this.triggerNextSlide} />

                <div className="top-nav-bar-right">
                  <span>English</span>
                </div>

              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-xl-6">
              <div className="slide-share-middle full-height" >
                <Swipe onSwipeRight={this.triggerPrewSlide} onSwipeLeft={this.triggerNextSlide}>
                  <img src={this.state.bigImageUrl} alt={this.state.bigImgageAlt} />
                </Swipe>

              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-xl-3">

              <div className="slide-share-right full-height">

                <div className="top-nav-bar">
                  <div className="top-nav-bar-left">
                    <span> <i className="fa fa-comments" aria-hidden="true"></i></span>
                    <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  </div>
                  <div className="top-nav-bar-right">
                    <span>English</span>
                  </div>
                </div>

                <div className="slides-info">
                  <span className="title-one">Autumn 2018</span>
                  <h1>Meyer Trousers</h1>

                  <SlideCounts currentSlide={this.state.currentSlide} imageLength={this.state.imageList.length} />

                </div>

                <div className="slides-bottom-ctrl">
                  <div className="bottom-ctrl-btns">
                    <SlideNextBtn onClickFunction={this.triggerNextSlide} />
                    <SlidePrewBtn onPrewFunction={this.triggerPrewSlide} />
                  </div>
                  <span><i className="fa fa-copyright" aria-hidden="true"></i> Photo By Meyer </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
