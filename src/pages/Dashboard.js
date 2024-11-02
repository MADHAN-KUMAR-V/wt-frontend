// Dashboard.js
import React from "react";
import { Breadcrumb } from "rsuite";
import DateRange from "../components/utils/DateRange"; // Ensure this path is correct

const Dashboard = () => {
  const handleChange = (formattedDates) => {
    if (formattedDates) {
      console.log("Selected date range:", formattedDates);
    } else {
      console.log("No date selected.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", height: "50px"}}>
        <Breadcrumb style={{ fontSize: "1rem", margin: "0" }}>
          <Breadcrumb.Item href="/dashboard" active>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DateRange handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
