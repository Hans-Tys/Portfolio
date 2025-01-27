import React, { useState } from "react";
import './ToDoList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faCircleCheck, faPen, faTrashCan , faArrowsRotate, faBan } from "@fortawesome/free-solid-svg-icons";



export default function TodoList() {

    interface toDo {
        id: number,
        Title: string,
        Status: boolean
    }
    const [toDo, setToDo] = useState([
        {id: 1, Title: "Task 1", Status: false},
        {id: 2 , Title: "Task 2", Status: false}
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

    const deleteTask = (id: number) => {
        let newTasks = toDo.filter(task => task.id !== id);
        setToDo(newTasks);
    }

    const markTaskAsDone = (id: number) => {
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
        setOpenUpdate(false);
    }

    const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setOpenUpdate(false);
    }

    const [openUpdate, setOpenUpdate] = useState(false);



  return (

    
    <div className="ToDoListPage">
        <div className="ToDoList"> 
            <h1>TO DO LIST</h1> 

            {
                openUpdate ? 
                <div className="updateCancelcontainer" >
                
                    <input type="text" name="" id="" className="inputUpdate"
                            value={ updateData && updateData.Title}
                            onChange={ (e) => changeTask(e)}
                        />
            
                <div>
                    <button className="UpdateButton" 
                        onClick={updateTask}>
                            <FontAwesomeIcon icon={faArrowsRotate}/>
                    </button>
                </div>
                <div>
                    <button className="CancelButton"
                            onClick={cancelUpdate}
                            >
                            <FontAwesomeIcon icon={faBan}/>
                    </button>
                </div>
            </div> : <></>
            }
            

        

        <div style={{display:"flex", flexDirection:'row', marginBottom:15, marginLeft:0,  justifyContent:"space-between"}}>
            
                <input type="text" name="" id="" className="inputNewTask"
                value={newTask}
                onChange={ (e) => setNewTask(e.target.value)}
                />
           
            <div>
                <button className="AddButton" 
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
                                <span><FontAwesomeIcon className="MarkDone" icon={faCircleCheck}
                                    onClick={ (e) => markTaskAsDone(task.id)}
                                /></span>

                                {task.Status ? null : (
                                    <span><FontAwesomeIcon className="Edit" icon={faPen}
                                        onClick={ () => {setUpdateData({
                                            id: task.id, 
                                            Title: task.Title,
                                            Status: task.Status ? true : false
                                        }), setOpenUpdate(true)}}
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
    </div>
  )
}

