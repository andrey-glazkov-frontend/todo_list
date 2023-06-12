import React, { useContext, useMemo } from 'react'
import { useTodos } from '../customHooks/useTodos'

export const TodosContext = React.createContext()
export const TodosContextHelpers = React.createContext()

export function TodosContextProvider({ children }) {
  const {
    todos,
    addNewTodo,
    deleteTodo,
    changeTodoStatus,
    clearAllTodos,

  } = useTodos()

  const todosContextHelpersValue = useMemo(() => ({
    addNewTodo,
    deleteTodo,
    changeTodoStatus,
    clearAllTodos,

  }), [])

  return (
    <TodosContext.Provider value={todos}>
      <TodosContextHelpers.Provider value={todosContextHelpersValue}>

        {children}

      </TodosContextHelpers.Provider>
    </TodosContext.Provider>
  )
}

export const useTodosContext = () => useContext(TodosContext)
export const useTodosHelpersContext = () => useContext(TodosContextHelpers)
