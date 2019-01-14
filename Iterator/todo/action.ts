import { AddTodo, RemoveTodo, ActionEnum } from "./action.types";

export const Add = (text: string): AddTodo => ({
  type: ActionEnum.ADD,
  text
});

export const Remove = (index: number): RemoveTodo => ({
  type: ActionEnum.REMOVE,
  index
});
