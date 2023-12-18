import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import Todo from '../models/Todo'
const TodoItem = (props:{todo:Todo}) => {
    
  return (
    <Flex marginBlock={"10px"}>
        <Text  paddingBlock={"5px"} fontSize='sm'>{props.todo.value}</Text>
        <Button marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
                        Edit
                    </Button>
                    <Button marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
                        Remove
                    </Button>
                    <Button marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
                        Mark
                    </Button>
    </Flex>
  )
}

export default TodoItem