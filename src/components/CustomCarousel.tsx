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
        <Slider className='carousel__titles'>
          {countries.map((country, index) => {
            return (
              <Slide
                className='country-title'
                key={country.id}
                index={index}
              >{country.name}</Slide>
            );
          })}
        </Slider>

        <Slider className='carousel__descriptions'>
          {countries.map((country, index) => {
            return (
              <Slide className='country-description' key={country.id} index={index}>
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

        <ButtonBack className="button button-prev">&#10094;</ButtonBack>
        <ButtonNext className="button button-next">&#10095;</ButtonNext>
        
        <DotGroup dotNumbers={true}/>
      </WrapperForBgImg>

    </CarouselProvider>
  );
};
