import TodoList from "./TodoList"
import "./TodoApp.css"
export default function TodoApp() {

    return (<>
        <div className="listContainer">
            <h1 className="listTitle">TODO LIST</h1>
            <TodoList className="listArea" />
        </div>
    </>)
}