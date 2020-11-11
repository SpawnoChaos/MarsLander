const initialAltitude = 240000;
const initialSpeed = 4600;
const gravity = 3.7;
const engHeatRate = 20;
const engHeatSet = 1500;

let engWarmUp = false;
let parachute = true;
let GCS = false;
let landArm = false;
let thrusters = false;

let engCurrentTemp = 0;
let drag = 45;
let thrust = 0;
let userLogin = 'marslanderviewer';

let currentSpeed = initialSpeed;
let currentAltitude = initialAltitude;

let i = setInterval(engineControl, 1000);
let counter = 0;

function engineControl(){
    
    if (engCurrentTemp === engHeatSet){
        currentSpeed = currentSpeed + gravity - thrust;
        parachute = false;
        GCS = true;
        engWarmUp = false;
    }
    else {
        currentSpeed = currentSpeed + gravity - thrust - drag;
        engCurrentTemp = engCurrentTemp + engHeatRate;
        engWarmUp = true;
    }
    
    if (currentAltitude <= 0){
        currentSpeed = 0;
        currentAltitude = 0;
        landArm = true;
        thrust = 0;
        thrusters = false;
        GCS = false;
        clearInterval(i);
    }
    else {
        currentAltitude = currentAltitude - currentSpeed;
    }
    
    if (currentSpeed > 150 && GCS === true){
        thrust = 150;
        thrusters = true;
    }

    else if (currentSpeed > 10 && GCS === true){
        thrust = 5;
        thrusters = true;
    }
    
    else {
        thrust = 0;
        thrusters = false;
    }
    
    counter++;
    console.log(Math.round(counter) + ' seconds.');
    console.log(Math.round(currentSpeed) + ' meters/second.');
    console.log(Math.round(currentAltitude) + ' meters.');
    console.log(Math.round(engCurrentTemp) + ' K.');
    console.log('Parachute attached? ' + parachute);
    console.log('Engine Warmup Cycle? ' + engWarmUp);
    console.log('GCS Enabled? ' + GCS);
    console.log('Thrusters active? ' + thrusters);
    console.log('Landing arm contact? ' + landArm);
}

console.log('Landing Success!');
