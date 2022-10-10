import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import './Product.css'
const Product = (props) => {
  const {handelToCart} = props;
   const {name, img, seller, price, ratings} = props.productk;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
              <div className='product-info'>
              <p className='product-name'>{name}</p>
              <p>Price:${price}</p>
              <p><small>Seller: {seller}</small></p>
              <p><small>Rating: {ratings}</small></p>
              </div>


              <button onClick={() => props.handelToCart(props.productk)} className='btn-card'>
                <p className='btn-text'>Add to Card</p>
                <FontAwesomeIcon icon={ faShoppingCart}></FontAwesomeIcon>
              </button>
        </div>
    );
};

export default Product;