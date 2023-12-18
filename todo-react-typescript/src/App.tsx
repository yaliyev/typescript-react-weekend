import { useEffect, useState } from 'react'
import TodoList from './models/TodoList'
import Todo from './models/Todo';
import { ChakraProvider } from '@chakra-ui/react';
import TodoListPage from './components/TodoListPage';



function App() {

  

  return (
    <>
      <ChakraProvider>
        <TodoListPage />
      </ChakraProvider>
    </>
  )
}

export default App
