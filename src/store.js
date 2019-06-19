import { data } from './component/data';
import { createStore, redux } from 'redux';

const initialState = {
    data: data,
    count: [],
    price: 0,
    arraySrc: [],
    isReset: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_INCREASE':
            return onIncrease();
        case 'ON_DECREASE':
            return onDecrease();
        case 'ARRAY_PRICE':
            return getArrayPrice();
        case 'CALCULATE_PRICE':
            return calculatePrice();
        case 'ADD_IMAGE':
            return addImage();
        case 'RESET_ORDER':
            return resetOrder();
        default:
            return state;
    }
}
function onIncrease(state, action){
    return {
        count: [
            ...state.count,
            action.id
        ],
        isReset: false
    }    
}
function onDecrease(state, action){
    const {count} = store.getState();
    const index = count.indexOf(action.id);
    if(count.length > 0 && index !== -1){
        count.splice(index, 1);
        return {
            count: count
        }
    }
}
function addImage(state, action){
    const {count, data} = store.getState();
    const arrayId = [...new Set(count)];
    let arr = [];
    for(let idItem of arrayId){
        for(let dataItem of data){
          if(dataItem.id === idItem){
            arr.push(dataItem.src)
          }
        }
    }
    return {
        arraySrc: arr
    }
}
function resetOrder(state, action){
    const { count } = store.getState();
    if(count.length > 0){
        return {
            count: [],
            price: 0,
            arraySrc: [],
            isReset: true
        }
    }
}
function calculatePrice(state){
    return {
        price: this.getArrayPrice()
    }
}
function getArrayPrice(){
    const {count, data} = store.getState();
    let arrayPrice = [];
    if(count.length > 0){
        for(let i =0; i < count.length; i++){
          const indexID = count[i];
          arrayPrice.push(data[indexID - 1].price);
        }
      }
      if(count.length === 0) return 0;
      if(arrayPrice.length > 0){
        var price = arrayPrice.reduce((sum, num) => {
          return sum + num;
        }, 0)
      }
      return price;
}
const store = createStore(reducer);

export default store;