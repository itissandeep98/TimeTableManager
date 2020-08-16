import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/database')

const json = require('./fire.json') // fire.json is created at deploy time through github actions
var firebaseConfig = json

const fire = firebase.initializeApp(firebaseConfig);

export default fire;