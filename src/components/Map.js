import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDAldpRvv4R7esWkv9RS3TCLR_GRX0jY9A',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    isMarkerShown: true,
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={props.centre}>
    {props.isMarkerShown && (
      <Marker position={props.centre} onClick={props.onToggleOpen}>
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            {props.markerElement}
          </InfoWindow>
        )}
      </Marker>
    )}
  </GoogleMap>
))

export default Map
