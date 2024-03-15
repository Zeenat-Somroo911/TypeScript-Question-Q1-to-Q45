"use strict";
let places = ["kashmir", "naran", "kagan", "muree", "gilgit"];
// printing array in its original order
console.log("Original Order", places);
// print array in alphabatical order
console.log("Alphabetical Order", [...places].sort());
// printing array in its original order
console.log("Original Order", places);
// printing array in reverse alphabetical order
console.log("reverse Alphabetical Order", [...places].reverse());
// printing array in its original order
console.log("Original Order", places);
// print array in reverse sort  alphabetical order
console.log("Changed Reverse Alphabetical Order", [...places].sort().reverse());
// print array in again reversible order
console.log("Changed Reverse Alphabetical Order", [...places].reverse());
// sort array
places.sort();
console.log('Sort Alphabetical Order', places);
// reverse array
places.reverse();
console.log("Reverse Alphabetical Order", places);
