import { ArrowRight, ClipboardCheck, FileText, Search, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const steps = [
  { icon: Search, title: "Share your requirements", text: "Tell us the vehicle, quantity, specification and destination market." },
  { icon: ClipboardCheck, title: "Review sourcing options", text: "We discuss availability, specifications and a quotation for your requirements." },
  { icon: FileText, title: "Confirm the details", text: "Agree the transaction terms and applicable vehicle/export documentation." },
  { icon: Ship, title: "Coordinate shipping", text: "Confirm logistics, costs and estimated timelines before dispatch." },
];

export default function AutomotivePage() {
  return (
    <>
      <section className="page-hero automotive-hero">
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">OMVARA AUTOMOTIVE</p>
          <h1>Vehicles for<br /><span>Global Markets.</span></h1>
          <p className="hero-lead">Vehicle sourcing and export enquiries for international buyers, dealerships and fleet operators.</p>
          <div className="button-row">
            <Link className="button" to="/vehicles">Explore vehicle categories <ArrowRight size={17} /></Link>
            <Link className="button button-outline-light" to="/contact?type=automotive">Request a quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="OUR VEHICLE CATEGORIES" title="Source the vehicle you need" text="We can discuss sourcing requirements for selected makes and models, subject to availability and destination-market rules." align="center" />
          <div className="category-grid">
            <article className="category-card"><img src="/images/automotive/suzuki-jimny-forest.jpeg" alt="Suzuki Jimny on a forest road" /><div><h3>Suzuki vehicles</h3><p>Selected passenger cars, compact SUVs and 4x4 models.</p></div></article>
            <article className="category-card"><img src="/images/automotive/toyota-hilux-studio.jpeg" alt="Silver Toyota Hilux pickup" /><div><h3>Toyota Hilux &amp; pickups</h3><p>Pickup truck sourcing enquiries for commercial and private buyers.</p></div></article>
            <article className="category-card"><img src="/images/automotive/suzuki-swift-red.jpeg" alt="Red Suzuki Swift passenger car" /><div><h3>Passenger vehicles</h3><p>Vehicle sourcing based on the requested specification and market.</p></div></article>
          </div>
          <div className="center-action"><Link className="button button-dark" to="/vehicles">Browse illustrative vehicle catalogue <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="OUR PROCESS" title="From enquiry to export coordination" align="center" />
          <div className="process-grid">{steps.map(({ icon: Icon, title, text }, i) => <article className="process-card" key={title}><span className="step-number">0{i + 1}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow eyebrow-light">INTERNATIONAL BUYERS</p><h2>Tell us what you're looking for.</h2><p>Share your preferred vehicle, quantity and destination.</p></div><Link className="button button-gold" to="/contact?type=automotive">Request a quote <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
