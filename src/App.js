import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList'
import Nav from './Nav'

var id = 0
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      text: '',
      todos: []
    }
  }
  changeText = x => {
    this.setState({text: x})
  }

  addTodo = todo => {
    let newTodo = {to: todo, id: id++, completed: false}
    this.setState({todos: [...this.state.todos, newTodo]})
    this.setState({text: ''})
  }
  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(el => el.id !== id)
    })
  }
  render(){
    return (
      <div className="App">
          <Nav text={this.state.text} changeText={(a) => this.changeText(a)} addTodo={() => this.addTodo(this.state.text)}/>
          <TodoList listTodos={this.state.todos} deleteTodo={(id) => this.deleteTodo(id)}/>
          
      </div>
    );
  }
}

export default App;
