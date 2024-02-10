import { HiBuildingOffice } from "react-icons/hi2";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function UserCard({ user }) {
  const { pathname } = useLocation();
  const image = user?.image;
  const email = user?.email;
  const company = user?.company?.name;
  const fullName = `${user?.firstName} ${user?.lastName}`;
  const address = `${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state}`;

  let isLink;
  if (pathname.includes("user-detail")) {
    isLink = (
      <div className="flex w-full items-center px-3 py-3 bg-[#191D26] border-[rgba(206,206,206,0.12)] border-l border-r ">
        <h1 className="mx-3 text-white font-semibold text-lg capitalize">
          {fullName}
        </h1>
      </div>
    );
  } else {
    isLink = (
      <Link
        to={`/user-detail/${user.id}`}
        state={user}
        className="flex w-full items-center px-3 py-3 bg-[#191D26] border-[rgba(206,206,206,0.12)] border-l border-r hover:bg-emerald-500 duration-200 cursor-pointer"
      >
        <h1 className="mx-3 text-white font-semibold text-lg capitalize">
          {fullName}
        </h1>
      </Link>
    );
  }

  return (
    <div className="rounded bg-white text-slate-500 flex-1">
      <figure className="p-6">
        <span className="relative inline-flex h-[90px] w-[90px] items-center justify-center rounded-full text-white shadow-md border">
          <img
            src={image}
            alt={fullName}
            width="90"
            height="90"
            className="w-full h-full rounded-full object-cover"
          />
        </span>
      </figure>
      {isLink}
      <div className="py-4 px-6 font-semibold">
        <div className="flex items-center mt-4 text-gray-700">
          <MdEmail size={25} />
          <h1 className="px-2 text-sm">{email}</h1>
        </div>
        <div className="flex mt-4 text-gray-700">
          <MdLocationOn size={25} />
          <h1 className="px-2 text-sm">{address}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <HiBuildingOffice size={25} />
          <h1 className="px-2 text-sm">{company}</h1>
        </div>
      </div>
    </div>
  );
}
