export type WhiskyRelease = {
  id: string;
  number: string;
  name: string;
  proposedAge: string;
  proposedCask: string;
  proposedQuantity: string;
  status: "Concept — details unverified";
  description: string;
};

export const whiskyReleases: WhiskyRelease[] = [
  {
    id: "release-01",
    number: "01",
    name: "The First Release",
    proposedAge: "Proposed 5-year-old",
    proposedCask: "First-fill bourbon barrel — verify",
    proposedQuantity: "Approx. 370 bottles — verify",
    status: "Concept — details unverified",
    description: "The proposed opening expression for the Glen Vyra collection. Final details must be confirmed against supplier and bottling records.",
  },
  {
    id: "release-02",
    number: "02",
    name: "The Second Release",
    proposedAge: "Proposed 6-year-old",
    proposedCask: "First-fill bourbon barrel — verify",
    proposedQuantity: "Approx. 285 bottles — verify",
    status: "Concept — details unverified",
    description: "A proposed follow-up release, subject to confirmation of provenance, maturation and final available quantity.",
  },
  {
    id: "release-03",
    number: "03",
    name: "The Third Release",
    proposedAge: "Proposed 10-year-old",
    proposedCask: "First-fill bourbon barrel — verify",
    proposedQuantity: "Approx. 288 bottles — verify",
    status: "Concept — details unverified",
    description: "A proposed older expression intended to broaden the collection once product details and supply are confirmed.",
  },
];
