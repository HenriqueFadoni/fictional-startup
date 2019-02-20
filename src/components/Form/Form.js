import React from 'react';

const Form = props => (
    <form onSubmit={props.submit}>
        <h1>Contact Us Now!</h1>
        <input
            type="name"
            placeholder="Insert Your Name"
            onChange={event => props.change(event, 'name')}
            required />
        <input
            type="email"
            placeholder="Insert Your Email"
            onChange={event => props.change(event, 'email')}
            required />
        <input
            type="name"
            placeholder="Title"
            onChange={event => props.change(event, 'title')}
            required />
        <textarea
            type="name"
            placeholder="Message"
            onChange={event => props.change(event, 'textarea')}
            required />
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
);

export default Form;