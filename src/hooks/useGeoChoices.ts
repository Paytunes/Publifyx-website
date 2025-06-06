
import { useState, useEffect } from 'react';

interface GeoChoice {
  value: string;
  label: string;
}

interface GeoChoices {
  states: GeoChoice[];
  cities: GeoChoice[];
}

export const useGeoChoices = () => {
  const [geoChoices, setGeoChoices] = useState<GeoChoices>({
    states: [],
    cities: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeoChoices = async () => {
      try {
        console.log('Fetching geo choices from API...');
        const response = await fetch('https://connect.paytunes.in/get_billing_geo_choices/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Geo choices data received:', data);
        
        // Transform the data to the format expected by the Select components
        const transformedData = {
          states: data.states || [],
          cities: data.cities || []
        };
        
        setGeoChoices(transformedData);
        console.log('Successfully loaded geo choices from API');
      } catch (err) {
        console.log('API unavailable, using fallback data');
        // Don't set error state, just use fallback data silently
        
        // Use fallback data when API fails - updated with proper state values
        setGeoChoices({
          states: [
            { value: "Andhra Pradesh", label: "Andhra Pradesh" },
            { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
            { value: "Assam", label: "Assam" },
            { value: "Bihar", label: "Bihar" },
            { value: "Chhattisgarh", label: "Chhattisgarh" },
            { value: "Goa", label: "Goa" },
            { value: "Gujarat", label: "Gujarat" },
            { value: "Haryana", label: "Haryana" },
            { value: "Himachal Pradesh", label: "Himachal Pradesh" },
            { value: "Jharkhand", label: "Jharkhand" },
            { value: "Karnataka", label: "Karnataka" },
            { value: "Kerala", label: "Kerala" },
            { value: "Madhya Pradesh", label: "Madhya Pradesh" },
            { value: "Maharashtra", label: "Maharashtra" },
            { value: "Manipur", label: "Manipur" },
            { value: "Meghalaya", label: "Meghalaya" },
            { value: "Mizoram", label: "Mizoram" },
            { value: "Nagaland", label: "Nagaland" },
            { value: "Odisha", label: "Odisha" },
            { value: "Punjab", label: "Punjab" },
            { value: "Rajasthan", label: "Rajasthan" },
            { value: "Sikkim", label: "Sikkim" },
            { value: "Tamil Nadu", label: "Tamil Nadu" },
            { value: "Telangana", label: "Telangana" },
            { value: "Tripura", label: "Tripura" },
            { value: "Uttar Pradesh", label: "Uttar Pradesh" },
            { value: "Uttarakhand", label: "Uttarakhand" },
            { value: "West Bengal", label: "West Bengal" },
            { value: "Delhi", label: "Delhi" }
          ],
          cities: [
            { value: "Mumbai", label: "Mumbai" },
            { value: "Delhi", label: "Delhi" },
            { value: "Bangalore", label: "Bangalore" },
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "Chennai", label: "Chennai" },
            { value: "Kolkata", label: "Kolkata" },
            { value: "Pune", label: "Pune" },
            { value: "Ahmedabad", label: "Ahmedabad" },
            { value: "Jaipur", label: "Jaipur" },
            { value: "Surat", label: "Surat" },
            { value: "Lucknow", label: "Lucknow" },
            { value: "Kanpur", label: "Kanpur" },
            { value: "Nagpur", label: "Nagpur" },
            { value: "Indore", label: "Indore" },
            { value: "Thane", label: "Thane" },
            { value: "Bhopal", label: "Bhopal" },
            { value: "Visakhapatnam", label: "Visakhapatnam" },
            { value: "Pimpri-Chinchwad", label: "Pimpri-Chinchwad" },
            { value: "Patna", label: "Patna" },
            { value: "Vadodara", label: "Vadodara" }
          ]
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeoChoices();
  }, []);

  return { geoChoices, isLoading, error };
};
