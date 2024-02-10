import { useState } from "react";

export default function AddUserModal({ onAddUser, onClose }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: {
      name: "",
    },
    address: {
      address: "",
      city: "",
      state: "",
    },
    image: "",
  });

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Transforming to dynamic and nested object to match with the user object pattern above
    setUser((prevUser) => {
      const updatedUser = { ...prevUser };
      const propertyPath = name.split(".");
      let nestedObj = updatedUser;
      for (let i = 0; i < propertyPath.length - 1; i++) {
        nestedObj = nestedObj[propertyPath[i]];
      }
      nestedObj[propertyPath[propertyPath.length - 1]] = value;
      return updatedUser;
    });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = () => {
      setUser({ ...user, image: reader.result });
    };
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddUser(user);
        }}
        className="mx-2 my-10 w-full max-w-[540px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-5 h-fit"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New User
        </h2>

        <div className="space-y-5 text-white lg:space-y-10">
          <div className="flex justify-between flex-wrap md:flex-nowrap gap-4">
            <div className="space-y-2 lg:space-y-3 w-full">
              <label htmlFor="firstName">First name</label>
              <input
                className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 lg:space-y-3 w-full">
              <label htmlFor="lastName">Last name</label>
              <input
                className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2 lg:space-y-3 w-full">
            <label htmlFor="email">Email</label>
            <input
              className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2 lg:space-y-3 w-full">
            <label htmlFor="company">Company</label>
            <input
              className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="company"
              id="company"
              placeholder="XYZ"
              value={user.company.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between flex-wrap md:flex-nowrap gap-4">
            <div className="space-y-2 lg:space-y-3 w-full">
              <label htmlFor="address">Address</label>
              <input
                className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="address"
                id="address"
                placeholder="6463 Demo Street"
                value={user.address.address}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 lg:space-y-3 w-full">
              <label htmlFor="city">City</label>
              <input
                className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="city"
                id="city"
                placeholder="Valley Drive"
                value={user.address.city}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 lg:space-y-3 w-full">
              <label htmlFor="state">State</label>
              <input
                className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="state"
                id="state"
                placeholder="AL"
                value={user.address.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2 lg:space-y-3 w-full">
            <label htmlFor="avatar">Avatar</label>
            <input
              className="outline-none block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="file"
              name="file"
              id="file"
              onChange={handleFile}
            />
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Add user
          </button>
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
