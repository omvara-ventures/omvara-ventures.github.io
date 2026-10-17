import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <section className="simple-page-hero"><div className="container"><p className="eyebrow">ABOUT OMVARA</p><h1 className="page-title">A global outlook.<br /><span>Distinct areas of focus.</span></h1><p className="page-intro">Omvara Holdings &amp; Ventures Ltd. brings together two distinct business initiatives under one parent identity.</p></div></section>
      <section className="section"><div className="container narrow-container"><SectionHeading eyebrow="OUR APPROACH" title="Built around clear communication" text="We aim to understand each enquiry, provide accurate information and build long-term relationships with customers and business partners." /><div className="about-columns"><div><h3>Omvara Automotive</h3><p>Focused on vehicle sourcing and export enquiries for international buyers, dealerships and commercial customers. Services and availability are confirmed individually for each transaction.</p><Link className="text-link" to="/automotive">Explore automotive <span>→</span></Link></div><div><h3>Glen Vyra</h3><p>A premium whisky brand concept being developed around distinctive releases, transparent product information and potential international trade partnerships.</p><Link className="text-link" to="/glen-vyra">Discover Glen Vyra <span>→</span></Link></div></div></div></section>
    </>
  );
}
