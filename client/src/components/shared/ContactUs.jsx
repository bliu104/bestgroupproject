import React from 'react';
import emailjs from 'emailjs-com';
import './../../ContactUs.css'

    export default function ContactUs() {

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_pT0BxZ9f', e.target, 'user_7LuaEMf9xC2IbOOC8DkLv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
    <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label><br/>
        <input type="text" name="user_name" /><br/>
        <label>Email</label><br/>
        <input type="email" name="user_email" /><br/>
        <label>Message</label><br/>
        <textarea name="message" /><br/>
        <input type="submit" value="Send" /><br/>
    </form>
    );
    }