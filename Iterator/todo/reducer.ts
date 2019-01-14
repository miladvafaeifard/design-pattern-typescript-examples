import { ActionTypes, ActionEnum } from "./action.types";
import { Todo, TodoEnum } from "./iterator";
let index = 0;

export const reducer = (state: ReadonlyArray<Todo>, action: ActionTypes): Array<Todo> => { 
    
    switch(action.type){
        case ActionEnum.ADD:
            return [
                ...state,
                {
                    [TodoEnum.TEXT]: action.text,
                    done: false,
                    index: index++
                }
            ]
        case ActionEnum.REMOVE:
            return [...state.filter(s => s.index !== action.index)];
        default:
            return [...state];
    }
    
}
