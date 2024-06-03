import { CiCircleList } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { RiKanbanView } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import { useState } from "react";

const DashBody = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="font-poppins ">
      <div>
        {/* Top order start */}
        <div className="flex justify-around  items-center mt-5 text-center">
          <div>
            <p className="font-semibold text-sm mb-1">List</p>
            <div className="bg-white border  hover:shadow-md  px-6 py-3 rounded-lg ">
              <button>
                <CiCircleList className="text-2xl text-indigo-600" />
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-1">Calender</p>
            <div className="bg-white border  hover:shadow-md px-6 py-3 rounded-lg">
              <button>
                <SlCalender className="text-2xl text-indigo-600" />
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-1">Kanban</p>
            <div className="bg-white border   hover:shadow-md px-6 py-3 rounded-lg">
              <button>
                <RiKanbanView className="text-2xl text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
        {/* Top order end */}

        {/* Middle order start */}

        {/* Projects start  */}
        <div className=" px-2 mt-6 ">
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
        {/* Projects end */}

        {/* labels start */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h6 className="font-semibold mb-4">Labels</h6>
            <div className="flex gap-4 items-center">
              <button>
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
              <p>Study</p>
            </div>
            <div className="flex gap-2 bg-white rounded-lg p-5">
              <BsTag className="text-2xl" />
              <p>Sports</p>
            </div>
            <div className="flex gap-2 bg-white rounded-lg p-5">
              <BsTag className="text-2xl text-orange-500" />
              <p>Work</p>
            </div>
            <div className="flex gap-2 bg-white rounded-lg p-5">
              <BsTag className="text-2xl text-yellow-400" />
              <p>Personal</p>
            </div>
            <div className="flex gap-2 bg-white rounded-lg p-5">
              <BsTag className="text-2xl text-green-400" />
              <p>Habit</p>
            </div>
          </div>
        </div>
        {/* labels end */}

        {/* Middle order end */}
      </div>
    </div>
  );
};

export default DashBody;
