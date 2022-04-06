require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.uploader
  .upload("./assets/freckles.jpg", {
    public_id: "freckles",
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));
