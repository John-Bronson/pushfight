import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'
//import ReactDOM from 'react-dom';
import App from "./App.js";

//ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App />)