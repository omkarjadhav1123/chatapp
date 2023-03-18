import { Avatar } from '@mui/material'
// import  Avatar  from 'react-avatar'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css';
import axios from "axios";
import {Link} from "react-router-dom";

export default function SidebarChat({addNewChat,name,id}) {
  // const [seed,setSeed]=useState("");
  // useEffect(()=>{
  //   setSeed(Math.floor(Math.random()*5000));
  // },[]);
  const createChat= async () => {
    const roomName = prompt("Please enter name for the group");
    if(roomName){
      try{
        await axios.post("http://localhost:8000/api/v1/messages/new",
         {groupName:roomName,
        });
      }catch (error){
          console.log(error);
      }
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={`https://api.dicebear.com/4.x/adventurer/svg`}/>
        <div className='sidebarChat_Info'>
              <h2>{name}</h2>
              {/* <p>THis is last name</p> */}
        </div>
      </div>
    </Link>
  ):(
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};
