import {ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes'

const todosReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log("ADD_TODO")
            return [
                ...state, 
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }
            ]
        case TOGGLE_TODO:
            
            break;    
        default:
            return state;    
    }
}

export default todosReducer