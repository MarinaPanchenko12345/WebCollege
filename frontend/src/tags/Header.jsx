import React, { useEffect, useState } from "react";
import "./Header.css";
import SchoolIcon from "@mui/icons-material/School";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  let fontSize = "150px"; 

  if (isMediumScreen) fontSize = "100px";
  if (isSmallScreen) fontSize = "70px";

  return (
    <div className='header'>
      <div className='header_date'> {currentDate}</div>
      <div className='header_name'>
        <div>
          <SchoolIcon style={{ fontSize }} />
        </div>
        <h1> WebCollege</h1>
      </div>
    </div>
  );
};

export default Header;
