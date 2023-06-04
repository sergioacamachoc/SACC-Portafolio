import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
