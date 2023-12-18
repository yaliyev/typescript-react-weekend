import { Box, Button, Container, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import Todo from '../models/Todo'
import TodoList from '../models/TodoList'

const TodoListPage = () => {


    const todoList:TodoList = TodoList.createInstance();
    const [list,setList] = useState(todoList);

    useEffect(()=>{
       
     setList(todoList);

    },[])
    //  const todo1:Todo = new Todo("1","value1",false);

    return (
        <Container marginTop='200px' maxW='xl' centerContent>
            <Box padding='4' maxW='md'>

                <Heading textAlign={"center"} as='h3' size='lg'>
                    Todo App
                </Heading>

                <Stack marginTop={"20px"} spacing={3}>
                    <Flex>
                    <Input borderRadius={'4px'} placeholder='Type something..' size='sm' />
                    <Button marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
                        Add
                    </Button>

                    </Flex>
                </Stack>

                <Stack marginTop={"20px"}>


                      {list.list.map((todo:Todo)=>{
                         return <TodoItem todo={todo} />
                      })};
                      
                      

                </Stack>



            </Box>
        </Container>
    )
}

export default TodoListPage