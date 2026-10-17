import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand">OMVARA HOLDINGS &amp; VENTURES</Link>
          <p className="muted footer-intro">
            Vehicle and port machinery sourcing enquiries, alongside development of the Glen Vyra whisky brand concept.
          </p>
        </div>
        <div>
          <h3>Our divisions</h3>
          <Link to="/automotive">Omvara Automotive</Link>
          <Link to="/vehicles">Vehicle catalogue</Link>
          <Link to="/port-machinery">Port Machinery</Link>
          <Link to="/glen-vyra">Glen Vyra</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About Omvara</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Omvara Holdings &amp; Ventures Ltd.</span>
        <span>Product availability and business services are subject to confirmation.</span>
      </div>
    </footer>
  );
}
