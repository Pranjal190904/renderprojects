const express=require('express');
const app=express();
const {port}=require('./config/env.config');
const router=require('./routers/project.routes');
const connectDB=require('./config/db.config');

connectDB();
app.use(express.json());
app.use('/api/render',router);

app.listen(port);