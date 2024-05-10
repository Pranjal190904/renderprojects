const cloudinary = require("cloudinary").v2;
const {cloudName,cloudApiKey,cloudApiSecret}=require('../config/env.config');

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudApiKey,
  api_secret: cloudApiSecret
});

const uploadOnCloudinary = async (file) => {
  try {
    if (!file) {
      return { error: "File path  not provided" };
    }
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "auto"
    });

    return response;
  } catch (err) {
    console.error(err);
    return { error: "Failed to upload to Cloudinary" };
  }
};

module.exports = uploadOnCloudinary;
