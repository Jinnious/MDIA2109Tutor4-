//use the same componet to change the fontsize
//chage the text color of the header
//chage the onMouseOver


import React from 'react';
import './header.css';

const Header = ({text,fontSize, color ,onMouseOver})=> <div
style={{ fontSize: fontSize,color:color}}
onMouseOver={onMouseOver}>
    
    <h1>{text}</h1>
</div>

function MouseOver() {
    alert("mouse is over");
    
}

Header.defaultProps = {
    fontSize:30,
    color:"#dad",
    onMouseOver:MouseOver
}



export default Header;