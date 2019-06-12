import { data } from '../component/data';
import * as types from './../constant/ActionTypes';
const initState = {
    data: data,
    count: [],
    isReset: false,
    price: 0,
    arraySrc: []
}
function getPrice(state){
    const { count, data} = state;
    let arrayPrice = [];
    if(count.length > 0){
        for(let i=0; i< count.length; i++){
            const indexId = count[i];
            arrayPrice.push(data[indexId - 1].price)
        }
    }
    if(count.length === 0) return 0;
    if(arrayPrice.length > 0){
        let price = arrayPrice.reduce((sum, num)=>
            {
               return sum + num; 
            });
        return price;
    }
}
function addImage(state){
    const {count, data} = state;
    const arrayId = [...new Set(count)];
    let arr = [];
    for(let idItem of arrayId){
        for(let dataItem of data){
            if(dataItem.id === idItem){
                arr.push(dataItem.src)
            }
        }
    }
    return arr;
}
const dataReducer = (state = initState, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state
        case types.ON_INCREASE:
            state.count.push(action.id)
            state = {...state,
                        isReset: false,
                        price: getPrice(state),
                        arraySrc: [...addImage(state)]}
            return state
        case types.ON_DECREASE:
            const index = state.count.indexOf(action.id)
            state.count.splice(index, 1)
            state = {...state,
                        price: getPrice(state),
                        arraySrc: [...addImage(state)]}
            return state
        case types.IS_RESET:
            state = {
                data: data,
                count: [],
                isReset: true,
                price: 0,
                arraySrc: []
            }
            return state
        default:
            return state
    }
}
export default dataReducer;