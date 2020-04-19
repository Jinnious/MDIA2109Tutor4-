import React from 'react';
import CustomButton from '../comps/CustomButton';

import Header from '../comps/Header';

export default {

    title :"Custom Button",
    component: CustomButton
};

// alert(num + " "+ greetigns);
export const MyCustomButton =()=> <CustomButton />;

export const PageWithCustomButtons = () => <div>




    <Header 
    text="Header1"
    fontSize={29}
    color = "#fad"
    onMouseOver={header1}/>


<Header 
    text="Header2"
    fontSize={12}
    color = "#ade"
    onMouseOver={header2}/>

    <CustomButton 
    text="Cancel" 
    color="#fad"
    onClick={CancelClick}/>

    <CustomButton 
    text="OK"
    color="#fa0"
    onClick={OkClick}/>

    <CustomButton 
    text="Submit"
    color="#aa0"
    onClick={SubmitClick}/>
    <CustomButton text="Reset"/>
    

  
</div>

  function CancelClick() {
        
    alert("cancel");
}

function OkClick() {
        
    alert("OK");
}
function SubmitClick() {
        
    alert("Submitted");
}

function header1() {
    alert("header1");
    
}

function header2() {
    alert("header2");
    
}