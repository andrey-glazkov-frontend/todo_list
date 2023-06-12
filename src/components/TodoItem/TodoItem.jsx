import { useTodosHelpersContext } from '../../contexts/TodosContext'
import mainStyles from './styles.module.css'

export function TodoItem({
  // eslint-disable-next-line object-curly-newline
  id, title, status, inx /* {deleteTodo, changeTodoStatus */ }) {
  const { deleteTodo, changeTodoStatus } = useTodosHelpersContext()

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={`d-flex align-items-center ${status ? mainStyles.done : ''}`}>
        {inx + 1}
        .
        {' '}
        {title}
        {' '}
      </span>
      <div>
        <button onClick={() => deleteTodo(id)} type="button" className="btn mx-2 btn-danger">Delete</button>
        <button onClick={() => changeTodoStatus(id)} type="button" className="btn btn-success">Done</button>
      </div>
    </li>
  )
}
