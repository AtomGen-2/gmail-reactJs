import React from 'react'
import "./Header.css";
// material UI
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { logout } from './features/userSlice';
import { auth } from "./firebase";


function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        });
    }
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon color="#585858"/>
                </IconButton>
                <img alt="" src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"></img>
            </div>
            <div className="header_middle">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder="Search Mail"></input>
                <KeyboardArrowDownIcon />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header
