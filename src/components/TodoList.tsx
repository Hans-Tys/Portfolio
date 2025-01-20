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

    }

    const deleteTask = (id) => {

    }

    const markTaskAsDone = (id) => {

    }

    const cancelUpdate = () => {

    }

    const changeTask = (e) => {

    }

    const updateTask = (e) => {

    }



  return (
    <div style={{margin:50}}>   
          <div style={{display:"flex", flexDirection:'row', marginBottom:15, marginLeft:0}}>
            <div>
                <input type="text" name="" id="" style={{height:35, width:385, borderRadius: 15, paddingLeft:10 }} />
            </div>
            <div>
                <button style={{marginLeft:28 , width:125, backgroundColor:"#5a8586"}}>
                    Update
                </button>
            </div>
            <div>
                <button style={{marginLeft:28 , width:125, backgroundColor:"#23475f"}}>
                    Cancel
                </button>
            </div>
        </div>

        <div style={{display:"flex", flexDirection:'row', marginBottom:15, marginLeft:0}}>
            <div>
                <input type="text" name="" id="" style={{height:35, width:540, borderRadius: 15, paddingLeft:10 }} />
            </div>
            <div>
                <button style={{marginLeft:28 , width:125, backgroundColor:"#5a8586"}}>
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
                                <span><FontAwesomeIcon icon={faCircleCheck}/></span>
                                <span><FontAwesomeIcon icon={faPen}/></span>
                                <span><FontAwesomeIcon icon={faTrashCan}/></span>
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

