// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 13
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '20vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyDAldpRvv4R7esWkv9RS3TCLR_GRX0jY9A' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDAldpRvv4R7esWkv9RS3TCLR_GRX0jY9A",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    centre: {
        lat: 59.95,
        lng: 30.33,
    }
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.centre}
  >
    {props.isMarkerShown && <Marker position={props.centre} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default MyMapComponent;
