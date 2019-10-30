import React from 'react'

const Nav = (props) => {
    return (
        <div className="nav">
            <h1 className="title">TO-DO-APP</h1>
            <h6 className="add"><strong>Add New To-Do</strong></h6>
            <input value={props.text} onChange={(e) => props.changeText(e.target.value)} type="text" className="input"></input>
            <button onClick={props.addTodo} className="btn-add">Add</button>
        </div>
    )
}
export default Nav



