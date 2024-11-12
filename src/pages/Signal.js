import React from "react";
import { Breadcrumb, FlexboxGrid } from "rsuite";
import DateRange from "../components/utils/DateRange";
import TablePagination from "../components/utils/TablePagination";
import "./Signal.css";
import up from "../assets/up.png";
import down from "../assets/down.png";
import ReactSpeedometer from "react-d3-speedometer";

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
const Signal = () => {
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
          <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/dashboard/signal" active>
            Signal
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DateRange handleChange={handleChange} />
        </div>
      </div>
      <FlexboxGrid style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FlexboxGrid.Item colspan={11}>
          <div className="card">
            <h2
              style={{
                fontSize: "1.2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Strong Buy
            </h2>
            <div className="content">
              <span style={{ fontSize: "1.5rem" }}>IDEA</span>
              <div className="arrow-circle">
                <img src={up} alt="up arrow" height={80} width={80} />
              </div>
            </div>
          </div>
          <div className="card">
            <h2
              style={{
                fontSize: "1.2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Strong Sell
            </h2>
            <div className="content">
              <span style={{ fontSize: "1.5rem" }}>IDEA</span>
              <div className="arrow-circle">
                <img src={down} alt="down arrow" height={80} width={80} />
              </div>
            </div>
          </div>
          <div className="card" style={{ height: "250px" }}>
            <h2
              style={{
                fontSize: "1.2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Sentiment
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ReactSpeedometer
                maxValue={100}
                value={70}
                segments={3}
                needleColor="black"
                startColor="green"
                endColor="red"
                customSegmentStops={[0, 33, 66, 100]} // 0-33 Buy, 34-66 Neutral, 67-100 Sell
                segmentColors={["green", "yellow", "red"]}
                needleTransition="easeQuadInOut"
                needleTransitionDuration={500}
                textColor="#333"
                labelFontSize="0"
                valueTextFontSize="0"
                customSegmentLabels={[
                  {
                    text: "Buy",
                    position: "OUTSIDE",
                    color: "green",
                  },
                  {
                    text: "Neutral",
                    position: "OUTSIDE",
                    color: "yellow",
                  },
                  {
                    text: "Sell",
                    position: "OUTSIDE",
                    color: "red",
                  },
                ]}
              />
            </div>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={11}>
          <TablePagination
            data={mockData}
            pagination={false}
            count={mockData.length}
            hf={true}
            limit={10}
            headerText="Watchlist"
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default Signal;
