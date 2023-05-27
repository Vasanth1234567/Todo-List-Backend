const express=require('express')
const router=express.Router()
const {getAllTodoItems}=require("../controllers/todo_items")
// router.get("/",(request,response)=>{
//     response.send("This is router page.")
// })
router.route("/").get(getAllTodoItems)
module.exports=router