import React from 'react';
import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, Instagram, MapPin, Menu, X,
  Clock3, Star, Sparkles, Scissors, MessageCircle, Check
} from 'lucide-react';

const WHATSAPP_NUMBER = '233XXXXXXXXX'; // Replace with salon number: country code + number, no + or leading 0.

const services = [
  { name: 'Knotless Braids', detail: 'Lightweight, neat and beautifully finished.', price: 'From GH₵ 450', time: '3–5 hours' },
  { name: 'Boho Braids', detail: 'Soft curls and effortless statement texture.', price: 'From GH₵ 600', time: '4–6 hours' },
  { name: 'Cornrows', detail: 'Clean parts and creative protective styling.', price: 'From GH₵ 180', time: '1–3 hours' },
  { name: 'Silk Press', detail: 'A smooth, glossy finish with beautiful movement.', price: 'From GH₵ 250', time: '2 hours' },
  { name: 'Wig Installation', detail: 'A seamless install, styled to suit you.', price: 'From GH₵ 300', time: '2 hours' },
  { name: 'Natural Hair Care', detail: 'A nourishing reset for healthy natural hair.', price: 'From GH₵ 200', time: '1–2 hours' },
];

const gallery = [
  { title: 'Long box braids', category: 'Braids', image: '/images/braids-portrait.jpg' },
  { title: 'Natural hair puff', category: 'Natural hair', image: '/images/natural-puff.jpg' },
  { title: 'Neat cornrow braids', category: 'Braids', image: '/images/cornrows-style.jpg' },
  { title: 'Sleek bob finish', category: 'Styling', image: '/images/sleek-bob.jpg' },
];

const reviews = [
  { quote: 'The attention to detail is unmatched. I left feeling like a whole new woman.', name: 'Ama K.', service: 'Knotless braids' },
  { quote: 'Such a lovely experience from booking to the final look. I will definitely be back.', name: 'Nana A.', service: 'Silk press' },
  { quote: 'My style lasted beautifully and the team made me feel so comfortable.', name: 'Efua M.', service: 'Boho braids' },
];

