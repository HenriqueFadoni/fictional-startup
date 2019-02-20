import React from 'react';

import Buttons from './Buttons/Buttons';

const Slider = props => (
    <div className="homepage__slider">
        <img src={props.slide} alt="Slide Show" />
        <Buttons
            previousSlide={props.previous}
            nextSlide={props.next} />
    </div>
);

export default Slider;