import React, { Component } from 'react';

import Slider from '../../components/Slider/Slider';

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

class HomePage extends Component {
    state = {
        image: [
            image3,
            image2,
            image1
        ],
        number: 0
    }

    nextImage = () => {
        let next = this.state.number;
        if (next < 2) {
            next += 1;
            this.setState({ number: next });
        } else {
            next = 0;
            this.setState({ number: next });
        }
    }

    previousImage = () => {
        let previous = this.state.number;
        if (previous > 0) {
            previous -= 1;
            this.setState({ number: previous });
        } else {
            previous = 2;
            this.setState({ number: previous });
        }
    }

    render() {
        const slideImage = this.state.image[this.state.number];

        return (
            <div className="homepage__container">
                <h1>Tired of Living in Eath? <span>MarsTurism</span> is an option!</h1>
                <Slider
                    slide={slideImage}
                    previous={this.previousImage}
                    next={this.nextImage} />
            </div>
        );
    }
}

export default HomePage;