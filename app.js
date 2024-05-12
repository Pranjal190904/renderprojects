const express=require('express');
const app=express();
const {port}=require('./config/env.config');
const router=require('./routers/project.routes');
const connectDB=require('./config/db.config');
const handleCors=require('./config/cors.config');

connectDB();
app.use(express.json());
app.use(handleCors);
app.use('/api/render',router);

app.listen(port);