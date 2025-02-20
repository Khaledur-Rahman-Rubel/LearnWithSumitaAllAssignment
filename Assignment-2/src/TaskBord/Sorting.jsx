/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuButtonSvg from "../assets/svg/MenuButtonSvg";

const Sorting = ({ onSortChange }) => {
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const handleSort = (value) => {
    onSortChange(value);
    setIsSortingOpen(false);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsSortingOpen(!isSortingOpen)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <MenuButtonSvg />
        </button>
      </div>
      {isSortingOpen && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleSort("lowToHigh")}
              type="button"
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Low to High
            </button>
            <button
              onClick={() => handleSort("highToLow")}
              type="button"
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorting;
