import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import { WrapperForBgImg } from './WrapperForBgImg'
import { CountryCard } from './CountryCard'
import countries from '../countries.json';

interface Props {}

export const CustomCarousel: React.FC<Props> = () => {
  
  return (
    <CarouselProvider
      naturalSlideWidth={30}
      naturalSlideHeight={40}
      totalSlides={countries.length}
      orientation="horizontal"
    >
      <WrapperForBgImg countries={countries}>
        <Slider className='country-title'>
          {countries.map((country, index) => {
            return (
              <Slide
                className='title'
                key={country.id}
                index={index}
              >{`${country.capital} is capital of ${country.name}`}</Slide>
            );
          })}
        </Slider>

        <Slider className='country-description'>
          {countries.map((country, index) => {
            return (
              <Slide className='description' key={country.id} index={index}>
                {country.description}
              </Slide>
            );
          })}
        </Slider>
        
        <Slider className='carousel__cards'>
          {countries.map((country, index) => {
            return (
              <Slide key={country.id} index={index} innerClassName="country-card">
                <CountryCard  country={country}/>
              </Slide>
            );
          })}
        </Slider>

      </WrapperForBgImg>
      <DotGroup dotNumbers={true}/>
      <ButtonBack className="button button-prev">&lt;</ButtonBack>
      <ButtonNext className="button button-next">&gt;</ButtonNext>
    </CarouselProvider>
  );
};
