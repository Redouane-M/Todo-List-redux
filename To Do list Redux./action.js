export const addtodolist=(todo)=>{
  return{type:'Add-user',payload:todo}
}
export const updatetodo=(updatetodo)=>{
  return{type:'Update-todo',payload:updatetodo}
}
export const deletetodo = (Task) => {
  return { type: 'delete-todo', payload: Task };
}
export const cleartasker=(dd) =>{
  return{type:'cleartask',payload:dd}
}
export const filtered=(newfilter)=>{
  return{type:'filter-task',payload:newfilter}
}