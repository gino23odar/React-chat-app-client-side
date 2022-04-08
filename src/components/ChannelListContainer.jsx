import React from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelSearch, TeamChannelList, TeamchannelPreview} from './';
import ChatIcon from '../assets/chaticon.png';
import LogoutIcon from '../assets/logouticon.jpg';

const SideBar = ()=>(
  <div className='channel-list__sidebar'>
    <div className ='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src = {ChatIcon} alt='Icon' width='30'/>
      </div>
    </div>
    <div className ='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src = {LogoutIcon} alt='Logout' width='30'/>
      </div>
    </div>
  </div>
);

//List for the app channels
const CompanyHeader = ()=>(
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Channel List</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar/>
      <div className='channel-list__list__wrapper'>
        <CompanyHeader/>
        <ChannelSearch/>
      </div>
    </>
  );
}

export default ChannelListContainer;