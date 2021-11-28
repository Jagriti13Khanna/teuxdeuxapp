import { getLocalStorage, setLocalStorage } from "../js/localStorage.js"
import { generateRandomID } from "../js/utils.js"

const getUID = (presentIDs) => {
   let genUID = generateRandomID()
   if (presentIDs.find((each) => each === genUID)) genUID = getUID(presentIDs)
   else return genUID
}

export const reducers = (state, actions) => {
   if (typeof state === "undefined") {
      return getLocalStorage("tasklist") || []
   } else {
      switch (actions.type) {
         case "ADDTASK":
            state = [...state, { ...actions.payloads.task, id: getUID(state) }]
            setLocalStorage("tasklist", state)
            return state

         case "REMOVETASK":
            state = state.filter((task) => task.id !== actions.payloads.task.id)
            setLocalStorage("tasklist", state)
            return state

         case "COMPLETETASK":
            const updatedTasks = state.map((task) => {
               if (task.id === actions.payloads.task.id)
                  task.status = actions.payloads.task.status
               return task
            })
            setLocalStorage("tasklist", updatedTasks)
            return (state = updatedTasks)

         case "SEARCHED":
             state = getLocalStorage('tasklist');
            const elem = actions.payloads.searchedValue.toLowerCase();
            const filteredTasks = state.filter((task) => {
               if (
                  elem === task.id.toString() ||
                  task.title.toLowerCase().includes(elem) ||
                  task.content.toLowerCase().includes(elem) ||
                  task.status.toLowerCase().includes(elem)
               )
                  return task
            })
            state = filteredTasks
            return state;

         default:
            return state
      }
   }
}

export const store = Redux.createStore(reducers)
