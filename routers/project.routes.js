const router=require('express').Router();
const upload=require('../middlewares/multer');
const projectUpload=require('../controllers/project.controller');

router.post('/project',upload.single('file'),projectUpload);

module.exports=router;