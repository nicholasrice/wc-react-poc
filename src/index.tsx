import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import App, { SSR_KEY} from './App';
import { store } from "./store";
import { Provider, useSelector } from "react-redux";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);


function SetSSR() {
  const foo = useSelector(state => state);

  console.log("ssr set")
  window.localStorage.setItem(SSR_KEY, ReactDOMServer.renderToString(
    <Provider store={store}><App ssr={false} /></Provider>
  ));

  console.log(window.localStorage.getItem(SSR_KEY));
  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SetSSR />
      <App ssr={true} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);