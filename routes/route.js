const userRoute=require('./userRoutes')

const routes=[
    {
        path:'/user',
        handler:userRoute
    },
  
]

module.exports=(app)=>{
    routes.forEach(route=>{
        if(route.path=='/'){
            app.get(route.path,route.handler)
        }
        else{
            app.use(route.path,route.handler)
        }
    })
}