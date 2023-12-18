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
                <Select defaultValue={"human"} color='black'>
                    
                    <option disabled>human</option>
                    <option value='student'>student</option>
                    <option value='employee'>employee</option>
                </Select>
                <Button paddingInline={"10px"} colorScheme='blue'>Add</Button>
                <Button paddingInline={"22px"} colorScheme='blue'>Cancel</Button>
            </Flex>

            <Flex marginTop={"10px"} columnGap={"10px"} color='white'>
                <Input placeholder='Type groupName:' />
                <Input placeholder='Type GPA:' />
                <Input placeholder='Type hobbies:' />
                
            </Flex>

            <Flex marginTop={"10px"} columnGap={"10px"} color='white'>
                <Input placeholder='Type salary:' />
                <Input placeholder='Type skills:' />
                <Select  placeholder='position' color='black'>
                    
                </Select>
                
            </Flex>
            

        </Container>

    )
}

export default Form