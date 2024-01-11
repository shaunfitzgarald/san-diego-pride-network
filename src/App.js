import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart-context/CartContext'; // Update the path accordingly
import NavBar from './components/navbar/NavBar';
import HeroSection from './components/hero-section/HeroSection';
import CallToAction from './components/call-to-action/CallToAction';
import FeaturedEvents from './components/featured-events/FeaturedEvents';
import EventDetail from './components/event-detail/EventDetail';
import Tickets from './components/tickets/Tickets';
import Events from './components/events/Events';
import WhatWeDo from './components/what-we-do/WhatWeDo';
import About from './components/about/About';
import GetInvolved from './components/get-involved/GetInvolved';
import CartPage from './components/cart-page/CartPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your application in CartProvider */}
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <CallToAction />
                <FeaturedEvents />
                {/* Additional components */}
              </>
            } />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Fallback route */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
