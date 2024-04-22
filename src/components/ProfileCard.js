
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ProfileCard.css';

function ProfileCard({ profile }) {
  const { id, name, photo, description, address } = profile;

  // Format the address
  const formattedAddress = `${address.street}, ${address.city}, ${address.state}, ${address.country}`;

  return (
    <div className="profile-card">
      <img src={photo} alt={name} className="profile-photo" />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{description}</p>
        {/* Display formatted address */}
        <p>Address: {formattedAddress}</p>
        <div className="profile-actions">
          <Link to={`/profile/${id}`} className="btn">
            Summary
          </Link>
          <button className="btn btn-summary">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
