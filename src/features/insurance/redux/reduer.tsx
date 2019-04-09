import { EnthusiasmAction } from './actions';
import { INCREMENT_ENTHUSIASM,INCREMENT_ENTHUSIASM_FINISH } from './actionTypes';

function demoData(state: object[] = [], action:EnthusiasmAction) : object{
    console.log(112333,action)
    switch (action.type){
        case INCREMENT_ENTHUSIASM:
            return state
        case INCREMENT_ENTHUSIASM_FINISH:
            return action.demoData
        default:
            return state
    }
}

const AppReducer = {
    demoData
}

export default AppReducer
