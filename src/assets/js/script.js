import { store } from "../redux/reducers.js"
import { appendTask, clearTaskList } from "./taskTemplate.js"

// render tasklist
const render = () => {
   const tasklist = store.getState();
   clearTaskList()
   if (tasklist && tasklist.length > 0) {
      tasklist.map((each) => appendTask(each))
   }
   console.log("render-finished")
   return 0
}

render();

// first time task render
store.subscribe(render)

// wallpaper toggle
const changeWallpaper = () => {
   document.getElementById("app").classList.toggle("app--wallpaper")
}

// toogle Add task menu
const toggleAddTask = () => {
   document.querySelector(".new-task").classList.toggle("new-task--show")
}

// add Task Button
document.querySelector(".add-task").onclick = () => {
   toggleAddTask()
}

// add task
document.querySelector(".new-task__button").onclick = () => {
   const heading = document.querySelector(".new-task__heading")
   const content = document.querySelector(".new-task__content")
   const task = {
      title: heading.value,
      content: content.value,
      status: "pending"
   }
   store.dispatch({type: "ADDTASK", payloads: {task: task}})
   toggleAddTask()
}

// searchValue
const searchTaskList = (ls, elem) => {
   if (ls) {
      return ls.filter((task) => {
         if (
            elem === task.id.toString() ||
            task.title.includes(elem) ||
            task.content.includes(elem)
         )
            return task
      })
   } else {
      return
   }
}


// refresh list IDs
setInterval(() => {
    // delete button
    document.querySelectorAll(".delete-button").forEach((button) => {
       button.onclick = function () {
          const selectedTask = document.getElementById(button.dataset.id)
          selectedTask.classList.add("swipe-out")
          setTimeout(() => {
              selectedTask.remove()
              store.dispatch({type: "REMOVETASK", payloads: {task: {id: parseInt(button.dataset.id)}}})
          }, 2000)
       }
    })
    
   // complete function
   document.querySelectorAll(".complete-button").forEach((button) => {
      button.onclick = function () {
         const selectedTask = document.getElementById(button.dataset.id)
         const status = selectedTask.children[0].children[2]
         console.log(status)
         store.dispatch({type: "COMPLETETASK", payloads: {task: {id: parseInt(button.dataset.id), status: "completed"}}})
         status.classList.remove("status--pending")
         status.children[1].innerHTML = "complete"
         status.classList.add("status--completed")
         button.disabled = "true"
        //  completeTask(button.dataset.id)
      }
   })
}, 1000)

// search bar
document.getElementById("search-input").onkeyup = (e) => {
   const searchValue = e.target.value
   if (searchValue.length > 0) {
      store.dispatch({type: 'SEARCHED', payloads: {searchedValue: searchValue}})
   } else {
    store.dispatch({type: 'SEARCHED', payloads: {searchedValue: ''}})
   }
}
// search bar
// document.getElementById("search-input").onblur = (e) => {
//     const searchValue = document.getElementById('search-input');
//     console.log('lost focus')
//        store.dispatch({type: 'SEARCHED', payloads: {searchedValue: ''}})
//  }


// filter list
