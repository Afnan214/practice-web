import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./TodoListForm"
import ListItem from '@mui/material/ListItem';
export default function TodoListForm({ subFunc }) {
    const [form, setForm] = useState({ todo: "" })

    const updateTodo = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        setForm((oldForm) => {
            return { ...oldForm, [fieldName]: value };
        })
    }
    return (
        <>
            <ListItem>
                <form className="form" onSubmit={(e) => subFunc(e, form.todo)}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" name="todo" onChange={updateTodo} />
                    <Button type="submit" variant="outlined" >submit</Button>
                </form>
            </ListItem>
        </>
    )
}