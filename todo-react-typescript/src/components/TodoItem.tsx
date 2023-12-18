import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Text } from '@chakra-ui/react'
import Todo from '../models/Todo'
const TodoItem = (props: { editMode:boolean,setEditMode:any,todo: Todo,todoIndex: number}) => {

  const editableItemInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex marginBlock={"10px"}>
      {!props.editMode ?
        <>
          <Text paddingBlock={"5px"} fontSize='sm'>{props.todo.value}</Text>
          <Button onClick={()=>{props.setEditMode(true)}} marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
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
          <Button onClick={()=>{props.setEditMode(false)}}   marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
           Save
          </Button>
          <Button onClick={()=>{props.setEditMode(false)}}  marginLeft={"10px"} padding={'15px'} colorScheme='teal' size='sm'>
           Cancel
          </Button>
        </>
      }

    </Flex>
  )
}

export default TodoItem