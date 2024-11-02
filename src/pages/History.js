import React from 'react'
import { Breadcrumb } from "rsuite";

const History = () => {
  return (
    <div>
      <Breadcrumb style={{fontSize:'1rem'}}>
        <Breadcrumb.Item href="/dashboard" >Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/dashboard/history" active>History</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default History