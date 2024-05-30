import { Outlet } from "react-router-dom";

// import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-sm mx-auto">
        <Outlet></Outlet>
        {/* <Navbar></Navbar> */}
      </div>
    </div>
  );
};

export default Root;
