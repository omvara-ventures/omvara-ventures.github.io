import { useSearchParams } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [params] = useSearchParams();
  const requestedType = params.get("type");
  const selectedDivision = requestedType === "automotive"
    ? "Omvara Automotive"
    : requestedType === "whisky"
      ? "Glen Vyra"
      : undefined;

  return (
    <section className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT OMVARA</p>
          <h1 className="page-title">Let's start a conversation.</h1>
          <p className="page-intro">Contact channels have not yet been configured for this website.</p>
          {selectedDivision && <p className="contact-context">Selected enquiry: <strong>{selectedDivision}</strong></p>}
          <div className="contact-detail"><MessageSquare /><div><strong>Enquiries</strong><p>Verified contact details can be added here once they are supplied.</p></div></div>
        </div>

        <div className="contact-form-wrap contact-unavailable">
          <h2>Enquiry channel unavailable</h2>
          <p>This website does not collect or send messages. No enquiry details are stored here.</p>
          <p>A verified contact method can be published once the appropriate business details are provided.</p>
        </div>
      </div>
    </section>
  );
}
