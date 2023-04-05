"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="min-h-screen dark:bg-gray-900 dark:text-gray-100 text-gray-900 transition-colors duration-500">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
