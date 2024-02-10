import UserCard from "./UserCard";

export default function UserList({ users, searchTerm }) {
  // Convert searchTerm to lowercase once and remove unnecessary white space between first name and last name from search input if user put much white space more than one. It ensures more accuracy.
  const searchTermLowerCase = searchTerm
    .toLowerCase()
    .replace(/\s{2,}/g, " ")
    .trim();

  // Filter users based on searchTerm
  const filteredUsers = users.filter((user) => {
    const fullName = `${user?.firstName} ${user?.lastName}`.toLowerCase();
    return fullName.includes(searchTermLowerCase);
  });

  // Generate UserCard components for sorted filtered users
  const userList = filteredUsers.map((user) => (
    <UserCard key={user.id} user={user} />
  ));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {filteredUsers.length > 0 ? (
        userList
      ) : (
        <p className="text-3xl">No user found!</p>
      )}
    </div>
  );
}
