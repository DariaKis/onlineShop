const Router=require('express');
const router=new Router();
const typeRouter=require('../controllers/typeController');
const checkRole=require('../middleware/checkRoleMiddleWare');

router.post('/', checkRole('ADMIN'),typeRouter.create);

router.get('/', typeRouter.getAll);



module.exports=router;