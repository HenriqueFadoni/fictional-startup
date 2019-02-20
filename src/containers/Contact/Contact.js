import React, { Component } from 'react';
import axios from 'axios';

import Form from '../../components/Form/Form';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import './Contact.scss';

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
                alert('Your Message was Sent Successfully.');
                this.setState({ submitted: true });
            })
            .catch(err => {
                alert('An Error Occurred, try again later');
                console.log(err);
            });

    }

    idGenerator = () => '_' + Math.random().toString(36).substr(2, 9);

    onChangeHandler = (event, field) => {
        this.setState({ submitted: false });

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
                <div className="map">
                    <GoogleMaps />
                </div>
                <div className="form">
                    <Form
                        change={this.onChangeHandler}
                        submit={this.onSubmitHandler} />
                </div>
            </div>
        );
    }
}

export default Contact;