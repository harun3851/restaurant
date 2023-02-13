import React from 'react';
import "../styles/Contact.css";
import PizzaLeft from '../assets/pizzaLeft.jpg';

function Contact() {
  return (
    <div  className='contact' >
        <div className='leftSide'  style={{backgroundImage:`url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
    <h1> contact us</h1>
    <form id="contact-form " method='POST'>
        <label htmlFor="name">Full Name</label>
        <input name='name' placeholder='enter full name...' type='text' />
        <label htmlfor="email">Email</label>
        <input name='email' placeholder='enter email..' type="email" />
        <label htmlFor='message'>message</label>
        <textarea rows="6" placeholder='enter message..' name="message"></textarea>
        <button type='submit'>save</button>
    </form>

        </div>
        </div>
  );
}

export default Contact;