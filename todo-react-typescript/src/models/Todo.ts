interface ITodo{
    id:string,
    value:string,
    markDone: boolean,
    currentlyOnEditMode:boolean
}

export default class Todo implements ITodo{

    constructor(private _id:string = '', private _value: string = '' , private _markDone: boolean  = false, private _currentlyOnEditMode: boolean = false){ }

    get id(){
        return this._id;
    }

    get value(){
        return this._value;
    }

    get markDone(){
        return this._markDone;
    }

    get currentlyOnEditMode(){
        return this._currentlyOnEditMode;
    }

    set value(value:string){
        this._value = value;
    }

    set markDone(markDone:boolean){
        this._markDone = markDone;
    }

    set currentlyOnEditMode(mode:boolean){
        this._currentlyOnEditMode = mode;
    }





}