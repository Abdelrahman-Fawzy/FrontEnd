import logo from './logo.svg';
import './App.css';

import Data from './components/data'
import PostList from './components/postLists'
import PostForm from './components/postForms'
import AddLeague from './components/addLeague'
import EditLeague from './components/editLeague'

function App() {
  return (
    <div className="App">
      <Data />
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <AddLeague />
      <EditLeague />
    </div>
  );
}

export default App;
