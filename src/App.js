import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { TodosContextProvider } from './contexts/TodosContext'

function App() {
  return (
    <TodosContextProvider>
      <div className="container py-5">

        <Header /* addNewTodoFunc={addNewTodo} */ />
        <hr />
        <Main /* changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} todos={todos} */ />
        <hr />
        <Footer /* clearAllTodos={clearAllTodos} */ />
      </div>
    </TodosContextProvider>
  )
}

export default App
