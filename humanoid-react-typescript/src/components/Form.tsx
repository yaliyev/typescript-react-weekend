import { Box, Center, Container, Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Button } from '@chakra-ui/react'
import ListItem from './ListItemComponent'
import ListItemComponent from './ListItemComponent'
import Employee, { Position } from '../modules/Employee'
import Student from '../modules/Student'

const Form = () => {

    const [option, setOption] = useState('human')

    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const groupNameRef = useRef<HTMLInputElement>(null);
    const gpaRef = useRef<HTMLInputElement>(null);
    const hobbiesRef = useRef<HTMLInputElement>(null);

    const salaryRef = useRef<HTMLInputElement>(null);
    const skillsRef = useRef<HTMLInputElement>(null);
    const positionRef = useRef<HTMLSelectElement>(null);

    const optionRef = useRef<HTMLSelectElement>(null);

    function identifyHumanAndAddIt() {
        

        
        if (option == 'student') {
           
            let student: Student = new Student((nameRef.current!).value, (surnameRef.current!).value,
                Number((ageRef.current!).value), (groupNameRef.current!).value, (hobbiesRef.current!).value.split(","),Number((gpaRef.current!).value));

             console.log(student);

             (groupNameRef.current!).value = '';
             (gpaRef.current!).value = '';
             (hobbiesRef.current!).value = '';
                
        }else if (option == 'employee') {

            let positionEnumValue: Position = Position.None;

            switch ((positionRef.current!).value) {
                case "developer":
                    positionEnumValue = Position.Developer;
                    break;
                case "recruiter":
                    positionEnumValue = Position.Recruiter;
                    break;
                case "ceo":
                    positionEnumValue = Position.CEO;
                    break;
            }

            let employee: Employee = new Employee((nameRef.current!).value, (surnameRef.current!).value,
                Number((ageRef.current!).value), Number((salaryRef.current!).value), (skillsRef.current!).value.split(","),positionEnumValue);

             console.log(employee);

             (salaryRef.current!).value = '';
             (skillsRef.current!).value = '';
             (positionRef.current!).value = 'position';
                
        }else{
          alert("You cannot add something,Human class is abstract.Choose Human Type in Select Element");  
        }

        (nameRef.current!).value = '';
        (surnameRef.current!).value = '';
        (ageRef.current!).value = '';

        (optionRef.current!).value = 'human';
        setOption('human');
    }

    return (
        <Container maxW='7xl'>

            <Flex marginTop={"10px"} columnGap={"10px"}>
                <Input ref={nameRef} placeholder='Type name:' />
                <Input ref={surnameRef} placeholder='Type surname:' />
                <Input ref={ageRef} placeholder='Type age:' />
                <Select ref={optionRef} onChange={(e) => { setOption(e.target.value) }} defaultValue={"human"} color='black'>

                    <option disabled>human</option>
                    <option value='student'>student</option>
                    <option value='employee'>employee</option>
                </Select>
                <Button onClick={() => { identifyHumanAndAddIt() }} paddingInline={"10px"} colorScheme='blue'>Add</Button>
                <Button paddingInline={"22px"} colorScheme='blue'>Cancel</Button>
            </Flex>

            {option == "student" ? <Flex marginTop={"10px"} columnGap={"10px"}>
                <Input ref={groupNameRef} placeholder='Type groupName:' />
                <Input ref={gpaRef} placeholder='Type GPA:' />
                <Input ref={hobbiesRef} placeholder='Type hobbies:' />

            </Flex> : <></>}


            {option == "employee" ? <Flex marginTop={"10px"} columnGap={"10px"}>
                <Input ref={salaryRef} placeholder='Type salary:' />
                <Input ref={skillsRef} placeholder='Type skills:' />
                <Select ref={positionRef} defaultValue='position' color='black'>
                    <option disabled>position</option>
                    <option value='ceo'>CEO</option>
                    <option value='recruiter'>Recruiter</option>
                    <option value='developer'>Developer</option>
                </Select>

            </Flex> : <></>}

            <Flex marginTop={"10px"}>

                <ListItemComponent>

                </ListItemComponent>

            </Flex>

        </Container>



    )
}

export default Form