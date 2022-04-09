require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// logging three URLs where we are applying our named transformation with f_auto, q_auto
console.log(
  cloudinary.url("person1", {
    secure: true,
    transformation: [
      { transformation: ["avatar-round"] },
      { fetch_format: "auto" },
      { quality: "auto" },
    ],
  })
);

console.log(
  cloudinary.url("person2", {
    secure: true,
    transformation: [
      { transformation: ["avatar-round"] },
      { fetch_format: "auto" },
      { quality: "auto" },
    ],
  })
);

console.log(
  cloudinary.url("person3", {
    secure: true,
    transformation: [
      { transformation: ["avatar-round"] },
      { fetch_format: "auto" },
      { quality: "auto" },
    ],
  })
);
