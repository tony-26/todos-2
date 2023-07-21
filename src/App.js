import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(["wash clothes", "turn on light"]);

  return (
    <div className="App">
      <h2>TODOS APP</h2>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
