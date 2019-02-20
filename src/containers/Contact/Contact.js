import React, { Component } from 'react';

import './Contact.scss';
import axios from 'axios';

class Contact extends Component {
    state = {
        message: {
            name: '',
            email: '',
            title: '',
            textarea: ''
        },
        submitted: false
    }

    onSubmitHandler = event => {
        event.currentTarget.reset();
        event.preventDefault();
        
        const data = {
            id: this.idGenerator(),
            name: this.state.message.name,
            email: this.state.message.email,
            title: this.state.message.title,
            textarea: this.state.message.textarea
        }
        axios.post('https://interview-c6ad4.firebaseio.com/contacts.json', data)
            .then(response => {
                this.setState({submitted: true});
            })
            .catch(err => {
                console.log(err);
            });

    }

    idGenerator = () => '_' + Math.random().toString(36).substr(2, 9)

    onChangeHandler = (event, field) => {
        this.setState({submitted: false});
        
        let newStateMessage = {
            ...this.state.message
        };
        let newStateMessageElement = {
            ...this.state.message[field]
        };

        const newStateElement = event.target.value;
        newStateMessageElement = newStateElement;
        newStateMessage[field] = newStateMessageElement;

        this.setState({ message: newStateMessage });
    }

    render() {
        return (
            <div className="contact__container">
                <div className="form">
                    <form onSubmit={this.onSubmitHandler}>
                        <h1>Contact Us Now!</h1>
                        <input
                            type="name"
                            placeholder="Insert Your Name"
                            onChange={event => this.onChangeHandler(event, 'name')}
                            required />
                        <input
                            type="email"
                            placeholder="Insert Your Email"
                            onChange={event => this.onChangeHandler(event, 'email')}
                            required />
                        <input
                            type="name"
                            placeholder="Title"
                            onChange={event => this.onChangeHandler(event, 'title')}
                            required />
                        <textarea
                            type="name"
                            placeholder="Message"
                            onChange={event => this.onChangeHandler(event, 'textarea')}
                            required />
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;