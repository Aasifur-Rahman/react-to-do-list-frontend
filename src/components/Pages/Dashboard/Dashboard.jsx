import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { IoLogOutOutline } from "react-icons/io5";
import moment from "moment";
import { FaRegUserCircle } from "react-icons/fa";

import DashBody from "./DashBody/DashBody";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* top nav */}
      <div className="bg-indigo-400 w-full mx-auto  p-4 lg:p-7  pt-6  pb-2  rounded-b-3xl ">
        <div>
          <div className="flex items-center justify-between  ">
            {/* user profile */}

            <div>
              <FaRegUserCircle className="text-white text-lg lg:text-2xl" />
            </div>

            {/* user log out */}
            <div>
              <button onClick={handleLogOut}>
                <IoLogOutOutline className="text-lg lg:text-2xl text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* Date and Title */}

        <div className="text-white mt-2 flex flex-col justify-start ">
          <p>Today, {moment().format("MMM D")}</p>
          <h4 className="text-xl">Dashboard</h4>
        </div>
      </div>
      {/* top nav end */}

      {/* middle section */}
      <DashBody></DashBody>
    </div>
  );
};

export default Dashboard;
