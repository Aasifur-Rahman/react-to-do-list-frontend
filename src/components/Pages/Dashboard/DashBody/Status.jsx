import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Status = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h6>Status</h6>
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
    </div>
  );
};

export default Status;
