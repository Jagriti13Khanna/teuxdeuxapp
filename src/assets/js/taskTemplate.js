const newElement = (elementName) => document.createElement(elementName)

export const createTask = ({ id, title, content, status }) => {
   const task = `
        <div class="task-list__task">
            <h3 class="task-list__task-title">${title}</h3>
            <p class="task-list__task-body">
                ${content}
            </p>
            <div class="task-list__task-status status--${status}">
                <svg class="task-list__status-icon">
                    <use
                    xlink:href="./images/sprite.svg#icon-price-tag"
                    ></use>
                </svg>
                <span class="task-list__status-title">${status}</span>
            </div>
        </div>
        <div class="task-list__task-options">
            <button class="${status === "pending" ? "complete-button": ""} task-list__button" data-id="${id}">
                <svg class="task-list__option-icon">
                    <use
                    xlink:href="./images/sprite.svg#icon-check"
                    ></use>
                </svg>
            </button>
            <button class="delete-button task-list__button" data-id="${id}">
                <svg class="task-list__option-icon">
                    <use
                    xlink:href="./images/sprite.svg#icon-trash"
                    ></use>
                </svg>
            </button>
        </div>
   `

   const taskBox = newElement("li")
   taskBox.id = id
   taskBox.className = "task-list__task-box"
   taskBox.innerHTML = task
   return taskBox
}

export const clearTaskList = () => {
   document.querySelector(".task-list").innerHTML = ""
}

export const appendTask = (task) => {
   document.querySelector(".task-list").append(createTask(task))
}
