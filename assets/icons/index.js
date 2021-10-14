import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Image } from 'react-native';
import { SOCIAL_WHITE } from '../colors';
import FeedSVG from './Feed.svg';

const ICON_SIZE = 24;

const CHAT = ({color, size, style}) =>         <AntDesign name = 'message1' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE } style = {style}/>;
const LIKE = ({color, size, style}) =>        <AntDesign name = 'like2' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE } style = {style}/>;
const BACK = ({color, size, style}) =>        <AntDesign name="arrowleft" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const MAIL = ({color, size, style}) =>        <SimpleLineIcons name = 'envelope' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const BOOKMARKS = ({color, size, style}) =>   <Ionicons name = 'bookmark-outline' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const UPLOAD = ({color, size, style}) =>      <AntDesign name="upload" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const SEARCH = ({color, size, style}) =>     <Ionicons name="search" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const NOTIFICATIONS = ({color, size, style}) => <Ionicons name="notifications-outline" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const USER = ({color, size, style}) =>       <Ionicons name="person-circle-outline" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const ADD =  ({color, size, style}) =>       <Ionicons name="add" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const PEOPLE =  ({color, size, style}) =>    <Ionicons name="people-outline" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const DOTS_VERTICAL = ({color, size, style}) => <Ionicons name="ellipsis-vertical" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const SEND =  ({color, size, style}) =>       <Feather name = 'send' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const EMOJI =  ({color, size, style}) =>         <MaterialCommunityIcons name = 'sticker-emoji' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const CHEVRONDOWN =  ({color, size, style}) =>   <Ionicons name="chevron-down" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const CLOSE = ({color, size, style}) =>          <AntDesign name="close" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const SETTINGS =  ({color, size, style}) =>      <Ionicons name="settings-outline" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const IMAGE =  ({color, size, style}) =>         <Ionicons name="image-outline" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const ATTACHMENT =  ({color, size, style}) =>    <Ionicons name="attach" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const CAMERA =  ({color, size, style}) =>        <Ionicons name="camera" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const MICROPHONE =  ({color, size, style}) =>      <Ionicons name="mic-outline" size={size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const GIF =  ({color, size, style}) =>           <MaterialCommunityIcons name = 'gif' size = {size || ICON_SIZE} color = { color || SOCIAL_WHITE }  style = {style}/>;
const MENU = ({color, size, style}) =>         <AntDesign name = 'home' size = {size || ICON_SIZE} color = {color || SOCIAL_WHITE}  style = {style}/>
const FEED =  ({color, size, style}) =>          <Image source = { FeedSVG } width = {size || ICON_SIZE} height = {size || ICON_SIZE} style = {style} />

const MYICONS = 
{
    CHAT,
    LIKE,
    BACK,
    MAIL,
    BOOKMARKS,
    UPLOAD,
    SEARCH,
    NOTIFICATIONS,
    USER,
    ADD,
    PEOPLE,
    DOTS_VERTICAL,
    SEND,
    EMOJI,
    CHEVRONDOWN,
    CLOSE,
    SETTINGS,
    IMAGE,
    ATTACHMENT,
    CAMERA,
    MICROPHONE,
    GIF,
    FEED,
    MENU
}

export default MYICONS;