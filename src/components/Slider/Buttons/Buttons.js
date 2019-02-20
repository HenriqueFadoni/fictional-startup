import React from 'react';

const Buttons = props => (
    <div className="btn__container">
        <button
            className="btn btn-previous"
            onClick={props.previousSlide}><ion-icon name="arrow-dropleft"></ion-icon></button>
        <button
            className="btn btn-next"
            onClick={props.nextSlide}><ion-icon name="arrow-dropright"></ion-icon></button>
    </div>
);

export default Buttons;