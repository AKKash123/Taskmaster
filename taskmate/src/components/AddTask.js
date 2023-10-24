//import React, { useState } from 'react'

export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
  //  const [taskvalue,SetTaskvalue]= useState("");
    
    // const handelChanged=(event)=>{
    //     SetTaskvalue(event.target.value);
    // }
    
    const handelSubmit=(e)=>{
      e.preventDefault();
      const date = new Date();
      // console.log(e.target.task.value);
      // console.log(date.getTime());
      //initialized an object for task value
      if(task.id){
          const date = new Date();
          const updateTask = tasklist.map((todo)=>(
            todo.id === task.id ? { 
              id:task.id,
              name:e.target.task.value,
              time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`} : todo 
          ));
          setTasklist(updateTask);
          setTask({});
      }
      else{
        const task={
          id:date.getTime(),
          name:e.target.task.value,
          time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist,task]);
        setTask({});
        //e.target.task.value="";
        //setTasks([...tasklist, setTasklist]);   //... dots used for getting the previous tasks
        //handelRequest();
      }
    }
  return (
    <section className='addTask'>
         <form onSubmit={handelSubmit}>
          <input type="text" value={task.name || ""} name="task" placeholder="Task name" autoComplete="off" maxLength="25" 
          onChange={e=>setTask({...task, name:e.target.value})}/>
                         
          <button type='submit'>{task.id ? "Update" : "Add Task"}</button>
               
        </form>
    </section>
  )
}
//  export const AddTask = ({handleSubmit, editid, task, setTask}) => {
//     return (
//         <section className='addTask'>
//           <form onSubmit={handleSubmit}>
//             <input type="text" name="task" value={task} autoComplete="off" placeholder="add task" maxLength="25" onChange={(e) => setTask(e.target.value)}/>
//             <button type="submit">{ editid ? "Update" : "Add"}</button>
//           </form>
//         </section>
//     );
// }

// export default AddTask;