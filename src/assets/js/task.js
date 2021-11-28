import { getLocalStorage, setLocalStorage } from "./localStorage.js"
import { generateRandomID } from "./utils.js"

export let store = {
   taskList: []
}

export const loadStore = () => {
   let allTasks = getLocalStorage("tasklist")
   store.taskList = allTasks
}

export const saveStore = () => {
   setLocalStorage("tasklist", store.taskList)
}

const getUID = (presentIDs) => {
   let genUID = generateRandomID()
   if (presentIDs.find((each) => each === genUID)) genUID = getUID(presentIDs)
   else return genUID
}

export const addTask = (task) => {
   var taskWithId
   if (store.taskList) {
      const uid = getUID(store.taskList.map((each) => each.id))
      taskWithId = { id: uid, ...task }
      store.taskList.push(taskWithId)
   } else {
      const uid = generateRandomID()
      taskWithId = { id: uid, ...task }
      store.taskList = [taskWithId]
   }
   console.log(store)
   saveStore()
   return taskWithId
}

export const deleteTask = (id) => {
   console.log(id)
   store.taskList = store.taskList.filter((each) => each.id !== parseInt(id))
   saveStore()
}

export const completeTask = (id) => {
   store.taskList = store.taskList.map((each) => {
      if (each.id === parseInt(id)) each.status = "completed"
      return each
   })
   console.log(store)
   saveStore()
}
