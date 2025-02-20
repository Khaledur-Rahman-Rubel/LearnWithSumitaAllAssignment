/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialState, taskReducer } from "../useReducer/taskReducer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext.Provider>
  );
};

export default TasksProvider;

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
