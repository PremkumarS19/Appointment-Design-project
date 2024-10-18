import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDoctorDetails } from '../DoctorContext';
import './index.css';

const BookAppointment = () => {
  const { id } = useParams(); // Get the doctor ID from the URL
  const doctorDetails = useDoctorDetails();
  const doctor = doctorDetails.find((doc) => doc.id === parseInt(id, 10)); // Ensure the ID is parsed as a number

  // Handle case where doctor is not found
  const [selectedSession, setSelectedSession] = useState('Video');
  const [selectedDate, setSelectedDate] = useState('Mon, 10 Oct');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  if (!doctor) {
    return <div>Doctor not found.</div>;
  }

  

  const handleSessionChange = (session) => setSelectedSession(session);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleTimeChange = (time) => setSelectedTime(time);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointmentBooked(true);
  };

  return (
    <div className="appointment-form-container">
      {appointmentBooked ? (
        <div className="appointment-success">
          <h2>Appointment Booked Successfully!</h2>
          <p>Your appointment has been scheduled for {selectedDate} at {selectedTime} via {selectedSession} with Dr. {doctor.name}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
          <h2 className="fee">Appointment Fee: ₹699.00</h2> {/* Use dynamic fee if needed */}

          {/* Mode of Session */}
          <div className="session-options">
            <h3>Select your mode of session</h3>
            <div className="session-types">
              <div
                className={`session-type ${selectedSession === 'In-Clinic' ? 'selected' : ''}`}
                onClick={() => handleSessionChange('In-Clinic')}
              >
                In-Clinic <br /> 45 Mins
              </div>
              <div
                className={`session-type ${selectedSession === 'Video' ? 'selected' : ''}`}
                onClick={() => handleSessionChange('Video')}
              >
                Video <br /> 45 Mins
              </div>
              <div
                className={`session-type ${selectedSession === 'Chat' ? 'selected' : ''}`}
                onClick={() => handleSessionChange('Chat')}
              >
                Chat <br /> 10 Mins
              </div>
            </div>
          </div>

          {/* Pick a Time Slot */}
          <div className="time-slot-section">
            <h3>Pick a time slot</h3>
            <div className="date-options">
              <div
                className={`date-option ${selectedDate === 'Mon, 10 Oct' ? 'selected' : ''}`}
                onClick={() => handleDateChange('Mon, 10 Oct')}
              >
                Mon, 10 Oct <br /> 10 slots
              </div>
              <div
                className={`date-option ${selectedDate === 'Tue, 11 Oct' ? 'selected' : ''}`}
                onClick={() => handleDateChange('Tue, 11 Oct')}
              >
                Tue, 11 Oct <br /> 02 slots
              </div>
              <div
                className={`date-option ${selectedDate === 'Wed, 12 Oct' ? 'selected' : ''}`}
                onClick={() => handleDateChange('Wed, 12 Oct')}
              >
                Wed, 12 Oct <br /> 05 slots
              </div>
            </div>

            {/* Time Slots */}
            <div className="time-slots">
              <div
                className={`time-slot ${selectedTime === '09:00 AM' ? 'selected' : ''}`}
                onClick={() => handleTimeChange('09:00 AM')}
              >
                09:00 AM
              </div>
              <div
                className={`time-slot ${selectedTime === '09:30 AM' ? 'selected' : ''}`}
                onClick={() => handleTimeChange('09:30 AM')}
              >
                09:30 AM
              </div>
              <div
                className={`time-slot ${selectedTime === '11:00 AM' ? 'selected' : ''}`}
                onClick={() => handleTimeChange('11:00 AM')}
              >
                11:00 AM
              </div>
              <div
                className={`time-slot ${selectedTime === '04:00 PM' ? 'selected' : ''}`}
                onClick={() => handleTimeChange('04:00 PM')}
              >
                04:00 PM
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">Make An Appointment with Dr. {doctor.name}</button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
