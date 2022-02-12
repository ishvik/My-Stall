import React from 'react';
import './Product.css'
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Shirt from '../../images/ImageContent/shirt.jpeg'

function Product(props) {
  return <div className='product-outer'>
      <div className='product-image'>
          <img src={Shirt} alt='shirt' className='product-image-src'/>
      </div>
      <div className='product-price'>₹500</div>
      <div className='product-descrip'>
          <div className='product-name'><h3>Shirt</h3></div>
          <div className='product-about'><p>A shirt is a cloth garment for the upper body.</p></div>
      </div>
      <div className='product-buttons'>
          <button className='btn-wishlist' type='submit'><AiOutlineHeart/> wishlist</button>
          <button className='btn-cart' type='submit'><AiOutlineShoppingCart/> Add to Cart</button>
      </div>
  </div>;
}

export default Product;
