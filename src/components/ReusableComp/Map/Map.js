import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './Map.css';
import { GoogleMap, LoadScript, 
    DirectionsService,
    DirectionsRenderer
} from '@react-google-maps/api';
import Button from '@material-ui/core/Button';

// CHECK OUT https://developers.google.com/maps/documentation/javascript/tutorial
// THERE IS GOOGLE CLOUD PLATFORM STUFF YOU ARE GOING TO NEED TO SET UP,
// THE CODE WILL NOT WORK WITHOUT IT!

class Map extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        response: null,
        travelMode: 'DRIVING'
      }
  
      this.directionsCallback = this.directionsCallback.bind(this)
      // this.checkDriving = this.checkDriving.bind(this)
      // this.checkBicycling = this.checkBicycling.bind(this)
      // this.checkTransit = this.checkTransit.bind(this)
      // this.checkWalking = this.checkWalking.bind(this)
      // this.getOrigin = this.getOrigin.bind(this)
      // this.getDestination = this.getDestination.bind(this)
      // this.onClick = this.onClick.bind(this)
      // this.onMapClick = this.onMapClick.bind(this)
    }

    plotLocation = () => {
        console.log(this.state);
        this.setState({
            address: this.props.address
        })
        console.log(this.state);
    }



    directionsCallback = (response) => {
        console.log(response)
    
        if (response !== null) {
          if (response.status === 'OK') {
            console.log(this.state);
            this.setState(
              () => ({
                response
              })
            )
          } else {
            console.log('response: ', response)
          }
        }
      }

    render() {

        return (

            <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyB2zaDmB_nWSpzed9h9EGeAOZSX3GXSZo0"
          >
    <div>chulai!{this.props.store.setRoute.origin}{this.props.store.setRoute.destination}</div>
            <GoogleMap
             id="circle-example"
             mapContainerStyle={{
               height: "300px",
               width: "500px"
             }}
             zoom={7}
             center={{
               lat: 39.0983261,
               lng: -94.5804415
             }}
            >
                {
              (
                this.state.destination !== '' &&
                this.state.origin !== ''
              ) && (
              <DirectionsService
          
                  // required
                  options={{
                    destination: this.props.store.setRoute.origin,
                    origin: this.props.store.setRoute.destination,
                    travelMode: this.state.travelMode
                  }}
                  // required
                  callback={this.directionsCallback}
                //   // optional
                  onLoad={directionsService => {
                    console.log('DirectionsService onLoad directionsService: ', directionsService)
                  }}
                //   // optional
                  onUnmount={directionsService => {
                    console.log('DirectionsService onUnmount directionsService: ', directionsService)
                  }}
                />  
                )
            }
            {
              this.state.response !== null && (
                <DirectionsRenderer
                  // required
                  options={{ // eslint-disable-line
                    directions: this.state.response
                  }}
                  // optional
                  onLoad={directionsRenderer => {
                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  }}
                  // optional
                  onUnmount={directionsRenderer => {
                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  }}
                />
              )
            }
          
            </GoogleMap>
            <br/>
            <Button variant="contained" color="primary" onClick={this.plotLocation}>Plot Location</Button>
          </LoadScript>
            // Important! Always set the container height explicitly
            
        );
    }
}

export default connect(mapStoreToProps)(Map);