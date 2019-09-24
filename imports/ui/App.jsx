import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task.jsx';
import ReactDOM from 'react-dom';
import {Tasks} from '../api/tasks'
class App extends Component {

 
    renderTasks(){
    return this.props.tareas.map((task,i)=>(
<Task key={i} task={task}></Task>

    ));
    }
    render() {
        return (
            <div >
                <h1>React-Meteor</h1>
             
          
                {this.renderTasks()}
            </div>
        );
    }
}

export default  withTracker(()=>{return {tareas:Tasks.find({}).fetch()} })(App);