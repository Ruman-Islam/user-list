import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import UserCard from "../../components/user/UserCard";

export default function UserDetailScreen() {
  const { state } = useLocation();

  return (
    <section className="w-full lg:w-5/12 mx-auto mt-20 px-4 flex flex-col gap-2">
      <Link to="/">
        <IoArrowBackCircleOutline size={30} />
      </Link>
      <UserCard user={state} />
    </section>
  );
}
