export type PortMachineryModel = {
  model: string;
  category: "Container Reach Stacker" | "Empty Container Handler";
  image: string;
  liftingCapacity: string;
  liftingOrStacking: string;
  powertrain: string;
  dimensions: string;
  weight?: string;
};

export const containerReachStackers: PortMachineryModel[] = [
  {
    model: "XCS4531E",
    category: "Container Reach Stacker",
    image: "/images/port-machinery/reach-stacker.svg",
    liftingCapacity: "45 t",
    liftingOrStacking: "15,100 mm lift; 6 high, 3 deep",
    powertrain: "Electric; CATL 423/507/595 kWh battery; Lvkon permanent-magnet synchronous motor; DANA transmission; Kessler axle",
    dimensions: "11,340 x 6,053 x 4,670 mm",
  },
  {
    model: "XCS4545K",
    category: "Container Reach Stacker",
    image: "/images/port-machinery/reach-stacker.svg",
    liftingCapacity: "45 t",
    liftingOrStacking: "13,600 mm lift; 6 high, 3 deep",
    powertrain: "Cummins/Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "13,270 x 6,053 x 5,230 mm",
  },
  {
    model: "XCS4541K",
    category: "Container Reach Stacker",
    image: "/images/port-machinery/reach-stacker.svg",
    liftingCapacity: "45 t",
    liftingOrStacking: "15,100 mm lift; 6 high, 3 deep",
    powertrain: "Cummins/Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "12,343 x 6,053 x 4,981 mm",
  },
  {
    model: "XCS4535K",
    category: "Container Reach Stacker",
    image: "/images/port-machinery/reach-stacker.svg",
    liftingCapacity: "45 t",
    liftingOrStacking: "15,100 mm lift; 6 high, 3 deep",
    powertrain: "Cummins/Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "11,742 x 6,053 x 4,782 mm",
  },
  {
    model: "XCS1009K",
    category: "Container Reach Stacker",
    image: "/images/port-machinery/reach-stacker.svg",
    liftingCapacity: "10 t",
    liftingOrStacking: "16,200 mm lift; 6 high, 3 deep",
    powertrain: "Cummins engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA TE14 transmission; Kessler axle",
    dimensions: "10,850 x 6,053 x 4,000 mm",
  },
  {
    model: "XCS4531K",
    category: "Container Reach Stacker",
    image: "/images/port-machinery/reach-stacker.svg",
    liftingCapacity: "45 t",
    liftingOrStacking: "15,100 mm lift; 6 high, 3 deep",
    powertrain: "Cummins/Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "11,340 x 6,053 x 4,670 mm",
  },
];

export const emptyContainerHandlers: PortMachineryModel[] = [
  {
    model: "XCH1008K",
    category: "Empty Container Handler",
    image: "/images/port-machinery/empty-container-handler.svg",
    liftingCapacity: "10,000 kg",
    liftingOrStacking: "7+1 (8 ft 6 in) / 6+1 (9 ft 6 in)",
    powertrain: "Cummins engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "6,900 x 6,080 x 4,740 mm",
    weight: "41,900 kg",
  },
  {
    model: "XCH907E",
    category: "Empty Container Handler",
    image: "/images/port-machinery/empty-container-handler.svg",
    liftingCapacity: "9,000 kg",
    liftingOrStacking: "7 layers (manufacturer-listed)",
    powertrain: "Electric; CATL 423/507/595 kWh battery; Lvkon permanent-magnet synchronous motor",
    dimensions: "6,910 x 6,053 x 10,860 mm",
    weight: "42,000 kg",
  },
  {
    model: "XCH1007K",
    category: "Empty Container Handler",
    image: "/images/port-machinery/empty-container-handler.svg",
    liftingCapacity: "9,000 kg",
    liftingOrStacking: "7 layers (manufacturer-listed)",
    powertrain: "Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "7,710 x 4,022 x 4,148 mm",
    weight: "42,000 kg",
  },
  {
    model: "XCH908K",
    category: "Empty Container Handler",
    image: "/images/port-machinery/empty-container-handler.svg",
    liftingCapacity: "9,000 kg",
    liftingOrStacking: "8 (8 ft 6 in) / 7 (9 ft 6 in)",
    powertrain: "Cummins/Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "6,900 x 6,080 x 12,280 mm",
    weight: "41,900 kg",
  },
  {
    model: "XCH907K",
    category: "Empty Container Handler",
    image: "/images/port-machinery/empty-container-handler.svg",
    liftingCapacity: "9,000 kg",
    liftingOrStacking: "7 layers (manufacturer-listed)",
    powertrain: "Cummins/Volvo engine; EU3/Tier 3, EU4/Tier 4F or EU5 emission options; DANA transmission; Kessler axle",
    dimensions: "6,900 x 6,080 x 10,860 mm",
    weight: "40,700 kg",
  },
];