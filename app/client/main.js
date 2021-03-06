import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// import './main.html';
import '../imports/startup/config.js';
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});