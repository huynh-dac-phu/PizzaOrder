import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style/image/image.css'
class Image extends Component {
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
const mapStatetoProps = (state) => {
    return {
        src: state.list.arraySrc
    }
}
export default connect(mapStatetoProps)(Image)