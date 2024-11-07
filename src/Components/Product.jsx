import React, { useState } from 'react';
import './product.css';

export default function Product(props) {
  const { image, title, description, price, category } = props.product;
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='Product'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p className='description'>
        {showMore ? description : `${description.substring(0, 60)}...`}
        <span onClick={toggleDescription} className="read-more">
          {showMore ? ' Read less' : ' Read more'}
        </span>
      </p>
      <p className='price'>{price}</p>
      <p className='category'>{category}</p>
      <button>Buy</button>
    </div>
  );
}
