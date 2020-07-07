import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppState, TodoActionTypes, AddTodoAction } from './store';

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
      {Object.values(todos).map(todo => <p id={todo.id} key={todo.id}>{todo.content}</p>)}
      <form onSubmit={submitHandler}>
        <label>New Todo<br /><input type="text" name="content" /></label>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

export default App;
