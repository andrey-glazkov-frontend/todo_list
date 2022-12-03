
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';


import { UseTodos } from './customHooks/useTodos'

function App() {
  const { todos, addNewTodo, deleteTodo, changeTodoStatus, clearAllTodos } = UseTodos()


  return (
    <div className='container py-5'>
      <Header addNewTodoFunc={addNewTodo} />
      <hr />
      <Main changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} todos={todos} />
      <hr />
      <Footer clearAllTodos={clearAllTodos} />
    </div>
  );
}

export default App;
