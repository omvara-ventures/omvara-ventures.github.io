type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, align = "left", dark = false }: Props) {
  return (
    <div className={`section-heading align-${align} ${dark ? "heading-dark" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  );
}
