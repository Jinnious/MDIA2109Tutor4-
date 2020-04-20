import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';


// var welcome_state = "Welcome to my App!"
 
// function setWelcome() {

//     welcome="Start with sending a message";
//     document.querySelector("#welcome").innerText = 
//         welcome;
// }
//이것이 바로 밑에있는거 // 


const ChatPage = ({}) => {
    
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg,setMsg] = useState("Please type something!");
    const [resp,setResp] = useState("Let me respond to you!!");
    const [color,setColor] = useState("#fad");
    const [text,setText] = useState("Reset");

   
   return <div>

    <div id="welcome">
<Header fontSize={32} text={welcome} />
    </div>

    <div id="chats" onClick={()=>{
        setWelcome("Start with sending a message");
        }}>
<Chat 
name={"Jinny"}
msg={msg}/>

<p/>

<Chat 
name={"Henry bot"}
img={"https://i.pinimg.com/originals/5d/58/a2/5d58a267c983b8db15ed627852fda3ea.jpg"}
backgroundColor={"#ffad"}
msg={resp}/>
    </div>

    <div id="controls">
 
 <Input onClick={(val)=>{
     setMsg(val);
     //alert(val);

    var resp = CheckResponse(val);
    setResp(resp);


    //  if(val === "hi") {
    //      setResp("I love pie");
    //  }

 }}/>
    </div>


    <div id="custom_button">
    <CustomButton 
    color={color}
    text={text}
    onClick={(val)=>{
        setColor("#5ff");
        setText("Done!");
    }}
    />


        {/* When the button is clicked, setColor to another color, and 
        setText to another text  */}
    </div>
</div>
}


function CheckResponse(inp) {

    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "bye":
            return "See you";
         case "yina":
            return "HBD!";
        case "how are you?":
            return "great!";

        default:
            return "I don't understand what you are trying to say";
    }
    
}

ChatPage.defaultProps ={


}




export default ChatPage;