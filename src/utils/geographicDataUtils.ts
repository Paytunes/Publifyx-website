
// Mock data for chart display
export const indiaData = [
  { name: "Total States & UT's", count: 36, impressions: 32.1 }
];

export const statesData = [
  { name: "Maharashtra", count: 358, impressions: 12.5 },
  { name: "Karnataka", count: 224, impressions: 8.7 },
  { name: "Tamil Nadu", count: 234, impressions: 7.2 },
  { name: "Delhi", count: 89, impressions: 6.8 },
  { name: "Gujarat", count: 182, impressions: 5.4 },
  { name: "West Bengal", count: 341, impressions: 4.9 }
];

export const citiesData = [
  { name: "Mumbai", count: 150, impressions: 4.2 },
  { name: "Pune", count: 89, impressions: 3.1 },
  { name: "Bangalore", count: 95, impressions: 2.8 },
  { name: "Chennai", count: 76, impressions: 2.4 },
  { name: "Hyderabad", count: 68, impressions: 2.1 },
  { name: "Kolkata", count: 72, impressions: 1.9 },
  { name: "Delhi", count: 65, impressions: 1.7 },
  { name: "Ahmedabad", count: 58, impressions: 1.5 },
  { name: "Jaipur", count: 45, impressions: 1.3 },
  { name: "Lucknow", count: 42, impressions: 1.1 },
  { name: "Kanpur", count: 38, impressions: 0.9 }
];

export const getChartData = (selectedLocation: string) => {
  if (selectedLocation === "India") {
    return indiaData;
  } else if (selectedLocation.includes("(State)")) {
    return citiesData;
  } else {
    // City selected, show pincodes
    return [
      { 
        name: "Total Pincodes", 
        count: 150, 
        impressions: selectedLocation.includes("Mumbai") ? 4.2 : 
        selectedLocation.includes("Pune") ? 3.1 : 
        selectedLocation.includes("Bangalore") ? 2.8 : 
        selectedLocation.includes("Chennai") ? 2.4 : 1.5 
      }
    ];
  }
};

export const getDisplayLabel = (selectedLocation: string) => {
  if (selectedLocation === "India") {
    return "States & UT's";
  } else if (selectedLocation.includes("(State)")) {
    return "Cities";
  } else {
    return "Pincodes";
  }
};
