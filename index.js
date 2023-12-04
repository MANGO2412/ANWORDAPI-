const App=require('./src/App')
const port = 3000;
const server=App.listen(port,()=>{
    console.log("The back-end application is runing on  port",port)
})
