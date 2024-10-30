import TodoTask from "./TodoTask/TodoTask";
import { ITask } from "../../../interfaces";
import { TodoListProps } from "./TodoList.types";


const TodoList: React.FC<TodoListProps> = ({todoList}) => {
    
  return (
    <div className="App">
      <div className="todoList">
        {todoList?.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
