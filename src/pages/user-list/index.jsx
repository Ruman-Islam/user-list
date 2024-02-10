import { useEffect, useState } from "react";
import Spinner from "../../components/common/Spinner.jsx";
import ActionCenter from "../../components/user/ActionCenter.jsx";
import UserList from "../../components/user/UserList.jsx";

export default function UserListScreen() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Handlers
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="mt-20">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-12">
          <ActionCenter onSearch={handleSearch} searchTerm={searchTerm} />
          <br />

          <UserList users={users} searchTerm={searchTerm} />
        </div>
      </div>
    </section>
  );
}
