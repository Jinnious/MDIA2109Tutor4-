import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';



const Contact = () => {

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector("#contactpage").style.left =0;  
    },50);
},[]);

return <div id="contactpage"> 
    <Header text="Contact me!" fontSize={14}/>
    <CustomButton text="Email"/>
</div>

}

export default Contact;

