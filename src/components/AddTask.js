const AddTask = () => {
   return `
    <div class="new-task popover popover--blur">
            <form action="#" class="new-task__input">
               <input
                  type="text"
                  class="new-task__heading"
                  placeholder="Enter the title"
               />
               <textarea
                  class="new-task__content"
                  placeholder="Enter the content(MAX: 250 words  )"
               ></textarea>
               <button type="button" class="new-task__button">
                  <svg class="new-task__icon">
                     <use xlink:href="./images/sprite.svg#icon-plus"></use>
                  </svg>
                  <span>Add Task</span>
               </button>
            </form>
         </div>
    `
}

module.exports = AddTask
