require("dotenv").config();
const cloudinary = require("cloudinary").v2;

console.log(cloudinary.url("freckles", { transformation: ["avatar-round"] }));

/////
console.log(
  cloudinary.url("freckles", {
    transformation: [
      { transformation: ["avatar-round"] },
      { fetch_format: "auto" },
      { quality: "auto" },
    ],
  })
);

// console.log(
//   cloudinary.url("testing-avatar-named", { transformation: ["avatar-round"] })
// );

// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;

// // authenticated type: no access to original unless URL is signed
// // sign_url signs the image and transformations
// // secure: true make the URL HTTPS
// // add f_auto, q_auto

// const url = cloudinary.url("security/seahorse", {
//   type: "authenticated",
//   secure: true,
//   sign_url: true,
//   transformation: [
//     { width: 300, height: 300, crop: "limit" },
//     { fetch_format: "auto", quality: "auto" },
//   ],
// });
// console.log(url);

// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;
// const open = require("open");

// ///////
// cloudinary.api
//   .update_transformation("t_auto-400-xform/f_auto,q_auto", {
//     allowed_for_strict: true,
//   })
//   .then((updateResult) => {
//     console.log(updateResult);
//     const url = cloudinary.url("shark", {
//       transformation: ["auto-400-xform/f_auto,q_auto"],
//     });
//     console.log(url);
//     open(url);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   ///
// cloudinary.image("sample.jpg", {
//   transformation: [
//     { transformation: ["jpg_with_quality_30"] },
//     { height: 50, width: 100, crop: "fit" },
//   ],
// });
