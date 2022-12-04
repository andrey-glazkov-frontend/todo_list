import { useCallback, useEffect, useState } from "react"
import { TODOS_KEY_IN_LS } from "../utils/constsnts"



export const useTodos = () => {
    const [todos, setTdodos] = useState([])

    useEffect(() => {
        const todosFromLs = localStorage.getItem(TODOS_KEY_IN_LS)
        const prepareTodos = todosFromLs ? JSON.parse(todosFromLs) : []
        if (prepareTodos.length) {
            setTdodos(prepareTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(TODOS_KEY_IN_LS, JSON.stringify(todos))
    }, [todos])

    const addNewTodo = useCallback((title) => {
        const newTodo = {
            title,
            id: Date.now(),
            status: false
        }


        setTdodos(prev => [newTodo, ...prev])
    },[])

    const clearAllTodos = useCallback(() => {
        setTdodos([])
    }, [])

    const deleteTodo = (id) => {
        setTdodos(prev => prev.filter((todo) => todo.id != id))
    }
    const changeTodoStatus = (id) => {
        setTdodos(prev => prev.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    status: !todo.status
                }
            }
            return todo
        }))


    }
    return {
        todos,
        addNewTodo,
        deleteTodo,
        changeTodoStatus,
        clearAllTodos

    }
}