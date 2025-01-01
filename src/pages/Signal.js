import React, { useState, useEffect } from "react";
import { Breadcrumb, FlexboxGrid, Loader } from "rsuite"; // Import Loader
import DateRange from "../components/utils/DateRange";
import TablePagination from "../components/utils/TablePagination";
import "./Signal.css";
import up from "../assets/up.png";
import down from "../assets/down.png";
import ReactSpeedometer from "react-d3-speedometer";
import axios from "axios";

const Signal = () => {
  const [value, setValue] = useState(getLastMonthRange());
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topBuy, setTopBuy] = useState("No Stock Available!");
  const [topSell, setTopSell] = useState("No Stock Available!");
  const [sentiment, setSentiment] = useState(5);

  useEffect(() => {
    if (value) {
      setStart(value[0].toISOString().split("T")[0]);
      setEnd(value[1].toISOString().split("T")[0]);
    }
  }, [value]);
  console.log(sentiment, "sentiment");

  useEffect(() => {
    if (start && end) {
      const fetchData = async () => {
        setLoading(true); // Start loader
        try {
          const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/get-signal?start=${start}&end=${end}`;
          console.log("Fetching from URL:", url);

          const response = await axios.get(url);
          console.log(response, "response");
          console.log("Response Data:", response.data.data);
          setFetchedData(response.data.data.watchlist || []);
          setTopBuy(
            response.data.data.top_buy.length > 0
              ? response.data.data.top_buy[0].stock_name
              : "No Stock Available!"
          );
          setTopSell(
            response.data.data.top_sell.length > 0
              ? response.data.data.top_sell[0].stock_name
              : "No Stock Available!"
          );
          setSentiment(response.data.data.buyCount);
        } catch (error) {
          console.error("Error fetching data:", error);
          setFetchedData([]);
        } finally {
          setLoading(false); // Stop loader
        }
      };

      fetchData();
    }
  }, [start, end]);

  function getLastMonthRange() {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 1);
    return [startDate, endDate];
  }

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
          <DateRange
            handleChange={handleChange}
            setValue={setValue}
            value={value}
            getLastMonthRange={getLastMonthRange}
          />
        </div>
      </div>

      {/* Conditionally Render Loader or Main Content */}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px", // Adjust height to center loader
          }}
        >
          <Loader size="lg" />
        </div>
      ) : (
        <FlexboxGrid
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
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
                <span style={{ fontSize: "1.5rem" }}>{topBuy}</span>
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
                <span style={{ fontSize: "1.5rem" }}>{topSell}</span>
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
                  value={sentiment === 0 ? 50 : sentiment * 10}
                  segments={3}
                  needleColor="black"
                  startColor="green"
                  endColor="red"
                  customSegmentStops={[0, 33, 66, 100]}
                  segmentColors={["red", "yellow", "green"]}
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
              data={fetchedData}
              pagination={false}
              count={fetchedData.length}
              hf={true}
              limit={10}
              headerText="Watchlist"
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      )}
    </div>
  );
};

export default Signal;
