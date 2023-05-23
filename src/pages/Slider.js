import React, { useState } from 'react';
import './Slider.css'

const Slider = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 3; 
        e.currentTarget.scrollLeft = scrollLeft - walk;
        console.log(walk);
    };
    const [testimonialsData, setTestimonialsData] = useState([
        {
            name: 'Jack F',
            position: 'Ex Blackrock PM',
            testimonial:
                '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”',
        },
        {
            name: 'Yash P',
            position: 'Research, 3poch Crypto Hedge Fund',
            testimonial:
                '“I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!”',
        },
        {
            name: 'Yashik',
            position: 'Research, 3poch Crypto Hedge Fund',
            testimonial:
                '“I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!”',
        }, {
            name: 'Alan',
            position: 'Research, 3poch Crypto Hedge Fund',
            testimonial:
                '“I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!”',
        }, {
            name: 'Daniel',
            position: 'Research, 3poch Crypto Hedge Fund',
            testimonial:
                '“I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!”',
        }, {
            name: 'Lucy',
            position: 'Research, 3poch Crypto Hedge Fund',
            testimonial:
                '“I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!”',
        },

    ]);

    return (
        <div className="grid-container">
            <main className="grid-item main">
                <div
                    className={`items ${isDown ? 'active' : ''}`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <div className="item">
                            <div className="name-position">
                                <div className="namestyle">{testimonial.name}</div>
                                <div className="position testimonial">{testimonial.position}</div>
                            </div>
                            <br />
                            <div className="testimonial">
                                {testimonial.testimonial}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
};



export default Slider;
