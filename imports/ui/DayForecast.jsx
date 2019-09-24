import React, { Component } from 'react';
 
export default class DayForecast extends Component {
  render() {
    return (
      <div className="col-sm  ml-3" >
        <div className="card-header"> Day: {this.props.report.dayName} <i class="icon ion-md-calendar"></i></div>
        <img src="https://images.pexels.com/photos/2941017/pexels-photo-2941017.jpeg?cs=srgb&dl=aerial-photography-aerial-shot-aerial-view-2941017.jpg&fm=jpg" className="card-img-top" alt="..."></img>
        <div className="card-body text-white bg-dark">
        <p>Min temperature:{this.props.report.minTemp}ºC</p>
        <p>Max temperature:{this.props.report.maxTemp}ºC</p>
        <p> Status: {this.props.report.status} <i className="icon ion-md-partly-sunny"></i></p>
        </div>
      </div>
    );
  }
}