import React from 'react';
import './App.css';
import Header from "./navbar/header";
import Hero from './Hero/Hero';
import About from './about/About';
import Programs from './Programs/Programs';
import Blog from './Blogs/Blog';
import Sponsors from './Sponsors/Sponsors';  
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Programs/>
      <Blog />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
