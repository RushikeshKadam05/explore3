import React, { useState } from 'react';
import './App.css';
import profilePicture from './assets/pngtree-male-profile-picture-icon-and-png-image-png-image_6118773.png'; 

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="time">9:41</div>
        <div className="icons">
          <div className="settings"></div>
          <div className="notification"></div>
        </div>
      </div>
      <div className="explore">Explore</div>
      <div className="profile-card">
        <img
          className="profile-image"
          src={profilePicture} 
          alt="Profile"
        />
        <div className="profile-details">
          <div className="name">Satyam</div>
          <div className="designation">UI/UX Designer</div>
          <div className="location">Pune</div>
        </div>
        {showProfile && (
          <div className="profile-popup">
            <div className="bio">Bio</div>
          </div>
        )}
      </div>
      <div className="bottom-buttons">
        <div className="home-button"></div>
        <div className="people-button"></div>
        <div className="compass-button" onClick={handleProfileClick}>
          <div className="compass-icon"></div>
        </div>
        <div className="plus-button"></div>
        <div className="chat-button"></div>
      </div>
      <div className="floating-buttons">
        <div className="undo-button"></div>
        <div className="reply-button"></div>
        <div className="lightning-button"></div>
        <div className="tick-button"></div>
        <div className="lightning-button"></div>
      </div>
    </div>
  );
}

export default App;
