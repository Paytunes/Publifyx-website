
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
        const response = await fetch('https://connect.paytunes.in/get_billing_geo_choices/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Raw API response:', data);
        console.log('API response type:', typeof data);
        console.log('API response keys:', Object.keys(data));
        
        // Check if the response has the expected structure
        if (data && typeof data === 'object') {
          const transformedData = {
            states: Array.isArray(data.states) ? data.states.map((state: any) => ({
              value: typeof state === 'string' ? state : state.value || state.name || state,
              label: typeof state === 'string' ? state : state.label || state.name || state.value || state
            })) : [],
            cities: Array.isArray(data.cities) ? data.cities.map((city: any) => ({
              value: typeof city === 'string' ? city : city.value || city.name || city,
              label: typeof city === 'string' ? city : city.label || city.name || city.value || city
            })) : []
          };
          
          console.log('Transformed data:', transformedData);
          console.log('States count:', transformedData.states.length);
          console.log('Cities count:', transformedData.cities.length);
          
          setGeoChoices(transformedData);
          console.log('Successfully loaded geo choices from API');
          return;
        }
        
        throw new Error('Invalid response structure');
      } catch (err) {
        console.log('API call failed:', err);
        console.log('Using fallback geo data');
        
        // Updated fallback data with exact state choices provided by user
        const fallbackData = {
          states: [
            { value: "Andaman & Nicobar Islands", label: "Andaman & Nicobar Islands" },
            { value: "Andhra Pradesh", label: "Andhra Pradesh" },
            { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
            { value: "Assam", label: "Assam" },
            { value: "Bihar", label: "Bihar" },
            { value: "Chandigarh", label: "Chandigarh" },
            { value: "Chhattisgarh", label: "Chhattisgarh" },
            { value: "Dadra & Nagar Haveli and Daman & Diu", label: "Dadra & Nagar Haveli and Daman & Diu" },
            { value: "Delhi", label: "Delhi" },
            { value: "Goa", label: "Goa" },
            { value: "Gujarat", label: "Gujarat" },
            { value: "Haryana", label: "Haryana" },
            { value: "Himachal Pradesh", label: "Himachal Pradesh" },
            { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
            { value: "Jharkhand", label: "Jharkhand" },
            { value: "Karnataka", label: "Karnataka" },
            { value: "Kerala", label: "Kerala" },
            { value: "Ladakh", label: "Ladakh" },
            { value: "Lakshadweep", label: "Lakshadweep" },
            { value: "Madhya Pradesh", label: "Madhya Pradesh" },
            { value: "Maharashtra", label: "Maharashtra" },
            { value: "Manipur", label: "Manipur" },
            { value: "Meghalaya", label: "Meghalaya" },
            { value: "Mizoram", label: "Mizoram" },
            { value: "Nagaland", label: "Nagaland" },
            { value: "Odisha", label: "Odisha" },
            { value: "Puducherry", label: "Puducherry" },
            { value: "Punjab", label: "Punjab" },
            { value: "Rajasthan", label: "Rajasthan" },
            { value: "Sikkim", label: "Sikkim" },
            { value: "Tamil Nadu", label: "Tamil Nadu" },
            { value: "Telangana", label: "Telangana" },
            { value: "Tripura", label: "Tripura" },
            { value: "Uttarakhand", label: "Uttarakhand" },
            { value: "Uttar Pradesh", label: "Uttar Pradesh" },
            { value: "West Bengal", label: "West Bengal" }
          ],
          cities: [
            { value: "Mumbai", label: "Mumbai" },
            { value: "Delhi", label: "Delhi" },
            { value: "New Delhi", label: "New Delhi" },
            { value: "Bangalore", label: "Bangalore" },
            { value: "Bengaluru", label: "Bengaluru" },
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
            { value: "Vadodara", label: "Vadodara" },
            { value: "Ghaziabad", label: "Ghaziabad" },
            { value: "Ludhiana", label: "Ludhiana" },
            { value: "Agra", label: "Agra" },
            { value: "Nashik", label: "Nashik" },
            { value: "Faridabad", label: "Faridabad" },
            { value: "Meerut", label: "Meerut" },
            { value: "Rajkot", label: "Rajkot" },
            { value: "Kalyan-Dombivli", label: "Kalyan-Dombivli" },
            { value: "Vasai-Virar", label: "Vasai-Virar" },
            { value: "Varanasi", label: "Varanasi" },
            { value: "Srinagar", label: "Srinagar" },
            { value: "Aurangabad", label: "Aurangabad" },
            { value: "Dhanbad", label: "Dhanbad" },
            { value: "Amritsar", label: "Amritsar" },
            { value: "Navi Mumbai", label: "Navi Mumbai" },
            { value: "Allahabad", label: "Allahabad" },
            { value: "Prayagraj", label: "Prayagraj" },
            { value: "Ranchi", label: "Ranchi" },
            { value: "Howrah", label: "Howrah" },
            { value: "Coimbatore", label: "Coimbatore" },
            { value: "Jabalpur", label: "Jabalpur" },
            { value: "Gwalior", label: "Gwalior" },
            { value: "Vijayawada", label: "Vijayawada" },
            { value: "Jodhpur", label: "Jodhpur" },
            { value: "Madurai", label: "Madurai" },
            { value: "Raipur", label: "Raipur" },
            { value: "Kota", label: "Kota" },
            { value: "Chandigarh", label: "Chandigarh" },
            { value: "Guwahati", label: "Guwahati" },
            { value: "Solapur", label: "Solapur" },
            { value: "Hubli-Dharwad", label: "Hubli-Dharwad" },
            { value: "Tiruchirappalli", label: "Tiruchirappalli" },
            { value: "Bareilly", label: "Bareilly" },
            { value: "Mysore", label: "Mysore" },
            { value: "Tiruppur", label: "Tiruppur" },
            { value: "Gurgaon", label: "Gurgaon" },
            { value: "Gurugram", label: "Gurugram" },
            { value: "Aligarh", label: "Aligarh" },
            { value: "Jalandhar", label: "Jalandhar" },
            { value: "Bhubaneswar", label: "Bhubaneswar" },
            { value: "Salem", label: "Salem" },
            { value: "Warangal", label: "Warangal" },
            { value: "Mira-Bhayandar", label: "Mira-Bhayandar" },
            { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
            { value: "Bhiwandi", label: "Bhiwandi" },
            { value: "Saharanpur", label: "Saharanpur" },
            { value: "Guntur", label: "Guntur" },
            { value: "Amravati", label: "Amravati" },
            { value: "Bikaner", label: "Bikaner" },
            { value: "Noida", label: "Noida" },
            { value: "Jamshedpur", label: "Jamshedpur" },
            { value: "Bhilai Nagar", label: "Bhilai Nagar" },
            { value: "Cuttack", label: "Cuttack" },
            { value: "Firozabad", label: "Firozabad" },
            { value: "Kochi", label: "Kochi" },
            { value: "Cochin", label: "Cochin" },
            { value: "Nellore", label: "Nellore" },
            { value: "Bhavnagar", label: "Bhavnagar" },
            { value: "Dehradun", label: "Dehradun" },
            { value: "Durgapur", label: "Durgapur" },
            { value: "Asansol", label: "Asansol" },
            { value: "Rourkela", label: "Rourkela" },
            { value: "Nanded", label: "Nanded" },
            { value: "Kolhapur", label: "Kolhapur" },
            { value: "Ajmer", label: "Ajmer" },
            { value: "Akola", label: "Akola" },
            { value: "Gulbarga", label: "Gulbarga" },
            { value: "Jamnagar", label: "Jamnagar" },
            { value: "Ujjain", label: "Ujjain" },
            { value: "Loni", label: "Loni" },
            { value: "Siliguri", label: "Siliguri" },
            { value: "Jhansi", label: "Jhansi" },
            { value: "Ulhasnagar", label: "Ulhasnagar" },
            { value: "Jammu", label: "Jammu" },
            { value: "Sangli-Miraj & Kupwad", label: "Sangli-Miraj & Kupwad" },
            { value: "Mangalore", label: "Mangalore" },
            { value: "Erode", label: "Erode" },
            { value: "Belgaum", label: "Belgaum" },
            { value: "Ambattur", label: "Ambattur" },
            { value: "Tirunelveli", label: "Tirunelveli" },
            { value: "Malegaon", label: "Malegaon" },
            { value: "Gaya", label: "Gaya" },
            { value: "Jalgaon", label: "Jalgaon" },
            { value: "Udaipur", label: "Udaipur" },
            { value: "Maheshtala", label: "Maheshtala" }
          ]
        };
        
        console.log('Setting fallback data with', fallbackData.states.length, 'states and', fallbackData.cities.length, 'cities');
        setGeoChoices(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeoChoices();
  }, []);

  return { geoChoices, isLoading, error };
};
