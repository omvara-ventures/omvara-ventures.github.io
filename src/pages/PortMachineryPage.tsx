import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { PortMachineryModel } from "../data/portMachinery";
import { containerReachStackers, emptyContainerHandlers } from "../data/portMachinery";
import SectionHeading from "../components/SectionHeading";

function ModelTable({ title, models }: { title: string; models: PortMachineryModel[] }) {
  return (
    <div className="port-table-wrap" role="region" aria-label={`${title} specifications`} tabIndex={0}>
      <table className="port-model-table">
        <caption className="sr-only">{title} model specifications</caption>
        <thead>
          <tr><th scope="col">Equipment / model</th><th scope="col">Lifting capacity</th><th scope="col">Lift / stacking</th><th scope="col">Powertrain</th><th scope="col">Dimensions / weight</th></tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.model}>
              <th scope="row"><div className="port-model-cell"><img src={model.image} alt="" loading="lazy" /><div><Link to={`/port-machinery/${model.model.toLowerCase()}`}>{model.model}<ArrowRight size={13} aria-hidden="true" /></Link><small>{model.category}</small></div></div></th>
              <td>{model.liftingCapacity}</td>
              <td>{model.liftingOrStacking}</td>
              <td>{model.powertrain}</td>
              <td>{model.dimensions}{model.weight && <><br /><strong>Weight:</strong> {model.weight}</>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PortMachineryPage() {
  return (
    <>
      <section className="page-hero port-machinery-hero">
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">OMVARA HOLDINGS &amp; VENTURES</p>
          <h1>Port Machinery.<br /><span>Model References.</span></h1>
          <p className="hero-lead">A separate division for forklift and container-handling equipment sourcing enquiries.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="ELECTRIC COUNTERBALANCED FORKLIFTS" title="KP Series" text="The supplied English-language brochure lists 1.5-3.8 tonne capacity variants." />
          <div className="port-forklift-feature">
            <img className="port-forklift-image" src="/images/port-machinery/electric-forklift.svg" alt="Illustration of an electric counterbalanced forklift" />
            <div className="port-forklift-copy">
              <p className="eyebrow">BROCHURE RANGE</p>
              <h2>Capacity variants</h2>
              <ul className="port-capacities" aria-label="Brochure capacity variants">
                <li>1.5 t</li><li>1.8 t</li><li>2.0 t</li><li>2.5 t</li><li>3.0 t</li><li>3.5 t</li><li>3.8 t</li>
              </ul>
              <p className="port-machine-detail">The brochure lists lithium and lead-acid battery options, plus standard, two-stage full-free-lift and three-stage full-free-lift mast configurations.</p>
              <p className="port-machinery-disclaimer">These are brochure references, not confirmation of inventory. Confirm the exact model, configuration and availability for each enquiry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="CONTAINER REACH STACKERS" title="XCS Series" text="Browse reach-stacker models and their published capacities, lift heights, powertrains and dimensions." />
          <ModelTable title="Container reach stackers" models={containerReachStackers} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="EMPTY CONTAINER HANDLERS" title="XCH Series" text="Browse empty-handler models, lifting capacities, stacking options, powertrains and listed dimensions." />
          <ModelTable title="Empty container handlers" models={emptyContainerHandlers} />
          <p className="port-table-note">These specifications are reference details from the supplied brochure and product listings. Configurations and availability require confirmation for each enquiry; no distribution relationship is implied.</p>
        </div>
      </section>
    </>
  );
}