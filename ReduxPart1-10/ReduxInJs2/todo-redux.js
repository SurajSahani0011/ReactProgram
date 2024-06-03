const redux = require("redux");


//Actions
const ADD_TODO="Add TODO";
const TOGGLE_TODO="Toggle TODO";

//Action Creators

const addToDo = (text)=>({text, type:ADD_TODO});
const toggleToDo = (index)=>({index, type:TOGGLE_TODO});

// Initial State
const initialState={
    todos:[]
}

//Reducers
//must return updated state
function todoReducer(state=initialState, action){

    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
            case TOGGLE_TODO:
                return{
                    ...state,
                    todos: state.todos.map((todo, i)=>{
                        if(i==action.index){
                            todo.completed = !todo.completed;
                        }
                        return todo;
                    })
                }
                default:
                    return state;
    }
}

// Creating store
const store = redux.createStore(todoReducer);

// dispatch action
store.dispatch(addToDo("study at 8"));
store.dispatch(addToDo("office at 9"));
store.dispatch(addToDo("zym at 6"));
store.dispatch(toggleToDo(0));
store.dispatch(toggleToDo(1));

// Read data from store
console.log(store.getState());