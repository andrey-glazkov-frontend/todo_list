import React from 'react'
import { useTodosHelpersContext } from '../../contexts/TodosContext'

function Footer() {
  const { clearAllTodos } = useTodosHelpersContext()
  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearAllTodos} type="button" className="btn mx-2 btn-danger">Clear</button>
    </footer>
  )
}

// eslint-disable-next-line no-func-assign
Footer = React.memo(Footer)

export {
  Footer,
}
