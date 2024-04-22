
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import SearchFilter from './SearchFilter';
import profiles from '../utils/profiles';

function ProfileList() {
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (searchTerm) => {
    const filtered = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${profile.address.street} ${profile.address.city} ${profile.address.state} ${profile.address.country}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <>
      <div className="profile-list">
        <SearchFilter onSearch={handleSearch} />
        <div className="profile-cards">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfileList;