import React from 'react';

const Buttons = props => (
    <div className="btn__container">
        <ion-icon
            className="btn btn-previous"
            name="arrow-dropleft"
            onClick={props.previousSlide}></ion-icon>
        <ion-icon
            className="btn btn-next"
            name="arrow-dropright"
            onClick={props.nextSlide}></ion-icon>
    </div>
);

export default Buttons;