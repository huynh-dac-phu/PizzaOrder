import React, {Component} from 'react';

import List from './component/list';
import Image from './component/Image';
import { data } from './component/data'

import './component/style/App.css'
class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data,
      count: [],
      price: 0,
      arraySrc: [],
      isReset: false
    }
  }
  converToObject(){
    const { count } = this.state;
    return count.reduce((id, num) => {
      id[num] = (id[num] || 0) + 1;
      return id;
    },{})
  }
  onIncrease = (id) => {
    this.setState({
        count: [
          ...this.state.count,
          id
        ],
        isReset: false
      }, 
      () => {
        this.calculatePrice();
        this.addImage();
      })
  }
  onDecrease = (id) => {
    const { count } = this.state;
    const index = count.indexOf(id);  
    if(count.length > 0 && index !== -1){
      count.splice(index, 1)
      this.setState({
        count: count
      },
      () => {
        this.calculatePrice();
        this.addImage();
      })
    }
  }
  getArrayPrice(){
    const {count, data} = this.state;
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
  calculatePrice(){
    this.getArrayPrice()
    this.setState({
      price: this.getArrayPrice()
    })
  }
  addImage(){
    const { count, data } = this.state;
    const arrayId = [...new Set(count)];
    let arr = [];
    for(let idItem of arrayId){
      for(let dataItem of data){
        if(dataItem.id === idItem){
          arr.push(dataItem.src)
        }
      }
    }
    this.setState({
      arraySrc: arr
    })
  }
  resetOrder(){
    const { count } = this.state;
    if(count.length > 0) {
      this.setState({
        count: [],
        price: 0,
        arraySrc: [],
        isReset: true
      }, () => this.addImage())
    }
  }
  render(){
    const {  data, price, arraySrc, isReset } = this.state;
    return (
      <div className="App">
        <Image src={arraySrc}/>
        <List data={data}
              price={price}
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
              isReset={isReset}
              resetOrder={() => this.resetOrder()}/>
      </div>
    );
  }
}

export default App;
