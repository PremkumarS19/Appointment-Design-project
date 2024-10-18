import React from 'react';

const Reviews = ({ reviewDetails }) => {
  const {
    reviewerName = 'Anonymous',
    date,
    designation,
    reviewContent,
  } = reviewDetails;

  return (
    <div className="review">
      <div className="name-cont">
        <div>
          <h3>{reviewerName}</h3>
          <p className="consulted-for"><strong>Consulted For:</strong> {designation}</p>
        </div>
        <p className="date">{date}</p>
      </div>
      <p className="review-content">{reviewContent}</p>
    </div>
  );
};

export default Reviews;
