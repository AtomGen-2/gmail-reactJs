import React from 'react';
import "./EmailRow.css";
import {IconButton, Checkbox} from "@material-ui/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { useHistory } from "react-router-dom";

function EmailRow({ title, subject, description, time, id }) {
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/mail`; 
        history.push(path);
    }

    return (
        <div className="emailRow" onClick = {routeChange}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon/>
                </IconButton>

            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        -{description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
