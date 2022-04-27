import React, {useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer, ChannelContainer, Auth } from './components';

//take stream-chats index css for their pre-built components
import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = 'svd3c2pymk3m';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

//if there is an authentication token fetch from api
if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber')
  }, authToken)
}

const App = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //if there is no authentication token go to Auth.jsx
  if(!authToken) return <Auth/>

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer 
          isCreating={isCreating} setIsCreating={setIsCreating}
          setCreateType={setCreateType} setIsEditing={setIsEditing} 
        />
        <ChannelContainer 
          isCreating={isCreating} setIsCreating={setIsCreating}
          isEditing={isEditing} setIsEditing={setIsEditing} 
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App