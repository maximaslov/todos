import  React, { useState, createContext } from 'react';

export const TodosContext = createContext();

const Context = (props) => {
    const [showNewTodoItemBtn, setShowNewTodoItemBtn] = useState(true);
    const [showNewTodoForm, setShowTodoForm] = useState(false);
    const [showTodoCard, setShowTodoCard] = useState(false)
    const [todoCardData, setTodoCardData] = useState({
        title: null,
        description: null,
        id: null,
        isDone: false
    })

    const todoStorage = window.localStorage;

    const todoData = todoStorage.getItem('storageTodoList');
    const todoList = todoData ? JSON.parse(todoData) : [];
    const [todos, setTodos] = useState(todoList);

    const value = {
        showNewTodoItemBtn,
        setShowNewTodoItemBtn,
        showNewTodoForm,
        setShowTodoForm,
        todoData,
        todoList,
        todos,
        setTodos,
        todoStorage,
        showTodoCard,
        setShowTodoCard,
        todoCardData,
        setTodoCardData
    }

    return <TodosContext.Provider value={value}>{props.children}</TodosContext.Provider>
}

export default Context;
