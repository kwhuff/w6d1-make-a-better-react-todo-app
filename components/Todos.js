import React, { Component } from 'react'
import TodoItemPage3 from './TodoItem'
//WE SET arrayData EQUAL TO OUR arrayOfInputs IN OUR FUNCTION renderView() WE CALLED UNDER OUR EVENTLISTENERS IN global.js!!!!!!!!
class TodosPage2 extends Component {
  constructor(props) {
    super(props)//parent here is "Component", a react default with lots of functionality.
    this.typing = this.typing.bind(this)//everytime we make a new method, in order for that method to use 'this' we have to make line 7 code.
    this.enter = this.enter.bind(this)
    this.state = {
      newTodo: '',
      todos: []
    }
    this.markDone = this.markDone.bind(this)
    this.click = this.click.bind(this)
  }

  typing(e){
    this.setState({
      newTodo: e.target.value
      })
  }
  click(e){
    var testeroni = e.target.value.split(' ')
    var upperTesteroni = testeroni.map(function(data){
      return data.charAt().toUpperCase() + data.slice(1)
    })
    var upperTesteronito = upperTesteroni.join(' ')
    if (true === true){
      let updatedTodos = this.state.todos
      updatedTodos.push({
        text: upperTesteronito,
        done: false
      })
      // console.log(upperTesteroni)
      this.setState({todos: updatedTodos, newTodo: ''})//making a copy of 'this.state' (in this case the copy is named updatedTools), modify the copy and then pass it back through as the value for 'this.state' via this.setState()
    }
  }



  enter(e) {
    var testeroni = e.target.value.split(' ')
    var upperTesteroni = testeroni.map(function(data){
      return data.charAt().toUpperCase() + data.slice(1)
    })
    var upperTesteronito = upperTesteroni.join(' ')
    if (e.key === 'Enter'){
      let updatedTodos = this.state.todos
      updatedTodos.push({
        text: upperTesteronito,
        done: false
      })
      // console.log(upperTesteroni)
      this.setState({todos: updatedTodos, newTodo: ''})//making a copy of 'this.state' (in this case the copy is named updatedTools), modify the copy and then pass it back through as the value for 'this.state' via this.setState()
    }
  }
  markDone(currentTodoIndex){
    let updatedTodos = this.state.todos

    updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done//enables toggling back and forth between a true or false value.  we made "done"'s default value false above.
    // if(updatedTodos[currentTodoIndex].done === false){
    //   updatedTodos[currentTodoIndex].done = true
    // }
    // else{
    //   updatedTodos[currentTodoIndex].done = false
    // }

    this.setState({
      todos: updatedTodos
    })
  }

  render(){
    var TodoItems = this.state.todos.map((item, i) => {
      return <TodoItemPage3 dataAttribute={item} key={i} markDone={() => this.markDone(i)} />
    })//markDone calls itself and when onClick so it can pass through arguments(i) into itself.
    return <div>
    <p className='mainTitle'>Get Shit Done</p>
      <div className='input-group'>
      <div className='inputTextArea'>
      <input type='text' value={this.state.newTodo} className='taskText' placeholder='What do you need to do today?' onChange={this.typing} onKeyPress={this.enter} />
      </div>
      <span className='input-group-btn'>
        <button className='btn btn-default buttonStyling' type='button' onClick={this.click} value={this.state.newTodo} onChange={this.typing}><span className='glyphicon glyphicon-plus'></span></button>
      </span>
      </div>
      {TodoItems}
    </div>
  }



}

export default TodosPage2
