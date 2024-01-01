import React, { Component } from 'react';
import  './Styles/Context.css';
import Business from './Images/sideimage.svg';

class Context extends Component {
    render() {
        return (
            <div>
                <h4>ipsum dom inmu fiat xx don tia</h4>
                <span>
                <h3 id='txt'>a digital product</h3>
                <h3 className='secondOne'>digital agency</h3>
                </span>
                <img
                src={Business}
                alt=''
                className='BusinessImage'
                />
                <p id='text'>{this.props.name}</p>
            </div>
        );
    }
}

export default Context;