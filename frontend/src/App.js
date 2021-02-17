import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage'
const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Route path='/' component={HomePage} exact />
        <Route path='/product/:id' component={ProductPage} />
        <Route path='/cart/:id?' component={CartPage} />
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
