import {
    TASK_LOAD,
    // TASK_TEXT,
    TASK_CREATE,
    TASK_UPDATE,
    TASK_FILTER,
    // TASK_FILTER_STATUS,
    TASK_DELETE,
    TASK_DELETE_ALL,
    TASK_COMPLETED,
    TASK_COMPLETED_ALL
} from "./types";



const initialState = {
    tasks: [],
    tasksFilter: [],
    text: '',
    status: 'all',
}


// export const inputReducer = (state = initialState, action) => {
//     console.log('comments reducer > ', action)

//     switch (action.type) {
//         case TASK_TEXT:
//             return {
//                 ...state, // через оператор ... разворачиваем и возвращаем новый state
//                 text: action.text
//             }
//         default:
//             return state;
//     }
// }

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_CREATE:
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

        case TASK_FILTER:
            return (() => {
                const { tasks } = state;
                const { data } = action;
                console.log(tasks, "tasks")
                console.log(data, "data")

                if(action.filt === "active"){
                    const active = data.filter(items => !items.done)
                    const activeFilter = active.map(res => {
                        return {
                            done: res.done,
                            id: res._id,
                            text: res.task
                        }
                    })
                    return {
                        ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                        tasks: activeFilter,
                    }
                }
                else if(action.filt === "compleated"){
                    const compleated = data.filter(items => items.done)
                    const compleatedFilter = compleated.map(res => {
                        return {
                            done: res.done,
                            id: res._id,
                            text: res.task
                        }
                    })
                    return {
                        ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                        tasks: compleatedFilter,
                    }
                }
                else{
                    const activeFilter = data.map(res => {
                        return {
                            done: res.done,
                            id: res._id,
                            text: res.task
                        }
                    })
                    return {
                        ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                        tasks: activeFilter,
                    }
                }
            })();         
////////////////////////

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


        case TASK_DELETE_ALL:
            return (() => {
                const { tasks } = state;
                const newTask = tasks.filter((items) => !items.done)
                return {
                    ...state, // через оператор ... разворачиваем копируем и возвращаем новый state
                    tasks: newTask
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