import * as types from '../actions/actionTypes.js';
import { v4 as uuidv4 } from 'uuid';

const initialState = {};



const propertyReducer = (state = initialState, action) => {
    const newProperty = structuredClone(state);

    switch (action.type) {
        // case types.CHANGE_NAV: {
        //     newTask.navBool ? newTask.navBool = false : newTask.navBool = true;
        //     return newProperty;
        // }
       
        default:
            return state;

    }
};

export default propertyReducer;