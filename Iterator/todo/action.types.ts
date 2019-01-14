import { TodoEnum } from "./iterator";

export enum ActionEnum {
  ADD = "ADD_TODO",
  REMOVE = "REMOVE_TODO"
}

export interface AddTodo {
  type: ActionEnum.ADD;
  [TodoEnum.TEXT]: string;
}

export interface RemoveTodo {
  type: ActionEnum.REMOVE;
  [TodoEnum.INDEX]: number;
}

export type ActionTypes = AddTodo | RemoveTodo;
