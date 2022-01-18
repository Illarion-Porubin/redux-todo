import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskCreate, inputLoad, completedAll } from "../../redux/actions";
import TaskItem from "../taskItem/taskItem"
import './taskinput.css'

import {addTask} from "../../services/taskServices";


function TaskInput() {
    const [text, setText] = useState('');  
    const dispatch = useDispatch();
    
    const tasks = useSelector(state => {
        const { itemsReducer } = state;
        return itemsReducer.tasks;
    }) 

    // ввод текста
    const handleChange = (e) => {setText(e.target.value = e.target.value.replace( / +/g, ' '))}
    
    // добавление таски
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(text === "" || text === " "){
            alert('Заполните поле')
        }
        else{
            try {
                await addTask({task: text.trim()});
                dispatch(taskCreate())
            } catch (error) {
                console.log(error);
            }
        }
        setText(e.target.value = "")
    };

    const allCompleated = async (e) => {      
        e.preventDefault();
        dispatch(completedAll(tasks.every(items => items.done)))
    }

    // рендер
    useEffect(() => {
      dispatch(inputLoad())  
    }, [dispatch]);
    
    // взаимодействие с css 
    let classArrow, classCheck;
    if(tasks.length){
        classArrow = "to-do__list-btn-arrow to-do__list-btn-arrow-active";
        classCheck = "to-do__list-btn to-do__list-btn-active";
    } else{
        classArrow = "to-do__list-btn-arrow";
        classCheck = "to-do__list-btn";
    }  

    if(tasks.every(item => item.done)) {classArrow += " to-do__fading"}

    return (
        <div className="App flex">
            <form 
                className="add" 
                onSubmit={handleSubmit}
            > 
            <input 
                className={classCheck}
                onClick={allCompleated} 
                type="checkbox">    
            </input>
                <img 
                className={classArrow}
                src="/img/arrow.svg"                 
                alt="arrow"
            />             
            <input 
                className="to-do__task"
                type="text" 
                required={true}
                value={text} 
                onChange={handleChange} 
                placeholder="What needs to be done?">                   
            </input>        
            </form>
                <ul >     
                    {tasks.map((task) => (
                        <TaskItem 
                            task={task.text}
                            done={task.done}
                            key={task.id}
                            id={task.id}
                            // taskInput={task.task}
                            // handleUpdate={() => handleUpdate(task._id)}                           
                            // handleDelete={() => handleDelete(task._id)}
                        />
                    ))}
                </ul>              
        </div> 
    );
}



export default TaskInput;










// import React, { Component } from "react";
// import TaskItem from "../taskItem/taskItem"


// import './taskinput.css'

// class TaskInput extends Component {
//     render() {
//         const {
//             id, 
//             tasks,
//             handleChange, 
//             handleSubmit, 
//             allCompleated, 
//             handleUpdate, 
//             handleDelete,
//             currentTask,
//         } = this.props;
             
//         let classArrow, classCheck;

//         if(tasks.length){
//             classArrow = "to-do__list-btn-arrow to-do__list-btn-arrow-active";
//             classCheck = "to-do__list-btn to-do__list-btn-active";
//         } else{
//             classArrow = "to-do__list-btn-arrow";
//             classCheck = "to-do__list-btn";
//         }  

//         if(tasks.every(item => item.done)) {classArrow += " to-do__fading"}

//         return (
//             <div className="App flex">
//                 <form 
//                     className="add" 
//                     onSubmit={handleSubmit}> 
//                 <input 
//                     className={classCheck}
//                     onClick={allCompleated} 
//                     type="checkbox">    
//                 </input>
//                     <img 
//                     className={classArrow}
//                     src="/img/arrow.svg"                 
//                     alt="arrow"
//                 />             
//                 <input 
//                     className="to-do__task"
//                     type="text" 
//                     id={id}
//                     required={true}
//                     value={currentTask} 
//                     onChange={handleChange} 
//                     placeholder="What needs to be done?">                   
//                 </input>        
//                 </form>
//                     <ul >
//                         {tasks.map((task) => (
//                             <TaskItem 
//                                 task={task}
//                                 key={task._id}
//                                 id={task._id}
//                                 taskInput={task.task}
//                                 handleUpdate={() => handleUpdate(task._id)}                           
//                                 handleDelete={() => handleDelete(task._id)}
//                             />
//                         ))}
//                     </ul>              
//             </div> 
//         );
//     }
// }




// export default TaskInput;

