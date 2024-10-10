import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// Instead of simply using JSX, we can use the React function createElement,
// and then pass a pointer to the App component function:
//  ReactDOM.createRoot(entryPoint).render(React.createElement(App));