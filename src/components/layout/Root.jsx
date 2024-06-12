import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-zinc-100 h-screen overflow-scroll dark:bg-base-100">
      <div className="max-w-screen-sm min-h-full  mx-auto bg-zinc-100 dark:bg-base-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
