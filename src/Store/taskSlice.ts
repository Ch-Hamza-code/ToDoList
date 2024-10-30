import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../interfaces";

interface TaskState {
  todoList: ITask[];
}

const initialState: TaskState = {
  todoList: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.todoList.push(action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(task => task.taskName !== action.payload);
    },
    resetAllTasks: state => {
      state.todoList = [];
    },
  },
});

export const { addTask, completeTask, resetAllTasks } = taskSlice.actions;
export default taskSlice.reducer;
