import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel';

class Gallery extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      adaptiveHeight: true,
      arrows: false,
    };
    return (
      <div className={this.props.className}>
        <div className="slide-container">
          <Slider {...settings}>
            {this.props.images.map(val => (
              <p key={val}>
                <img src={val} />
              </p>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

const styledGallery = styled(Gallery)`
  img {
    margin: 0 auto;
  }
  .slide-container {
  }
`;
export default styledGallery;
