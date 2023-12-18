import Human from "./Human";

interface IStudent<T> {
    groupName: string;
    hobbies: T,
    GPA: number,
    hasPassed: () => boolean;
}

class Student extends Human implements IStudent<string[]>{

    groupName: string;
    hobbies: string[];
    private _GPA: number;


    get GPA(){
        return this._GPA;
    }

    set GPA(GPA:number){
        if(GPA > 0 && GPA <= 100 ){
            this._GPA = GPA;
        }
    }

    constructor(name: string, surname: string, age: number, groupName: string, hobbies: string[],_GPA: number) {
        super(name, surname, age);
        this.groupName = groupName;
        this.hobbies = hobbies;
        this._GPA = _GPA;
    }

    hasPassed(): boolean{
        if(this.GPA < 50 ){
            return false;
        }else{
            return true;
        }
    }
}