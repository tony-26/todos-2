import _ from "lodash";
const TaskList = (props) => {
  const { i, tasks, setTasks } = props;
  const onChangeHandler = () => {
    const copy = _.cloneDeep(tasks);
    copy[i].isComplete = !copy[i].isComplete;
    setTasks(copy);
  };
  return (
    <div>
      {tasks.map((e, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={tasks[i].isComplete}
              onChange={onChangeHandler}
            />
            {tasks[i].text}
          </div>
        );
      })}
    </div>
  );
};
export default TaskList;
