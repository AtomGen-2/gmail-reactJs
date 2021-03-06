import React from 'react';
import "./EmailRow.css";
import {IconButton, Checkbox} from "@material-ui/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ title, subject, description, time, id }) {
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time,
        })
        );
        history.push("/mail");
    }
    const history = useHistory();

    return (
        <div className="emailRow" onClick = {openMail}>
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
