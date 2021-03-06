import React from 'react';
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from './firebase';
import firebase from "firebase";

function SendMail() {
    const dispatch = useDispatch();
    const { register,handleSubmit, watch, errors} = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
                to:formData.to, 
                subject: formData.subject, 
                message: formData.message, 
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        );
        dispatch(closeSendMessage())
    };
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder = "To" type="email" {...register("to", { required: true })} />
                {errors?.to && <p className="sendMail__error">To is required!</p>}
                <input placeholder = "Subject" type="text" {...register('subject', { required: true })}/>
                {errors?.subject && <p>Subject is required!</p>}
                <input placeholder = "Message" type="text" className="sendMail__message" {...register('message', { required: true })}/>
                {errors?.message && <p>Message is required!</p>}
                <div className="sendMail__options">
                    <Button type = "submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
