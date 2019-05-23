import { ADD } from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName
                }),
                lastPlace: action.placeName 
            };
        default:
            return state;
    }
}

export default reducer;