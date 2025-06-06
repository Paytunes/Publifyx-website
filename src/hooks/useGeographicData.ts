
import { useState, useEffect } from "react";

export const useGeographicData = () => {
  const [cityStateData, setCityStateData] = useState<Array<{ name: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState("");

  // Helper function to check if dictionary exists in list
  const isDictInList = (dict: { name: string }, list: Array<{ name: string }>) => {
    return list.some(item => item.name === dict.name);
  };

  // API fetch function
  const cityStateFetchQuery = async () => {
    const url = 'https://app.publifyx.com/city_state_data/';
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const res = await response.json();
        const finalResponse = res.state_cities_list;
        let finalList = [];
        for (let i = 0; i < finalResponse.length; ++i) {
          if (finalResponse[i][1] === 'state') {
            finalList.push({ name: finalResponse[i][0] + ' (State)' });
          } else {
            let dict = {
              name:
                finalResponse[i][0].charAt(0).toUpperCase() +
                finalResponse[i][0].slice(1) +
                ' (City)',
            };
            if (!isDictInList(dict, finalList)) {
              finalList.push(dict);
            }
          }
        }
        // "India" added as an option in the search filter
        finalList.push({ name: 'India' });
        setCityStateData(finalList);
        setShowError("");
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error: any) {
      // Handle any errors that occur during the fetch request
      console.error('Error:', error.message);
      setShowError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    cityStateFetchQuery();
  }, []);

  return {
    cityStateData,
    isLoading,
    showError,
    refetchData: cityStateFetchQuery
  };
};
