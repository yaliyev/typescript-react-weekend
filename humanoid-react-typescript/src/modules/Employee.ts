import Human from "./Human";

enum Position{
 CEO,
 Recruiter,
 Developer
}

interface IEmployee<T>{
    salary:number;
    skills:T;
    position: Position
}

class Employee extends Human implements IEmployee<string[]> {

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