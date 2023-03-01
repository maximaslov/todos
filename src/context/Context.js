import React, { useState, createContext } from "react";

export const TodosContext = createContext();

const Context = (props) => {
  const [showNewTodoItemBtn, setShowNewTodoItemBtn] = useState(true);
  const [showNewTodoForm, setShowTodoForm] = useState(false);
  const [showTodoCard, setShowTodoCard] = useState(false);
  const [todoCardData, setTodoCardData] = useState({
    title: null,
    description: null,
    id: null,
    isDone: false,
  });

  const todoStorage = window.localStorage;

  const [todos, setTodos] = useState(() => {
    const todoData = todoStorage.getItem("storageTodoList");
   
    return todoData ? JSON.parse(todoData) : [];
   });
   
   const updateTodos = (todo) => {
    todoStorage.setItem("storageTodoList", JSON.stringify(todo));
   
    setTodos(todo)
   }

  const value = {
    showNewTodoItemBtn,
    setShowNewTodoItemBtn,
    showNewTodoForm,
    setShowTodoForm,
    todos,
    updateTodos,
    todoStorage,
    showTodoCard,
    setShowTodoCard,
    todoCardData,
    setTodoCardData,
  };

  return (
    <TodosContext.Provider value={value}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default Context;