
// Mock data for chart display
export const indiaData = [
  { name: "Maharashtra", count: 358, impressions: 12.5 },
  { name: "Karnataka", count: 224, impressions: 8.7 },
  { name: "Tamil Nadu", count: 234, impressions: 7.2 },
  { name: "Delhi", count: 89, impressions: 6.8 },
  { name: "Gujarat", count: 182, impressions: 5.4 },
  { name: "West Bengal", count: 341, impressions: 4.9 }
];

export const statesData = [
  { name: "Mumbai", count: 150, impressions: 4.2 },
  { name: "Pune", count: 89, impressions: 3.1 },
  { name: "Nagpur", count: 45, impressions: 2.1 },
  { name: "Nashik", count: 32, impressions: 1.8 },
  { name: "Aurangabad", count: 28, impressions: 1.5 },
  { name: "Solapur", count: 24, impressions: 1.2 }
];

export const citiesData = [
  { name: "400001", count: 25, impressions: 0.8 },
  { name: "400002", count: 22, impressions: 0.7 },
  { name: "400003", count: 18, impressions: 0.6 },
  { name: "400004", count: 15, impressions: 0.5 },
  { name: "400005", count: 12, impressions: 0.4 },
  { name: "400006", count: 10, impressions: 0.3 },
  { name: "400007", count: 8, impressions: 0.2 },
  { name: "400008", count: 6, impressions: 0.15 },
  { name: "400009", count: 5, impressions: 0.1 },
  { name: "400010", count: 4, impressions: 0.08 },
  { name: "400011", count: 3, impressions: 0.05 }
];

export const getChartData = (selectedLocation: string) => {
  if (selectedLocation === "India") {
    return indiaData; // Show individual states
  } else if (selectedLocation.includes("(State)")) {
    return statesData; // Show individual cities for the selected state
  } else if (selectedLocation.includes("(City)")) {
    return citiesData; // Show individual pincodes for the selected city
  } else {
    return indiaData; // Default fallback
  }
};

export const getDisplayLabel = (selectedLocation: string) => {
  if (selectedLocation === "India") {
    return "States & UT's";
  } else if (selectedLocation.includes("(State)")) {
    return "Cities";
  } else if (selectedLocation.includes("(City)")) {
    return "Pincodes";
  } else {
    return "Geographic Data";
  }
};
