import React from "react";
import "./Dashboard.css";
import useDashboardAPI from "../hooks/useDashboardAPI";
import Loader from "../helpers/Loader";
import BounceHeader from "../helpers/BounceHeader";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CelebrationIcon from "@mui/icons-material/Celebration";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Dashboard = () => {
  const { data, isLoading, error } = useDashboardAPI();

  const iconStyle = {
    fontSize: "50px",
    color: "var(--color-text)",
  };

  if (isLoading) return <Loader />;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!data || data.length === 0)
    return <div className='result'>No Result Found</div>;

  return (
    <div className='general'>
      <div>
        <BounceHeader text='Dashboard' />
      </div>
      <div className='dashboard'>
        <div className='card'>
          <header>Total number of students</header>
          <LocalLibraryIcon style={iconStyle} />
          <div>{data[0]}</div>
        </div>
        <div className='card'>
          <header>Total number of cities</header>
          <ApartmentIcon style={iconStyle} />
          <div>{data[1]}</div>
        </div>
        <div className='card'>
          <header>Total number of tests</header>
          <ReceiptLongIcon style={iconStyle} />
          <div>{data[2]}</div>
        </div>
        <div className='card'>
          <header> Average test scores </header>
          <QueryStatsIcon style={iconStyle} />
          <div>{Math.round(data[3])}</div>
        </div>
        <div className='card'>
          <header>
            Top student with the highest average grade (
            {Math.round(data[4].grade)} points)
          </header>
          <EmojiEventsIcon style={iconStyle} />
          <SchoolIcon style={iconStyle} />
          <div>
            {" "}
            {data[4].firstName} {data[4].lastName}
          </div>
        </div>
        <div className='card'>
          <header>
            City with the highest average student grades (
            {Math.round(data[5].grade)} points)
          </header>
          <EmojiEventsIcon style={iconStyle} />
          <ApartmentIcon style={iconStyle} />
          <div>{data[5].city}</div>
        </div>
        <div className='card'>
          <header>Students celebrating their birthday today</header>
          <ul>
            {data[6].map((s) => (
              <li key={s.id}>
                <CelebrationIcon fontSize='small' />
                {s.firstName} {s.lastName} ({s.age} ears old)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
