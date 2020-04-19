import React from 'react';
import './cb.css';


//made the UI
const CustomButton = ({text,color,onClick}) => <div 
style={{backgroundColor:color,
    boxShadow :"1px 1px 5px" + color}}
className="custom_button_box"
onClick={onClick}>
<div className="custom_button_box_inner">
    {text}
</div>
</div>

function ButtonClick() {
    alert("Clicked");
    
}
CustomButton.defaultProps ={
    text:"Default Button",
    color:"#df3",
    onClick:ButtonClick
}
export default CustomButton;




// export const num = 0;
// export const greetigns ="hi";
