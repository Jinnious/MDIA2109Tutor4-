import React from 'react';
import CustomButton from '../comps/CustomButton';

export default {

    title :"Custom Button",
    component: CustomButton
};

// alert(num + " "+ greetigns);
export const MyCustomButton =()=> <CustomButton />;

export const PageWithCustomButtons = () => <div>

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