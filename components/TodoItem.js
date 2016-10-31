import React, { Component } from 'react'

const TodoItemPage3 = (props) =>
(
             <div className='presentation form-control animated fadeInUp' onClick={props.markDone}>
               <input type='checkbox' checked={props.dataAttribute.done}/>
               <span className='todoItemText' style={{ textDecoration:props.dataAttribute.done?'line-through':''}}>{props.dataAttribute.text}</span>
             </div>
)

export default TodoItemPage3
