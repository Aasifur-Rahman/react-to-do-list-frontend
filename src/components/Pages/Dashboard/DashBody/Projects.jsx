import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const Projects = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="  mt-6 ">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold">Projects</h6>
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

export default Projects;
