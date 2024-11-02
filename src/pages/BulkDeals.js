import React from "react";
import { Breadcrumb } from "rsuite";

const BulkDeals = () => {
  return (
    <div>
      <Breadcrumb style={{ fontSize: "1rem" }}>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/dashboard/bulk-deals" active>
          bulk-deals
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BulkDeals;
