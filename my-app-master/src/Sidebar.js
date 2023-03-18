import React, { useEffect ,useState} from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar,IconButton} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';
import axios from './axios';
import Pusher from "pusher-js";

export default function Sidebar() {

    const [{user}]=useStateValue();
    const [rooms,setRooms]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/v1/messages/room").then((response)=>{
            setRooms(response.data);
        });
    },[]);
    console.log(rooms);

    useEffect(()=>{
        const pusher = new Pusher('6eeb781fc3b777771f72', {
            cluster: 'ap2'
          });
          const  channel = pusher.subscribe('room');
          channel.bind("inserted", function(room) {
            setRooms((prevRooms)=>[...prevRooms,room]);
          });
    },[]);


  return (
   
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar src={user.photoURL}/>
            <div className='sidebar_headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                    <SearchIcon/>
                    <input placeholder='search or type name' type="text"/>
            </div>
        </div>
        <div className='sidebar_chat'>
            <SidebarChat addNewChat/>
            {rooms.map((room) => (
                <SidebarChat key={room._id} id={room._id} name={room.name}/>
            ) )}
            
        </div>

    </div>
      
  )
}
