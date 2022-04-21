const router=require('express').Router()
const {signUpController,loginController}=require('../controller/userController')

router.post('/',signUpController)
router.post('/login',loginController)

module.exports=router