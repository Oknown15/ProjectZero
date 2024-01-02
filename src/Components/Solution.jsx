import React, { Component } from 'react';
import SolutionOne from './Images/Business cuate.svg';
import Farmer from './Images/farm cuate.svg';
import App from './Images/Mobile dev.svg';
import './Styles/Solution.css';
import Business from './Images/Untitled design.png';



class Solution extends Component {
    render() {
        return (
            <div>
                <div className='grid-container'> 
                    <div className='main' id='firstCard'>
                        <img
                        className='CardOneimage'
                        src={SolutionOne}
                        alt='image'
                        />
                        <p>{this.props.title}</p>
                        <p id='text2'>{this.props.value}</p>
                    </div>
                    <div className='main' id='secondCard'>
                        <img
                        src={Farmer}
                        alt='image'
                        className='CardTwoImage'
                        />
                        <p>{this.props.secondTopic}</p>
                        <p id='text3'>{this.props.secondValue}</p>
                    </div>
                    <div className='main' id='thirdCard'>
                        <img
                        className='CardThreeImage'
                        src={App}
                        alt='image'
                        />
                        <p>{this.props.thirdTopic}</p>
                        <p id='text4'>{this.props.thirdValue}</p>
                    </div>
                </div>
               <div className='design' style={{backgroundColor: "purple", height: 300, width: "400px", position: "absolute", top: 900, left: 50, transform: "skew(-200deg)", borderRadius: 20}}></div>
               <div id='business'>
                <img 
                src={Business}
                alt='Business image'
                className='CardFourImage'/>
<div className='review'>
<h4 id='txtOne'>ipsumtua Lorem ipsum dolor sit amet </h4>
               <p id='textTwo'>Lorem ipsum dolor sit amet consectetur adipisicing e </p>
               <p id='textThree'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim laboriosam officia, neque velit eius veniam deserunt officiis sint, ipsa cum accusamus omnis. Sequi quia modi velit vel numquam magni laborum.</p>
               <p id='textFour'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea debitis perspiciatis! Impedit, dolore. Totam distinctio, earum repellat deleniti officia tempore sapiente quasi, blanditiis aliquam, est inventore! Nobis</p>
               <button type='button' id='btn'>learn more</button>
</div>
               </div>
            </div>
        );
    }
}

export default Solution;