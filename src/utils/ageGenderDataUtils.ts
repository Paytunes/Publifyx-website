
// Mock data for fallback when API is not available
export const mockOverviewData = [
  { ageGroup: "18-24", Male: 3.2, Female: 3.8 },
  { ageGroup: "25-34", Male: 4.1, Female: 4.7 },
  { ageGroup: "35-44", Male: 2.9, Female: 3.4 },
  { ageGroup: "45-54", Male: 2.1, Female: 2.5 },
  { ageGroup: "55+", Male: 1.3, Female: 1.6 }
];

export const mockAgeData = [
  { ageGroup: "18-24", impressions: 7.0, color: "#E11D48" },
  { ageGroup: "25-34", impressions: 8.8, color: "#DC2626" },
  { ageGroup: "35-44", impressions: 6.3, color: "#B91C1C" },
  { ageGroup: "45-54", impressions: 4.6, color: "#991B1B" },
  { ageGroup: "55+", impressions: 2.9, color: "#7F1D1D" }
];

export const mockGenderData = [
  { gender: "Male", impressions: 13.6, color: "#60A5FA" },
  { gender: "Female", impressions: 16.0, color: "#F87171" },
  { gender: "Other", impressions: 0.8, color: "#A78BFA" }
];

export const processAgeGenderData = (apiData: any, activeTab: string) => {
  if (!apiData) {
    // Return mock data as fallback
    switch (activeTab) {
      case "age":
        return mockAgeData;
      case "gender":
        return mockGenderData;
      default:
        return mockOverviewData;
    }
  }

  // Process real API data here when available
  // For now, return mock data
  switch (activeTab) {
    case "age":
      return mockAgeData;
    case "gender":
      return mockGenderData;
    default:
      return mockOverviewData;
  }
};

export const getXAxisKey = (activeTab: string) => {
  switch (activeTab) {
    case "age":
      return "ageGroup";
    case "gender":
      return "gender";
    default:
      return "ageGroup";
  }
};
