const TaskList = (props) => {
  const { i, tasks, setTasks } = props;
  return (
    <div>
      {tasks.map((e, i) => {
        return <div key={i}>{tasks[i].text}</div>;
      })}
    </div>
  );
};
export default TaskList;
