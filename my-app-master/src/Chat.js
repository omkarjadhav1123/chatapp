import { Avatar, IconButton } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import './Chat.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';
import {useStateValue} from "./StateProvider";
import { useParams } from 'react-router-dom';
// import Pusher from 'pusher-js/types/src/core/pusher';
import Pusher from "pusher-js";


export default function Chat() {

   const [input,setInput]=useState("");
   const [roomName,setRoomName]=useState("");
   const [{user}]=useStateValue();
   const [updatedAt, setUpdatedAt] = useState("");
   const {roomId}=useParams();
   const[messages, setMessages] = useState([]);

   useEffect(()=>{
      if(roomId){
         axios.get(`http://localhost:8000/room/${roomId}`).then((response)=>{
            setRoomName(response.data.name);
            setUpdatedAt(response.data.updateAt);
         });
         axios.get(`http://localhost:8000/messages/${roomId}`).then((response)=>{
            setMessages(response.data);
         });
         
      }
   }, [roomId]);

   useEffect(()=>{
      const pusher = new Pusher('6eeb781fc3b777771f72', {
          cluster: 'ap2'
        });
        const  channel = pusher.subscribe('messages');
        channel.bind("inserted", function(message) {
          setMessages((prevMessages)=>[...prevMessages,message]);
        });
  },[]);


   const sendMessage = async(e)=>{
      e.preventDefault();
      if(!input){
         return;
      }
      await axios.post("http://localhost:8000/api/v1/messages/chat",{
         message:input,
         name:user.displayName,
         timestamp:new Date(),
         uid: user.uid,
         roomId:roomId,
         
      });
      setInput("");
   };

  return (
     <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://api.dicebear.com/5.x/adventurer/svg`}/>

            <div className='chat_headerInfo'>
                <h3>{roomName?roomName:"Welcome to Whatsapp"}</h3>
                <p>{updatedAt
                ? `Last updated at ${new Date(updatedAt).toString().slice(0,25)}`
                :"click on any group"
                } {new Date().toString().slice(0,25)}</p>
            </div>

            <div className='chat_headerRight'>
                <IconButton>
                   <SearchIcon/> 
                </IconButton>

                <IconButton>
                   <AttachFileIcon/> 
                </IconButton>

                <IconButton>
                   <MoreVertIcon/> 
                </IconButton>
            </div>
        </div>
        <div className='chat_body'>
         {messages.map((message,index)=>(
             <p className={`chat_message ${message.uid === user.uid && "chat_reciever"}`}key={index}>
             <span className='chat_name'>{message.name}</span>
             {message.message}
             <span className='chat_timestamp'>{new Date(message.timestamp).toString().slice(0,25)}</span>
          </p>

         ))}

{/* </div> */} 

            {/* <p className='chat_message'>
               <span className='chat_name'>Sonny</span>
               This is message
               <span className='chat_timestamp'>{new
               Date().toUTCString()}</span>
            </p> */}
            {/* <p className='chat_message chat_reciever'>
               <span className='chat_name'>Sonny</span>
               This is message
               <span className='chat_timestamp'>{new
               Date().toUTCString()}</span>
            </p> */}
      </div>

       {roomName && < div className='chat_footer'>
               <InsertEmoticonIcon/>
               <form>
                  <input value={input} onChange={e=>setInput(e.target.value)}type="text" placeholder='Type a message'/>
                  <button onClick={sendMessage} type="submit">Send a message</button>
               </form>
               <MicIcon/>
        </div>}
    </div>

  )
}

// export default function Chat(){
//    return(
//          <div>
//             <h1>Chat</h1>

//          </div>
//    );
// };