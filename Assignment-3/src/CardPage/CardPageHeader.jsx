import { AddSvg } from "../assets/svg/BellSvg";
import { useTasksDispatch } from "../context/TasksProvider";

const CardPageHeader = () => {
  const dispatch = useTasksDispatch();
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Projectify</h2>
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch({ type: "SHOW_ADD_EDIT_PAGE" })}
          className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
        >
          <AddSvg />
          Add
        </button>
      </div>
    </div>
  );
};

export default CardPageHeader;
