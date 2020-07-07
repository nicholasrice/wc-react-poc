import { createStore, combineReducers } from 'redux';
import { uniqueId, fromPairs } from "lodash-es";

/**
 * Defines a todo item in app state
 */
interface TodoItemState {
    id: string,
    done: boolean,
    content: string
}

export enum TodoActionTypes {
    add = "ADD_TODO",
    remove = "REMOVE_TODO",
    toggle = "TOGGLE_TODO"
}

export interface AddTodoAction {
    type: typeof TodoActionTypes.add,
    payload: { content: string}
}

export interface RemoveTodoAction {
    type: typeof TodoActionTypes.remove,
    payload: { id: string }
}

export interface ToggleTodoAction {
    type: typeof TodoActionTypes.toggle,
    payload: { id: string }
}

export type TodoAction = AddTodoAction | RemoveTodoAction | ToggleTodoAction;

/**
 * App state interface
 */
export interface AppState {
    todos: { [id: string]: TodoItemState }
}

export type AppAction = TodoAction

function todoReducer(state: AppState["todos"] = {}, action: AppAction) {
    switch (action.type) {
        case TodoActionTypes.add:
            let id = uniqueId('todo');
            return {...state, [id]: { id, content: action.payload.content, done: false}}
        case TodoActionTypes.remove:
            return fromPairs(Object.entries(state).filter(value => value[0] !== action.payload.id))
        case TodoActionTypes.toggle:
            return fromPairs(Object.entries(state)
                .map(([id, item]) => {
                    return item.id === action.payload.id
                        ? [id, {...item, done: !item.done}]
                        : [id, item]
                }))
    }

    return state;
}

export const store = createStore(combineReducers({ todos: todoReducer }));