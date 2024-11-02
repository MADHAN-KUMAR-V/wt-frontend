import React from 'react'
import { Breadcrumb } from "rsuite";

const BigInvester = () => {
  return (
    <div>
    <Breadcrumb style={{ fontSize: "1rem" }}>
      <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/bulk-deals" active>
        big-investors
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
  )
}

export default BigInvester