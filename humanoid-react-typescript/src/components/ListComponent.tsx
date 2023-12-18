import { List, ListItem } from '@chakra-ui/react'
import React, { Children } from 'react'
import Human from '../modules/Human'
import Student from '../modules/Student'
import Employee from '../modules/Employee'
const ListComponent = (props:{people:Human[]}) => {
  return (
    <List>
      {props.people.map((person:Human,index:number)=>{
        return <ListItem key={index}>
          {person instanceof Student ? <> {person.name} {person.surname} studies in {person.groupName} & has GPA : {person.GPA} </> : <></>}
          {person instanceof Employee ? <> {person.name} {person.surname} is {person.position} & get paid: {person.salary}$  </> : <></>}
        </ListItem>
      })}
    </List>
  )
}

export default ListComponent