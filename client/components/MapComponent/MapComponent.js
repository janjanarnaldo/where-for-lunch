import React from 'react';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBptFUwOOzfk5ul0UMmJ-vbo8LXzoWqK7Q&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ lat, lng }) => {
  return (
    <GoogleMap
      defaultZoom={8}
      center={{ lat, lng }}
    >
      {<Marker position={{ lat, lng }} />}
    </GoogleMap>
  );
});

MapComponent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default MapComponent;
