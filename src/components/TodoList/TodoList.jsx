
import {  useTodosContext } from "../../contexts/TodosContext"
import { TodoItem } from "../TodoItem/TodoItem"

export function TodoList(/*{ todos, deleteTodo, changeTodoStatus }*/)  {

const todos = useTodosContext()

    return (
        <ul className="list-group" >

            {

                todos.map((todo, i) => <TodoItem key={todo.id} {...todo} inx={i} /*deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus}*/ />)
            }
        </ul>
    )
}