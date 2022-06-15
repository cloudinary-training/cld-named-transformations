require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//creating a new named transformation called avatar-round
cloudinary.api
  .create_transformation("avatar-round", {
    transformation: [
      {
        width: 300,
        height: 300,
        radius: "max",
        gravity: "face",
        crop: "thumb"
      },
    ],
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });








  