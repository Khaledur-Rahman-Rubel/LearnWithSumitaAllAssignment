/* import {
  doneTasks,
  progressTasks,
  reviseTasks,
  todoTasks,
} from "../data/tasksList";

export const initialState = {
  showAddEditPage: false,
  todoT: todoTasks,
  progressT: progressTasks,
  doneT: doneTasks,
  reviseT: reviseTasks,
  taskToUpdate: null,
  sort: false,
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ADD_EDIT_PAGE":
      return {
        ...state,
        showAddEditPage: true,
        taskToUpdate: action.task || null,
      };

    case "CLOSE_ADD_EDIT_PAGE":
      return { ...state, showAddEditPage: false, taskToUpdate: null };

    case "ADD_TASK":
      switch (action.task.category) {
        case state.todoT[0]?.category ?? "todo":
          return {
            ...state,
            todoT: [...state.todoT, action.task],
          };
        case state.progressT[0]?.category ?? "progress":
          return {
            ...state,
            progressT: [...state.progressT, action.task],
          };
        case state.doneT[0]?.category ?? "done":
          return {
            ...state,
            doneT: [...state.doneT, action.task],
          };
        case state.reviseT[0]?.category ?? "revise":
          return {
            ...state,
            reviseT: [...state.reviseT, action.task],
          };
        default:
          throw new Error("Unknown task category");
      }

    case "EDIT_TASK":
      switch (action.task.category) {
        case state.todoT[0]?.category ?? "todo":
          return {
            ...state,
            todoT: state.todoT.map((todoTask) =>
              todoTask.id === action.task.id ? action.task : todoTask
            ),
          };
        case state.progressT[0]?.category ?? "progress":
          return {
            ...state,
            progressT: state.progressT.map((progressTask) =>
              progressTask.id === action.task.id ? action.task : progressTask
            ),
          };
        case state.doneT[0]?.category ?? "done":
          return {
            ...state,
            doneT: state.doneT.map((doneTask) =>
              doneTask.id === action.task.id ? action.task : doneTask
            ),
          };
        case state.reviseT[0]?.category ?? "revise":
          return {
            ...state,
            reviseT: state.reviseT.map((reviseTask) =>
              reviseTask.id === action.task.id ? action.task : reviseTask
            ),
          };
        default:
          throw new Error("Unknown task category");
      }

    case "DELETE_TASK":
      switch (action.taskCategory) {
        case state.todoT[0]?.category ?? "todo":
          return {
            ...state,
            todoT: state.todoT.filter(
              (todoTask) => todoTask.id !== action.taskId
            ),
          };
        case state.progressT[0]?.category ?? "progress":
          return {
            ...state,
            progressT: state.progressT.filter(
              (progressTask) => progressTask.id !== action.taskId
            ),
          };
        case state.doneT[0]?.category ?? "done":
          return {
            ...state,
            doneT: state.doneT.filter(
              (doneTask) => doneTask.id !== action.taskId
            ),
          };
        case state.reviseT[0]?.category ?? "revise":
          return {
            ...state,
            reviseT: state.reviseT.filter(
              (reviseTask) => reviseTask.id !== action.taskId
            ),
          };
        default:
          console.error(`Failed to sort tasks: Unknown task category`);
          throw new Error("Unknown task category");
      }

    case "SORT_TASKS": {
      const { category } = action;
      const tasks = state[category];

      if (tasks.length === 0) {
        console.error("No tasks available to sort");
        return state;
      }

      const sortedTasks = state.sort
        ? [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date))
        : [...tasks].sort((a, b) => new Date(b.date) - new Date(a.date));

      return {
        ...state,
        sort: !state.sort,
        [category]: sortedTasks,
      };
    }

    case "SEARCH_TASK": {
      const { taskTitle } = action;
      const searchText = taskTitle.toLowerCase();

      if (!searchText) {
        return {
          ...state,
          todoT: todoTasks,
          progressT: progressTasks,
          doneT: doneTasks,
          reviseT: reviseTasks,
        };
      }

      const filteredTodoT = state.todoT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );
      const filteredProgressT = state.progressT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );
      const filteredDoneT = state.doneT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );
      const filteredReviseT = state.reviseT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );

      return {
        ...state,
        todoT: filteredTodoT,
        progressT: filteredProgressT,
        doneT: filteredDoneT,
        reviseT: filteredReviseT,
      };
    }

    default:
      throw new Error("Unknown action type");
  }
};
 */
import {
  doneTasks,
  progressTasks,
  reviseTasks,
  todoTasks,
} from "../data/tasksList";

