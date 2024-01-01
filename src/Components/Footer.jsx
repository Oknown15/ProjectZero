import React, { Component } from 'react';
import './Styles/Footer.css'
import ImagesOne from './Images/vidScreen.jpg'
import ImageTwo from './Images/Numberimg.jpg'
import ImageThree from './Images/NewImage.jpg'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footertypo'>
                ipsum lorem diat fut siat don miat tired but 
                <div>
                    <p className='bolder'>Lorem ipsum dolor sit amet set consectet</p>
                </div>
                <p className='lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda illum cum illo culpa, accusamus odio po</p>

                <div className='grid-containers1'>
                    <div className='firstOne' style={{backgroundColor: "black", color: "white"}}>
                        <img className='firstImg'  src={ImagesOne}/>
                        </div>
                    <div  className='secondOne'>
                    <img className='secondImg' src={ImageTwo}/>
                    </div>
                    <div className='thirdOne' style={{backgroundColor: "red"}}>
                    <img className='thirdImg' src={ImageThree}/>

                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;