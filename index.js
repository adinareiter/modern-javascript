var moment = require("moment");

console.log("Hello from JavaScript!");
var startOfDay = moment().startOf("day").fromNow();
console.log(`Today started ${startOfDay}`);

var datetime = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(datetime);
