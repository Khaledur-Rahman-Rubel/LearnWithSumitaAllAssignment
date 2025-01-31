/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteButtonSvg from "../assets/svg/DeleteButtonSvg";
import EditButtonSvg from "../assets/svg/EditButtonSvg";
import ExpenseButtonSvg from "./../assets/svg/ExpenseButtonSvg";
import Filtering from "./Filtering";
import Sorting from "./Sorting";

const ExpenseList = ({ Categories, ExpenseTask, onEdit, onDelete }) => {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState([]);

  const handleSort = (a, b) => {
    if (sort === "lowToHigh") {
      return a.amount - b.amount;
    } else if (sort === "highToLow") {
      return b.amount - a.amount;
    }
    return 1;
  };

  const handleFilter = (task) => {
    if (filter.length === 0) return true;
    if (filter.includes(task.category.toLowerCase())) return true;
    return false;
  };

  return (
    <div className="border rounded-md">
      {/* <!-- Header --> */}
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {/* <!-- Icon --> */}
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <ExpenseButtonSvg />
          </div>
          {/* <!-- Text --> */}
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div>
          <Sorting onSortChange={setSort} />

          <Filtering
            Categories={Categories}
            onFilterChange={setFilter}
            selectedFilter={filter}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {ExpenseTask.sort(handleSort)
          .filter(handleFilter)
          .map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center py-2 relative group cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                  {task.category}
                </h3>
                <p className="text-xs text-gray-600">{task.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  BDT {task.amount}
                </p>

                {/* <!-- 3 Dots --> */}
                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  <button
                    type="button"
                    className="hover:text-teal-600"
                    role="button"
                    title="Edit Button"
                    onClick={() => onEdit(task)}
                  >
                    <EditButtonSvg />
                  </button>

                  <button
                    type="button"
                    className="hover:text-red-600"
                    role="button"
                    title="Delete"
                    onClick={() => onDelete(task.id)}
                  >
                    <DeleteButtonSvg />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExpenseList;
