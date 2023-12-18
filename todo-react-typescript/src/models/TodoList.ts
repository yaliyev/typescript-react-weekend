import Todo from './Todo';

interface ITodoList{
    list: Todo[],
    load:() => void,
    upload:() => void,
    add:(newTodo: Todo)=>void,
    remove:(todoId:string)=>void,
    reset:()=>void
}

export default class TodoList implements ITodoList{

    // mutleq shekilde singleton olmalidir
    // muellim sizin usulunuzdan biraz ferqli edecem siz baslangicda instance obyekt qururdunuz
    // men createInstance metodu cagirildiqda edecem if vasitesile yoxlayib,internetde arasdirdim daha yaxshi usuldur deyirler

    static instance: TodoList;

    private constructor(private _list:Todo[] = []){}

    get list(){
        return this._list;
    }

    static createInstance():TodoList{
        if( typeof this.instance == 'undefined'){
            this.instance = new TodoList();
        }
        return this.instance;
    }



    load():void {
       const storageString : string | null = localStorage.getItem('todos-typescript');
       
       if( typeof storageString == 'string'){
                const list = JSON.parse(storageString);

                console.log(list);
                console.log(typeof list);
                
                
       }else{
        return;
       }
    }

    upload():void{

    }

    add(todo:Todo):void{
        this._list.push(todo);

    }

    remove():void{

    }

    reset():void{

    }






}