import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json()
  )
    .then(json =>{
      //console.log(json)
      setTodos(json.map(todo =>{
        return {
          id: todo.id,
          title: todo.title
        }
      }))
    })
    .catch(e =>{
      console.log(e)
    })
  }, [])

  const todoList = todos.map(todo =>{
    return <div style={{border:'solid', width: 300, margin: '5px', padding: '5px'}}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-around'}}>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
      </div>
    </div>
  })
  return (
      <div>
        {todoList}
      </div>
  );
}

export default App;
