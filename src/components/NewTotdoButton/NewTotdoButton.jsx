import React, { useContext } from "react";
import styles from "./NewTodoButton.module.css";
import { TodosContext } from "../../context/Context";

const NewTodoButton = () => {
  const data = useContext(TodosContext);

  const onBtnClick = () => {
    data.setShowTodoForm(true);
    data.setShowNewTodoItemBtn(false);
    data.setShowTodoFormBox(true);
    setTimeout(() => {
      data.setHideAddButton(true)
    }, 700);
  };

  return (
    <div
      className={
        data.showNewTodoItemBtn
          ? styles.newTodoBtnContainer
          : styles.hiddenNewTodoBtnContainer
      }
    >
      <button onClick={onBtnClick} className={!data.hideAddButton ? styles.newTodoBtn : styles.hideNewTodoBtn}>
        <p>New Todo</p>
      </button>
    </div>
  );
};

export default NewTodoButton;