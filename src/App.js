import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
            <div className="container">
                <footer>
                    <small>
                        made by <a href="https://github.com/JBurruss">James Burruss</a>, source code available on <a href="https://github.com/JBurruss/mrmaille">github</a>
                    </small>
                </footer>
            </div>
        </div >
    );
}

export default App;
