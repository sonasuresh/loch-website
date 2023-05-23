import React from 'react';
import Slider from './Slider';
import "./Home.css";

const Home = () => {

  const handleClick = () => {
    window.location.href = 'https://app.loch.one/welcome';
  };
  return (
    <div className="landing-home">
      <div className="static-landing" />
      <div className="slider">
        <Slider />
      </div>
      <div className="signup-bg" />
      <img className="logo-icon" alt="" src="/logo.svg" />
      <div className="signup-container">
        <div className="email-wrapper">
          <input
            className="email-input"
            type="email"
            placeholder="Your email address"
          />
        </div>

        <div className="invitelink-text">
          You’ll receive an email with an invite link to join.
        </div>
        <button className="button-label" onClick={handleClick}>Get started</button>

        <div className="signup-label">
          <p className="default-label-align">{`Sign up for `}</p>
          <p className="default-label-align">exclusive access.</p>
        </div>
      </div>
      <div className="bell-container">
        <img className="bell-icon" alt="" src="/bell.svg" />
        <div className="header1-label">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="header2-label">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <div className="testimonial-label">Testimonials</div>
      <img className="line" alt="" src="/line.svg" />
      <div className="eye-container">
        <img className="eye-icon" alt="" src="/eye.svg" />
        <div className="wrapper-container ">
          <div className="header1-label">
            Watch what the whales are doing
          </div>
          <div className="header2-label">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </div>
        </div>
        <img className="ss-img" alt="" src="/ss.png" />
      </div>
      <div className="cards">
        <div className="card-container">
          <div className="container-wrapper">
            <p className="default-label-align">We’ll be sending</p>
            <p className="default-label-align">notifications to you</p>
            <p className="default-label-align">here</p>
          </div>
          <img className="bell-icon2" alt="" src="/bell1.svg" />
          <div className="hello-email-style">
            <div className="text-style">hello@gmail.com</div>
          </div>
          <div className="save-label">Save</div>
        </div>
        <div className="bar-wrapper">
          <div className="bar-container">
            <div className="checkmark">
              <img className="icon" alt="" src="/checkmarkicon.svg" />
            </div>
            <div className="caption-container">
              <div className="text-style">$1,000.00</div>
              <img
                className="drop-down-icon"
                alt=""
                src="/dropdown.svg"
              />
            </div>
            <img className="bell-icon2" alt="" src="/bar1.svg" />
          </div>
          <div className="notify-caption">
            <p className="default-label-align">Notify me when any wallets</p>
            <p className="default-label-align">move more than</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
