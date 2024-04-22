
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileDetailsPage.css';
import profiles from '../utils/profiles';
import Map from '../components/Map';

const ProfileDetails = () => {
  const { id } = useParams(); // Access route parameter 'id' using useParams hook
  const [profile, setProfile] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const foundProfile = profiles.find((profile) => profile.id === parseInt(id));
    setProfile(foundProfile);
  }, [id]);

  const handleShowMap = () => {
    setShowMap(true);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  const { name, photo, description, address, email, phone } = profile;

  return (
    <div className="profile-details">
      <div className="profile-header">
        <img src={photo} alt={name} className="profile-photo" />
        <h2>{name}</h2>
      </div>
      <div className="profile-info">
        <p>{description}</p>
        <div className="profile-contact">
          <p>
            <strong>Address:</strong> {address.street}, {address.city}, {address.state}, {address.country}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <button className="btn btn-map" onClick={handleShowMap}>
            Show on Map
          </button>
        </div>
      </div>
      {showMap && <Map address={address} />}
    </div>
  );
};

export default ProfileDetails;