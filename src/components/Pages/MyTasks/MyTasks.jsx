import { useContext } from "react";

import BottomNav from "../../Shared/BottomNav/BottomNav";
import TopNav from "../../Shared/TopNav/TopNav";

import { TodoContext } from "../../../providers/TodoProvider";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const MyTasks = () => {
  const { allTodos } = useContext(TodoContext);
  console.log(allTodos);
  return (
    <div>
      <TopNav></TopNav>
      <div className="max-w-screen-sm mx-auto  font-poppins mb-14 p-3">
        <div>
          {allTodos.map((todo, index) => (
            <div
              className={
                todo.priority
                  ? "mt-5 border bg-white dark:bg-base-200  dark:text-white text-black p-5 rounded-xl flex justify-between shadow-lg shadow-100"
                  : "mt-8 border bg-white dark:bg-base-200 dark:text-white text-black p-5 rounded-xl flex justify-between shadow-lg shadow-grey-200"
              }
              key={index}
            >
              <div>
                <h2 className="text-2xl mb-3">{todo.title}</h2>
                <p>{todo.description}</p>
              </div>
              <div>
                <p>
                  {todo.startDate} - {todo.endDate}
                </p>
                <div className="flex justify-end items-center mt-3 gap-5">
                  <button>
                    <MdOutlineDelete className="text-2xl text-red-500" />
                  </button>
                  <button>
                    <FaRegCheckCircle className="text-2xl text-green-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default MyTasks;
