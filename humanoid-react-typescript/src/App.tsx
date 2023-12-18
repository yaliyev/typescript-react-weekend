import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <>    
     <ChakraProvider>
      <Form/>
    </ChakraProvider>
    </>
  )
}

export default App
