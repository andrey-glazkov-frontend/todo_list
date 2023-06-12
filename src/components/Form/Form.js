import React, { useState } from 'react'
import { useTodosHelpersContext } from '../../contexts/TodosContext'

export const Form = React.memo(({ submitAdditionAction }) => {
  const [input, setInput] = useState('')

  const { addNewTodo } = useTodosHelpersContext()

  console.log('Render Form')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log({ input })

    if (input) {
      addNewTodo(input)
      setInput('')

      if (typeof submitAdditionAction === 'function') {
        submitAdditionAction()
      }
    }
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <h2 className="text-center mb-3">Create todo</h2>
      <div className="mb-3">
        <input
          type="text"
          value={input}
          placeholder="Title..."
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  )
})
