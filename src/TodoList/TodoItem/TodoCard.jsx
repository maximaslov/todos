import React, { useContext } from "react";
import { TodosContext } from "../../Context";
import styles from './TodoItem.module.css';

const TodoCard = () => {
    const data = useContext(TodosContext);
    const { title, description, id, status } = data.todoCardData;

    const onDeleteButtonClick = () => {
        const newTodos = data.todos.filter((todo, i) => i !== id - 1);
        data.setTodos(newTodos);
        data.setShowTodoCard(false)
    }

  

  return (
    <div className={styles.todoCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}> 
            <p>Description: </p>
            <p>{description}</p>
        </div>
        <p>Status: <span className={status ? styles.doneStatus : styles.notDoneStatus}>{status ? 'DONE' : 'NOT DONE'}</span></p>
        <div className={styles.buttons}>
            <button onClick={() => data.setShowTodoCard(false)}>Close</button>
            <button onClick={onDeleteButtonClick}>Delete</button>
        </div>
    </div>
  )
};

export default TodoCard;
