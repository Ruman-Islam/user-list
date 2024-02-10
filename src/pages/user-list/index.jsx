import { useEffect, useState } from "react";
import Spinner from "../../components/common/Spinner.jsx";
import ActionCenter from "../../components/user/ActionCenter.jsx";
import AddUserModal from "../../components/user/AddUserModal.jsx";
import UserList from "../../components/user/UserList.jsx";

export default function UserListScreen() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        const users = [...data.users];

        // Sorting initially with ascending name
        sortUsers(users, "name_asc");
        setUsers(users);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Sorting function
  const sortUsers = (sortingUsers, sortBy) => {
    sortingUsers.sort((a, b) => {
      if (sortBy === "name_asc") {
        const fullNameA =
          `${a.firstName?.trim()} ${a.lastName?.trim()}`.toLowerCase();
        const fullNameB =
          `${b.firstName?.trim()} ${b.lastName?.trim()}`.toLowerCase();

        return fullNameA < fullNameB ? -1 : 1;
      } else if (sortBy === "email_asc") {
        return a.email < b.email ? -1 : 1;
      } else if (sortBy === "company_asc") {
        return a?.company?.name < b?.company?.name ? -1 : 1;
      }
    });
  };

  // Handlers
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (sortBy) => {
    const sortingUsers = [...users];
    sortUsers(sortingUsers, sortBy);
    setUsers(sortingUsers);
  };

  const handleAddUser = (newUser) => {
    const newUsers = [...users, newUser];
    sortUsers(newUsers, "name_asc");
    setUsers(newUsers);
    handleCloseModal();
  };

  const handleOpenModal = () => setShowAddModal(true);

  const handleCloseModal = () => setShowAddModal(false);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="mt-20">
      {showAddModal && (
        <AddUserModal onAddUser={handleAddUser} onClose={handleCloseModal} />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-12">
          <ActionCenter
            searchTerm={searchTerm}
            onSearch={handleSearch}
            onSort={handleSort}
            onOpenModal={handleOpenModal}
          />
          <br />

          <UserList users={users} searchTerm={searchTerm} />
        </div>
      </div>
    </section>
  );
}
