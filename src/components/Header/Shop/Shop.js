import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect ( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    
    const handelToCart = (product) => {
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart)
   }
    return (
    <div className='shop-container'>
    <div className="products-container">
           {
            products.map(productk => 
            <Product 
               key={productk.id}
               productk={productk}
               handelToCart={handelToCart}
            >

            </Product>)
           }
    </div>
    <div className="cart-container">
          <h4>oder summary</h4>
          <p>Selected Items: {cart.length}</p>
    </div>
        </div>
    );
};

export default Shop;