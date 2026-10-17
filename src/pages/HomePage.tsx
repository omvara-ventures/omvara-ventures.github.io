import { ArrowRight, Globe2, Ship, ShieldCheck, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">OMVARA HOLDINGS &amp; VENTURES LTD.</p>
          <h1>International Trade.<br /><span>Distinctive Brands.</span></h1>
          <p className="hero-lead">
            Connecting global opportunities through vehicle sourcing and exports, alongside the development of premium brands.
          </p>
          <div className="button-row">
            <Link className="button" to="/automotive">Explore Automotive <ArrowRight size={17} /></Link>
            <Link className="button button-outline-light" to="/glen-vyra">Discover Glen Vyra</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="TWO DISTINCT DIVISIONS" title="One parent company. Two areas of focus." text="Explore our automotive export services and our premium whisky brand concept." align="center" />
          <div className="division-grid">
            <article className="division-card automotive-card">
              <img src="/images/automotive/toyota-fortuner-landscape.jpeg" alt="Toyota Fortuner SUV in a mountain landscape" />
              <div className="division-overlay" />
              <div className="division-content">
                <p className="eyebrow eyebrow-light">VEHICLE SOURCING &amp; EXPORTS</p>
                <h3>Omvara Automotive</h3>
                <p>Vehicle sourcing for international buyers, importers and dealerships.</p>
                <Link className="text-link text-link-light" to="/automotive">Explore automotive <ArrowRight size={16} /></Link>
              </div>
            </article>
            <article className="division-card whisky-card">
              <img src="/images/glen-vyra/distillery-illustrative.jpeg" alt="Illustrative distillery landscape, not a Glen Vyra location" />
              <div className="division-overlay" />
              <div className="division-content">
                <p className="eyebrow eyebrow-gold">PREMIUM WHISKY BRAND</p>
                <h3>Glen Vyra</h3>
                <p>A premium whisky brand concept with proposed releases and future trade partnerships.</p>
                <Link className="text-link text-link-gold" to="/glen-vyra">Discover Glen Vyra <ArrowRight size={16} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="HOW WE WORK" title="Clear communication. Thoughtful partnerships." text="Our approach is grounded in understanding requirements and setting clear expectations." align="center" />
          <div className="value-grid">
            <div className="value-card"><Globe2 /><h3>International outlook</h3><p>We consider buyer requirements, destination markets and relevant trade conditions.</p></div>
            <div className="value-card"><ShieldCheck /><h3>Transparent information</h3><p>We aim to provide clear product information and confirm details before commitments.</p></div>
            <div className="value-card"><Ship /><h3>Export coordination</h3><p>Discuss documentation and logistics options appropriate to each transaction.</p></div>
            <div className="value-card"><Handshake /><h3>Long-term relationships</h3><p>We welcome conversations with buyers, suppliers and potential distribution partners.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div><p className="eyebrow eyebrow-light">START A CONVERSATION</p><h2>Have a requirement or partnership in mind?</h2><p>Tell us which division you would like to contact.</p></div>
          <Link className="button button-gold" to="/contact">Contact Omvara <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
