import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';
import React from 'react';

const Home = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <ProductList />
            </div>
            <div className="col-md-4">
                <Cart />
            </div>
        </div>
    </div>
);

export default Home;