import './App.css';
import React from 'react'
import Dashboard from './component/dashboard'

function App() {
  const [nr, setNr] = React.useState(Math.random());
  return (
    <div className="App">
      <Dashboard nr={nr} setNr={setNr} />
    </div>
  );
}

export default App;
