
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';
import { useEffect } from 'react';


const Contact = () => {

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left =0;  
    },50);
},[]);

return <div id="contactpage"> 
    <Header text="Contact me!" fontSize={14}/>
    <CustomButton text="Email"/>
</div>

}

export default Contact;

