require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// here's an upload script if you'd like to upload each file
cloudinary.uploader
  .upload("./assets/person1.jpg", {
    public_id: "person1",
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));

  cloudinary.uploader
  .upload("./assets/person2.jpg", {
    public_id: "person2",
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));

  cloudinary.uploader
  .upload("./assets/person3.jpg", {
    public_id: "person3",
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));