import moment from "moment";
import "./TopNav.css";
import { RxDashboard } from "react-icons/rx";
import { PiDotsThreeOutline } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const TopNav = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-indigo-400 w-full mx-auto  p-2 lg:p-7  pt-6  pb-2  lg:rounded-b-3xl ">
      <div>
        <div className="flex items-center justify-between  ">
          {/* Dashboard */}
          <div>
            <Link>
              <RxDashboard className="text-lg lg:text-2xl text-white dashboard" />
            </Link>
          </div>

          {/* Search bar */}
          <div className="w-1/2 relative">
            <div>
              <IoIosSearch className="search-icon" />
            </div>
            <div className="w-full mx-auto">
              <input
                type="text"
                className="rounded-xl w-full lg:py-1 p-1 px-8 search-input text-md dark:bg-white dark:text-black"
                placeholder="Search Tasks"
              />
            </div>
          </div>

          {/* Label and Priority option */}
          <div>
            <PiDotsThreeOutline className="text-lg lg:text-2xl text-white labels" />
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
        <h4 className="text-xl">My tasks</h4>
      </div>
    </div>
  );
};

export default TopNav;
