import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import "./Todo.css"
export default function Todo({ todoObj, deleteTodo }) {
    return (
        <li className="todoComponent">
            <h3 className='Todo'>
                {todoObj.todo}
            </h3>
            <div className="deleteIcon">
                <Button onClick={() => deleteTodo(todoObj)}><DeleteIcon /></Button>
            </div>



        </li>
    )
}