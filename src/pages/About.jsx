import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="flex justify-center gap-x-5 max-w-xs w-full">
        <Link
          to="/deploy-react-gh-pages/"
          className="bg-slate-500 text-white font-bold px-4 py-2 rounded-md mt-5 inline-block"
        >
          To Home
        </Link>
        <Link
          to="/deploy-react-gh-pages/contact/"
          className="bg-green-500 text-white font-bold px-4 py-2 rounded-md mt-5 inline-block"
        >
          To Contact
        </Link>
      </div>
    </div>
  );
};

export default About;
