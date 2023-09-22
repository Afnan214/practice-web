import TodoListForm from "./TodoListForm"
import { useState } from "react"
import Todo from "./Todo"
import { v4 as uuid } from "uuid"
import "./TodoList.css"
export default function TodoList() {
    const [todos, setTodos] = useState([])
    const pushItems = (e, todoItem) => {
        setTodos((old) => {
            return [...old, { id: uuid(), todo: todoItem }]
        })
        console.log("submitting")
        e.preventDefault();
    }
    const deleteTodo = (todoObj) => {
        setTodos((oldTodos) => { return oldTodos.filter((obj) => todoObj.id !== obj.id) })
        console.log("deleting")
    }
    return (<>
        <ul className="listArea">
            {todos.map((todoObj) => {
                return <Todo key={todoObj.id} todoObj={todoObj} deleteTodo={deleteTodo} />
            })}
        </ul>
        <TodoListForm subFunc={pushItems} />
    </>)
}