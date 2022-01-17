import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

// export function updateTasks(id, task) {
//     for(let i = 0; i <= id.length; i++) {
//         if(i !== id.length) {
//             axios.put(apiUrl + "/" + id[i], task);
//         }
//     }
// }
// updateMany({name : "Tom"}, {$set: {salary : 560}})

export function updateTasks(done) {
    return axios.put(apiUrl, done);
}

// export function updateTasks(){
//     return axios.put(apiUrl.updateMany({ done: false }, {$set: { done: true }}))
// } 
    



export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}

export function deleteAll(id) {
    for(let i = 0; i <= id.length; i++){
        if(i !== id.length) {
            axios.delete(apiUrl + "/" + id[i]);
        }
    }
}
