// components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import '../components/AdminPanel.css';
import profiles from '../utils/profiles';

function AdminPanel() {
  const [profileList, setProfileList] = useState(profiles);
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
    },
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'address.street' || name === 'address.city' || name === 'address.state' || name === 'address.country') {
      setNewProfile({
        ...newProfile,
        address: {
          ...newProfile.address,
          [name.split('.')[1]]: value,
        },
      });
    } else {
      setNewProfile({
        ...newProfile,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a new ID for the new profile
    const newId = profileList.length + 1;
    const updatedProfile = { ...newProfile, id: newId };
    // Add the new profile to the list
    setProfileList([...profileList, updatedProfile]);
    // Reset the new profile form
    setNewProfile({
      name: '',
      photo: '',
      description: '',
      address: {
        street: '',
        city: '',
        state: '',
        country: '',
      },
      email: '',
      phone: '',
    });
  };

  const handleDelete = (id) => {
    // Remove the profile with the given ID from the list
    const updatedProfileList = profileList.filter((profile) => profile.id !== id);
    setProfileList(updatedProfileList);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="add-profile">
        <h3>Add Profile</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleChange} required />
          <input type="text" name="photo" placeholder="Photo URL" value={newProfile.photo} onChange={handleChange} required />
          <textarea
            name="description"
            placeholder="Description"
            value={newProfile.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="address.street"
            placeholder="Street Address"
            value={newProfile.address.street}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={newProfile.address.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address.state"
            placeholder="State"
            value={newProfile.address.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address.country"
            placeholder="Country"
            value={newProfile.address.country}
            onChange={handleChange}
            required
          />
          <input type="email" name="email" placeholder="Email" value={newProfile.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={newProfile.phone} onChange={handleChange} required />
          <button type="submit" className="btn">
            Add Profile
          </button>
        </form>
      </div>
      <div className="profile-list">
        <h3>Profiles</h3>
        <ul>
          {profileList.map((profile) => (
            <li key={profile.id} className="profile-item">
              <span>{profile.name}</span>
              <button className="btn btn-danger" onClick={() => handleDelete(profile.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;