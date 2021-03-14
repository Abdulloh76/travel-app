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
      naturalSlideWidth={45}
      naturalSlideHeight={30}
      totalSlides={countries.length}
      orientation="horizontal"
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
        
        <Slider className='country-cards'>
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
      <ButtonBack className="button button-prev">Back</ButtonBack>
      <ButtonNext className="button button-next">Next</ButtonNext>
    </CarouselProvider>
  );
};
