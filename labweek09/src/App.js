import logo from './logo.svg';
import './App.css';

function Info({ title, course, studentId, name, college }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{course}</h2>
      <h3>{studentId}</h3>
      <h4>{name}</h4>
      <h5>{college}</h5>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'white', color: 'black' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <Info
          title="Welcome to Fullstack Development - I"
          course="React JS Programming Week09 Lab exercise"
          studentId="101549970"
          name="Landon Swales"
          college="George Brown College"
        />
      </header>
    </div>
  );
}

export default App;