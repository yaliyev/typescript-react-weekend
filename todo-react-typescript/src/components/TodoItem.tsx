import { Button, Flex, Input } from '@chakra-ui/react'
// @ts-ignore
import React, { useRef, useState } from 'react'
import { Text } from '@chakra-ui/react'
import Todo from '../models/Todo'
import TodoList from '../models/TodoList'
const TodoItem = (props: {todoListInstance:TodoList,todo: Todo,list:Todo[],setList:any,todoIndex: number}) => {

  const editableItemInputRef = useRef<HTMLInputElement>(null);

  function changeCurrentlyEditMode(mode:boolean){
    const todos = [...props.list];
    todos[props.todoIndex].currentlyOnEditMode = mode;
    props.todoListInstance.list = todos;
    props.setList(todos);
  }

  function deleteTodo(){
    const todos = [...props.list];
    todos.splice(props.todoIndex,1);
    props.todoListInstance.list = todos;
    props.setList(todos);
  }

  function toggleMarkTodo(){
    const todos = [...props.list];
    todos[props.todoIndex].markDone = !todos[props.todoIndex].markDone; // ne olsa onun tersinesine assign olunsun
    props.todoListInstance.list = todos;
    props.setList(todos);
  }

  function editTodo(){
    const todos = [...props.list];
    todos[props.todoIndex].value = (editableItemInputRef.current!).value; 
    props.todoListInstance.list = todos;
    props.setList(todos);
  }

  


  return (
    <Flex marginBlock={"10px"}>
      {!props.todo.currentlyOnEditMode?
        <>
          <Text textDecoration={ props.todo.markDone ? "line-through" : "none" } paddingBlock={"5px"} fontSize='sm'>{props.todo.value}</Text>
          <Button onClick={()=>{ changeCurrentlyEditMode(true) }} marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
            Edit
          </Button>
          <Button onClick={()=>{deleteTodo()}} marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
            Remove
          </Button>
          <Button onClick={()=>{toggleMarkTodo()}} marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
            Mark
          </Button>
        </> :
        <>
          <Input defaultValue={props.todo.value} ref={editableItemInputRef}  borderRadius={'4px'} placeholder='Type something..' size='sm' />
          <Button onClick={()=>{editTodo();changeCurrentlyEditMode(false);}}   marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
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