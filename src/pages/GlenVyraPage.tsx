import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { whiskyReleases } from "../data/whiskyReleases";
import SectionHeading from "../components/SectionHeading";

export default function GlenVyraPage() {
  return (
    <>
      <section className="glen-hero">
        <div className="glen-hero-image" />
        <div className="container glen-hero-content">
          <p className="eyebrow eyebrow-gold">A PREMIUM WHISKY BRAND CONCEPT</p>
          <p className="glen-wordmark">GLEN VYRA</p>
          <div className="gold-rule" />
          <h1>A Whisky Brand Concept.<br /><span>Proposed Releases.</span></h1>
          <p className="hero-lead">A considered vision for future releases and trade partnerships.</p>
          <p className="glen-intro">Glen Vyra is a developing brand concept. Product specifications, provenance and availability remain subject to verification.</p>
          <div className="button-row"><a className="button button-gold" href="#releases">Explore proposed releases <ArrowRight size={17} /></a><Link className="button button-outline-light" to="/contact?type=whisky">Trade enquiries</Link></div>
        </div>
      </section>

      <section className="section glen-philosophy">
        <div className="container narrow-container">
          <SectionHeading eyebrow="THE GLEN VYRA PHILOSOPHY" title="Character. Craft. Rarity." text="We believe a special whisky deserves a clear story: what it is, where it comes from and what makes the release distinctive." align="center" />
          <div className="philosophy-grid"><div><Sparkles /><h3>Character</h3><p>Present each expression through accurate product details and tasting notes based on the actual whisky.</p></div><div><Sparkles /><h3>Craft</h3><p>Thoughtful presentation and care in how each release is selected and communicated.</p></div><div><Sparkles /><h3>Rarity</h3><p>Clear, verifiable edition quantities rather than unsupported scarcity claims.</p></div></div>
        </div>
      </section>

      <section className="section glen-releases" id="releases">
        <div className="container">
          <SectionHeading eyebrow="THE COLLECTION" title="Proposed limited releases" text="The concepts below reflect an early collection plan. Specifications, availability and quantities must be verified before sale or publication as confirmed products." align="center" />
          <div className="release-grid">{whiskyReleases.map((release) => <article className="release-card" key={release.id}>
            <div className="release-art"><span>GLEN VYRA</span><div className="bottle-silhouette"><div className="bottle-cap" /><div className="bottle-neck" /><div className="bottle-body"><span>{release.number}</span><small>LIMITED RELEASE</small></div></div><small>SCOTCH WHISKY · CONCEPT</small></div>
            <div className="release-copy"><span className="status-label status-gold">{release.status}</span><p className="release-number">RELEASE {release.number}</p><h3>{release.name}</h3><p>{release.description}</p><dl><div><dt>Age</dt><dd>{release.proposedAge}</dd></div><div><dt>Cask</dt><dd>{release.proposedCask}</dd></div><div><dt>Quantity</dt><dd>{release.proposedQuantity}</dd></div></dl><Link className="text-link" to={`/contact?type=whisky&release=${release.id}`}>Enquire about this release <ArrowRight size={15} /></Link></div>
          </article>)}</div>
        </div>
      </section>

      <section className="glen-trade"><div className="container glen-trade-inner"><div><p className="eyebrow eyebrow-gold">TRADE &amp; DISTRIBUTION</p><h2>Let's explore a partnership.</h2><p>Glen Vyra is intended to explore future international distributor partnerships, subject to product and business details being confirmed.</p></div><Link className="button button-gold" to="/contact?type=whisky">Discuss a trade partnership <ArrowRight size={17} /></Link></div></section>
      <p className="whisky-disclaimer">Glen Vyra release information is provisional until verified. The distillery image is illustrative and does not represent a Glen Vyra site or product. No claim of current production, stock or availability is made by this demonstration website. Any product marketed as Scotch whisky must comply with applicable Scotch Whisky regulations.</p>
    </>
  );
}
