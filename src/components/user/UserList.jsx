import UserCard from "./UserCard";

export default function UserList({ users, searchTerm }) {
  const filteredItems = users.filter((user) => {
    const fullName = `${user?.firstName} ${user?.lastName}`;
    return fullName.toLowerCase().includes(searchTerm);
  });

  const userList = filteredItems.map((user) => (
    <UserCard key={user.id} user={user} />
  ));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {filteredItems.length > 0 ? (
        userList
      ) : (
        <p className="text-3xl">List is empty!</p>
      )}
    </div>
  );
}
