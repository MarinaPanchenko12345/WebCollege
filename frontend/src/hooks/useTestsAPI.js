import { useState, useCallback } from "react";
import axios from "axios";

const testsURL = "http://localhost:5000/tests";

const useTestsAPI = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTests = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(testsURL);
      setTests(response.data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { tests, isLoading, error, fetchTests };
};

export default useTestsAPI;
