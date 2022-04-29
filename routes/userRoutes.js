const router=require('express').Router()
const authUser=require('../middleware/authMiddleware')
const {signUpController,loginController,logoutController}=require('../controller/userController')

router.post('/',signUpController)
router.post('/login',loginController)
router.delete('/logout',authUser,logoutController)

module.exports=router