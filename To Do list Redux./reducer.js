const initialState={
  Tasks:[
    {Task:1,text:'Take a shower'}
  ]
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'Add-user':
      return {
        ...state,
        Tasks: [...state.Tasks, action.payload]
      };
    case 'Update-todo':
      return {
        ...state,
        Tasks: state.Tasks.map((item) =>
          item.Task === action.payload.Task 
        ? { ...item,Task:action.payload.Task,text:action.payload.text}
        : item
        )
      };
    case 'delete-todo':
      return {
        ...state,
        Tasks: state.Tasks.filter((i) => i.Task !== parseInt(action.payload))
        
      };
    case 'cleartask':
      return{
        ...state,Task:[]
      }
    case 'filter-task':
      return{
        ...state,Tasks:[...state.Tasks.filter((tasksfilter)=>tasksfilter.Task===parseInt(action.payload) 
          )]
      }
    default:
      return state;
  }
};
export default reducer;