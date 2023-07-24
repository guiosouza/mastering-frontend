"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // there some error here that "strict mode" helps to see
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive! XD");

// const interface = "audio"; -------- "strict mode" also show an error for reserverds words of JS
