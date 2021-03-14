import React from 'react';

interface Props {
  country: any
}

export const CountryCard: React.FC<Props> = ({ country }) => {
console.log(country.cardPic);

  return (
    <>
      <h5 className='country-name'>{country.name}</h5>
      <div className='country-stars'>
        {
          new Array(5).fill(0).map((el, ind) => {
            if (country.stars > ind && country.stars < ind + 1)
            return <i key={ind} className="fas fa-star-half-alt"></i>
            else if(ind + 1 <= country.stars) return <i key={ind} className="fas fa-star"></i>
            else return <i key={ind} className="far fa-star"></i>
          })
        }
      </div>
      <img src={country.cardPic} alt="" className="card-pic" />
    </>
  );
};
