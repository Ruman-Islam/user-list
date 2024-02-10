import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div className="max-w-screen-xl m-auto w-full min-h-screen flex flex-col justify-center items-center">
      <div>
        <h2 className="text-8xl font-extrabold">404</h2>
        <p className="font-bold">Page not found</p>
        <p className="text-sm max-w-[350px] w-full mt-2">
          Sorry, the content that you are looking for doesn&rsquo;t exist.
        </p>
        <Link
          className="block hover:bg-brand__light__cyan duration-300 w-fit py-1 px-4 rounded mt-2 border"
          to="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
