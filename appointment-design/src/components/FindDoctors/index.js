import React, { useState, useEffect } from 'react';
import UserProfile from '../UserProfile'; 
import { useDoctorDetails } from '../DoctorContext'; // Import the context hook
import './index.css';

const FindDoctors = () => {
  const doctorDetails = useDoctorDetails(); // Access doctor details from context
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedFeeRange, setSelectedFeeRange] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State to track search input
  const [filteredDoctors, setFilteredDoctors] = useState(doctorDetails); // State for filtered doctors

  // Effect to handle filtering whenever a filter or search changes
  useEffect(() => {
    const filterDoctors = () => {
      const filtered = doctorDetails.filter((doctor) => {
        const matchesExpertise = selectedExpertise
          ? doctor.specializations.includes(selectedExpertise)
          : true;
        const matchesGender = selectedGender
          ? doctor.gender === selectedGender
          : true;
        const matchesFeeRange = selectedFeeRange
          ? doctor.fees <= parseInt(selectedFeeRange, 10)
          : true;
        const matchesLanguage = selectedLanguage
          ? doctor.languages.includes(selectedLanguage)
          : true;
        const matchesSearchQuery = searchQuery
          ? doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specializations.some((spec) =>
              spec.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            doctor.jobRole.toLowerCase().includes(searchQuery.toLowerCase())
          : true;

        return (
          matchesExpertise &&
          matchesGender &&
          matchesFeeRange &&
          matchesLanguage &&
          matchesSearchQuery
        );
      });

      setFilteredDoctors(filtered);
    };

    filterDoctors();
  }, [
    selectedExpertise,
    selectedGender,
    selectedFeeRange,
    selectedLanguage,
    searchQuery,
    doctorDetails,
  ]); // Dependencies array: runs whenever one of these changes

  return (
    <>
      <div className="heading-cont">
        <h2>Find Expert Doctors For An In-Clinic Session Here</h2>
        <div className="filter-controls">
          <select className="location-filter">
            <option value="">Select Location</option>
            {/* Add location options if available */}
          </select>
          <input
            className="doctor-search"
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
          <button className="search-btn" onClick={() => setSearchQuery(searchQuery)}>
            Search
          </button>
        </div>
      </div>
      
      <div className="doctors-section">
        {/* Filter Section */}
        <div className="filter-container">
          {/* Filters row */}
          <div className="filters-row">
            <div className="dropdown-filter">
              <label>Expertise</label>
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
              >
                <option value="">All</option>
                <option value="WomensHealth">Women's Health</option>
                <option value="SkinCare">Skin Care</option>
                <option value="Immunity">Immunity</option>
                <option value="HairCare">Hair Care</option>
              </select>
            </div>

            <div className="dropdown-filter">
              <label>Gender</label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="dropdown-filter">
              <label>Fee Range</label>
              <select
                value={selectedFeeRange}
                onChange={(e) => setSelectedFeeRange(e.target.value)}
              >
                <option value="">All</option>
                <option value="500">₹0 - ₹500</option>
                <option value="1000">₹501 - ₹1000</option>
                <option value="1500">₹1001 - ₹1500</option>
              </select>
            </div>

            <div className="dropdown-filter">
              <label>Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="">All</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
                <option value="Telugu">Telugu</option>
              </select>
            </div>  
          </div>
          
          <div className="active-filters">
              {selectedExpertise && (
                <span className="filter-tag">
                  {selectedExpertise}{' '}
                  <button onClick={() => setSelectedExpertise('')}>X</button>
                </span>
              )}
              {selectedGender && (
                <span className="filter-tag">
                  {selectedGender}{' '}
                  <button onClick={() => setSelectedGender('')}>X</button>
                </span>
              )}
              {selectedFeeRange && (
                <span className="filter-tag">
                  ₹{selectedFeeRange}{' '}
                  <button onClick={() => setSelectedFeeRange('')}>X</button>
                </span>
              )}
              {selectedLanguage && (
                <span className="filter-tag">
                  {selectedLanguage}{' '}
                  <button onClick={() => setSelectedLanguage('')}>X</button>
                </span>
              )}
            </div>
        </div>

        {/* Doctors list */}
        <div className="doctors-list">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <UserProfile key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p>No doctors match the selected filters.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FindDoctors;
