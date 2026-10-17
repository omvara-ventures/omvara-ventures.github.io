export type Vehicle = {
  id: string;
  make: string;
  model: string;
  category: "SUV & 4x4" | "Pickup truck" | "Passenger car" | "Commercial";
  description: string;
  image: string;
  status: "Illustrative model" | "Sourcing on request";
};

export const vehicles: Vehicle[] = [
  {
    id: "suzuki-jimny",
    make: "Suzuki",
    model: "Jimny",
    category: "SUV & 4x4",
    description: "A compact 4x4 model to enquire about, subject to market and export eligibility.",
    image: "/images/automotive/suzuki-jimny-studio.jpeg",
    status: "Illustrative model",
  },
  {
    id: "toyota-hilux",
    make: "Toyota",
    model: "Hilux",
    category: "Pickup truck",
    description: "Pickup truck sourcing enquiries for commercial, fleet and private buyers.",
    image: "/images/automotive/toyota-hilux-studio.jpeg",
    status: "Illustrative model",
  },
  {
    id: "suzuki-swift",
    make: "Suzuki",
    model: "Swift",
    category: "Passenger car",
    description: "Passenger vehicle sourcing based on the buyer's requested specification.",
    image: "/images/automotive/suzuki-swift-green.jpeg",
    status: "Illustrative model",
  },
  {
    id: "suv-sourcing",
    make: "Multiple makes",
    model: "SUV sourcing",
    category: "SUV & 4x4",
    description: "Tell us your preferred make, model, specification and destination market.",
    image: "/images/automotive/toyota-fortuner-landscape.jpeg",
    status: "Sourcing on request",
  },
];
