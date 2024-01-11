import React, { useState } from "react";
import { addtodolist, cleartasker, deletetodo, filtered, updatetodo } from "./action";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const Tasks = useSelector((item) => item.Tasks);
  const [Task, setTask] = useState("");
  const [text,settext]=useState("")
  const [doneTask, setDoneTask] = useState(null);

  const [message, setmessage] = useState("");
  const dispatch = useDispatch();

  const addtaske = () => {
    setTask("");
    dispatch(
      addtodolist({
        text: Task,
        Task: Tasks.length + 1,
      })
    );
  };

  const handle = () => {
    if (Task) {
      dispatch(updatetodo(Tasks.map((inde) => inde.Task === Task )));
      setTask("");
    }
  };

  const updatetask = (item) => {
    dispatch(updatetodo(item));
    setTask(item.Task);
    setTask(item.text);
  };

  const deletetask = (Task) => {
    dispatch(deletetodo(Task));
  };

  const cleartask = () => {
    dispatch(cleartasker());
    setTask("");
  };

  const markAsDone = (task) => {
    setDoneTask(task);
  };
  const handlefilter=(text)=>{
    dispatch(filtered(Tasks.find((ele)=>ele.text===text)))
    setTask(text)
    settext(text)
    
  }

  return (
    <div>
      <h1>Todo App:</h1>
      <input
        type="text"
        value={Task}
        placeholder="write your task here"
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={addtaske}>Add</button>
      <button onClick={handle}>Update</button>
      <button onClick={cleartask}>Clear</button>
      <button onClick={()=>handlefilter(Task)}>Filter-Task</button>
      <table>
        {Tasks.length > 0 ? (
          Tasks.map((item, index) => (
            <tr key={index}>
              <th style={{ color: "blue" }}>Task {item.Task}:</th>
              <>
                {doneTask && doneTask.Task === item.Task ? (
                  <th style={{ color: "red" }}>
                    {item.text}:<span style={{ color: "green" }}>was done</span>
                  </th>
                ) : (
                  <th>{item.text}</th>
                )}
              </>
              <th>
                <button onClick={() => updatetask(item)}>Update</button>
                <button onClick={() => deletetask(item.Task)}>Delete</button>
                <button onClick={() => markAsDone(item)}>Done</button>
              </th>
            </tr>
          ))
        ) : (
          <h3 style={{ color: "red" }}>Tableau est vide</h3>
        )}
      </table>
      <h3 style={{ color: "red" }}>{message}</h3>
    </div>
  );
}
