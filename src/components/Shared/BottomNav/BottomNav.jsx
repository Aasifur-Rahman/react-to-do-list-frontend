import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { BsTag } from "react-icons/bs";
import { LuListTodo } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { IoEnterOutline } from "react-icons/io5";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { TodoContext } from "../../../providers/TodoProvider";

const BottomNav = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [priority, setPriority] = useState(false);

  const { addTodo } = useContext(TodoContext);

  const handleTaskInput = (e) => {
    e.preventDefault();

    const input1 = e.target.title.value;
    const input2 = e.target.content.value;
    const start = e.target.startDate.value;
    const end = e.target.endDate.value;
    console.log(input1, input2, start, end);

    addTodo(input1, input2, start, end, priority);
  };

  return (
    <div className=" fixed  bottom-0 left-0 w-full h-15 dark:bg-base-100 ">
      <ul className="  bg-base-200   flex justify-around items-center">
        <li className="">
          <Link to="/tasks">
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
            <dialog id="my_modal_3" className="modal  justify-center  ">
              <div>
                <div className="modal-box w-full p-10  ">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  <form onSubmit={handleTaskInput}>
                    <h3 className="font-bold text-lg mb-3 ">
                      What would you like to do?
                    </h3>
                    <div>
                      <input
                        className="px-2 py-2 w-full rounded-lg text-md outline-none dark:bg-base-100"
                        type="text"
                        placeholder="Title"
                        required
                        name="title"
                      />
                      <div className="relative">
                        <textarea
                          className="px-2 py-2 mt-3 w-full rounded-lg text-sm outline-none dark:bg-base-100 h-52 overflow-hidden"
                          name="content"
                          id=""
                          placeholder="Description"
                        ></textarea>
                      </div>
                      {/* date picker */}
                      <div className="lg:flex md:flex  items-center">
                        <div>
                          <Datepicker
                            className="dark:bg-base-100 px-2 dark:text-white outline-none "
                            selectsStart
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            startDate={startDate}
                            placeholderText="Starting Date"
                            name="startDate"
                            dateFormat={"dd MMM yy"}
                          />
                        </div>

                        <div>
                          <Datepicker
                            className=" px-2 dark:text-white dark:bg-base-100 outline-none "
                            selectsEnd
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            endDate={endDate}
                            startDate={startDate}
                            minDate={startDate}
                            placeholderText="Ending Date"
                            name="endDate"
                            dateFormat={"dd MMM yy"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* label priority todo */}
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center justify-evenly gap-5">
                        <div>
                          <div onClick={() => setPriority(!priority)}>
                            <CiWarning
                              className={
                                priority
                                  ? "text-xl text-red-500"
                                  : "text-xl text-indigo-400  "
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <button>
                            <BsTag className="text-xl text-indigo-400" />
                          </button>
                        </div>
                        <div>
                          <button>
                            <LuListTodo className="text-xl text-indigo-400" />
                          </button>
                        </div>
                      </div>

                      <button>
                        <IoEnterOutline className="text-2xl text-indigo-400" />
                      </button>
                    </div>
                  </form>
                </div>
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
