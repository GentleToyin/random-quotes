import React from "react";
import './qoutes-generator.css';
import { Qoutes } from './qoutes';
import quotationLeft from '../img/quotation-marks-left.svg';
import quotationRight from '../img/quotation-marks-right.svg'

export const GenerateQoutes = (props) => {
    let newQoute = Qoutes[props.index]
    return (

        <div>
            <div>
                <h1 className="header">For Everyday You're Alive, Live!!</h1>
            </div>
            <div>
                <img id="left" src={quotationLeft} alt="left quotation" />
                <h1 className="main-container">{newQoute}</h1>
                <img id="right" src={quotationRight} alt="right quotation" />
            </div>

        </div>

    )
};


export default GenerateQoutes;