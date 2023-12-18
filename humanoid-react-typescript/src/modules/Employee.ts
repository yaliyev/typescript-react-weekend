import Human from "./Human";

export enum Position{
 CEO = 'CEO',
 Recruiter = 'Recruiter',
 Developer = 'Developer',
 None = 'None'
}

interface IEmployee<T>{
    salary:number;
    skills:T;
    position: Position
}

export default class Employee extends Human implements IEmployee<string[]> {

    salary:number;
    skills:string[];
    position: Position;
   
    constructor(name:string,surname:string,age:number,salary:number,skills:string[],position:Position){
        super(name,surname,age); // onsuzda Human classimizda constructor var,onuda extends edirik.super yazsaq hemin constructor istifade etmish olariq
        this.salary = salary;
        this.skills = skills;
        this.position = position;
    }
}