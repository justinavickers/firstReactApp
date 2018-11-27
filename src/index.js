import React from 'react'
import Kennel from "./components/Kennel"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'

ReactDOM.render(
  <Router>
    <Kennel />
  </Router>, document.getElementById("root")
);