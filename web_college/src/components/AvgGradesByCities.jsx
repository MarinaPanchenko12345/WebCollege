import React, { useEffect, useState } from "react";
import "./../tags/Navbar.css";
import useStudentsAPI, {
  METHOD as STUDENTS_METHOD,
} from "../hooks/useStudentsAPI";
import Loader from "../helpers/Loader";
import BounceHeader from "../helpers/BounceHeader";

const AvgGradesByCities = () => {
  const { fetchStudentsData, isLoading, error } = useStudentsAPI();
  const [cities, setCities] = useState([]);
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);

  useEffect(() => {
    fetchStudentsData(
      STUDENTS_METHOD.GET_STUDENTS_AVERAGE_BY_CITIES,
      {},
      setCities
    );
  }, [fetchStudentsData]);

  useEffect(() => {
    if (cities.length > 0) {
      const numbers = cities.map((x) => x.average);
      setMin(Math.min(...numbers));
      setMax(Math.max(...numbers));
    }
  }, [cities]);

  if (isLoading) return <Loader />;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!cities || cities.length === 0)
    return <div className='result'>No Result Found</div>;
  return (
    <div className='general'>
      <div>
        <BounceHeader text='Average Grades By City' />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((c, i) => (
            <tr key={c.id || i}>
              <td>{i + 1}</td>
              <td>{c.city}</td>
              <td
                className={
                  Number(c.average) === min
                    ? "min"
                    : Number(c.average) === max
                    ? "max"
                    : ""
                }
              >
                {Number(c.average).toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvgGradesByCities;
