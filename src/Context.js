import  React, { useState, createContext } from 'react';

export const TodosContext = createContext();

const Context = (props) => {
    const [showNewTodoItemBtn, setShowTodoItemBtn] = useState(true);
    const [showNewTodoForm, setShowTodoForm] = useState(false);

    const todoStorage = window.localStorage;

    const todoData = todoStorage.getItem('todoList');
    const todoList = todoData ? JSON.parse(todoData) : [];
    const [todos, setTodos] = useState(todoList);

    const value = {
        showNewTodoItemBtn,
        setShowTodoItemBtn,
        showNewTodoForm,
        setShowTodoForm,
        todoData,
        todoList,
        todos,
        setTodos,
    }

    return <TodosContext.Provider value={value}>{props.children}</TodosContext.Provider>
}

export default Context;
