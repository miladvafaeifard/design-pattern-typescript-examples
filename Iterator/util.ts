import { TodoIterator, Todo, TodoEnum } from "./todo/iterator";

export const print = (msg: string = '') => (it: TodoIterator<Todo>, property: TodoEnum) => {
    while(it.hasNext()){
        console.log(`${msg}${it.next()[property]}`);
    }
}
