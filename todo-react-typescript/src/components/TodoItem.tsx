import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Text } from '@chakra-ui/react'
import Todo from '../models/Todo'
import TodoList from '../models/TodoList'
const TodoItem = (props: {todo: Todo,list:Todo[],setList:any,todoIndex: number}) => {

  const editableItemInputRef = useRef<HTMLInputElement>(null);

  function changeCurrentlyEditMode(mode:boolean){
    const todos = [...props.list];
    todos[props.todoIndex].currentlyOnEditMode = mode;
    props.setList(todos);
  }

  


  return (
    <Flex marginBlock={"10px"}>
      {!props.todo.currentlyOnEditMode?
        <>
          <Text paddingBlock={"5px"} fontSize='sm'>{props.todo.value}</Text>
          <Button onClick={()=>{ changeCurrentlyEditMode(true) }} marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
            Edit
          </Button>
          <Button marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
            Remove
          </Button>
          <Button marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
            Mark
          </Button>
        </> :
        <>
          <Input defaultValue={props.todo.value} ref={editableItemInputRef}  borderRadius={'4px'} placeholder='Type something..' size='sm' />
          <Button onClick={()=>{}}   marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
           Save
          </Button>
          <Button onClick={()=>{changeCurrentlyEditMode(false)}}  marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
           Cancel
          </Button>
        </>
      }

    </Flex>
  )
}

export default TodoItem