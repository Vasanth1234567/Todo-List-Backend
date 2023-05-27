const express=require('express')
const router=express.Router()
const {getAllTodoItems,createANewTodoItem}=require("../controllers/todo_items")
// router.get("/",(request,response)=>{
//     response.send("This is router page.")
// })
router.route("/").get(getAllTodoItems).post(createANewTodoItem)
module.exports=router