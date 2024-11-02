import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const SideNavLayout = lazy(() => import("./components/Side Navbar/SideNavLayout"));
const Signal = lazy(() => import("./pages/Signal"));
const BigInvestor = lazy(() => import("./pages/BigInvester")); 
const BulkDeals = lazy(() => import("./pages/BulkDeals"));
const History = lazy(() => import("./pages/History")); 

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<SideNavLayout />}>
            <Route index element={<Dashboard />} /> 
            <Route path="signal" element={<Signal />} />  
            <Route path="big-investor" element={<BigInvestor />} /> 
            <Route path="bulk-deals" element={<BulkDeals />} /> 
            <Route path="history" element={<History />} />            
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
