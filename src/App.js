import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Nav from './components/Nav/Nav';

const App = () => {
    return (
        <div>
            <Nav />                   
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <medium>
                    made by <a href="https://github.com/JBurruss">James Burruss</a>, source code available on <a href="https://github.com/JBurruss/mrmaille">github</a>
                </medium>
            </footer>
        </div>
        
    );
}

export default App;
