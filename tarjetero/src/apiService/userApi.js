const serverUrl = 'http://localhost:3000'


export const getAllTasks = async () =>{
    const response = await fetch(`${serverUrl}/tasks`)
    const tasks = await response.json()
    return tasks
} 

export const getOneTask = async (id) => {
    const response = await fetch(`${serverUrl}/tasks/${id}`)
    const task = await response.json()
    return task
}
export const addTask = async (taskData) => {
    const response = await fetch(`${serverUrl}/tasks`, {method: 'POST', body: JSON.stringify(taskData),  headers: {"Content-Type": "application/json"}  })
    const newTask = await response.json ()
    return newTask
}

export const removeTask = async (id) => {
    const response = await fetch(`${serverUrl}/tasks/${id}`, {method: 'DELETE'}  )
    const deletedTask = await response.json ()
    return deletedTask
}

export const terminateTask = async (id) => {
    const response = await fetch(`${serverUrl}/tasks/${id}`, {method: 'PATCH'}  )
    const finishedTask = await response.json ()
    return finishedTask
}

export const modifyTask = async (id, taskData) => {
    const response = await fetch(`${serverUrl}/tasks/${id}`, {method: 'PUT', body: JSON.stringify(taskData),  headers: {"Content-Type": "application/json"}}  )
    const modifiedTask = await response.json()
    return modifiedTask
}