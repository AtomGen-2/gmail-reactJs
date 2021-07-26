import React from 'react'
import "./Sidebar.css";
import { IconButton, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';


function Sidebar() {
    return (
        <div className="sidebar">
            <Button 
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose" 
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected="True"/>
            <SidebarOption Icon={StarIcon} title="Starred" number={24} selected="False"/>
            <SidebarOption Icon={QueryBuilderIcon} title="Snooze" number={22} selected="False" />
            <SidebarOption Icon={LabelImportantIcon} title="Snooze" number={22} selected="False" />
            <SidebarOption Icon={NearMeIcon} title="Snooze" number={22} selected="False" />
            <SidebarOption Icon={NoteIcon} title="Snooze" number={22} selected="False" />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={22} selected="False" />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar
