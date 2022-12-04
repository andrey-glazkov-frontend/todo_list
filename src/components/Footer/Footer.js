import React from "react"
import {   useTodosHelpersContext } from "../../contexts/TodosContext"

let Footer = (/*{ clearAllTodos }*/) => {

    const {clearAllTodos} = useTodosHelpersContext()
    return (
        <footer className="d-flex justify-content-center">
            <button onClick={clearAllTodos} type="button" className="btn mx-2 btn-danger">Clear</button>
        </footer>
    )
}

Footer = React.memo(Footer)

export {
    Footer
}