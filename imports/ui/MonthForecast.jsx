import React, { Component } from "react";

import DayForecast from "./DayForecast.jsx";
import { withTracker } from 'meteor/react-meteor-data';
import {Forecast} from '../api/forecast'
 class MonthForecast extends Component {

 

  renderDays(){
    return this.props.forecast.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-sm">
            31 Day Forecast        
          </div>
        </div>
        <div className="row">
          {this.renderDays()}
        </div>
      </div>
    );
  }
}
export default  withTracker(()=>{return {forecast:Forecast.find({}).fetch()} })(MonthForecast);