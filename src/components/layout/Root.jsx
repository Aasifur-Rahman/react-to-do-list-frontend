import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-sm h-screen  mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
