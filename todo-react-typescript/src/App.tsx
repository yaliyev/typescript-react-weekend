import { useState } from 'react'
import TodoList from './models/TodoList'
import Todo from './models/Todo';



function App() {

  const todoList:TodoList = TodoList.createInstance();

  // const todo1:Todo = new Todo("1","value1",false);

  // todoList.add(todo1);

  console.log(todoList);
  
  
 

  return (
    <>
      
    </>
  )
}

export default App
