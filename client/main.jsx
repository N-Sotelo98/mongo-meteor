import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

 
 import WeekForecast from "../imports/ui/WeekForecast";

 
Meteor.startup(() => {
  render(<WeekForecast/>, document.getElementById("render-target"));
});