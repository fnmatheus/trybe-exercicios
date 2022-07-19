import './App.css';

const skillsArray = ['JSX', 'React', 'ReactDOM', 'CSS']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  return (
    <div className="App">
      <ul>
        {skillsArray.map((skill) => Task(skill))}
      </ul>
    </div>
  );
}

export default App;
