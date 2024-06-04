import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import { useState } from "react";

const Labels = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold mb-4">Labels</h6>
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
      <div className="grid grid-cols-2 gap-3">
        <div className="flex gap-2 bg-white rounded-lg p-5">
          <BsTag className="text-2xl text-indigo-400" />
          <p className="text-indigo-400">Study</p>
        </div>
        <div className="flex gap-2 bg-white rounded-lg p-5">
          <BsTag className="text-2xl text-black" />
          <p className="text-black">Sports</p>
        </div>
        <div className="flex gap-2 bg-white rounded-lg p-5">
          <BsTag className="text-2xl text-orange-500" />
          <p className="text-orange-500">Work</p>
        </div>
        <div className="flex gap-2 bg-white rounded-lg p-5">
          <BsTag className="text-2xl text-yellow-400" />
          <p className="text-yellow-400">Personal</p>
        </div>
        <div className="flex gap-2 bg-white rounded-lg p-5">
          <BsTag className="text-2xl text-green-400" />
          <p className="text-green-400">Habit</p>
        </div>
      </div>
    </div>
  );
};

export default Labels;
