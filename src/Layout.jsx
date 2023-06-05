import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
