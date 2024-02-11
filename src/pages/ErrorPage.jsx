import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-semibold text-red-500 italic">Error</h1>
    </div>
  );
};

export default ErrorPage;
