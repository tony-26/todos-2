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
      <h2>{userInput}</h2>
      <button onClick={()=>{
        
      }}></button>
    </div>
  );
};
export default AddTask;
