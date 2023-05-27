const express=require('express')
const app=express()
const PORT=process.env.PORT || 4000
const todo=require('./routers/todo_items')
app.get("/",(request,response)=>{
    response.send("Done.")
    
})
app.use("/api/v1/todo_items",todo)
app.listen(PORT,console.log(`Server running at http://localhost:${PORT}`));