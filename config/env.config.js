require('dotenv').config(); 

const dbUrl=process.env.DB_URI;
const port=process.env.PORT;
const cloudName=process.env.CLOUD_NAME;
const cloudApiKey=process.env.CLOUD_API_KEY;
const cloudApiSecret=process.env.CLOUD_API_SECRET;

module.exports={dbUrl,port,cloudName,cloudApiKey,cloudApiSecret};