export const initialState = {
  showAddEditPage: false,
  todoT: todoTasks,
  progressT: progressTasks,
  doneT: doneTasks,
  reviseT: reviseTasks,
  originalTodoT: todoTasks, // Added original tasks
  originalProgressT: progressTasks,
  originalDoneT: doneTasks,
  originalReviseT: reviseTasks,
  taskToUpdate: null,
  sort: false,
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ADD_EDIT_PAGE":
      return {
        ...state,
        showAddEditPage: true,
        taskToUpdate: action.task || null,
      };

    case "CLOSE_ADD_EDIT_PAGE":
      return { ...state, showAddEditPage: false, taskToUpdate: null };

    case "ADD_TASK":
      switch (action.task.category) {
        case state.todoT[0]?.category ?? "todo":
          return {
            ...state,
            todoT: [...state.todoT, action.task],
            originalTodoT: [...state.originalTodoT, action.task], // Update original
          };
        case state.progressT[0]?.category ?? "progress":
          return {
            ...state,
            progressT: [...state.progressT, action.task],
            originalProgressT: [...state.originalProgressT, action.task], // Update original
          };
        case state.doneT[0]?.category ?? "done":
          return {
            ...state,
            doneT: [...state.doneT, action.task],
            originalDoneT: [...state.originalDoneT, action.task], // Update original
          };
        case state.reviseT[0]?.category ?? "revise":
          return {
            ...state,
            reviseT: [...state.reviseT, action.task],
            originalReviseT: [...state.originalReviseT, action.task], // Update original
          };
        default:
          throw new Error("Unknown task category");
      }

    case "EDIT_TASK":
      switch (action.task.category) {
        case state.todoT[0]?.category ?? "todo":
          return {
            ...state,
            todoT: state.todoT.map((todoTask) =>
              todoTask.id === action.task.id ? action.task : todoTask
            ),
            originalTodoT: state.originalTodoT.map((todoTask) =>
              todoTask.id === action.task.id ? action.task : todoTask
            ),
          };
        case state.progressT[0]?.category ?? "progress":
          return {
            ...state,
            progressT: state.progressT.map((progressTask) =>
              progressTask.id === action.task.id ? action.task : progressTask
            ),
            originalProgressT: state.originalProgressT.map((progressTask) =>
              progressTask.id === action.task.id ? action.task : progressTask
            ),
          };
        case state.doneT[0]?.category ?? "done":
          return {
            ...state,
            doneT: state.doneT.map((doneTask) =>
              doneTask.id === action.task.id ? action.task : doneTask
            ),
            originalDoneT: state.originalDoneT.map((doneTask) =>
              doneTask.id === action.task.id ? action.task : doneTask
            ),
          };
        case state.reviseT[0]?.category ?? "revise":
          return {
            ...state,
            reviseT: state.reviseT.map((reviseTask) =>
              reviseTask.id === action.task.id ? action.task : reviseTask
            ),
            originalReviseT: state.originalReviseT.map((reviseTask) =>
              reviseTask.id === action.task.id ? action.task : reviseTask
            ),
          };
        default:
          throw new Error("Unknown task category");
      }

    case "DELETE_TASK":
      switch (action.taskCategory) {
        case state.todoT[0]?.category ?? "todo":
          return {
            ...state,
            todoT: state.todoT.filter(
              (todoTask) => todoTask.id !== action.taskId
            ),
            originalTodoT: state.originalTodoT.filter(
              (todoTask) => todoTask.id !== action.taskId
            ),
          };
        case state.progressT[0]?.category ?? "progress":
          return {
            ...state,
            progressT: state.progressT.filter(
              (progressTask) => progressTask.id !== action.taskId
            ),
            originalProgressT: state.originalProgressT.filter(
              (progressTask) => progressTask.id !== action.taskId
            ),
          };
        case state.doneT[0]?.category ?? "done":
          return {
            ...state,
            doneT: state.doneT.filter(
              (doneTask) => doneTask.id !== action.taskId
            ),
            originalDoneT: state.originalDoneT.filter(
              (doneTask) => doneTask.id !== action.taskId
            ),
          };
        case state.reviseT[0]?.category ?? "revise":
          return {
            ...state,
            reviseT: state.reviseT.filter(
              (reviseTask) => reviseTask.id !== action.taskId
            ),
            originalReviseT: state.originalReviseT.filter(
              (reviseTask) => reviseTask.id !== action.taskId
            ),
          };
        default:
          console.error(`Failed to sort tasks: Unknown task category`);
          throw new Error("Unknown task category");
      }

    case "SORT_TASKS": {
      const { category } = action;
      const tasks = state[category];

      if (tasks.length === 0) {
        console.error("No tasks available to sort");
        return state;
      }

      const sortedTasks = state.sort
        ? [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date))
        : [...tasks].sort((a, b) => new Date(b.date) - new Date(a.date));

      return {
        ...state,
        sort: !state.sort,
        [category]: sortedTasks,
      };
    }

    case "SEARCH_TASK": {
      const { taskTitle } = action;
      const searchText = taskTitle.toLowerCase();

      if (!searchText) {
        return {
          ...state,
          todoT: state.originalTodoT,
          progressT: state.originalProgressT,
          doneT: state.originalDoneT,
          reviseT: state.originalReviseT,
        };
      }

      const filteredTodoT = state.originalTodoT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );
      const filteredProgressT = state.originalProgressT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );
      const filteredDoneT = state.originalDoneT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );
      const filteredReviseT = state.originalReviseT.filter((task) =>
        task.title.toLowerCase().includes(searchText)
      );

      return {
        ...state,
        todoT: filteredTodoT,
        progressT: filteredProgressT,
        doneT: filteredDoneT,
        reviseT: filteredReviseT,
      };
    }

    default:
      throw new Error("Unknown action type");
  }
};
