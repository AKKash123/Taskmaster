
import './index.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [task,setTask]= useState({});
  //Custom Hooks used for create local storage
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);
  return (
    <>
    <Header/>
    <main>
    <AddTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
    <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
