import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Arrow({ diagonal = false }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.7" /></svg>;
}

function RockArt() {
  return <svg className="rock-art" viewBox="0 0 620 650" role="img" aria-labelledby="rock-title">
    <title id="rock-title">Original abstract rock sculpture with a lime green orbital ring</title>
    <defs>
      <linearGradient id="stone-a" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#999d8e"/><stop offset="1" stopColor="#30362c"/></linearGradient>
      <linearGradient id="stone-b" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d7dacb"/><stop offset="1" stopColor="#727967"/></linearGradient>
      <linearGradient id="stone-c" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#515847"/><stop offset="1" stopColor="#171e16"/></linearGradient>
      <radialGradient id="glow"><stop stopColor="#b5e65c" stopOpacity=".17"/><stop offset="1" stopColor="#b5e65c" stopOpacity="0"/></radialGradient>
    </defs>
    <circle cx="310" cy="310" r="290" fill="url(#glow)"/>
    <g fill="none" stroke="#a8b594" strokeOpacity=".13"><circle cx="310" cy="320" r="244"/><circle cx="310" cy="320" r="190"/><path d="M310 50v540M40 320h540"/></g>
    <ellipse cx="313" cy="554" rx="154" ry="19" fill="#090c08" opacity=".6"/>
    <ellipse cx="308" cy="324" rx="257" ry="99" transform="rotate(-25 308 324)" fill="none" stroke="#c2ef66" strokeWidth="3"/>
    <g className="sculpture">
      <path d="m220 170 135-58 105 90 29 190-89 137-164-10-78-139z" fill="url(#stone-a)"/>
      <path d="m220 170 135-58-18 188-101 219-78-139z" fill="url(#stone-b)"/>
      <path d="m355 112 105 90-123 98z" fill="#b3b8a6"/>
      <path d="m337 300 123-98 29 190-89 137z" fill="url(#stone-c)"/>
      <path d="m337 300 63 229-164-10z" fill="#646c58"/>
      <path d="m220 170 117 130-179 80z" fill="#8b947d"/>
      <g stroke="#e1e7d4" strokeOpacity=".22" fill="none"><path d="m220 170 117 130 123-98M337 300l63 229M337 300 236 519M355 112l-18 188"/><path d="m231 190 63 72-38 36M370 331l47 33-6 79M216 405l32 24-15 48"/></g>
    </g>
    <path d="M80 424c86 23 259-28 393-111 47-30 76-59 83-83" fill="none" stroke="#c2ef66" strokeWidth="3"/>
    <g fill="#c2ef66"><circle cx="80" cy="424" r="6"/><path d="m497 156 7 0 0 7-7 0z"/></g>
    <g stroke="#c2ef66" strokeWidth="1.5"><path d="M105 162v18m-9-9h18M502 471v18m-9-9h18"/></g>
  </svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="The Rocks Gym home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 36 36"><path d="m5 27 7-19 10-3 9 22-14 5z" fill="currentColor"/><path d="m12 8 5 24 5-27M5 27l17-22" fill="none" stroke="#151713" strokeWidth="2"/></svg></span>
        <span>THE ROCKS<span className="brand-sub">GYM · RAJKOT</span></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
      <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>The gym</a>
        <a href="#location" onClick={closeMenu}>Rajkot <Arrow diagonal /></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> THE ROCKS GYM / RAJKOT</p>
          <h1 id="hero-heading">MAKE<br/>YOUR<br/><span>NEXT MOVE.</span></h1>
          <div className="hero-bottom"><p>A little resolve.<br/>A new beginning.<br/>Your next move starts with you.</p><a className="round-link" href="#about" aria-label="Explore The Rocks Gym"><Arrow /></a></div>
        </div>
        <div className="hero-visual"><div className="visual-label"><span>BUILT ON RESOLVE</span><span aria-hidden="true">↗</span></div><RockArt/><div className="visual-caption"><span>THE ROCKS</span><span>GYM</span></div></div>
        <div className="hero-foot"><span>STRENGTH STARTS WITH A DECISION.</span><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="about" id="about" aria-labelledby="about-heading">
        <div className="section-label"><span>01 / THE GYM</span><span className="little-cross" aria-hidden="true">+</span></div>
        <div className="about-content"><h2 id="about-heading">A strong name.<br/><span>A fresh start.</span></h2><div className="about-detail"><p>The Rocks Gym.<br/>A gym in Rajkot.</p><p className="secondary-copy">Bring your ambition.<br/>Make the next move yours.</p><a className="text-link" href="#location">Rooted in Rajkot <Arrow diagonal /></a></div></div>
        <div className="word-band" aria-hidden="true"><span>THE</span> ROCKS<span className="band-star">✳</span></div>
      </section>
      <section className="location" id="location" aria-labelledby="location-heading">
        <div className="section-label"><span>02 / OUR CITY</span><span>GUJARAT'S RAJKOT</span></div>
        <div className="location-body"><div><p className="eyebrow">THE ROCKS GYM</p><h2 id="location-heading">RAJKOT<span>.</span></h2><p className="location-copy">Your city. Your next chapter.</p></div><div className="city-art" aria-hidden="true"><div className="city-ring ring-one"/><div className="city-ring ring-two"/><div className="city-ring ring-three"/><div className="city-center">R<span>RAJKOT</span></div><span className="city-coordinate">THE ROCKS GYM</span></div></div>
      </section>
    </main>
    <footer><a className="footer-name" href="#home">THE ROCKS GYM<span>RAJKOT</span></a><a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
