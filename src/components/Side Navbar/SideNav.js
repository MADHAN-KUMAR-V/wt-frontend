import React from 'react';
import { Sidenav, Nav} from "rsuite";
import { Link, useLocation } from "react-router-dom"; // Import Link for routing
import DashboardIcon from '@rsuite/icons/Dashboard';
import HistoryTaskIcon from "@rsuite/icons/HistoryTask";
import PeoplesMapIcon from '@rsuite/icons/PeoplesMap';
import PieChartIcon from '@rsuite/icons/PieChart';
import AdvancedAnalyticsIcon from '@rsuite/icons/AdvancedAnalytics';
import logo from "../../assets/logo.png";
import "./SideNav.css";

const SideNav = () => {
  const getActiveKey = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return "1"; 
      case '/dashboard/signal':
        return "2"; 
      case '/dashboard/big-investor':
        return "3"; 
      case '/dashboard/bulk-deals':
        return "4"; 
      case '/dashboard/history':
        return "5"; 
      default:
        return "1"; 
    }
  };
  const location = useLocation(); 
  const activeKey = getActiveKey(location.pathname); 

  return (
    <div style={{ height: "100vh", width: "15%" }}>
      <Sidenav style={{ height: "100%" }}>
        <Sidenav.Body>
          <Nav activeKey={activeKey}>
            <Nav.Item eventKey="0" className="no-hover" as={Link} to="/">
              <img src={logo} alt="logo" height={50} width={150} />
            </Nav.Item>
            <br />
            <br />
            <Nav.Item eventKey="1" icon={<DashboardIcon />} as={Link} to="/dashboard">
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<AdvancedAnalyticsIcon />} as={Link} to="/dashboard/signal">
              Signal
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<PeoplesMapIcon />} as={Link} to="/dashboard/big-investor">
              Big Investor
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<PieChartIcon />} as={Link} to="/dashboard/bulk-deals">
              Bulk Deal
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<HistoryTaskIcon />} as={Link} to="/dashboard/history">
              History
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
