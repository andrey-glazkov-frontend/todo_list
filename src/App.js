
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react';

function App() {


  const [todos, setTdodos] = useState([])


  const addNewTodo = (title) => {
    const newTodo = {
      title,
      id: Date.now(),
      status: false
    }


    setTdodos(prev => [newTodo, ...prev])
  }


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

  return (
    <div className='container py-5'>
      <Header addNewTodoFunc={addNewTodo} />
      <hr />
      <Main changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} todos={todos} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
