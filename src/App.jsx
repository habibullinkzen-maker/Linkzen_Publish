import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, ArrowRight, ArrowUpRight, 
  Cpu, Code, Globe, Shield, Send, CheckCircle2,
  Menu, X, ShieldCheck, Award, CreditCard, FileText,
  Utensils, Receipt, Pill, GraduationCap, ShoppingBag, Check,
  Smartphone, Download, MessageSquare, Ticket, Banknote
} from 'lucide-react';
import InteractiveDemo from './components/InteractiveDemo';
import TechMarquee from './components/TechMarquee';
import InteractiveWebBg from './components/InteractiveWebBg';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.805.001-2.621-1.022-5.086-2.88-6.948-1.859-1.861-4.328-2.885-6.953-2.886-5.407 0-9.81 4.398-9.813 9.808-.001 1.562.406 3.087 1.18 4.417l-.989 3.612 3.708-.973zm10.743-3.666c-.276-.139-1.631-.805-1.885-.898-.254-.093-.44-.139-.623.139-.185.278-.714.898-.875 1.084-.162.184-.325.208-.601.069-.276-.139-1.168-.43-2.223-1.372-.821-.733-1.375-1.639-1.536-1.916-.162-.278-.017-.428.121-.566.125-.124.276-.324.415-.486.139-.162.185-.278.276-.463.093-.185.047-.347-.024-.486-.071-.139-.623-1.501-.855-2.056-.225-.54-.452-.466-.623-.475-.162-.008-.347-.009-.533-.009-.185 0-.488.07-.743.347-.255.278-.975.953-.975 2.324s1.001 2.697 1.14 2.882c.14.185 1.969 3.007 4.769 4.214.666.287 1.187.459 1.593.589.67.213 1.28.183 1.762.111.537-.08 1.631-.667 1.861-1.328.23-.662.23-1.229.162-1.328-.069-.099-.255-.139-.53-.277z"/>
  </svg>
);

// Product configurations
const products = [
  {
    id: 'restaurant',
    title: 'Restaurant ERP',
    tagline: 'DineIn Master',
    desc: 'Optimize restaurant queues, kitchen tickets, tables booking, and inventory controls in a unified system.',
    features: ['Real-time KDS (Kitchen Display)', 'Multi-table management & billing', 'Raw ingredient inventory logs', 'Waiter order app sync'],
    theme: 'cyan',
    brochure: '/Restaurant-ERP-Brochure.pdf'
  },
  {
    id: 'billing',
    title: 'Billing ERP',
    tagline: 'Financify POS',
    desc: 'Streamlined Point-of-Sale software designed for fast invoicing, automatic tax calculation, and transaction ledgers.',
    features: ['1-click invoice generation', 'Automatic GST & VAT calculations', 'Daily ledger analytics', 'Payment gateway integration'],
    theme: 'purple',
    brochure: '/Billing-ERP-Brochure.pdf'
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy ERP',
    tagline: 'PharmaFlow',
    desc: 'Intelligent medicine stock database with auto-replenish alerts, drug interaction rules, and expiry tracking.',
    features: ['Live batch & stock level updates', 'Low stock triggers & auto-reorder', 'Expiry date tracking system', 'Prescription digital archiving'],
    theme: 'cyan',
    brochure: '/Pharmacy-ERP-Brochure.pdf'
  },
  {
    id: 'school',
    title: 'School ERP',
    tagline: 'EduSuite',
    desc: 'Empower schools and colleges with online enrollment, student records, fee collection systems, and attendance tracking.',
    features: ['Student roster & bio database', 'Interactive attendance console', 'Academic performance tracker', 'Fee due tracker with SMS alerts'],
    theme: 'purple',
    brochure: '/School-ERP-Brochure.pdf'
  },
  {
    id: 'microfinance',
    title: 'Micro Finance ERP',
    tagline: 'LoanFlow',
    desc: 'Complete micro-finance and loan management platform with borrower tracking, EMI scheduling, and collection analytics.',
    features: ['Borrower profile & KYC management', 'EMI schedule & auto-reminders', 'Collection agent tracking', 'Loan disbursement ledger'],
    theme: 'cyan',
    brochure: '/MicroFinance-Brochure.pdf'
  },
  {
    id: 'webdev',
    title: 'Web Development',
    tagline: 'WebCraft Engine',
    desc: 'Design and engineer ultra-fast, responsive corporate websites, high-converting landing pages, and complex custom web portals.',
    features: ['SEO-friendly clean semantic code', 'Fully responsive mobile-first views', 'Headless CMS & database sync', 'Blazing-fast page speed performance'],
    theme: 'purple'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Software',
    tagline: 'CartEngine',
    desc: 'Complete digital storefront platform with functional shopping carts, dynamic stock updates, and a checkout manager.',
    features: ['High-speed product listings', 'Interactive shopping cart module', 'Secure checkout pipeline', 'Auto-generated invoice emails'],
    theme: 'cyan',
    brochure: '/ECommerce-Brochure.pdf'
  }
];

