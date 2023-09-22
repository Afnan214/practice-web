import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import "./Todo.css"
export default function Todo({ todo, deleteTodo, labelId, toggleCompleted }) {
    return (
        <ListItem
            className='ListComponent'
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={() => toggleCompleted(todo)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText style={{ textDecoration: todo.checked ? "Line-through" : "", color: todo.checked ? "grey" : "" }} id={labelId} primary={todo.todo} />
            </ListItemButton>
        </ListItem >
    )
}