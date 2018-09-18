import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
if (typeof window !== 'undefined') {
  require('slick-carousel');
}

class Gallery extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
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
  .slick-slide {
    line-height: 0;
    img {
      width: auto;
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;
export default styledGallery;
