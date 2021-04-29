import React from "react";


// Code CoordinatesButton Component Here
 export default function CoordinatesButton(props) {
     return(
        <div>
        <button onClick={(e) => props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinates</button>
        </div>
     )
}

