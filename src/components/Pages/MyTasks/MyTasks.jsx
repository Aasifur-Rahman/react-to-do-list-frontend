import { useContext } from "react";

import BottomNav from "../../Shared/BottomNav/BottomNav";
import TopNav from "../../Shared/TopNav/TopNav";
import Tasks from "./Tasks";
import { TodoContext } from "../../../providers/TodoProvider";

const MyTasks = () => {
  const { allTodos } = useContext(TodoContext);
  console.log(allTodos);
  return (
    <div>
      <TopNav></TopNav>
      <div className="max-w-screen-sm mx-auto">
        <div>
          {allTodos.map((todo, index) => (
            <div key={index}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>
                {todo.startDate} - {todo.endDate}
              </p>
            </div>
          ))}
        </div>

        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default MyTasks;
