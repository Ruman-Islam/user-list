import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/common/Spinner";
import UserCard from "../../components/user/UserCard";

export default function UserDetailScreen() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="w-full lg:w-5/12 mx-auto mt-20 px-4 flex flex-col gap-2">
      <Link to="/">
        <IoArrowBackCircleOutline size={30} />
      </Link>
      <UserCard user={user} />
    </section>
  );
}
