import React, { Component } from 'react';
import './Styles/Reviews.css';
import Footer from './Footer';

class Reviews extends Component {
    render() {
        return (
            <div>
                <div className='head' >
                    <p id='headparagraph'>lorem ipsum dolor lit</p>
                    <p id='headparagraph1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque ad at suscipit Lorem ipsum dolor, sit amet con</p>
                    <div className='grid-containers'>
                        <div className="cardOne">
                            <p className='firstText'>intro</p>
                            <p className='Price'>19€/month</p>
                            <p className='aboutPrice'>Lorem ipsum dolor sit, amet consecteturusto, quaerat eos ali</p>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem  </li>
                            <li>Lorem ipsum dolor sit amet  </li>
                            <button type='button' id='btnPlan'>choose plan</button>
                        </div>
                        <div className="cardTwo">
                            <p className='firstText text' >popular</p>
                            <p className='Price text'>19€/month</p>
                            <p className='aboutPrice text'>Lorem ipsum dolor sit, amet consecteturusto, quaerat eos ali</p>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem  </li>
                            <li>Lorem ipsum dolor sit amet  </li>
                            <button type='button' id='btnPlanOne'>choose plan</button>
                        </div>
                        
                        <div className="cardThree">
                            <p className='firstText'>enterprice</p>
                            <p className='Price'>19€/month</p>
                            <p className='aboutPrice'>Lorem ipsum dolor  quaerat eos ali</p>
                            <li>Lorem ipsum dolor sit amet consectetur a. </li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem  </li>
                            <li>Lorem ipsum dolor sit amet  </li>
                            <button type='button' id='btnPlanThree'>choose plan</button>
                        </div>
                    </div>
            <Footer/>

                </div>
            </div>
        );
    }
}

export default Reviews;