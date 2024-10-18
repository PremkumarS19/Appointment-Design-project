import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './index.css';

const UserProfile = ({ doctor }) => {
  const {
    id,
    name,
    profilePicUrl,
    jobRole,
    rating,
    languages,
    workExperience,
  } = doctor;

  return (
    <div className="doctor-card">
      <img src={profilePicUrl} alt={`${name}'s profile`} className="profile-pic" />
      
      <h3>Dr. {name}</h3>
      <p className="doctor-role">{jobRole}</p>
      <p className="doctor-rating">Rating: {rating}</p>

      <div className="doctor-specializations">
        <p>{workExperience} years of Experience</p>
      </div>

      <div className="doctor-languages">
        <p>Languages: {languages.join(', ')}</p>
      </div>

      <div className="actions">
        <Link to={`/finddoctors/${id}`}>
          <button className="view-profile-button">View Profile</button>
        </Link>
        <Link to={`/finddoctors/${id}/bookappointment`}>
          <button className="book-appointment-button">Book An Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
