import TodoList from "../TodoList/TodoList";
import { ChangeEvent, useState } from "react";
import { RootState } from "../../../Store/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Comppnents/Buttons/Button";
import InputField from "../../../Comppnents/Input/Input";
import { addTask, resetAllTasks } from "../../../Store/taskSlice";

const CreateTodo = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const todoList = useSelector((state: RootState) => state.tasks.todoList);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const handleAddTask = (): void => {
    if (!task.trim()) {
      alert("Please enter a task.");
      return;
    }

    dispatch(addTask({ taskName: task, deadline }));
    setTask("");
    setDeadline(0);
  };

  const handleResetAll = (): void => {
    dispatch(resetAllTasks());
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="inputContainer">
          <InputField name="task" placeholder="Enter Task" value={task} onChange={handleChange} />
          <InputField name="deadline" placeholder="Enter Deadline" value={deadline} onChange={handleChange} />
        </div>
        <Button text="Add Task" onClick={handleAddTask} />
      </div>
      <div className="reset">
        <Button text="Reset All" onClick={handleResetAll} />
      </div>
      <TodoList todoList={todoList}/>
    </div>
  );
};

export default CreateTodo;
