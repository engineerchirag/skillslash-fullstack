import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import List from './components/list';
import Counter from './components/counter';
import { useState } from 'react';


function App() {
  const [completedCount, setCompletedCount] = useState(0);
  return (
    <div className="App">
      {/* <Counter /> */}
      <div>Completed: {completedCount}</div>
      <div className='todo-container'>
        <Title name="Chirag's Todo List" />
        <List updateCount={setCompletedCount} />
      </div>
    </div>
  );
}

export default App;
