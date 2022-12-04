
import {  useTodosContext } from '../../contexts/TodosContext'
import { TodoList } from '../TodoList/TodoList'

const Main = (/*{ todos, changeTodoStatus, deleteTodo }*/) => {

    const todos = useTodosContext()
    if (!todos.length) {

        return <p>Todo list is empty</p>
    }

    return (
        <main>
            <TodoList /*todos={todos} deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus}*/ />
        </main>
    )
}


export {
    Main
}