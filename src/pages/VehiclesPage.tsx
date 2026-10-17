import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { vehicles } from "../data/vehicles";

const categories = ["All categories", "SUV & 4x4", "Pickup truck", "Passenger car", "Commercial"] as const;

export default function VehiclesPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All categories");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => vehicles.filter((v) => {
    const matchesCategory = category === "All categories" || v.category === category;
    const text = `${v.make} ${v.model} ${v.category}`.toLowerCase();
    return matchesCategory && text.includes(search.toLowerCase());
  }), [category, search]);

  return (
    <section className="section catalogue-section">
      <div className="container">
        <p className="eyebrow">OMVARA AUTOMOTIVE</p>
        <h1 className="page-title">Vehicle catalogue</h1>
        <p className="page-intro">An illustrative selection of models and categories for sourcing enquiries. Listings are not confirmation of current stock or export eligibility.</p>
        <div className="catalogue-controls">
          <label className="search-field"><span className="sr-only">Search vehicles</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search make or model" /></label>
          <label><span className="sr-only">Filter by category</span><select value={category} onChange={(e) => setCategory(e.target.value as (typeof categories)[number])}>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
        </div>
        <div className="vehicle-grid">
          {filtered.map((vehicle) => <article className="vehicle-card" key={vehicle.id}>
            <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model} illustrative vehicle`} loading="lazy" />
            <div className="vehicle-card-body">
              <span className="status-label">{vehicle.status}</span>
              <p className="vehicle-make">{vehicle.make}</p>
              <h2>{vehicle.model}</h2>
              <p>{vehicle.description}</p>
              <div className="vehicle-card-bottom"><span>{vehicle.category}</span><Link to={`/contact?type=automotive&vehicle=${encodeURIComponent(vehicle.make + " " + vehicle.model)}`} aria-label={`Enquire about ${vehicle.make} ${vehicle.model}`}><ArrowUpRight size={19} /></Link></div>
            </div>
          </article>)}
        </div>
        <div className="notice-box"><strong>Availability notice</strong><p>These are illustrative models, not verified inventory. Confirm model year, specification, supplier, pricing, stock and export eligibility before making an offer.</p></div>
      </div>
    </section>
  );
}
