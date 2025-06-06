
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
        
        // Use fallback data when API fails
        setGeoChoices({
          states: [
            { value: "andhra-pradesh", label: "Andhra Pradesh" },
            { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
            { value: "assam", label: "Assam" },
            { value: "bihar", label: "Bihar" },
            { value: "chhattisgarh", label: "Chhattisgarh" },
            { value: "goa", label: "Goa" },
            { value: "gujarat", label: "Gujarat" },
            { value: "haryana", label: "Haryana" },
            { value: "himachal-pradesh", label: "Himachal Pradesh" },
            { value: "jharkhand", label: "Jharkhand" },
            { value: "karnataka", label: "Karnataka" },
            { value: "kerala", label: "Kerala" },
            { value: "madhya-pradesh", label: "Madhya Pradesh" },
            { value: "maharashtra", label: "Maharashtra" },
            { value: "manipur", label: "Manipur" },
            { value: "meghalaya", label: "Meghalaya" },
            { value: "mizoram", label: "Mizoram" },
            { value: "nagaland", label: "Nagaland" },
            { value: "odisha", label: "Odisha" },
            { value: "punjab", label: "Punjab" },
            { value: "rajasthan", label: "Rajasthan" },
            { value: "sikkim", label: "Sikkim" },
            { value: "tamil-nadu", label: "Tamil Nadu" },
            { value: "telangana", label: "Telangana" },
            { value: "tripura", label: "Tripura" },
            { value: "uttar-pradesh", label: "Uttar Pradesh" },
            { value: "uttarakhand", label: "Uttarakhand" },
            { value: "west-bengal", label: "West Bengal" },
            { value: "delhi", label: "Delhi" }
          ],
          cities: [
            { value: "mumbai", label: "Mumbai" },
            { value: "delhi", label: "Delhi" },
            { value: "bangalore", label: "Bangalore" },
            { value: "hyderabad", label: "Hyderabad" },
            { value: "chennai", label: "Chennai" },
            { value: "kolkata", label: "Kolkata" },
            { value: "pune", label: "Pune" },
            { value: "ahmedabad", label: "Ahmedabad" },
            { value: "jaipur", label: "Jaipur" },
            { value: "surat", label: "Surat" },
            { value: "lucknow", label: "Lucknow" },
            { value: "kanpur", label: "Kanpur" },
            { value: "nagpur", label: "Nagpur" },
            { value: "indore", label: "Indore" },
            { value: "thane", label: "Thane" },
            { value: "bhopal", label: "Bhopal" },
            { value: "visakhapatnam", label: "Visakhapatnam" },
            { value: "pimpri-chinchwad", label: "Pimpri-Chinchwad" },
            { value: "patna", label: "Patna" },
            { value: "vadodara", label: "Vadodara" }
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
