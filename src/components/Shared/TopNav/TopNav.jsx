import moment from "moment";
import "./TopNav.css";
import { RxDashboard } from "react-icons/rx";
import { PiDotsThreeOutline } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { BsTag } from "react-icons/bs";

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
    <div className="bg-indigo-400 w-full mx-auto  p-2 lg:p-7  pt-6  pb-2  rounded-b-3xl ">
      <div>
        <div className="flex items-center justify-between  ">
          {/* Dashboard */}
          <div>
            <Link to="/dashboard">
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
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <PiDotsThreeOutline className="text-lg lg:text-2xl text-white labels" />
            </button>
            <dialog id="my_modal_3" className="modal modal-top">
              <div className="modal-box ">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-bold text-lg ">Labels</h3>
                  <div className="relative l">
                    <BsTag className="text-xl text-white absolute top-1/2 left-2" />

                    <input
                      type="text"
                      className="rounded-xl mt-5 py-2 px-8 outline-none"
                    />
                  </div>
                  <button className="mt-4 py-2 px-4 rounded-xl bg-base-200  ">
                    Submit
                  </button>
                </div>
              </div>
            </dialog>
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
