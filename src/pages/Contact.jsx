import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="flex justify-center gap-x-5 max-w-xs w-full">
        <Link
          to="/deploy-react-gh-pages/"
          className="bg-slate-500 text-white font-bold px-4 py-2 rounded-md mt-5 inline-block"
        >
          To Home
        </Link>
        <Link
          to="/deploy-react-gh-pages/about/"
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-5 inline-block"
        >
          To About
        </Link>
      </div>
    </div>
  );
};

export default Contact;
