import React, { useContext } from "react";
import styles from "./NewTodoButton.module.css";
import { TodosContext } from "../../context/Context";

const NewTodoButton = () => {
  const data = useContext(TodosContext);

  const onBtnClick = () => {
    data.setShowTodoForm(true);
    data.setShowNewTodoItemBtn(false);
  };

  return (
    <div
      className={
        data.showNewTodoItemBtn
          ? styles.newTodoBtnContainer
          : styles.hiddenNewTodoBtnContainer
      }
    >
      <button onClick={onBtnClick} className={styles.newTodoBtn}>
        <p>New Todo</p>
      </button>
    </div>
  );
};

export default NewTodoButton;