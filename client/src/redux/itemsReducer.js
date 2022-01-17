import { 
    TASK_TEXT,
    TASK_CREATE, 
    TASK_UPDATE,
    TASK_DELETE, 
    TASK_LOAD,
    TASK_COMPLETED,
    TASK_COMPLETED_ALL
} from "./types"; 

const initialState = {
    tasks: [],
    text: ''
}


export const inputReducer = (state = initialState, action) => {
    console.log('comments reducer > ', action)
    
    switch(action.type) {
        case TASK_TEXT:
            return {
                ...state, // через оператор ... разворачиваем и возвращаем новый state
                text: action.text
            }
        default:
            return state;
    }
}


export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_CREATE: 
        // console.log(action.data, "новая таска<<<")          
            return {
                ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                tasks: [...state.tasks, action.data]
            }
        case TASK_LOAD:
            const commentsNew = action.data.map(res => {
                return {
                    done: res.done,
                    id: res._id,
                    text: res.task
                }
            })
            return {
                ...state, // через оператор ... разворачиваем, копируем и возвращаем новый state
                tasks: commentsNew
            }    


        case TASK_COMPLETED:         
            return (() => {
                const { id } = action;
                const { tasks } = state;
                const currentTask = tasks.find(res => res.id === id)
                    currentTask.done = !currentTask.done
                return {
                    ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                    tasks: [...state.tasks]
                }
            })();

        case TASK_COMPLETED_ALL:         
            // описываем как будем рендерить при использовании метода TASK_COMPLETED_ALL
            return (() => {
                const { tasks } = state;
                const allCheck = tasks.every(items => items.done)
                tasks.map(res => res.done = !allCheck)
                return {
                    ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                    tasks: [...state.tasks]
                }
            })();


            case TASK_DELETE:
                return (() => {
                    const { id } = action;
                    const { tasks } = state;
                    const itemIndex = tasks.findIndex(res => res.id === id)
                    const deleteTask = [
                        ...tasks.slice(0, itemIndex),
                        ...tasks.slice(itemIndex + 1)
                    ];
                    return {
                        ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                        tasks: deleteTask
                    }
                })(); 

        case TASK_UPDATE:
            const { data } = action;
            const { tasks } = state;
            const itemIndex = tasks.findIndex(res => res.id === data.id)
            const nextTask = [
                ...tasks.slice(0, itemIndex),
                data,
                ...tasks.slice(itemIndex + 1)
            ]; 
            return {
                ...state, // через оператор ... разворачиваем, копируем и возвращаем новый state
                tasks: nextTask
            }

          
        default:
            return state;
    }
}