import { useState } from "react";

const AddTask = (props) => {
  const { tasks, setTasks } = props;

  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      />
      <button
        style={{ padding: "11px" }}
        onClick={() => {
          setTasks([...tasks, userInput]);
          setUserInput("");
        }}
      ></button>
      <h2>{userInput}</h2>
    </div>
  );
};
export default AddTask;
