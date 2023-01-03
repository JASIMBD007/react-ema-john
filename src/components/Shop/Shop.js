import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useProducts();//custom hook used
    const [cart, setCart] = useState([]);

    // useEffect(() => {
    // console.log('Product load before fetch', products);
    //     fetch('products.json')
    //         .then(response => response.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        // console.log('Local storage first line ');
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(storedCart);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);

    };
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id} product={product} handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;