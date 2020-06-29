import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/ProductsPage';
import HotDeals from './components/HotDeals';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorPath from './components/ErrorPath';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path = "/" exact component={ Home }/>
            <Route path = "/products" component={ Products }/>
            <Route path = "/hotdeals" component={ HotDeals }/>
            <Route path = "/about" component={ About }/>
            <Route path = "/contact" component={ Contact }/>
            <Route component = { ErrorPath }/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
