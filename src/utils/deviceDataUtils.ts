
// Mock data for fallback when API is not available
export const mockDeviceData = [
  { name: "Mobile", impressions: 18.2, color: "#2563eb", percentage: 57.3 },
  { name: "Desktop", impressions: 7.8, color: "#16a34a", percentage: 24.5 },
  { name: "Tablet", impressions: 3.4, color: "#E11D48", percentage: 10.7 },
  { name: "Smart TV", impressions: 1.9, color: "#F59E0B", percentage: 6.0 },
  { name: "Other", impressions: 0.7, color: "#8B5CF6", percentage: 2.2 }
];

export const processDeviceData = (apiData: any) => {
  if (!apiData) {
    // Return mock data as fallback
    return mockDeviceData;
  }

  // Process real API data here when available
  // For now, return mock data
  return mockDeviceData;
};
