//import { ProgressPlugin } from "webpack";
import React from 'react'
// Code DelayedButton Component Here
export default function DelayedButton(props){
    return(
        <div>
            <button onClick={(e) => {
                e.persist()
                setTimeout(() => 
                {props.onDelayedClick(e)}, props.delay)}}>x</button>
        </div>
    )
}      

