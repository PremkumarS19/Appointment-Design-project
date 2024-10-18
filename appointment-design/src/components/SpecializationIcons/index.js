import React from 'react';
import { FaHeartbeat, FaShieldAlt, FaRegLaughBeam } from 'react-icons/fa';

const SpecializationIcons = ({ specializations }) => {
  const icons = {
    WomensHealth: <FaHeartbeat />,
    Immunity: <FaShieldAlt />,
    HairCare: <FaRegLaughBeam />,
    SkinCare: <FaShieldAlt />,
  };

  return (
    <div className="specialization-icons">
      {specializations.map((specialization, index) => (
        <div className="icon" key={index}>
          {icons[specialization] || <FaHeartbeat />}
          <p>{specialization}</p>
        </div>
      ))}
    </div>
  );
};

export default SpecializationIcons;
