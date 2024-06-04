import { CiCircleList } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { RiKanbanView } from "react-icons/ri";

const Workflow = () => {
  return (
    <div className="flex justify-around  items-center mt-5 text-center">
      <div>
        <p className="font-semibold text-sm mb-1">List</p>
        <div className="bg-white  border  hover:shadow-md  px-6 py-3 rounded-lg ">
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
  );
};

export default Workflow;
