import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div>
                <input type="name" placeholder="Insert Your Name"/>
                <input type="email" placeholder="Insert Your Email"/>
                <input type="name" placeholder="Title"/>
                <textarea type="name" placeholder="Message"/>
            </div>
        );
    }
}

export default Contact;