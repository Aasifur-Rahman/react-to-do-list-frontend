import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-zinc-100 dark:bg-base-100">
      <div className="max-w-screen-sm h-screen  mx-auto bg-zinc-100 dark:bg-base-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
