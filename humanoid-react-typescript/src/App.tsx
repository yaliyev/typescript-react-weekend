// @ts-ignore 
import { useState } from 'react'
// @ts-ignore 
import reactLogo from './assets/react.svg'
// @ts-ignore 
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
