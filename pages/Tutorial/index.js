import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './tutorial.css';


const Tutorial = () => {

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector("#tutorialpage").style.left =0;  
    },50);
},[]);

return <div id="tutorialpage"> 
    <Header text="Tutorial" fontSize={14}/>
    <CustomButton text="Email"/>
</div>

}

export default Tutorial;

