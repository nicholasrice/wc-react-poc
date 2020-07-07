/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
import h from "./pragma"; /* Note: Import wrapped createElement. */

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppState, TodoActionTypes, AddTodoAction } from './store';
import { TodoItem } from "./todo-item";
import { FASTDesignSystemProvider, FASTButton, FASTTextField } from "@microsoft/fast-components";

/* eslint-disable */
TodoItem;
FASTDesignSystemProvider;
FASTButton;
FASTTextField;
/* eslint-enable */

function App() {
  const contentName = "content";
  const todos = useSelector<AppState, AppState["todos"]>(state => state.todos);
  const dispatch = useDispatch();

  /**
   * Handle form submission. Dispatches an action to the store
   * to create a new todo
   */
  function submitHandler(e: React.MouseEvent) {
    e.preventDefault();

    if (e.target instanceof FASTButton) {
      const form = e.target.form;

      if (form) {
        const contentInput = form.elements["content" as any];

        if (contentInput instanceof FASTTextField && contentInput.value.length) {
          dispatch<AddTodoAction>({type: TodoActionTypes.add, payload: { content: contentInput.value }});
        }
      }
    }
  }

  /**
   * Toggle the todo's done state
   */
  function toggleTodo(e: CustomEvent) {
    dispatch({type: TodoActionTypes.toggle, payload: { id: (e.target as TodoItem).id}})
  }

  /**
   * Toggle the todo's done state
   */
  function removeTodo(e: CustomEvent) {
    dispatch({type: TodoActionTypes.remove, payload: { id: (e.target as TodoItem).id}})
  }

  return (
    <div className="App">
      <fast-design-system-provider use-defaults style={{height: "100%"}}>
        <div className="todo-region">
        <form style={{display: "flex"}}>
            <fast-text-field name="content"></fast-text-field>
            <fast-button
              type="submit"
              style={{marginInlineStart: "4px"}}
              onClick={submitHandler} /* Note: React click handler on custom element */
            >
              Add todo
            </fast-button>
          </form>

          {Object.values(todos).map(todo =>
            <todo-item
              id={todo.id}
              key={todo.id}
              content={todo.content}
              completed={todo.done}
              events={{completed: toggleTodo, removed: removeTodo}}></todo-item>
          )}
        </div>
      </fast-design-system-provider>
    </div>
  );
}

export default App;
