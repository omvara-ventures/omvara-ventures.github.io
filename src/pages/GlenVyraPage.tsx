import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { whiskyReleases } from "../data/whiskyReleases";
import SectionHeading from "../components/SectionHeading";

export default function GlenVyraPage() {
  return (
    <>
      <section className="glen-hero">
        <img className="glen-hero-bottle" src="/images/glen-vyra/glen-vyra-bottle-concept.jpeg" alt="Illustrative Glen Vyra bottle concept; age, provenance and label details are unverified" />
        <div className="container glen-hero-content">
          <p className="eyebrow eyebrow-gold">A PREMIUM WHISKY BRAND CONCEPT</p>
          <img className="glen-wordmark" src="/images/glen-vyra/glen-vyra-wordmark.jpeg" alt="Glen Vyra" />
          <div className="gold-rule" />
          <h1>A Whisky Brand Concept.<br /><span>Proposed Releases.</span></h1>
          <p className="hero-lead">A considered vision for future releases and trade partnerships.</p>
          <p className="glen-intro">Glen Vyra is a developing brand concept. Product specifications, provenance and availability remain subject to verification. Details shown on the bottle artwork are unverified.</p>
          <div className="button-row"><a className="button button-gold" href="#releases">Explore proposed releases <ArrowRight size={17} /></a><Link className="button button-outline-light" to="/contact?type=whisky">Trade enquiries</Link></div>
        </div>
      </section>

      <section className="section glen-story">
        <div className="container narrow-container">
          <p className="eyebrow eyebrow-gold">PROPOSED BRAND STORY</p>
          <h2>Highland heritage, seen through a modern lens.</h2>
          <p className="glen-story-copy">Deep within the jagged, storm-swept ridges of the Scottish Highlands, where pure mountain spring water filters through granite stone and wild purple thistle, lies the origin of Glen Vyra.</p>
          <p className="glen-story-copy">Founded as a rebellious, small-scale craft project by forward-thinking distillers, Glen Vyra breaks from centuries of uniform tradition. By blending historic wood-cask maturation with modern design technology, we honor the ancient heritage of the Highlands while introducing a vibrant, electric perspective to the world of premium spirits. Every drop represents small-batch precision, untamed landscape, and an architectural approach to single malt flavor profiles.</p>
          <p className="glen-story-note">This proposed narrative contains origin, founding, production and provenance claims that have not been verified. Treat it as concept copy until each claim is confirmed.</p>
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
            <div className="release-art"><img src="/images/glen-vyra/glen-vyra-bottle-concept.jpeg" alt="" loading="lazy" /><small>ILLUSTRATIVE BOTTLE CONCEPT · LABEL DETAILS UNVERIFIED</small></div>
            <div className="release-copy"><span className="status-label status-gold">{release.status}</span><p className="release-number">RELEASE {release.number}</p><h3>{release.name}</h3><p>{release.description}</p><dl><div><dt>Age</dt><dd>{release.proposedAge}</dd></div><div><dt>Cask</dt><dd>{release.proposedCask}</dd></div><div><dt>Quantity</dt><dd>{release.proposedQuantity}</dd></div></dl><Link className="text-link" to={`/contact?type=whisky&release=${release.id}`}>Enquire about this release <ArrowRight size={15} /></Link></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section glen-concepts">
        <div className="container">
          <SectionHeading eyebrow="VISUAL IDENTITY" title="Packaging concepts" text="Exploratory Glen Vyra artwork. Bottle labels, ages, quantities, production and provenance shown in these images are unverified." align="center" />
          <div className="glen-concept-grid">
            <figure className="glen-concept"><img src="/images/glen-vyra/glen-vyra-bottle-box-concept.jpeg" alt="Glen Vyra bottle and presentation box concept" loading="lazy" /><figcaption>Bottle and presentation concept. Label details are unverified.</figcaption></figure>
            <figure className="glen-concept"><img src="/images/glen-vyra/glen-vyra-serving-concept.jpeg" alt="Glen Vyra bottle, presentation box and glass concept" loading="lazy" /><figcaption>Serving and presentation concept. Product details are unverified.</figcaption></figure>
            <figure className="glen-concept"><img src="/images/glen-vyra/glen-vyra-brand-vehicle-concept.jpeg" alt="Glen Vyra branded vehicle and bottle concept artwork" loading="lazy" /><figcaption>Branded vehicle concept artwork; no associated service or availability is implied.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="glen-trade"><div className="container glen-trade-inner"><div><p className="eyebrow eyebrow-gold">TRADE &amp; DISTRIBUTION</p><h2>Let's explore a partnership.</h2><p>Glen Vyra is intended to explore future international distributor partnerships, subject to product and business details being confirmed.</p></div><Link className="button button-gold" to="/contact?type=whisky">Discuss a trade partnership <ArrowRight size={17} /></Link></div></section>
      <p className="whisky-disclaimer">Glen Vyra release information is provisional until verified. The distillery image is illustrative and does not represent a Glen Vyra site or product. No claim of current production, stock or availability is made by this demonstration website. Any product marketed as Scotch whisky must comply with applicable Scotch Whisky regulations.</p>
    </>
  );
}
