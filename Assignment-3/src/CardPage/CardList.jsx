/* eslint-disable react/prop-types */
import CardSvg from "../assets/svg/CardSvg";
import Card from "./Card";

const CardList = ({ tasks, bgColor, titleColor, onSort }) => {
  const totalCard = tasks.length;

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${bgColor} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {tasks.length > 0
              ? `${tasks[0].category} - (${totalCard})`
              : "No Category"}
          </h3>
          <button onClick={() => onSort(tasks)}>
            <CardSvg />
          </button>
        </div>
        <div>
          {tasks.length === 0 ? (
            <p className="text-black">Task List is empty!</p>
          ) : (
            tasks.map((task) => (
              <Card key={task.id} task={task} titleColor={titleColor} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
