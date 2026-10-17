import { Link, Navigate, useParams } from "react-router-dom";
import { containerReachStackers, emptyContainerHandlers } from "../data/portMachinery";
import SectionHeading from "../components/SectionHeading";

const models = [...containerReachStackers, ...emptyContainerHandlers];

export default function PortMachineryModelPage() {
  const { modelId } = useParams();
  const model = models.find((item) => item.model.toLowerCase() === modelId);

  if (!model) return <Navigate to="/port-machinery" replace />;

  return (
    <>
      <section className="page-hero port-machinery-hero">
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">PORT MACHINERY / {model.category.toUpperCase()}</p>
          <h1>{model.model}<br /><span>Product details</span></h1>
          <p className="hero-lead">Published model specifications for sourcing enquiries. Confirm the requested configuration before proceeding.</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow-container">
          <SectionHeading eyebrow="SPECIFICATIONS" title={model.model} text="The following details are provided as a reference and may vary by configuration or market." />
          <img className="port-model-detail-image" src={model.image} alt={`Illustration of a ${model.category.toLowerCase()}; not a model-specific photograph`} />
          <dl className="port-model-detail-list">
            <div><dt>Equipment type</dt><dd>{model.category}</dd></div>
            <div><dt>Lifting capacity</dt><dd>{model.liftingCapacity}</dd></div>
            <div><dt>Lift / stacking</dt><dd>{model.liftingOrStacking}</dd></div>
            <div><dt>Powertrain</dt><dd>{model.powertrain}</dd></div>
            <div><dt>Dimensions</dt><dd>{model.dimensions}</dd></div>
            {model.weight && <div><dt>Listed weight</dt><dd>{model.weight}</dd></div>}
          </dl>
          <p className="port-machinery-disclaimer">These figures are reference details, not confirmation of inventory, pricing, export eligibility or availability.</p>
          <Link className="text-link port-back-link" to="/port-machinery">Back to Port Machinery <span aria-hidden="true">←</span></Link>
        </div>
      </section>
    </>
  );
}