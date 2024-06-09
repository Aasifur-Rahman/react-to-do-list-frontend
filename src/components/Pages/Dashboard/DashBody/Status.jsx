import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaCircle } from "react-icons/fa6";

const Status = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <h6 className="font-semibold mb-4">Status</h6>
        <div className="flex gap-4 items-center">
          <button onClick={() => setShowDrawer(!showDrawer)}>
            {showDrawer ? (
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            ) : (
              <MdOutlineKeyboardArrowUp className="text-2xl" />
            )}
          </button>
          <IoMdAdd className="text-2xl" />
        </div>
      </div>

      {showDrawer && (
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center bg-white p-5 rounded-xl ">
            <FaCircle className="text-red-500 mx-1" />
            <p className="text-black font-medium">To Do</p>
          </div>
          <div className="flex items-center bg-white p-5 rounded-xl ">
            <FaCircle className="text-yellow-500 mx-1" />
            <p className="text-black font-medium">Doing</p>
          </div>
          <div className="flex items-center bg-white p-5 rounded-xl ">
            <FaCircle className="text-green-500 mx-1" />
            <p className="text-black font-medium">Done</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;
