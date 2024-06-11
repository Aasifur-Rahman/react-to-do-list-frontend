import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [allTodos, setTodos] = useState([]);

  const addTodo = (title, description, startDate, endDate, priority) => {
    const newTodoItem = {
      title,
      description,
      startDate,
      endDate,
      priority,
    };
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
  };

  const todoInfo = {
    allTodos,
    addTodo,
  };

  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
TodoProvider.propTypes = {
  children: PropTypes.node,
};
