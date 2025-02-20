/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterButtonSvg from "../assets/svg/FilterButtonSvg";

const Filtering = ({ Categories, onFilterChange, selectedFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      onFilterChange([...selectedFilter, value.toLowerCase()]);
    } else {
      const updatedFilter = selectedFilter.filter(
        (filter) => filter !== value.toLowerCase()
      );
      onFilterChange(updatedFilter);
    }
    setIsFilterOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <FilterButtonSvg />
        </button>
      </div>
      {isFilterOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {Categories.map((categori, index) => (
              <label
                key={index}
                className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                  id={`filter-option-1-${index}`}
                  onChange={handleFilterChange}
                  value={categori}
                  checked={selectedFilter.includes(categori.toLowerCase())}
                />

                <span className="ml-2">{categori}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filtering;
