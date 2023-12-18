import { Box, Center, Container, Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button} from '@chakra-ui/react'

const Form = () => {

    const [option,setOption] = useState('human')

    return (
        <Container maxW='7xl'>

            <Flex marginTop={"10px"} columnGap={"10px"} color='white'>
                <Input placeholder='Type name:' />
                <Input placeholder='Type surname:' />
                <Input placeholder='Type age:' />
                <Select onChange={(e)=>{ setOption(e.target.value) }} defaultValue={"human"} color='black'>
                    
                    <option disabled>human</option>
                    <option value='student'>student</option>
                    <option value='employee'>employee</option>
                </Select>
                <Button paddingInline={"10px"} colorScheme='blue'>Add</Button>
                <Button paddingInline={"22px"} colorScheme='blue'>Cancel</Button>
            </Flex>

{option == "student" ? <Flex marginTop={"10px"} columnGap={"10px"} color='white'>
                <Input placeholder='Type groupName:' />
                <Input placeholder='Type GPA:' />
                <Input placeholder='Type hobbies:' />
                
            </Flex> : <></> }
            

{option == "employee" ? <Flex marginTop={"10px"} columnGap={"10px"} color='white'>
                <Input placeholder='Type salary:' />
                <Input placeholder='Type skills:' />
                <Select  defaultValue='position' color='black'>
                <option disabled>position</option>
                    <option value='ceo'>CEO</option>
                    <option value='recruiter'>Recruiter</option>
                    <option value='developer'>Developer</option>
                </Select>
                
            </Flex> : <></>}
            
            

        </Container>

    )
}

export default Form