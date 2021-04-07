import { useState } from "react";

const SearchForm = ({ searchWeather }: any) => {
  const [value, setValue] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchWeather(value);
        }}
      >
        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <svg
              className=" w-5 text-gray-600 h-5 cursor-pointer"
              type="submit"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="search for images"
            x-model="q"
            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
