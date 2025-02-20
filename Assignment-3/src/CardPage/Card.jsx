import { DeleteSvg, EditSvg } from "../assets/svg/CardSvg";
import { useTasksDispatch } from "../context/TasksProvider";

/* eslint-disable react/prop-types */
const Card = ({ task, titleColor }) => {
  const dispatch = useTasksDispatch();
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className={`mb-2 flex-1 font-semibold ${titleColor}`}>
          {task.title}
        </h4>

        <div className="flex gap-2">
          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TASK",
                taskId: task.id,
                taskCategory: task.category,
              })
            }
          >
            <DeleteSvg />
          </button>
          <button
            onClick={() => dispatch({ type: "SHOW_ADD_EDIT_PAGE", task })}
          >
            <EditSvg />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{task.date}</p>
    </div>
  );
};

export default Card;
