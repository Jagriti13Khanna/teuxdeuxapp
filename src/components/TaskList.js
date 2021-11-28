const TaskList = () => {
   return `
   <div class="content">
        <ul class="task-list"></ul>
        <button class="add-task">
            <svg class="add-task__add-icon">
                <use xlink:href="./images/sprite.svg#icon-plus"></use>
            </svg>
        </button>
    </div>
    `
}

module.exports = TaskList
