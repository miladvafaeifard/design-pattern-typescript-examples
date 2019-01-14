import { print } from "./util";
import { reducer, TodoIteratorFactory } from "./todo/index";
import { TodoEnum, Todo } from "./todo/iterator";
import * as Actions from './todo/action';

let printText = print('--->  ');

let todos: Todo[] = [];

todos = reducer(todos, Actions.Add('buy a car'));
todos = reducer(todos, Actions.Add('buy a book'));
todos = reducer(todos, Actions.Add('buy a green tea box'));

let todoIt = new TodoIteratorFactory();
printText(todoIt.createTodoIterator(todos), TodoEnum.TEXT);

console.log('\n\n****************************\n\n')

todos = reducer(todos, Actions.Remove(0));
todos = reducer(todos, Actions.Remove(2));
todos = reducer(todos, Actions.Add('Do homework'));
todos = reducer(todos, Actions.Add('pay the bill'));
todos = reducer(todos, Actions.Add('Remove some unnecessary stuff'));
todos = reducer(todos, Actions.Remove(4));

printText(todoIt.createTodoIterator(todos), TodoEnum.TEXT);
