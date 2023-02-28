import React, { useContext, useEffect } from "react";
import { TodosContext } from '../Context';
import styles from './TodoList.module.css';
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
    const data = useContext(TodosContext);

    useEffect(() => {
        // data.todoStorage.clear();
        data.todoStorage.setItem("storageTodoList", JSON.stringify(data.todos));
    },[data.todos])

    return (
        <div className={styles.todoListContainer}>
            <div className={styles.todoItemHeader}>
                <p>ID</p>
                <p>TITLE</p>
                <p>DESCRIPTION</p>
                <p>STATUS</p>
            </div>
            {
            data.todos && data.todos.map((e, i) => {
                return <TodoItem 
                    key={i} 
                    id={i+1} 
                    title={e.title} 
                    description={e.description} 
                    status={e.status}
                    />
            })
            }
        </div>
    )
}

export default TodoList;