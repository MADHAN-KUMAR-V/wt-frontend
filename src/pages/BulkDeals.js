import React, { useState, useEffect } from "react";
import { Breadcrumb, SelectPicker, Loader } from "rsuite";
import TablePagination from "../components/utils/TablePagination";
import axios from "axios";

const data = ['FII', 'DII', 'Individual'].map(item => ({ label: item, value: item }));

const BulkDeals = () => {

  const [selectedInvestor, setSelectedInvestor] = useState("FII");
  const [fetchedData, setFetchedData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false); // For handling loading state

  // Fetch data whenever selectedInvestor changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/listBulkDeal?type=${selectedInvestor}`;
        console.log("Fetching from URL:", url);

        const response = await axios.get(url);
        console.log("Response Data:", response.data.deals);
        setFetchedData(response.data.deals); // Use 'deals' from the backend response
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchedData([]); // Clear data on error
      } finally {
        setLoading(false); // Stop loading
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
          <Breadcrumb.Item href="/dashboard">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/dashboard/bulk-deals" active>
            Bulk Deals
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

      {/* Show loader while fetching */}
      {loading ? (
        <Loader size="lg" center />
      ) : (
        <TablePagination
          data={fetchedData}
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

export default BulkDeals;
