import React, { Component } from 'react';

import ListItem from './listItem';
import './style/list/list.css';
import {connect} from 'react-redux';
import * as action from './../actions/index';
class List extends Component {
    resetOrder = () =>{
        this.props.isReset()
    }
    render(){
        const { list } = this.props;
        return(
            <div className='table-list'>
                <div className='list-heading'>
                    <h3 className='list-heading--title'>Your pizza</h3>
                    <p className='list-heading--price'>{list.price}$</p>
                    <button className='btn btn--reset table-heading--btn'
                        onClick={this.resetOrder}    
                    >Reset pizza</button>
                </div>
                <div className='list'>
                    {list.data.map((item, key) => {
                        return(
                                <ListItem
                                        key={key} 
                                        name={item.name} 
                                        price={item.price}
                                        id={item.id}
                                        isReset={list.isReset}
                                        >
                                </ListItem>
                            );
                        }
                    )}
                    <div className='list-total list-item'>
                        <p>Total</p>
                        <p className='list-total--price'>{list.price}$</p>
                    </div>
                    <div className='list-item'>
                        <button className='btn btn--checkout'
                                onClick={this.resetOrder}
                               >Checkout</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    //state store to component props
    return { list: state.list }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        isReset: () => {
            dispatch(action.isReset())
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(List);