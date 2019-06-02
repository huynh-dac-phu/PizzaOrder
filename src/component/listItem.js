import React, { Component } from 'react';

//import Pick from './pick';
import './style/listItem/listItem.css';
import './style/pick/pick.css';
export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: this.props.countDefault
        }
    }
    onIncrease = () => {
       this.props.onIncrease(this.props.id)
       const {count} = this.state;
       this.setState({
           count: count + 1
       })
    }
    onDecrease = () => {
        this.props.onDecrease(this.props.id)
        const {count} = this.state;
        if(count > 0){
            this.setState({
                count: count - 1
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
                        onChange={() => this.onChanged()}
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