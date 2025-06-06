import { useState, useEffect } from "react";

export const useAgeGenderData = () => {
  const [ageGenderData, setAgeGenderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState("");

  const ageAndGenderFetchQuery = async () => {
    setIsLoading(true);
    try {
      const url = `https://app.publifyx.com/pincode_data/?report_id=205`;

      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const res = await response.json();
        setAgeGenderData(res);
        setShowError("");
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error: any) {
      console.error('Error:', error.message);
      // Don't set error state, just use mock data by keeping ageGenderData as null
      setAgeGenderData(null);
      setShowError("");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ageAndGenderFetchQuery();
  }, []);

  return {
    ageGenderData,
    isLoading,
    showError,
    refetchData: ageAndGenderFetchQuery
  };
};
