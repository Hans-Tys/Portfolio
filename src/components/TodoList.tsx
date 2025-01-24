import React, { useState } from "react";
import './ToDoList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";



export default function TodoList() {

    const [toDo, setToDo] = useState([
        {"id": 1, "Title": "Task 1", "Status": false},
        {"id": 2, "Title": "Task 2", "Status": false}
    ]);

    const [newTask ,setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');


    const addTask = () => {
        if(newTask) {
            let num = toDo.length + 1;
            let newEntry = { id: num, Title: newTask, Status: false }
            setToDo([...toDo, newEntry])
            setNewTask('');
        }

    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id);
        setToDo(newTasks);
    }

    const markTaskAsDone = (id) => {
        let newTask = toDo.map( task => {
            if( task.id === id){
                return({ ...task, Status: !task.Status })
            }
            return task;
        })
        setToDo(newTask);
    
    }
    

    const cancelUpdate = () => {
        setUpdateData('');
    }

    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            Title: e.target.value,
            Status: updateData.Status ? true : false
        }
        setUpdateData(newEntry);
    }

    const updateTask = () => {
        let filterRecords = [...toDo].filter( task => task.id !== updateData.id);
        let updatedObject = [...filterRecords, updateData];
        setToDo(updatedObject);
        setUpdateData('');
    }



  return (

        

        <div className="ToDoList">   
           <div style={{display:"flex", flexDirection:'row', marginBottom:15, marginLeft:0}}>
               <div>
                 <input type="text" name="" id="" style={{height:35, width:385, borderRadius: 15, paddingLeft:10 }}
                        value={ updateData && updateData.Title}
                        onChange={ (e) => changeTask(e)}
                    />
             </div>
             <div>
                <button style={{marginLeft:28 , width:125, backgroundColor:"#5a8586"}}
                    onClick={updateTask}>
                        Update
                </button>
            </div>
            <div>
                <button style={{marginLeft:28 , width:125, backgroundColor:"#23475f"}}
                        onClick={cancelUpdate}
                        >
                        Cancel
                </button>
            </div>
        </div>

        

        <div style={{display:"flex", flexDirection:'row', marginBottom:15, marginLeft:0}}>
            <div>
                <input type="text" name="" id="" style={{height:35, width:540, borderRadius: 15, paddingLeft:10 }} 
                value={newTask}
                onChange={ (e) => setNewTask(e.target.value)}
                />
            </div>
            <div>
                <button style={{marginLeft:28 , width:125, backgroundColor:"#5a8586"}}
                    onClick={addTask}
                >
                    add Task
                </button>
            </div>
        </div>




        {toDo && toDo.length ? '' : 'No Task...'}

        <div className="TaskList">
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map( (task, index) => {
                    return(
                        <React.Fragment key={task.id}>
                        <div className="TaskBg">
                            <div className={task.Status ? 'done': ''}>
                                <span className="TaskNumber">{index + 1}</span>
                                <span className="TaskText">{task.Title}</span>
                            </div>   
                            <div style={{display:"flex", flexDirection: "row", gap:10, fontSize:20, paddingRight:20}}>
                                <span><FontAwesomeIcon className="icons" icon={faCircleCheck}
                                    onClick={ (e) => markTaskAsDone(task.id)}
                                /></span>

                                {task.Status ? null : (
                                    <span><FontAwesomeIcon className="icons" icon={faPen}
                                        onClick={ () => setUpdateData({
                                            id: task.id, 
                                            Title: task.Title,
                                            Status: task.Status ? true : false
                                        })}
                                    /></span>
                                )}
                               
                                <span><FontAwesomeIcon className="icons" icon={faTrashCan}
                                    onClick={() => deleteTask(task.id)}
                                /></span>
                            </div>
                        </div>     
                        </React.Fragment>

                    )
                })
            
            }
        </div>

    </div>
  )
}

