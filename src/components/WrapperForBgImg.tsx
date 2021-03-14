import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CarouselContext } from 'pure-react-carousel';

interface Props {
  children: JSX.Element[]
  countries: any
}

export const WrapperForBgImg: React.FC<Props>  = ({ children, countries }) => {
  const carouselContext = useContext(CarouselContext);
  const [bgUrl, setBgUrl] = useState(countries[carouselContext.state.currentSlide].bgSrc);
  
  const changeBgImg = useCallback((index: number) => {
    const img = new Image()
    img.src = countries[index].bgSrc
    img.onload = () => setBgUrl(img.src)
  }, [countries])

  useEffect(() => {
    const onChange = () => changeBgImg(carouselContext.state.currentSlide)
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext, changeBgImg]);

  return (
    <div className="carousel__wrapper" style={{backgroundImage: `url(${bgUrl})`}}>
      {children}
    </div>
  );
}