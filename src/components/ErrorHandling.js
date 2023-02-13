import { Link, useRouteError } from "react-router-dom";
import { error_image } from "../config";

const ErrorHandling = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="ml-[400px] mt-[200px]">
        <img src={error_image} className="w-40 h-32" />
        <h1 className="font-bold text-2xl mt-2">404 Path is not found</h1>
        <p className="mt-2">
          Check if there is a typo in{" "}
          <span className="text-blue-700">{err.data}</span>
        </p>
        <h2 className="mt-2">
          If spelling is correct,{" "}
          <Link to="/" className="text-blue-500">
            Go to home
          </Link>
        </h2>
        <h2 className="mt-2">DNS_PROBE_FINISHED_NXDOMAIN</h2>
      </div>
    </>
  );
};
export default ErrorHandling;
