import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="max-w-screen-2xl flex flex-col">
        <Navbar />
        <div className="mt-16">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
