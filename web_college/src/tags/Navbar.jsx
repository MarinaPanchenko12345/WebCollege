import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <DashboardIcon />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/students'>
            {" "}
            <PeopleAltIcon />
            Students
          </Link>
        </li>
        <li>
          <Link to='/average'>
            {" "}
            <QueryStatsIcon />
            <LocalLibraryIcon />
            Avg Student Grades
          </Link>
        </li>
        <li>
          <Link to='/cites'>
            {" "}
            <QueryStatsIcon />
            <ApartmentIcon />
            Avg Grades by City
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
