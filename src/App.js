import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Play football", color: "red", isComplete: true },
    { text: "Watch TV", color: "black", isComplete: false },
  ]);

  return (
    <div className="App">
      <h2>TODOS APP</h2>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
