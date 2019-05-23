import { ADD } from "./actionTypes";

export const add = (places) => {
    return {
        type: ADD,
        placeName: places
    };
};