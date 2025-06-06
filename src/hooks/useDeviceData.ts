import { useState, useEffect } from "react";

export const useDeviceData = () => {
  const [deviceData, setDeviceData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState("");

  const deviceFetchQuery = async () => {
    setIsLoading(true);
    try {
      const url = `https://app.publifyx.com/pincode_data/?report_id=206`;

      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const res = await response.json();
        setDeviceData(res);
        setShowError("");
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error: any) {
      console.error('Error:', error.message);
      // Don't set error state, just use mock data by keeping deviceData as null
      setDeviceData(null);
      setShowError("");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    deviceFetchQuery();
  }, []);

  return {
    deviceData,
    isLoading,
    showError,
    refetchData: deviceFetchQuery
  };
};
