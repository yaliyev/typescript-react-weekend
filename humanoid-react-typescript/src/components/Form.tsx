import { Box, Center, Container, Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Button } from '@chakra-ui/react'
import ListComponent from './ListComponent'
import Employee, { Position } from '../modules/Employee'
import Student from '../modules/Student'
import Human from '../modules/Human'

const Form = () => {

    const [option, setOption] = useState('human');
    const [people, setPeople] = useState<Human[]>([]);

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
                Number((ageRef.current!).value), (groupNameRef.current!).value, (hobbiesRef.current!).value.split(","), Number((gpaRef.current!).value));


            const peopleData = [...people];

            peopleData.push(student);

            setPeople(peopleData);


            (groupNameRef.current!).value = '';
            (gpaRef.current!).value = '';
            (hobbiesRef.current!).value = '';

        } else if (option == 'employee') {

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
                Number((ageRef.current!).value), Number((salaryRef.current!).value), (skillsRef.current!).value.split(","), positionEnumValue);

            const peopleData = [...people];

            peopleData.push(employee);

            setPeople(peopleData);

            (salaryRef.current!).value = '';
            (skillsRef.current!).value = '';
            (positionRef.current!).value = 'position';

        } else {
            alert("You cannot add something,Human class is abstract.Choose Human Type in Select Element");
        }

        (nameRef.current!).value = '';
        (surnameRef.current!).value = '';
        (ageRef.current!).value = '';

        (optionRef.current!).value = 'human';
        setOption('human');
    }

    function clearFormData() {
        (nameRef.current!).value = '';
        (surnameRef.current!).value = '';
        (ageRef.current!).value = '';

        (optionRef.current!).value = 'human';
        setOption('human');

        if(groupNameRef.current != null && gpaRef.current !=null &&  hobbiesRef.current != null ){
            (groupNameRef.current!).value = '';
            (gpaRef.current!).value = '';
            (hobbiesRef.current!).value = '';
        }
        
        if(salaryRef.current != null && skillsRef.current != null && positionRef.current != null){
            (salaryRef.current!).value = '';
            (skillsRef.current!).value = '';
            (positionRef.current!).value = 'position';
        }
        


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
                <Button onClick={() => { identifyHumanAndAddIt(); }} paddingInline={"10px"} colorScheme='blue'>Add</Button>
                <Button onClick={()=>{clearFormData();}} paddingInline={"22px"} colorScheme='blue'>Cancel</Button>
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

                <ListComponent people={people} />

            </Flex>

        </Container>



    )
}

export default Form