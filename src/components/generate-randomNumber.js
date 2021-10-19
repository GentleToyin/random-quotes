import React from "react";
import { GenerateQoutes } from './qoutes-generator'

export const RandomNumber = () => {
    let randIndex = Math.floor(Math.random() * 10)
    console.log(randIndex)
    return (<GenerateQoutes randIndex={randIndex} />)

}