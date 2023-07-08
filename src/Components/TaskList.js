const TaskList = (props) => {
  const { tasks } = props;
  return (
    <div>
      {tasks.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
};
export default TaskList;
