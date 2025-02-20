import { useState } from "react";
import { useTasks, useTasksDispatch } from "../context/TasksProvider";

const AddEditPage = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const [task, setTask] = useState(
    tasks.taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
      category: "",
    }
  );
  const isAdd = tasks.taskToUpdate === null;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTask({
      ...task,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: isAdd ? "ADD_TASK" : "EDIT_TASK", task });
    dispatch({ type: "CLOSE_ADD_EDIT_PAGE" });
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={task.title}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-xs focus:border-green-500 focus:outline-hidden focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                onChange={handleChange}
                rows="3"
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-xs focus:border-green-500 focus:outline-hidden focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={task.date}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-xs focus:border-green-500 focus:outline-hidden focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={task.category}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-xs focus:border-green-500 focus:outline-hidden focus:ring-2 focus:ring-green-500"
              >
                <option>Category</option>
                <option value="Todo">To-Do</option>
                <option value="InProgress">On Progress</option>
                <option value="Done">Done</option>
                <option value="Revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => dispatch({ type: "CLOSE_ADD_EDIT_PAGE" })}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-green-700 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditPage;
