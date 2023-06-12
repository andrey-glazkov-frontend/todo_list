import { useEffect, useState } from 'react'
import { useTodosContext } from '../../contexts/TodosContext'
import { TodoItem } from '../TodoItem/TodoItem'

export function TodoList(/* { todos, deleteTodo, changeTodoStatus } */) {
  const todos = useTodosContext()

  const [filtred, setFiltred] = useState(todos)

  useEffect(() => {
    setFiltred(todos)
  }, [todos])

  function todoFilter(status) {
    if (status === 'all') {
      setFiltred(todos)
    } else {
      const newTodo = [...todos].filter((item) => item.status === status)
      setFiltred(newTodo)
    }
  }

  return (
    <div>
      <div className="text-center" style={{ marginBottom: '1rem' }}>
        <button type="button" className="btn mx-1" onClick={() => todoFilter('all')}>All</button>
        <button type="button" className="btn mx-1" onClick={() => todoFilter(true)}>Done</button>
        <button type="button" className="btn mx-1" onClick={() => todoFilter(false)}>Undone</button>
      </div>
      <ul className="list-group">
        {
      filtred.map((todo, i) => (
        <TodoItem
          key={todo.id}
          {...todo}
          inx={i}
        />
      ))
    }
      </ul>
    </div>
  )
}
