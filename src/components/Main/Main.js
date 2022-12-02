import mainStyles from './main.module.css'

const Main = ({ todos, changeTodoStatus, deleteTodo }) => {


    return (
        <main>

            <ul className="list-group">

                {
                    todos.map((todo, i) => (
                        <li key={todo.id} className="list-group-item d-flex justify-content-between">
                            <span className={`d-flex align-items-center ${todo.status ? mainStyles.done : ''}`}>{i + 1}. {todo.title} </span>
                            <div>
                                <button onClick={() => deleteTodo(todo.id)} type="button" className="btn mx-2 btn-danger">Delete</button>
                                <button onClick={() => changeTodoStatus(todo.id)} type="button" className="btn btn-success">Done</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}


export {
    Main
}