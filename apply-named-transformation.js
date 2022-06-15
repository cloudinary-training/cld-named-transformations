require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//applying a named transformation (avatar-round) to three files 
console.log(cloudinary.url("person1", { transformation: ["avatar-round"] }));
console.log(cloudinary.url("person2", { transformation: ["avatar-round"] }));
console.log(cloudinary.url("person3", { transformation: ["avatar-round"] }));



















