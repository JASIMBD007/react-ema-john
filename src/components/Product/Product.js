import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings, } = product;
    // const { handleAddToClick } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add To Cart</button>

        </div>
    );
};

export default Product;