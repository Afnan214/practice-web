import TodoListForm from "./TodoListForm"
import { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
import "./TodoList.css"
import Todo from "./Todo"
import List from '@mui/material/List';
import { Box, Typography } from '@mui/material'

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) {
        return []
    }
    else {
        return data
    }
}
export default function TodoList() {

    const [todos, setTodos] = useState(getInitialData)
    useEffect(() => {
        localStorage.setItem(
            "todos", JSON.stringify(todos)
        )
    }, [todos])
    const pushItems = (e, todoItem) => {
        setTodos((old) => {
            return [...old, { id: uuid(), todo: todoItem, checked: false }]
        })
        console.log("submitting")
        e.preventDefault();
    }
    const deleteTodo = (todoObj) => {
        setTodos((oldTodos) => { return oldTodos.filter((obj) => todoObj.id !== obj.id) })
        console.log("deleting")
    }
    const toggleCompleted = (todoObj) => {
        setTodos((oldTodos) => {
            return oldTodos.map((todo) => {
                if (todo.id === todoObj.id) {
                    return { ...todo, checked: !todo.checked }
                }
                else return todo
            })
        })
    }
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid grey",
            m: 10
        }}>
            <Typography variant="h3" component="h4">
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    const labelId = `checkbox-list-label-${todo.id}`;
                    return (<Todo className="todoComp" key={todo.id} labelId={labelId} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />);
                })}
                <TodoListForm classname="TodoListForm" subFunc={pushItems} />
            </List>

        </Box>
    );
}