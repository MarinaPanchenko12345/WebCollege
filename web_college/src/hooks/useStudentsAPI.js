import { useState, useCallback } from "react";
import axios from "axios";

const studentsURL = "http://localhost:5000/students";

const useStudentsAPI = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchStudentsData = useCallback(
    async (method, payload = {}, setDataCity) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setIsLoading(true);
        let response;

        switch (method) {
          case METHOD.GET_ALL_STUDENTS:
            response = await axios.get(studentsURL);
            break;

          case METHOD.GET_STUDENT_BY_ID:
            response = await axios.get(`${studentsURL}/${payload.id}`);
            break;

          case METHOD.GET_STUDENTS_AVERAGE:
            response = await axios.get(`${studentsURL}/average`);
            break;

          case METHOD.GET_STUDENTS_AVERAGE_BY_CITIES:
            response = await axios.get(`${studentsURL}/average-by-cites`);
            if (setDataCity) setDataCity(response.data);
            break;
          case METHOD.ADD_NEW_STUDENT:
            response = await axios.post(studentsURL, payload, config);
            break;

          case METHOD.UPDATE_STUDENT_INFO:
            response = await axios.put(
              `${studentsURL}/${payload.id}`,
              payload,
              config
            );
            break;

          case METHOD.ADD_NEW_TEST:
            response = await axios.post(`${studentsURL}/test`, payload, config);
            break;

          case METHOD.UPDATE_STUDENT_GRADES:
            response = await axios.put(
              `${studentsURL}/grade/${payload.studentId}`,
              payload.grades,
              config
            );
            break;

          case METHOD.DELETE_TEST:
            response = await axios.delete(
              `${studentsURL}/${payload.studentId}/test/${payload.testId}`
            );
            break;

          default:
            throw new Error("Unsupported API method");
        }

        setData(response.data);
        return response.data;
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { data, error, isLoading, fetchStudentsData };
};

export const METHOD = {
  GET_ALL_STUDENTS: "GET_ALL_STUDENTS",
  GET_STUDENT_BY_ID: "GET_STUDENT_BY_ID",
  GET_STUDENTS_AVERAGE: "GET_STUDENTS_AVERAGE",
  GET_STUDENTS_AVERAGE_BY_CITIES: "GET_STUDENTS_AVERAGE_BY_CITIES",
  ADD_NEW_STUDENT: "ADD_NEW_STUDENT",
  UPDATE_STUDENT_INFO: "UPDATE_STUDENT_INFO",
  ADD_NEW_TEST: "ADD_NEW_TEST",
  UPDATE_STUDENT_GRADES: "UPDATE_STUDENT_GRADES",
  DELETE_TEST: "DELETE_TEST",
};

export default useStudentsAPI;
