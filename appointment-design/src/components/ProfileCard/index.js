import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

const ProfileCard = ({
  id,
  name,
  jobRole,
  rating,
  followers,
  following,
  posts,
  profilePicUrl,
  coverPicUrl,
}) => {
  return (
    <div className="profile-card">
      <img src={coverPicUrl} alt={`${name}'s cover`} className="cover-pic" />
      <div className='card-details'>
        <div className="profile-pic-cont">
          <img src={profilePicUrl} alt={`${name}'s profile`} className="profile-pic" />
          <div className="profile-details">
            <h2 className='name'>{name}</h2>
            <p className='job-role'>{jobRole}</p>
            <span className='rating'>{rating} Rating</span>
          </div>
        </div>
        <div className="profile-stats">
          <div className='stats'>
            <p className='follower-para'>Followers</p>
            <span className='followers'>{followers}</span>
          </div>
          <div className='stats'>
            <p className='follower-para'>Following</p>
            <span className='followers'>{following}</span>
          </div>
          <div className='stats'>
            <p className='follower-para'>Posts</p>
            <span className='followers'>{posts}</span>
          </div>
        </div>
        <Link to={`/finddoctors/${id}/bookappointment`} >
          <button type='button' className='book-button'>Book An Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
