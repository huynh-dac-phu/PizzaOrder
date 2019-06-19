import * as types from './../constant/ActionTypes';
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};
export const onIncrease = (id) => {
    return {
        type: types.ON_INCREASE,
        id
    }
}
export const onDecrease = (id) => {
    return {
        type: types.ON_DECREASE,
        id
    }
}
export const isReset = () => {
    return {
        type: types.IS_RESET
    }
}
