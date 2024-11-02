// Dashboard.js
import React from "react";
import { Breadcrumb, FlexboxGrid } from "rsuite";
import DateRange from "../components/utils/DateRange"; // Ensure this path is correct
import Carousol from "../components/utils/Carousal";
import TablePagination from "../components/utils/TablePagination";

const mockData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 34,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    age: 45,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    age: 23,
  },
  {
    id: 5,
    firstName: "Williammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
    lastName: "Brown",
    age: 37,
  },
  {
    id: 6,
    firstName: "Linda",
    lastName: "Taylor",
    age: 31,
    city: "Philadelphia",
    email: "linda.taylor@example.com",
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Anderson",
    age: 29,
    city: "San Antonio",
    email: "david.anderson@example.com",
  },
  {
    id: 8,
    firstName: "Sarah",
    lastName: "Thomas",
    age: 41,
    city: "San Diego",
    email: "sarah.thomas@example.com",
  },
  {
    id: 9,
    firstName: "Robert",
    lastName: "Jackson",
    age: 52,
    city: "Dallas",
    email: "robert.jackson@example.com",
  },
  {
    id: 10,
    firstName: "Patricia",
    lastName: "White",
    age: 27,
    city: "San Jose",
    email: "patricia.white@example.com",
  },
];

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          height: "50px",
        }}
      >
        <Breadcrumb style={{ fontSize: "1rem", margin: "0" }}>
          <Breadcrumb.Item href="/dashboard" active>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DateRange handleChange={handleChange} />
        </div>
      </div>
      <div>
        <Carousol />
        <br />
        <FlexboxGrid style={{display:'flex',justifyContent:'space-evenly'}}>
          <FlexboxGrid.Item colspan={11}>
            <TablePagination
              data={mockData}
              pagination={false}
              limit={5}
              count={mockData.length}
              hf={true}
              headerText="Top Buy"
              footerLink="/more-data"
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={11}>
            <TablePagination
              data={mockData}
              pagination={false}
              count={mockData.length}
              hf={true}
              limit={5}
              headerText="Top Sell"
              footerLink="/more-data-2"
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
};

export default Dashboard;
