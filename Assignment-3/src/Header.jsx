import BellSvg, { MassegeSvg, ViewBoxSvg } from "./assets/svg/BellSvg";
import { useTasksDispatch } from "./context/TasksProvider";

const Header = () => {
  const dispatch = useTasksDispatch();
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">
        <ViewBoxSvg />
      </button>
      <div className="mx-4 flex-1">
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "SEARCH_TASK", taskTitle: e.target.value })
          }
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <BellSvg />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <MassegeSvg />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
