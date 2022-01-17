import {
    TASK_TEXT,
    TASK_CREATE,
    TASK_UPDATE,
    TASK_DELETE,
    TASK_DELETE_ALL,
    TASK_COMPLETED,
    TASK_COMPLETED_ALL,
    TASK_LOAD,

    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from "./types";

import {
    getTasks,
    // updateTask,
    updateTasks,
    deleteTask,
    // deleteAll
} from "../../src/services/taskServices";


export function taskCreate() {
    return async dispatch => {
        const datadb = await getTasks()
        const lastTask = datadb.data[datadb.data.length - 1];
        const id = lastTask._id, text = lastTask.task, done = lastTask.done;
        try {
            dispatch({
                type: TASK_CREATE,
                data: {done, id, text}
            }); 
        } catch (error) {
            console.log(error);
        }
    }
}


export function inputText(text) {
    return {
        type: TASK_TEXT,
        text
    }
}

export function inputUpdate(text, id, done) {
    return {
        type: TASK_UPDATE,
        data: { text, id, done}
    }
}

export function inputCompleted(id) {
    return {
        type: TASK_COMPLETED,
        id
        // data: { id, done }
    }
}

export function inputDelete(id) {
    return async dispatch => {
        try {
            await deleteTask(id);
            dispatch({
                type: TASK_DELETE,
                id
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export function inputDeleteAll() {
    return {
        type: TASK_DELETE_ALL
    }
}

export function completedAll(done) {
    console.log(done)
    return async dispatch => {    
        try {
            dispatch({
                type: TASK_COMPLETED_ALL,
                done
            });
            if(done){
                await updateTasks({done: false});
            }
            else{
                await updateTasks({done: true})
            }
        } catch (error) {
            console.log(error);
        }
    }
}

/// loading
export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        });
        setTimeout(() => {
            dispatch(errorOff());
        }, 2000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}

export function inputLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await getTasks()
                console.log(response.data)
            setTimeout(() => {
                dispatch({
                    type: TASK_LOAD,
                    data: response.data
                });
                dispatch(loaderOff())
            }, 1000);
        } catch (error) {
            dispatch(errorOn('ОШИБКА API'))
            dispatch(loaderOff())
        }        
    }
}
