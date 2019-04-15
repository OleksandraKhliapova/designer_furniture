import React from 'react';

import './product.css';

const Product = (props) => {

  const {
    template,
    product_uri,
    product_price,
    product_handle,
    image_src,
    image_srcset,
    button_text
  } = props.product;

  const createMarkup = () => {
    return {__html: template};
  }

  return (
    <div className="product-item">
      <div className="product-item__img-block">
        <img className="product-item__img" src={image_src} />
      </div>
      <div className="product-item__desc">
        <div className="product-item__title" dangerouslySetInnerHTML={createMarkup()} />
        <div className="product-item__price-block">
          <p>Price: {product_price}</p>
          <button className="product-item__button">Shop now</button>
        </div>
      </div>
    </div>
  )
}

export default Product;
