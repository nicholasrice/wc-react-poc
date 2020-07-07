import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppState, TodoActionTypes, AddTodoAction } from './store';
import { TodoItem } from "./todo-item";
import { FASTDesignSystemProvider } from "@microsoft/fast-components";

/* eslint-disable */
TodoItem;
FASTDesignSystemProvider;
/* eslint-enable */

function App() {
  const contentName = "content";
  const todos = useSelector<AppState, AppState["todos"]>(state => state.todos);
  const dispatch = useDispatch();

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (e.target instanceof HTMLFormElement) {
      const contentInput = e.target.elements.namedItem(contentName);

      if (contentInput instanceof HTMLInputElement && contentInput.value.length) {
        dispatch<AddTodoAction>({type: TodoActionTypes.add, payload: { content: contentInput.value }});
        contentInput.value = "";
      }
    }
  }

  return (
    <div className="App">
      <fast-design-system-provider use-defaults style={{height: "100%"}}>
      {Object.values(todos).map(todo => <todo-item id={todo.id} key={todo.id} foo={todo.content}>{todo.content}</todo-item>)}
      <form onSubmit={submitHandler}>
        <label>New Todo<br /><input type="text" name="content" /></label>
        <button type="submit">Add todo</button>
      </form>
      </fast-design-system-provider>
    </div>
  );
}

export default App;
