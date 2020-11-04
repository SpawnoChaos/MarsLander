const initialAltitude = 240000;
const initialSpeed = 4600;
const gravity = 3.117;
const engHeatRate = 5;
const engHeatSet = 1500;

let engWarmUp = false;
let parachute = true;
let GCS = false;
let landArm = false;
let thrusters = false;

let engCurrentTemp = 0;
let drag = 50;
let thrust = 0;
let userLogin = 'marslanderviewer';

let currentSpeed = initialSpeed + gravity - thrust - drag;
let currentAltitude = initialAltitude - currentSpeed;
