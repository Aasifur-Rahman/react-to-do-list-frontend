import { Outlet } from "react-router-dom";
import TopNav from "../Shared/TopNav/TopNav";
// import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <TopNav></TopNav>
      <div className="max-w-screen-sm mx-auto">
        <Outlet></Outlet>
        {/* <Navbar></Navbar> */}
      </div>
    </div>
  );
};

export default Root;
