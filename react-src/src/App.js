import React, { Component } from 'react';
import logo from './images/meyer-logo.png';
import './css/main.min.css';
import Swiper from 'swiper';
//import $ from 'jquery';

class ImageThumbs extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      imageList: []
    }
  }

  componentDidMount() {
    fetch('http://meyer.test/wp-json/wp/v2/media')
      .then(response => response.json())
      .then(data => this.setState({ imageList: data }));

    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);
  }

  render() {

    const imageList = this.state.imageList;

    const thumbSwiper = new Swiper( '.thumbs-wrap', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        height: 140
    });

    return (
      <div className="thumbs-wrap swiper-container">
        <div className="swiper-wrapper">
          {imageList.map( ( image , i ) => <div key={i} className="swiper-slide" ><img src={image.media_details.sizes.slide_thumb.source_url} alt={image.title.rendered} /></div>)}
        </div>
      </div>
    );
  }

}

class App extends Component {
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

                <ImageThumbs />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
