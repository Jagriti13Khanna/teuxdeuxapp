const Search = () => {
   return `
   <form action="#" class="search">
   <input
       type="text"
       class="search__input"
       id="search-input"
       placeholder="Search by Title, Content, Status"
   /><button class="search__button">
       <svg class="search__icon">
           <use
           xlink:href="./images/sprite.svg#icon-magnifying-glass"
           ></use>
       </svg>
   </button>
</form>
    `
}

module.exports = Search;
