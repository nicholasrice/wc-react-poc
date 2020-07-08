/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
import h from "./pragma"; /* Note: Import wrapped createElement. */

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppState, TodoActionTypes, AddTodoAction } from './store';
import { TodoItem } from "./todo-item";
import { FASTButton, FASTTextField, FASTDesignSystemProvider } from "@microsoft/fast-components";
import pretty from 'pretty';
import { v4 as uuid } from "uuid";

export const SSR_KEY = uuid();

/* eslint-disable */
TodoItem;
FASTDesignSystemProvider;
FASTButton;
FASTTextField;
/* eslint-enable */

function App(props: { ssr: boolean }) {
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
      <FASTDesignSystemProvider use-defaults style={{height: "100%"}}>
        <div className="todo-region">
        <form style={{display: "flex"}}>
            <FASTTextField name="content"></FASTTextField>
            <FASTButton
              appearance="accent"
              type="submit"
              style={{marginInlineStart: "4px"}}
              onClick={submitHandler} /* Note: React click handler on custom element */
            >
              Add todo
            </FASTButton>
          </form>

          {Object.values(todos).map(todo =>
            <TodoItem
              id={todo.id}
              key={todo.id}
              content={todo.content}
              completed={todo.done}
              events={{completed: toggleTodo, removed: removeTodo}} />
          )}
        </div>
        { props.ssr ? (
          <pre>
          {pretty(window.localStorage.getItem(SSR_KEY))}
        </pre>
        ) : null}
        
      </FASTDesignSystemProvider>
    </div>
  );
}

export default App;
