import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TeamGrid from './components/TeamGrid'
import GalleryCarousel from './components/GalleryCarousel'
import GalleryPage from './components/GalleryPage'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import WhimsicalPage from './components/WhimsicalPage'

function HomePage() {
  return (
    <main className="bg-boltsWhite font-sans min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <GalleryCarousel />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <TeamGrid />
        </div>
        <div>
          <About />
          <Contact />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/whimsical" element={<WhimsicalPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App
