import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import InstagramSection from './components/Instagram';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <InstagramSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;

