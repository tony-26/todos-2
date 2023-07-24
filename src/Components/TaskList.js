const TaskList = (props) => {
  const { i, tasks, setTasks } = props;
  return (
    <div>
      {tasks.map((e, i) => {
        return (
          <div key={i}>
            <input type="checkbox" checked={tasks[i].isComplete} />
            {tasks[i].text}
          </div>
        );
      })}
    </div>
  );
};
export default TaskList;
