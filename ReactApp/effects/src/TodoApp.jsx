import TodoList from "./TodoList"
import "./TodoApp.css"
export default function TodoApp() {

    return (<>
        <div className="listContainer">

            <div className="listArea">
                <TodoList />
            </div>
        </div>
    </>)
}