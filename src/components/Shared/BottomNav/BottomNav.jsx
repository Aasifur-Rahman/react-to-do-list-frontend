import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

const BottomNav = () => {
  return (
    <div className=" fixed bottom-0 left-0 w-full h-15 dark:bg-base-200 ">
      <ul className="  bg-base-200   flex justify-around items-center">
        <li className="">
          <Link to="/">
            <IoHome className="text-xl mt-1 text-gray-400 hover:text-indigo-500 " />
          </Link>
        </li>
        <li>
          <div className=" relative  ">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=" absolute bottom-1/2  -right-4 "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <CgAdd className="text-3xl  text-indigo-500 mx-auto " />
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" modal-box">
                <h3 className="font-bold text-lg absolute bottom-3/4 ">
                  What would you like to do?
                </h3>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <form>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </form>
              </div>
            </dialog>
          </div>
        </li>
        <li>
          <button className="">
            <SlCalender className="text-xl text-gray-400 mt-2 hover:text-indigo-500" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
