import Todo from './Todo';

interface ITodoList{
    list: Todo[],
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
    set list(list:Todo[]){
        this._list = list;
    }

    static createInstance():TodoList{
        if( typeof this.instance == 'undefined'){
            this.instance = new TodoList();
        }
        return this.instance;
    }


    add(todo:Todo):void{
        this._list.push(todo);

    }

    remove():void{

    }

    reset():void{

    }






}