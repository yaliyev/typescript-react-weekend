interface IHuman{
    name:string,
    surname:string,
    age:number,
    getInfo():void
}

abstract class Human implements IHuman{

    public _age:number;

    constructor(private _name:string = '',private _surname:string,_age:number = 0){
        if(_age >= 0) {
            this._age = _age;
        }else{
            throw new Error("Age data format is incorrect");

        }
    }

    get name(){
        return this._name;
    }

    get surname(){
        return this._surname;
    }

    get fullName(){
        return this._name + ' ' + this._surname;
    }

    get age(){
        return this._age;
    }

    getInfo(): void {
        console.log(this.fullName);
        console.log(this._age);
    }

}