function bookingLink(service = 'an appointment') {
  const message = `Hello Glow Hair Studio! I'd love to book ${service}. Please share your available dates.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [selected, setSelected] = useState('Knotless Braids');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Braids', 'Natural hair', 'Styling'];
  const visibleGallery = activeFilter === 'All' ? gallery : gallery.filter(item => item.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">Ghanaian beauty. Thoughtful styling. Your glow. <span>♡</span></div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">G</span><span>GLOW<span className="brand-small">HAIR STUDIO</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['Home', 'Our story', 'Services', 'Gallery', 'Contact'].map((item, i) => <a key={item} href={['#home','#story','#services','#gallery','#contact'][i]} onClick={closeMenu}>{item}</a>)}
          <a className="nav-book" href={bookingLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>Book an appointment <ArrowUpRightIcon /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> YOUR HAIR, YOUR MOMENT</p>
          <h1>Your hair.<br />Your crown. <em>Your glow.</em></h1>
          <p className="hero-text">From neat knotless braids to beautiful wig installs and natural hair care, enjoy thoughtful styling made for the way we wear our crowns in Ghana.</p>
          <div className="hero-actions"><a className="button button-dark" href="#services">Explore our services <ArrowRight size={17}/></a><a className="text-link" href="#story">Get to know us <ArrowDownRight size={16}/></a></div>
          <div className="hero-note"><div className="avatar-stack"><span>A</span><span>N</span><span>E</span></div><p><strong>Good hair, good energy.</strong><br/>Your new favourite salon awaits.</p></div>
        </div>
        <div className="hero-visual">
          <img src="/images/braids-portrait.jpg" alt="Black woman wearing long box braids" />
          <div className="image-stamp"><Sparkles size={17}/><span>Feel beautiful.<br/>Every single day.</span></div>
          <div className="vertical-label">GLOW IN YOUR OWN WAY — EST. 2024</div>
        </div>
        <div className="hero-bottom"><span>01 / 04</span><span>SCROLL TO EXPLORE ↓</span><span>ACCRA, GHANA</span></div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-kicker">A SALON THAT GETS YOU</div>
        <div><h2>Made for our hair.<br/><em>Made for your confidence.</em></h2><p>At Glow, we celebrate the beauty and versatility of Black hair. Whether you're choosing knotless braids, cornrows, a wig installation or a nourishing natural-hair treatment, we listen first and style with care.</p><a className="under-link" href="#contact">Come say hello <ArrowRight size={16}/></a></div>
        <div className="intro-number">01<span> / OUR PHILOSOPHY</span></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><div><p className="eyebrow"><span/> THE GLOW MENU</p><h2>Made for your<br/><em>kind of beautiful.</em></h2></div><p className="section-side">A little refresh or a whole new look — find the service that feels like you.</p></div>
        <div className="service-grid">
          {services.map((service, index) => <article className="service-card" key={service.name}><span className="service-index">0{index + 1}</span><div className="service-icon"><Scissors size={20}/></div><h3>{service.name}</h3><p>{service.detail}</p><div className="service-meta"><span>{service.price}</span><span>{service.time}</span></div><a href={bookingLink(service.name)} target="_blank" rel="noreferrer" aria-label={`Book ${service.name}`}><ArrowUpRightIcon/></a></article>)}
        </div>
        <p className="price-note">Demo prices in Ghana cedis (GH₵). Final prices should be confirmed with the salon and may vary by hair length, density and style.</p>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="section-heading"><div><p className="eyebrow"><span/> THE GLOW EDIT</p><h2>A little inspiration<br/><em>for your next look.</em></h2></div><p className="section-side">Your next favourite style might be right here. Save the look and let's make it yours.</p></div>
        <div className="filter-row">{filters.map(filter => <button className={activeFilter === filter ? 'filter active' : 'filter'} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="gallery-grid">{visibleGallery.map((item, i) => <article className="gallery-item" key={item.title}><img src={item.image} alt={item.title}/><div className="gallery-caption"><span>0{i + 1} / {item.category}</span><h3>{item.title}</h3></div></article>)}</div>
      </section>

      <section className="quote-band"><span className="quote-mark">“</span><p>When you look good, you feel good.<br/><em>And that glow speaks for itself.</em></p><span className="quote-credit">THE GLOW PROMISE</span></section>

      <section className="reviews section-pad">
        <div className="section-heading"><div><p className="eyebrow"><span/> KIND WORDS</p><h2>Don't just take<br/><em>our word for it.</em></h2></div><div className="rating"><div>★★★★★</div><span>THE GLOW EXPERIENCE</span></div></div>
        <div className="review-grid">{reviews.map(review => <article className="review-card" key={review.name}><div className="stars">★★★★★</div><p>“{review.quote}”</p><div className="review-author"><span>{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>{review.service}</small></div><Check size={15}/></div></article>)}</div>
        <p className="demo-note">Portfolio concept: testimonials shown are illustrative sample content.</p>
      </section>

      <section className="booking section-pad" id="contact">
        <div className="booking-copy"><p className="eyebrow"><span/> YOUR CHAIR IS WAITING</p><h2>Ready for your<br/><em>glow-up?</em></h2><p>Tell us what you're dreaming of. We'll help you find a time that works.</p><a className="button button-light" href={bookingLink(selected)} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Book on WhatsApp <ArrowRight size={17}/></a></div>
        <div className="booking-panel"><h3>Choose your next look</h3><p>Select a service and we'll start your booking conversation.</p><div className="service-picker">{services.slice(0,5).map(service => <button key={service.name} onClick={() => setSelected(service.name)} className={selected === service.name ? 'picked' : ''}>{service.name}{selected === service.name && <Check size={16}/>}</button>)}</div><div className="selected-service"><span>YOUR SELECTION</span><strong>{selected}</strong></div></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="brand brand-footer" href="#home"><span className="brand-mark">G</span><span>GLOW<span className="brand-small">HAIR STUDIO</span></span></a><p>Rooted in Ghana.<br/><em>Created for your glow.</em></p><a className="footer-social" href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={18}/> FOLLOW OUR JOURNEY</a></div>
        <div className="footer-details"><div><MapPin/><span><strong>FIND US</strong><br/>East Legon, Accra <small>Demo location — replace before launch</small></span></div><div><Clock3/><span><strong>OPENING HOURS</strong><br/>Mon – Sat, 9am – 6pm<br/><small>Sunday: By appointment</small></span></div><div><MessageCircle/><span><strong>LET'S TALK</strong><br/>WhatsApp bookings<br/><small>Replace demo contact details before publishing</small></span></div></div>
        <div className="footer-bottom"><span>© 2026 GLOW HAIR STUDIO. DEMO CONCEPT WEBSITE.</span><span>MADE WITH CARE IN ACCRA ✳</span></div>
      </footer>
      <a className="floating-whatsapp" href={bookingLink()} target="_blank" rel="noreferrer" aria-label="Book on WhatsApp"><MessageCircle size={21}/></a>
    </main>
  );
}

function ArrowUpRightIcon() { return <ArrowRight size={16} className="arrow-diagonal"/>; }

export default App;