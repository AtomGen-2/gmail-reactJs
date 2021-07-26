import React from 'react'
import "./SidebarOption.css";
import {IconButton} from "@material-ui/core"

function SidebarOption({ Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected==="True" && "sidebarOption--active"}`}>
            <IconButton>
                <Icon />
            </IconButton>
            <h4>{title}</h4>
            <h5>{number}</h5>
        </div>
    )
}

export default SidebarOption
