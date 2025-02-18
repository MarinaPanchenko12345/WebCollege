import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const dashboardURL = "http://localhost:5000/dashboard";

const useDashboardAPI = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const responses = await Promise.all([
        axios.get(`${dashboardURL}/students/amount`),
        axios.get(`${dashboardURL}/cities/amount`),
        axios.get(`${dashboardURL}/tests/amount`),
        axios.get(`${dashboardURL}/tests/avg`),
        axios.get(`${dashboardURL}/students/the-best`),
        axios.get(`${dashboardURL}/cities/the-best`),
        axios.get(`${dashboardURL}/students/birthday`),
      ]);

      setData(responses.map((res) => res.data));
    } catch (error) {
      setError(error.message || "An error occurred while fetching data.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return { data, isLoading, error };
};

export default useDashboardAPI;
