import { TodoIterator, TodoCollection, Todo } from "./iterator";

export { reducer } from './reducer';

export interface IteratorFactory {
    createTodoIterator(todoList: Todo[]): TodoIterator<Todo>;
}

export class TodoIteratorFactory implements IteratorFactory {
    
    createTodoIterator(todoList: Todo[]): TodoIterator<Todo> {
        const itTodo: TodoCollection = new TodoCollection(todoList);
        return itTodo.createIterator();
    }
}
