import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import HeroSection from './components/hero-section/HeroSection';
import CallToAction from './components/call-to-action/CallToAction';
import FeaturedEvents from './components/featured-events/FeaturedEvents';
import EventDetail from './components/event-detail/EventDetail';
import Tickets from './components/tickets/Tickets'; // Placeholder component
import Events from './components/events/Events'; // Placeholder component
import WhatWeDo from './components/what-we-do/WhatWeDo'; // Placeholder component
import About from './components/about/About'; // Placeholder component
import GetInvolved from './components/get-involved/GetInvolved'; // Placeholder component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CallToAction />
              <FeaturedEvents />
              {/* Additional components like Footer, etc. can also go here */}
            </>
          } />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          {/* Fallback route: */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