const teamMembers = [
  {
    name: 'Hamim Ahmed',
    role: 'CEO & Co-founder',
    photo: '/Images/Team Members/Hamim Ahmed.png',
    isFeatured: true,
    whatsapp: '916002552415'
  },
  {
    name: 'Ariful Islam',
    role: 'Client Support Executive',
    photo: '/Images/Team Members/Ariful Islam.png',
    whatsapp: '9184722027237'
  },
  {
    name: 'Habibul Bashar Ahmed',
    role: 'Marketing Management',
    photo: '/Images/Team Members/Habibul Bashar Ahmed.png',
    whatsapp: '919101358240'
  },
  {
    name: 'Mokibul Islam',
    role: 'Lead UI/UX Designer',
    photo: '/Images/Team Members/Mokibul Islam.png',
    whatsapp: '916001309630'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('restaurant');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'restaurant', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToDemo = (id) => {
    // We can trigger an event or state change, but since we import InteractiveDemo,
    // we can scroll to the element. Let's find the section.
    const element = document.getElementById('interactive-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Also, trigger active tab selection by simulating click or passing state.
    // To make it easy, we can dispatch a custom event or let the user click.
    // Let's scroll first, and since InteractiveDemo manages its own activeTab state, 
    // we can coordinate via a state if we lift it up, or just scroll.
    // Let's lift the activeTab state up to App so both components share it!
    setActiveTab(id);
  };

  const handleCardAction = (id) => {
    if (id === 'webdev' || id === 'appdev') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setFormData(prev => ({ ...prev, subject: 'custom' }));
    } else {
      handleScrollToDemo(id);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'restaurant', message: '' });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <InteractiveWebBg />
      {/* Navigation Header */}
      <header className="header-nav">
        <div className="container header-container">
          <div className="logo-wrapper">
            <img src="/Images/logo.png" className="logo-image" alt="Linkzen Logo" />
            <div className="text-left">
              <span className="logo-text">LINKZEN</span>
              <span style={{ display: 'block', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '1px', fontWeight: 'bold' }}>TECHNOLOGY & RESEARCH</span>
            </div>
          </div>

          <nav>
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#products" className="nav-link">Products</a></li>
              <li><a href="#interactive-demo" className="nav-link">Live Demo Center</a></li>
              <li><a href="#research" className="nav-link">Research Hub</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <a href="#contact" className="contact-btn-nav">Get In Touch</a>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay bg-dark-glass animate-fade-in">
            <ul className="mobile-nav-menu">
              <li><a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
              <li><a href="#interactive-demo" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Live Demo Center</a></li>
              <li><a href="#research" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Research Hub</a></li>
              <li><a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              <li style={{ marginTop: '20px' }}>
                <a href="#contact" className="contact-btn-nav" onClick={() => setMobileMenuOpen(false)} style={{ display: 'inline-block' }}>Get In Touch</a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <span className="badge">Engineering Next-Gen ERP Systems</span>
          <h1>Building Enterprise Solutions Powered by <span className="text-gradient">Advanced Research</span></h1>
          <p className="hero-subtitle">
            Linkzen Technology And Research Centre is a premier software engineering firm focused on delivering robust, enterprise-grade technological solutions. We partner with businesses to optimize their operations through custom software development, cloud integration, and digital transformation strategies. We build reliable, secure systems designed to scale and accelerate your business growth.
          </p>
          <div className="hero-cta-group">
            <button className="btn-primary" onClick={() => handleScrollToDemo('restaurant')}>
              Try Live ERP Demos <ArrowRight size={18} />
            </button>
            <a href="#contact" className="btn-secondary">Contact Engineering</a>
          </div>
        </div>
        <TechMarquee />
        
        <div className="cert-badges-container container">
          <div className="cert-badge">
            <div className="cert-icon-wrapper">
              <ShieldCheck size={18} />
            </div>
            <div className="cert-info">
              <span className="cert-title">GSTIN</span>
              <span className="cert-value">18AAFAL0308L1ZN</span>
            </div>
          </div>
          
          <div className="cert-badge purple-theme">
            <div className="cert-icon-wrapper">
              <Award size={18} />
            </div>
            <div className="cert-info">
              <span className="cert-title">UDYAM</span>
              <span className="cert-value">AS-02-0046184</span>
            </div>
          </div>
          
          <div className="cert-badge">
            <div className="cert-icon-wrapper">
              <CreditCard size={18} />
            </div>
            <div className="cert-info">
              <span className="cert-title">PAN</span>
              <span className="cert-value">AAFAL0308L</span>
            </div>
          </div>
          
          <div className="cert-badge purple-theme">
            <div className="cert-icon-wrapper">
              <FileText size={18} />
            </div>
            <div className="cert-info">
              <span className="cert-title">LICENCE</span>
              <span className="cert-value">DOHUA/202526/491208093</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog Section */}
      <section className="products-section" id="products">
        <div className="products-container">
          <div className="section-header text-center">
            <span className="badge">Enterprise Suite</span>
            <h2>Our Core Software Ecosystem</h2>
            <p className="section-subtitle">
              Fully optimized management modules crafted for speed, durability, and frictionless user experiences.
            </p>
          </div>

          <div className="products-grid-list">
            {products.map((prod) => {
              const isService = prod.id === 'webdev' || prod.id === 'appdev';
              
              const getIcon = (id) => {
                if (id === 'restaurant') return Utensils;
                if (id === 'billing') return Receipt;
                if (id === 'pharmacy') return Pill;
                if (id === 'school') return GraduationCap;
                if (id === 'webdev') return Code;
                if (id === 'appdev') return Smartphone;
                if (id === 'ecommerce') return ShoppingBag;
                if (id === 'microfinance') return Banknote;
                return Utensils;
              };

              const IconComponent = getIcon(prod.id);

              return (
                <div 
                  key={prod.id} 
                  className={`product-item-card ${prod.theme}-theme animate-fade-in`}
                >
                  <div className="product-card-header-section">
                    <div className="product-card-header">
                      <div className="product-icon-container">
                        <IconComponent size={24} />
                      </div>
                      <span className="product-tagline">
                        {prod.tagline}
                      </span>
                    </div>

                    <div className="product-card-content">
                      <h3 className="product-title">{prod.title}</h3>
                      <p className="product-description">{prod.desc}</p>
                    </div>
                  </div>

                  <div className="product-card-features-section">
                    <ul className="product-features-list">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="product-feature-item">
                          <span className="feature-tick-wrapper">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span className="feature-text">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="btn-card-demo" onClick={() => handleCardAction(prod.id)}>
                      <span>{isService ? 'Consult Engineering' : 'Launch Simulation'}</span>
                      <span className="btn-icon-arrow">
                        <ArrowUpRight size={16} />
                      </span>
                    </button>

                    {prod.brochure && (
                      <a
                        href={prod.brochure}
                        download
                        className="btn-download-brochure"
                      >
                        <Download size={15} />
                        <span>Download Brochure (PDF)</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive ERP Demo Center */}
      <div id="interactive-demo">
        <div className="container">
          <InteractiveDemo activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>




      {/* Service Area Section */}
      <section className="service-area-section" id="service-area">
        <div className="container">
          <div className="service-area-banner bg-dark-glass">
            <div className="service-area-text">
              <span className="badge" style={{ background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.25)', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                <Globe size={12} /> Service Area
              </span>
              <h2 className="service-area-heading">
                Expanding Across<br />
                <span className="text-gradient">Assam.</span>
              </h2>
              <p className="service-area-desc">
                Delivering premium digital solutions to every corner of the state. Distance is just a number.
              </p>
            </div>
            <div className="service-area-cities">
              <div className="cities-grid">
                {['Barpeta', 'Goalpara', 'Dhubri', 'Kamrup', 'Guwahati', 'Baksa', 'Kokrajhar'].map((city) => (
                  <span key={city} className="city-tag">
                    <span className="city-dot" />
                    {city}
                  </span>
                ))}
                <span className="city-tag more-tag">
                  <span style={{ fontSize: '12px', opacity: 0.6 }}>↔</span> More coming soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Payment Section */}
      <section className="support-payment-section" id="support">
        <div className="container">

          {/* We're Here to Help */}
          <div className="support-header text-center">
            <h2 className="support-title">We're Here to <span className="text-gradient">Help</span></h2>
            <div className="support-title-line" />
          </div>
          <div className="support-cards-grid">
            <a href="https://wa.me/916002552415" target="_blank" rel="noopener noreferrer" className="support-card bg-glass">
              <div className="support-card-icon">
                <MessageSquare size={26} />
              </div>
              <span className="support-card-label">Live Chat</span>
            </a>
            <a href="mailto:Linkzen@support.in" className="support-card bg-glass">
              <div className="support-card-icon">
                <Mail size={26} />
              </div>
              <span className="support-card-label">Email Support</span>
            </a>
            <a href="https://wa.me/916002552415" target="_blank" rel="noopener noreferrer" className="support-card bg-glass">
              <div className="support-card-icon">
                <WhatsAppIcon size={26} />
              </div>
              <span className="support-card-label">WhatsApp</span>
            </a>
            <a href="#contact" className="support-card bg-glass">
              <div className="support-card-icon">
                <Ticket size={26} />
              </div>
              <span className="support-card-label">Support Ticket</span>
            </a>
          </div>

          {/* Flexible Payment Options */}
          <div className="payment-header text-center">
            <h2 className="payment-title"><span style={{ color: 'var(--text-primary)' }}>Flexible</span> <span className="text-gradient">Payment Options</span></h2>
            <p className="payment-subtitle">Pay securely from anywhere in the world using our locally optimized and globally trusted payment gateways.</p>
          </div>
          <div className="payment-cards-grid">
            <div className="payment-card">
              <div className="payment-card-header">
                <div className="payment-card-header-icon">
                  <Globe size={18} />
                </div>
                <h4>International</h4>
              </div>
              <div className="payment-tags">
                {['PayPal', 'Payoneer', 'Stripe', 'Wise'].map(p => <span key={p} className="payment-tag">{p}</span>)}
              </div>
            </div>
            <div className="payment-card">
              <div className="payment-card-header">
                <div className="payment-card-header-icon">
                  <CreditCard size={18} />
                </div>
                <h4>India</h4>
              </div>
              <div className="payment-tags">
                {['Paytm', 'Razorpay', 'Cashfree', 'PhonePe', 'Amazon Pay', 'UPI'].map(p => <span key={p} className="payment-tag">{p}</span>)}
              </div>
            </div>
            <div className="payment-card">
              <div className="payment-card-header">
                <div className="payment-card-header-icon">
                  <CreditCard size={18} />
                </div>
                <h4>Card Networks</h4>
              </div>
              <div className="payment-tags">
                {['Visa', 'Mastercard', 'American Express', 'RuPay'].map(p => <span key={p} className="payment-tag">{p}</span>)}
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          {/* Executive Team Section */}
          <div className="team-section-container">
            <div className="section-header text-center" style={{ marginBottom: '40px' }}>
              <span className="badge" style={{ background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.25)', color: 'var(--primary)' }}>
                Executive Leadership
              </span>
              <h2 style={{ fontSize: '32px', marginTop: '8px' }}>Meet Our Executive Team</h2>
              <p className="section-subtitle" style={{ maxWidth: '600px', margin: '12px auto 0 auto', color: 'var(--text-secondary)' }}>
                The researchers, developers, and designers driving next-generation enterprise innovation at Linkzen.
              </p>
            </div>
            
            <div className="team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className={`team-card bg-glass ${member.isFeatured ? 'featured' : ''}`}>
                  <div className="team-photo-wrap">
                    <img src={member.photo} alt={member.name} className="team-photo" />
                  </div>
                  <div className="team-info-body">
                    <h4>{member.name}</h4>
                    <span className="team-member-role">{member.role}</span>
                    {member.whatsapp && (
                      <a 
                        href={`https://wa.me/${member.whatsapp}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="whatsapp-btn"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-layout">
            {/* Contact Details Column */}
            <div className="contact-info-panel">
              <div>
                <span className="badge">Get in Touch</span>
                <h2 style={{ fontSize: '32px', marginTop: '8px', marginBottom: '12px' }}>Start Your Upgrade</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Discuss your business requirements with our solution engineers or request custom modifications to our ERP suites.
                </p>
              </div>

              <div className="contact-details-list">
                <a href="tel:+916002552415" className="contact-detail-card bg-glass clickable-card">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Direct Call</h4>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>+91 6002552415</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Monday to Saturday, 9 AM - 6 PM (Tap to Call)</p>
                  </div>
                </a>

                <a href="mailto:Linkzen@support.in" className="contact-detail-card bg-glass purple-theme clickable-card">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Support Email</h4>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>Linkzen@support.in</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>24/7 client response desk (Tap to Email)</p>
                  </div>
                </a>

                <div className="contact-detail-card bg-glass">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>Corporate Office</h4>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>Barpeta, Assam</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Research laboratory & Tech centre</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="contact-form-panel bg-glass">
              <h3>Send a Message</h3>
              {formSubmitted ? (
                <div className="text-center animate-pop-in" style={{ padding: '40px 0' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(5, 242, 155, 0.1)', color: 'var(--color-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justify: 'center', margin: '0 auto 20px auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p style={{ fontSize: '13px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                    Thank you for contacting Linkzen Technology & Research Centre. One of our system consultants will reply shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="input-group-modern">
                    <label className="label-modern">Full Name</label>
                    <input 
                      type="text" 
                      className="input-modern"
                      placeholder="Enter your name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="input-group-modern">
                    <label className="label-modern">Email Address</label>
                    <input 
                      type="email" 
                      className="input-modern"
                      placeholder="you@example.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="input-group-modern">
                    <label className="label-modern">Select ERP Suite of Interest</label>
                    <select 
                      className="select-modern"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="restaurant">Restaurant Management ERP</option>
                      <option value="billing">Billing & Invoicing ERP</option>
                      <option value="pharmacy">Pharmacy & Stock ERP</option>
                      <option value="school">School Administration ERP</option>
                      <option value="ecommerce">E-Commerce Platforms</option>
                      <option value="custom">Custom R&D Software</option>
                    </select>
                  </div>
                  <div className="input-group-modern">
                    <label className="label-modern">Project Details / Inquiry Message</label>
                    <textarea 
                      rows="4" 
                      className="input-modern"
                      placeholder="Outline your organization size, specific features needed..." 
                      required
                      style={{ resize: 'vertical' }}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full" style={{ justifyContent: 'center' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <img src="/Images/logo.png" style={{ height: '30px' }} alt="" />
                <span className="text-gradient">LINKZEN</span>
              </h4>
              <p>
                Linkzen Technology And Research Centre is a leading-edge software engineering institute creating robust enterprise modules and systems designed for longevity and intelligence.
              </p>
            </div>
            
            <div className="footer-column">
              <h5>ERP Products</h5>
              <ul className="footer-links">
                <li><a href="#interactive-demo" onClick={() => handleScrollToDemo('restaurant')}>DineIn Master (Restaurant)</a></li>
                <li><a href="#interactive-demo" onClick={() => handleScrollToDemo('billing')}>Financify POS (Billing)</a></li>
                <li><a href="#interactive-demo" onClick={() => handleScrollToDemo('pharmacy')}>PharmaFlow (Pharmacy)</a></li>
                <li><a href="#interactive-demo" onClick={() => handleScrollToDemo('school')}>EduSuite (School)</a></li>
                <li><a href="#interactive-demo" onClick={() => handleScrollToDemo('ecommerce')}>CartEngine (E-Commerce)</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home Dashboard</a></li>
                <li><a href="#products">Ecosystem Overview</a></li>
                <li><a href="#research">R&D Activities</a></li>
                <li><a href="#contact">Consultation Request</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5>Contact Desk</h5>
              <ul className="footer-links" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', gap: '8px' }}><Phone size={14} className="text-gradient" /> +91 6002552415</li>
                <li style={{ display: 'flex', gap: '8px' }}><Mail size={14} className="text-gradient" /> Linkzen@support.in</li>
                <li style={{ display: 'flex', gap: '8px' }}><MapPin size={14} className="text-gradient" /> Barpeta, Assam</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Linkzen Technology And Research Centre. All Rights Reserved.</p>
            <p>Designed with next-gen UI/UX protocols</p>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Social Dock */}
      <div className="floating-social-dock">
        <a 
          href="https://wa.me/916002552415" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-dock-btn whatsapp"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={20} />
        </a>
        <a 
          href="https://www.instagram.com/linkzentechnology?igsh=MTF3NXJhcHVqOGtpYw==" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-dock-btn instagram"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
        </a>
        <a 
          href="https://youtu.be/OYNXIzwIODg?si=mi8hlDE_lfBzUPU4" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-dock-btn youtube"
          aria-label="YouTube"
        >
          <YoutubeIcon size={20} />
        </a>
        <a 
          href="https://www.facebook.com/share/1HX8aD1VaZ/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-dock-btn facebook"
          aria-label="Facebook"
        >
          <FacebookIcon size={20} />
        </a>
        <a 
          href="https://twitter.com/linkzentechnology" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-dock-btn twitter"
          aria-label="Twitter / X"
        >
          <TwitterIcon size={20} />
        </a>
      </div>
    </>
  );
}
