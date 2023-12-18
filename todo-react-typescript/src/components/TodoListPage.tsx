import { Box, Button, Container, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'
import Todo from '../models/Todo'
import TodoList from '../models/TodoList'
import { v4 as uuidv4 } from 'uuid';




const TodoListPage = () => {

    useEffect(()=>{
        TodoList.createInstance();
    },[])

    const todoList:TodoList = TodoList.createInstance();
       
    const [list,setList] = useState(todoList.list);


    const mainTodoInputRef = useRef<HTMLInputElement>(null);

    
    

    function addTodo(){
        
    
        const todo:Todo = new Todo(uuidv4(),mainTodoInputRef.current?.value,false);

        todoList.add(todo);
         setList([...todoList.list]);

         (mainTodoInputRef.current!).value = '';
        
         
        
    }

    return (
        <Container marginTop='200px' maxW='xl' centerContent>
            <Box padding='4' maxW='md'>

                <Heading textAlign={"center"} as='h3' size='lg'>
                    Todo App
                </Heading>

                <Stack marginTop={"20px"} spacing={3}>
                    <Flex>
                    <Input ref={mainTodoInputRef} borderRadius={'4px'} placeholder='Type something..' size='sm' />
                    <Button onClick={()=>{addTodo()}} marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
                        Add
                    </Button>

                    </Flex>
                </Stack>

                <Stack marginTop={"20px"}>


                      {list.map((todo:Todo,index:number)=>{
                         return <TodoItem  list={list} setList={setList} key={index} todo={todo} todoIndex={index} />
                      })};
                      
                      

                </Stack>



            </Box>
        </Container>
    )
}

export default TodoListPage