import firebase from 'firebase/app';
require('firebase/messaging');
require('firebase/database');
require('firebase/analytics');

const json = require('./fire.json'); // fire.json is created at deploy time through github actions
var firebaseConfig = json;

const fire = firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = fire.analytics();

export default fire;
