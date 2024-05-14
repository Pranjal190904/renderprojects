const cors = require("cors");

const corsOptions = {
  origin : ['https://render-2-0-project-submission.vercel.app/','http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200,
};

const handleCors = cors(corsOptions);

module.exports = handleCors;
