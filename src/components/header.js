const Logo = require('./Logo');
const Search = require("./Search");

// Header
const Header = () => {
   return `
    <header class="header">
        ${Logo()}
        ${Search()}
    </header>
    `
}

module.exports = Header
