import React, { Component } from 'react';

import './style/listItem/listItem.css';
import './style/pick/pick.css';
import {connect} from 'react-redux';
import * as action from './../actions/index';
class ListItem extends Component {
    state = {
        count: 0
    }
    onIncrease = () => {
        this.props.onIncrease(this.props.id)
        const { count } = this.state;
        this.setState({
            count: count + 1
        })
    }
    onDecrease = () => {
        const {count} = this.state;
        if(count > 0){
            this.props.onDecrease(this.props.id)
            this.setState({
                count: count - 1
            })
        }
    }
    componentWillReceiveProps(prevProps){
        if(prevProps.isReset === true){
            this.setState({
                count: 0
            })
        }
    }
    render(){
        const {id, name, price} = this.props;
        const {count} = this.state;
        return(
            <div className='list-item'>
                <div className='list-item--left'>
                    <h4 className='list-item--name'>{name}</h4>
                    <p className='list-item--price'>{price}$</p>
                </div>

                <div className='pick'>
                    <button className='pick-btn pick-btn--decrease'
                            onClick={this.onDecrease}
                    >-</button>
                    <input className='pick-number'
                        ref={'number'}
                        value={count}
                        id={id}
                    ></input>
                    <button className='pick-btn pick-btn--increase'
                            onClick={this.onIncrease}
                    >+</button>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        
    }
}
const mapDispatchtoProps = (dispatch , props) => {
    // action state to props
    return {
        onIncrease: (id) => {
            dispatch(action.onIncrease(id))
        },
        onDecrease: (id) => {
            dispatch(action.onDecrease(id))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ListItem)