import React, { useState, useEffect } from "react";
import { Breadcrumb, SelectPicker, Loader } from "rsuite"; // Import Loader
import TablePagination from "../components/utils/TablePagination";
import axios from "axios";

const data = ["FII", "DII", "Individual"].map((item) => ({
  label: item,
  value: item,
}));

const BigInvester = () => {
  const [selectedInvestor, setSelectedInvestor] = useState("FII");
  const [fetchedData, setFetchedData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false); // Add loading state

  // Fetch data whenever selectedInvestor changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loader
      try {
        const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/listCliends?type=${selectedInvestor}`;
        console.log("Fetching from URL:", url);

        const response = await axios.get(url);
        console.log("Response Data:", response.data.users);
        setFetchedData(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchedData([]);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchData();
  }, [selectedInvestor]);

  const handleSelectChange = (value) => {
    setSelectedInvestor(value);
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
          <Breadcrumb.Item href="/dashboard/bulk-deals" active>
            Big Invester
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SelectPicker
            data={data}
            searchable={false}
            style={{ width: 224 }}
            placeholder="Select without search"
            value={selectedInvestor}
            onChange={handleSelectChange}
          />
        </div>
      </div>

      {/* Conditionally render Loader or TablePagination */}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <Loader size="lg" />
        </div>
      ) : (
        <TablePagination
          data={fetchedData} // Use fetched data here
          pagination={true}
          limit={10}
          count={fetchedData.length}
          hf={false}
          headerText="Top Buy"
        />
      )}
    </div>
  );
};

export default BigInvester;
