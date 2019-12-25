import {setStateLocalStorage } from "../utils/localStorage";

const counter = (state = [] , action) => {
    if (action.data){
        switch(action.type){
            case "ADD_MOVIE":
                state.push(action.data);
                setStateLocalStorage(state);
                return state;
            case "DELETE_MOVIE":
                let empty=false;
                let state2 = state.filter( (r) => {
                    return r.title !== action.data
                });
                console.log(state2);
                state=state2;
                (state.length===0)?empty=true:empty=false;
                setStateLocalStorage(state,empty);
                return state;
            default:
                return state
        }
    }else {
        return state
    }
};

export default counter;



