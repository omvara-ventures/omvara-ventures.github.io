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
            <Link className="button button-outline-light" to="/port-machinery">Port Machinery</Link>
            <Link className="button button-outline-light" to="/glen-vyra">Discover Glen Vyra</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="THREE DISTINCT DIVISIONS" title="One parent company. Three areas of focus." text="Explore automotive and port machinery sourcing enquiries, alongside the Glen Vyra whisky brand concept." align="center" />
          <div className="division-grid">
            <article className="division-card automotive-card">
              <div className="division-copy">
                <p className="eyebrow eyebrow-light">OMVARA AUTOMOTIVE</p>
                <h3>Omvara Automotive</h3>
                <p>Vehicle sourcing and export enquiries for international buyers, including Suzuki models, Toyota Hilux pickups, passenger vehicles and SUVs.</p>
                <Link className="button button-small division-action" to="/automotive">Explore automotive <ArrowRight size={16} /></Link>
                <ul className="division-tags" aria-label="Automotive vehicle categories">
                  <li>Suzuki</li><li>Toyota Hilux</li><li>Passenger vehicles</li><li>SUVs &amp; 4x4</li>
                </ul>
              </div>
              <img className="division-image" src="/images/automotive/toyota-hilux-landscape.jpeg" alt="Toyota Hilux pickup in a mountain landscape" />
            </article>
            <article className="division-card port-machinery-card">
              <div className="division-copy">
                <p className="eyebrow eyebrow-light">PORT EQUIPMENT SOURCING</p>
                <h3>Port Machinery</h3>
                <p>Manufacturer-listed KP electric forklifts, container reach stackers and empty container handlers.</p>
                <Link className="button button-small division-action" to="/port-machinery">Explore port machinery <ArrowRight size={16} /></Link>
                <ul className="division-tags" aria-label="Port machinery categories">
                  <li>Electric forklifts</li><li>Reach stackers</li><li>Container handlers</li>
                </ul>
              </div>
              <div className="division-image port-machinery-art" aria-hidden="true"><Ship size={76} strokeWidth={1.2} /><span>PORT MACHINERY</span></div>
            </article>
            <article className="division-card whisky-card">
              <div className="division-copy">
                <p className="eyebrow eyebrow-gold">A WHISKY BRAND CONCEPT</p>
                <h3>Glen Vyra</h3>
                <p>A developing concept for proposed limited releases and future international distributor partnerships.</p>
                <Link className="button button-small button-gold division-action" to="/glen-vyra">Discover Glen Vyra <ArrowRight size={16} /></Link>
                <ul className="division-tags" aria-label="Glen Vyra concept areas">
                  <li>Proposed releases</li><li>Trade partnerships</li>
                </ul>
              </div>
              <img className="division-image" src="/images/glen-vyra/glen-vyra-bottle-concept.jpeg" alt="Illustrative Glen Vyra bottle concept; label details are unverified" />
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
