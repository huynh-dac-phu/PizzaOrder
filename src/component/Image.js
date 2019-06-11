import React, { Component } from 'react';

import './style/image/image.css'
export default class Image extends Component {
    render(){
        return(
            <div className='image-grid'>
                {this.props.src.map((itemSrc, key) => {
                    return (<div className='image-grid__item' key={key}>
                        <img className='image-grid__item--img' 
                             src={itemSrc}
                             alt=''/>
                    </div>);
                })}
            </div>
        );
    }
}