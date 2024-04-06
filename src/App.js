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
import Checkout from './components/checkout/Checkout';
import Calendar from './components/calendar-page/CalendarPage';
import HeroShowPage from './components/hero-show-page/HeroShowPage';
import Donate from './components/donate/Donate';
import Footer from './components/footer/Footer';
import Admin from './components/admin-page/AdminPage';
import './App.css';


function App() {
  return (
    <Router>
      <CartProvider> 
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <CallToAction />
                <FeaturedEvents />
                <Tickets />
                <Calendar />
                <WhatWeDo />
                {/* Additional components */}
              </>
            } />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/hero-show-page" element={<HeroShowPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
