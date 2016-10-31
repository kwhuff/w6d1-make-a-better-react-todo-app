import React from 'react'
import ReactDOM from 'react-dom'
import TodosPage2 from '../components/Todos'

// Your code goes here

//below 'starts the process off' Collin said.
function renderView() {
  ReactDOM.render(
    <TodosPage2 />,
    document.getElementById('todos'))
}

renderView()
