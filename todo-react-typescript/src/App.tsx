// @ts-ignore
import { useEffect, useState } from 'react'
// @ts-ignore
import TodoList from './models/TodoList'
// @ts-ignore
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
