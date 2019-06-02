import React, { Component } from 'react';

import ListItem from './listItem';
import './style/list/list.css';
export default class List extends Component {
    resetOrder = () =>{
        this.props.resetOrder()
    }
    render(){
        const { data, price, resetOrder, onIncrease, onDecrease, countDefault } = this.props;
        return(
            <div className='table-list'>
                <div className='list-heading'>
                    <h3 className='list-heading--title'>Your pizza</h3>
                    <p className='list-heading--price'>{price}$</p>
                    <button className='btn btn--reset table-heading--btn'
                            onClick={resetOrder}
                    >Reset pizza</button>
                </div>
                <div className='list'>
                    {data.map((item, key) => {
                        return(
                                <ListItem
                                        key={key} 
                                        name={item.name} 
                                        price={item.price}
                                        countDefault={countDefault}
                                        id={item.id}
                                        select={item.isSelected}
                                        onIncrease={onIncrease}
                                        onDecrease={onDecrease}>
                                </ListItem>
                            );
                        }
                    )}
                    <div className='list-total list-item'>
                        <p>Total</p>
                        <p className='list-total--price'>{price}$</p>
                    </div>
                    <div className='list-item'>
                        <button className='btn btn--checkout'
                                onClick={resetOrder}>Checkout</button>
                    </div>
                </div>
            </div>
        );
    }
}