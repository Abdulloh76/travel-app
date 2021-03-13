import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import countries from '../countries.json';

interface Props {}

export const CustomCarousel: React.FC<Props> = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={24}
      totalSlides={countries.length}
    >
      <Slider className='country-backgrounds'>
        {countries.map((country, index) => {
          return (
            <Slide
              className='country-bg'
              key={country.id}
              style={{ backgroundImage: `url(${country.bgSrc})` }}
              index={index}
            />
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

      <ButtonBack className="button button-prev">Back</ButtonBack>
      <ButtonNext className="button button-next">Next</ButtonNext>
    </CarouselProvider>
  );
};
