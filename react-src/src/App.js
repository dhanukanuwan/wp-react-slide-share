import React, { Component } from 'react';
import logo from './images/meyer-logo.png';
import './css/main.min.css';
import Swiper from 'swiper';
//import $ from 'jquery';

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

    const thumbSwiper = new Swiper( '.thumbs-wrap', {
        direction: 'vertical',
        slidesPerView: 1,
        height: 140
    });

    return (
      <div className="thumbs-wrap swiper-container">
        <div className="swiper-wrapper">
          {imageList.map( ( image , i ) => <SingleThumb clickedDataHandler={this.handleClickedData} key={i} imageData={image} /> )}
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
      bigImgageAlt: ""
    }
  }

  componentDidMount() {
    fetch('http://meyer.test/wp-json/wp/v2/media/?per_page=100')
      .then(response => response.json())
      .then(data => this.setState({ imageList: data, bigImageUrl: data[0].guid.rendered, bigImgageAlt: data[0].title.rendered }));

    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);
  }

  handleClickedData = (passedData) => {
    this.setState({
      bigImageUrl: passedData[0],
      bigImgageAlt: passedData[1]
    });
  }

  render() {
    return (
      <div className="App full-height">
        <div className="container-fluid slide-share-wrap full-height">
          <div className="row no-gutters full-height">
            <div className="col-sm-12 col-md-3">
              <div className="slide-share-left full-height">

                <a href="/" className="site-logo">
                  <img src={logo} className="img-responsive" alt="app-logo" />
                </a>

                <ImageThumbs clickedDataHandler={this.handleClickedData} thumbList={this.state.imageList} />

              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="slide-share-middle full-height">

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
