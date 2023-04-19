import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="border-2 border-gray-200 p-4 rounded-lg">
      <div className="bg-gray-50 mb-4 px-3 py-2 text-sm rounded-md flex justify-center items-middle text-gray-800">
        {count}
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={handleReset}
          className="transition-all basis-1/2 mr-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleIncrement}
          className="transition-all basis-1/2 ml-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
