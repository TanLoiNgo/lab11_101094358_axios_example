import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div class="container bg-success">
        <h1>User List</h1>
      </div>
      <PersonList />
    </div>
  );
}

export default App;
