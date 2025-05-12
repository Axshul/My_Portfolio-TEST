'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Workflows from '../components/Workflows';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const sections = document.querySelectorAll('.section');
    
    const revealSection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Deepankar Bhadrasen | AI Automation Specialist</title>
        <meta name="description" content="AI Automation Specialist Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <CustomCursor />
      <BackgroundAnimation />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Workflows />
      <Contact />
      <Footer />
    </div>
  );
}