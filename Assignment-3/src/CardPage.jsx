import AddEditPage from "./CardPage/AddEditPage";
import CardList from "./CardPage/CardList";
import CardPageHeader from "./CardPage/CardPageHeader";
import { useTasks, useTasksDispatch } from "./context/TasksProvider";

const CardPage = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const handleSort = (category) => {
    dispatch({ type: "SORT_TASKS", category });
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <CardPageHeader />
      {tasks.showAddEditPage && <AddEditPage />}
      <div className="-mx-2 mb-6 flex flex-wrap">
        <CardList
          tasks={tasks.todoT}
          bgColor=" bg-indigo-700"
          titleColor="text-indigo-500"
          onSort={() => handleSort("todoT")}
        />

        <CardList
          tasks={tasks.progressT}
          bgColor="bg-yellow-500"
          titleColor="text-yellow-500"
          onSort={() => handleSort("progressT")}
        />

        <CardList
          tasks={tasks.doneT}
          bgColor="bg-teal-500"
          titleColor="text-teal-500"
          onSort={() => handleSort("doneT")}
        />

        <CardList
          tasks={tasks.reviseT}
          bgColor="bg-rose-500"
          titleColor="text-rose-500"
          onSort={() => handleSort("reviseT")}
        />
      </div>
    </div>
  );
};

export default CardPage;
