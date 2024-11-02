import React, { Suspense, lazy, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/utils/Loading";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const SideNavLayout = lazy(() =>
  import("./components/Side Navbar/SideNavLayout")
);
const Signal = lazy(() => import("./pages/Signal"));
const BigInvestor = lazy(() => import("./pages/BigInvester"));
const BulkDeals = lazy(() => import("./pages/BulkDeals"));
const History = lazy(() => import("./pages/History"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
