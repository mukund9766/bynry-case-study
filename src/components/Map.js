import React, { useEffect, useRef } from 'react';
import '../components/Map.css';

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!address || !mapRef.current) return;

    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 12,
      center: { lat: 0, lng: 0 }, // Default center
    });

    // Geocode the address and set the map center and marker
    const geocoder = new window.google.maps.Geocoder();
    const fullAddress = `${address.streetAddress}, ${address.city}, ${address.state}, ${address.country}`;
    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  }, [address]);

  return <div ref={mapRef} className="map"></div>;
}

export default Map;
