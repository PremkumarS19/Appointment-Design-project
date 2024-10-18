import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the ID from the URL
import ProfileCard from '../ProfileCard';
import SocialMediaIcons from '../SocialMediaIcons';
import SpecializationIcons from '../SpecializationIcons';
import Reviews from '../Reviews';
import { useDoctorDetails } from '../DoctorContext';
import './index.css'

const ProfileDetails = () => {
  const { id } = useParams();
  const doctorDetails = useDoctorDetails();
  
  const doctor = doctorDetails.find(doc => doc.id === parseInt(id, 10));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const {
    name,
    profilePicUrl,
    coverPicUrl,
    jobRole,
    rating,
    followers,
    following,
    posts,
    aboutMe,
    languages,
    specializations,
    treatments,
    workExperience,
    workExperienceYears,
    reviews,
  } = doctor;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <ProfileCard
          name={name}
          jobRole={jobRole}
          rating={rating}
          followers={followers}
          following={following}
          posts={posts}
          profilePicUrl={profilePicUrl}
          coverPicUrl={coverPicUrl}
        />
      </div>

      <div className="about-section">
        <div className="about-header">
          <h1 className='special-heading'>A Little About Me</h1>
          <button className="follow-btn">Follow</button>
        </div>
        <p className='aboutme'>{aboutMe}</p>
        <hr />
        <div className="languages-icons">
          <div className='languages-section'>
            <h2 className='language-head'>Languages Spoken</h2>
            <ul className="languages-list">
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className='icons'>
            <SocialMediaIcons />
          </div>
        </div>
      </div>

      <div className="specialization-section">
        <div className='special-head'>
          <h2 className='special-heading'>I Specialize In</h2>
        </div>
        <div className='specialization-icons'>
          <SpecializationIcons specializations={specializations} />
        </div>
      </div>

      <div className="treatment-section">
        <div className='special-head'>
          <h2 className='special-heading'>The Concerns I Treat</h2>
        </div>
        <div >
          <ul className='list'>
            {treatments.map((treatment, index) => (
              <li className="treat" key={index}>{treatment}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="experience-section">
        <div className='special-head'>
          <h2 className='special-heading'>My Work Experience</h2>
        </div>
        <p className='specialization-icons'>I HAVE BEEN IN PRACTICE FOR: {workExperience}</p>
        <div className='work'>
          <ul>
            {workExperienceYears.map(({ id, hospital, years }) => (
              <li key={id}>
                {hospital} - {years} {years === 1 ? 'year' : 'years'}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="reviews-section">
        <div className='special-head'>
          <h2 className='special-heading'>Featured Reviews</h2>
        </div>
        <div className='reviews'>
          {reviews.map((eachReview, index) => (
            <Reviews key={index} reviewDetails={eachReview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
