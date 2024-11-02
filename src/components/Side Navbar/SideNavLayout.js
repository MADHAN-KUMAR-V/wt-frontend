import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const SideNavLayout = () => (
  <div style={{ display: "flex", height: "100vh" }}>
    <SideNav />
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <TopNav />
      <div style={{ flex: 1, padding: "20px", backgroundColor: '#FBF2FF', overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
  </div>
);

export default SideNavLayout;
