

export const ShowTask= ({tasklist,setTasklist,task,setTask}) => {
    // const tasks=[{id:1001, name:"Task1", time:"11:00:01 PM 08-10-2023" },
    //              {id:1002, name:"Task2", time:"11:01:05 PM 08-10-2023" },
    //              {id:1003, name:"Task3", time:"11:05:06 PM 08-10-2023" },
    //              {id:1004, name:"Task4", time:"11:10:01 PM 08-10-2023" }

    //             ];
    const handelEdit = (id)=>
    {
        const selectedTask = tasklist.find(task =>task.id === id);
        setTask(selectedTask);

    }
    const handelDelete = (id) =>
    {
        const updateTasklist = tasklist.filter(task =>task.id !== id);
        setTasklist(updateTasklist); 

    }
  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasklist.length}</span>
                <button className='clearAll' onClick={()=>setTasklist([])}>Clear All</button>
            </div>
            <ul>
                    {tasklist.map((task)=>
                        
                <li key={task.id}>
                    
                    <p>
                        <span className='name'>{task.name}</span>
                        <span className='time'>{task.time}</span>
                    </p>
                    <i onClick={() => handelEdit(task.id) } className="bi bi-pencil-square"></i>
                    <i onClick={() => handelDelete(task.id)} className="bi bi-trash"></i>

                </li>
                )}
            </ul>
        </div>
    </section>
  )
}
