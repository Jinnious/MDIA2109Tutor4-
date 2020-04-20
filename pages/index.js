import Link from 'next/link';
import Router from 'next/router';
import {FaUserSecret} from 'react-icons/fa';
import {TiUserAddOutline} from 'react-icons/ti';



function ClickIndex() {

    // if(confirm("Are you sure")){
    //     //move to chatpage
    //     Router.push("/ChatPage");
    // }
    document.querySelector("#mainapp").style.right= "-100%";
    setTimeout(function () {

        Router.push("/ChatPage");
    },1000)
    
}

const Index =() => <div id="mainapp">
    
    <div onClick={ClickIndex}>Jinny's Tutor5</div>
   <FaUserSecret color="#afb"/>
   <TiUserAddOutline/>


    <Link href="/ChatPage">
        <button>Chats!</button></Link>

        <Link href="/Contact">
            <button>Contact Me!
            <FaUserSecret color="#add"/></button></Link>

        <Link href="/Tutorial">
            <button>Tutorial!</button></Link>

         <Link href="/About">
         <button>About!</button></Link>


</div>


export default Index;