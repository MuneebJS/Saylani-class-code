import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About';

ReactDOM.render(
    <BrowserRouter>
        {/* <App /> */}
        <div>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" render={() => <h1>Contact Us</h1>}/>
        </div>
    </BrowserRouter>,

    document.getElementById('root')
);

