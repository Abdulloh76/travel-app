import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import { WrapperForBgImg } from './WrapperForBgImg'
import countries from '../countries.json';

interface Props {}

export const CustomCarousel: React.FC<Props> = () => {
  
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={24}
      totalSlides={countries.length}
      orientation="vertical"
      className="asdsd"
    >
      <WrapperForBgImg countries={countries}>
        <Slider className='country-titles'>
          {countries.map((country, index) => {
            return (
              <Slide
                className='country-title'
                key={country.id}
                index={index}
              >{`${country.capital} is capital of ${country.name}`}</Slide>
            );
          })}
        </Slider>

        <Slider className='country-texts'>
          {countries.map((country, index) => {
            return (
              <Slide className='country-info' key={country.id} index={index}>
                {country.description}
              </Slide>
            );
          })}
        </Slider>
      </WrapperForBgImg>

      <ButtonBack className="button button-prev">Back</ButtonBack>
      <ButtonNext className="button button-next">Next</ButtonNext>
    </CarouselProvider>
  );
};
