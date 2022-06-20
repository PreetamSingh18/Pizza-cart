// Video Use This Snippit But This was of Old Version
// import  ReactDOM  from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')     
// );


// New Snippit from StackOverFlow;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
