import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = require('./user.png');



const Chat = ({}) => <div>

<img scr={defaultImg} />
<Header text="Username"/>

</div>

Chat.defaultProps = {

}
export default Chat;
