import React, { useContext, useRef, useEffect } from "react";
import styles from "./NewTodoForm.module.css";
import { Formik, useFormik } from "formik";
import { todoFormSchema } from "./todoFormSchema";
import { TodosContext } from "../../Context";

const NewTodoForm = () => {
  const data = useContext(TodosContext);
  const onClose = () => {
    data.setShowTodoForm(false);
    data.setShowNewTodoItemBtn(true);
  };

  const formik = useFormik({
    initialValues: { title: "", description: "" },
    onSubmit: () => {
      const { title, description } = formik.values;
      const newTodo = {
        title,
        description,
        status: false,
      };
      const newTodoList = [...data.todos, newTodo];
      data.setTodos(newTodoList);
      data.setShowTodoForm(false);
      data.setShowNewTodoItemBtn(true);
      formik.resetForm();
    },

    validationSchema: todoFormSchema,
  });

  const isTitleError = formik.errors.title || formik.touched.title;
  const isDescriptionError =
    formik.errors.description || formik.touched.description;

  return (
    <div className={data.showNewTodoForm ? styles.todoFormContaner : null}
    >
      {data.showNewTodoForm && (
        <div className={styles.todoFormBox}>
          <Formik>
            <form className={styles.todoForm} onSubmit={formik.handleSubmit}>
              <div>
                <input
                  autoFocus={true}
                  className={isTitleError ? styles.inputError : styles.input}
                  value={formik.values.title}
                  type="text"
                  name="title"
                  placeholder={
                    isTitleError
                      ? "The field must not be empty "
                      : "Enter todo title"
                  }
                  onChange={formik.handleChange}
                />
                <input
                  className={
                    isDescriptionError ? styles.inputError : styles.input
                  }
                  value={formik.values.description}
                  type="text"
                  name="description"
                  placeholder={
                    isDescriptionError
                      ? "The field must not be empty "
                      : "Enter todo description"
                  }
                  onChange={formik.handleChange}
                />
              </div>
              <button
                className={styles.todoBtn}
                disabled={
                  !formik.values.title || !formik.values.description
                    ? true
                    : false
                }
                type={"submit"}
              >
                Create
              </button>
            </form>
            
          </Formik>
          <button
                onClick={onClose}
                className={styles.todoBtn}
              >
                Cancel
              </button>
        </div>
      )}
    </div>
  );
};

export default NewTodoForm;