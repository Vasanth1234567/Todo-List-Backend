const getAllTodoItems=(request,response)=>{
    response.send("Hello this is controller")
}
const createANewTodoItem = (request,response)=>{
    response.json(request.body);
}
module.exports={getAllTodoItems,createANewTodoItem}