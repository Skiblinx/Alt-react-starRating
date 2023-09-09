// import { range } from './utils';

function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */
const starRating = Array.from({length: rating})
  return <div className="star-wrapper">
    {starRating.map(index=>(
    <img
    key={index}
    alt="star-rating"
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />
    ))}
  </div>;
}

export default StarRating;
