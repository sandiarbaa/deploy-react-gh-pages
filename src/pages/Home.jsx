import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Home</h1>
      <Link
        to="/deploy-react-gh-pages/about"
        className="bg-slate-500 text-white font-bold px-4 py-2 rounded-md mt-5 inline-block"
      >
        To About
      </Link>
    </div>
  );
};

export default Home;
