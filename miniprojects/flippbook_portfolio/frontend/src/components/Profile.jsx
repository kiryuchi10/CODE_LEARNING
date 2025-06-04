import React from 'react';
import './Profile.css'; // 스타일은 따로 분리
import profileImage from '../assets/반명함.jpg'; // 실제 이미지 경로

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-hero">
        <img className="profile-bg" src="https://images.unsplash.com/photo-1499346030926-9a72daac6c63" alt="background" />
        <img className="profile-pic" src={profileImage} alt="Donghyeun Lee" />
      </div>

      <div className="profile-content">
        <h1>Donghyeun Lee</h1>
        <h4>FULL STACK DEVELOPER</h4>

        <div className="profile-icons">
          <a href="https://github.com/kiryuchi10" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/dong-hyeun-lee-47a3b813a" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>

        <p className="profile-description">
          Full Stack Developer with 4+ years of biotech R&D experience, specializing in React, Flask, Spring Boot, and AI integration. 
          Created web apps for manufacturing analytics and nanopore chip defect prediction using Python and ML.
        </p>

        <div className="profile-buttons">
          <div className="profile-button active">
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </div>
          <div className="profile-button">
            <i className="fas fa-certificate"></i>
            <span>Certifications</span>
          </div>
          <div className="profile-button">
            <i className="fas fa-graduation-cap"></i>
            <span>Education</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
