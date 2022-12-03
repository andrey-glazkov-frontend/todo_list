import { TodoItem } from "../TodoItem/TodoItem"

export const TodoList = ({ todos, deleteTodo, changeTodoStatus }) => {



    return (
        <ul className="list-group" >

            {

                todos.map((todo, i) => <TodoItem key={todo.id} {...todo} inx={i} deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus} />)
            }
        </ul>
    )
}