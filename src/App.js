const Header = require('./components/header');
const TaskList = require('./components/TaskList');
const AddTask = require('./components/AddTask');

const App = () => {
  return `${Header() + TaskList() + AddTask()}`;
};

exports.App = App;
