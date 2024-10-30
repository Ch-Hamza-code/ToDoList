import React from "react";
import { useDispatch } from "react-redux";
import { TodoTaskProps } from "./TodoTask.types";
import { completeTask } from "../../../../Store/taskSlice";
import Button from "../../../../Comppnents/Buttons/Button";



const TodoTask: React.FC<TodoTaskProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(completeTask(task?.taskName));
  };

  return (
    <div className="task">
      <div className="content">
        <span>{task?.taskName}</span>
        <span>{task?.deadline}</span>
      </div>
      <Button text="X" onClick={handleCompleteTask}/>
    </div>
  );
};

export default TodoTask;
