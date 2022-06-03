import React from "react";

import Image from "../image";

const Header = () => {
  const renderRightSideComponent = () => {
    return (
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-gray-800">Sign in</button>
        <button
          className="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          Get Started
        </button>
      </div>
    );
  };

  return (
    <nav className="flex flex-row justify-between w-full bg-white px-8 py-5">
      <div className="flex items-center space-x-3">
        <Image
          className="h-7"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <h3 className="font-semibold text-lg">
          {" "}
          O<span className="hidden sm:inline">rientation </span>H
          <span className="hidden sm:inline">ackathon</span>{" "}
        </h3>
      </div>

      {renderRightSideComponent()}
    </nav>
  );
};

export default Header;
