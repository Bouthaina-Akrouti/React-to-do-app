import React, { Component } from 'react'

class TodoList extends Component{
   constructor(props) {
       super(props);
       this.state = {
            todo: {}
       }
   }
   complete = (id) => {
       var x = this.props.listTodos.filter(el => el.id === id)[0]
       this.setState({...x, completed: !this.state.completed})
   }
    render(){
       return(
           <div>
            {this.props.listTodos.length === 0 ? <h1>No More Todos</h1> : this.props.listTodos.map((todo , index) => (
                <div key={todo.id} className="items">
                <button className="btn-complete" onClick={() => this.complete(todo.id)}>{this.state.id === todo.id  ? (this.state.completed ? "Undo" : "Complete") : "Complete"}</button>
                <button className="btn-delete" onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
                <h1 className={this.state.id === todo.id  ? (this.state.completed && "completed") : "todo"}>{todo.to}</h1>
                </div>
            ))}
        </div>
        )
    }
}

export default TodoList;