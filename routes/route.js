const userRoute=require('./userRoutes')
const postRoutes=require('./postsRoutes')

const routes=[
    {
        path:'/user',
        handler:userRoute
    },
    {
        path:'/posts',
        handler:postRoutes
    }
  
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