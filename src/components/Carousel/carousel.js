import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  CarouselContainer,
  Image,
  Content,
  Button,
  ArrowImage,
  TeamAndDate,
} from "./Style";

const DemoCarousel = (props) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={false}
      showIndicators={props.indicator}
    >
      {props.bannerData.map((p, index) => (
        <CarouselContainer key={p.id}>
          <Content>
            <span>{p.pageName}</span>
            <p>{p.text}</p>
            {props.button === true ? (
              <Button to="/viewCaseStudy">
                View Case study
                <ArrowImage
                  src={require("../../assests/Images/group-4.png")}
                  alt="banner slider images"
                />
              </Button>
            ) : (
              <TeamAndDate>BigData Team, Oct 2020</TeamAndDate>
            )}
          </Content>
          <Image>
            <img
              src={require(`../../assests/Images/${p.image}.png`)}
              alt="Slider"
            />
          </Image>
        </CarouselContainer>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;
