import { CiSearch } from "react-icons/ci";

export default function ActionCenter({
  searchTerm,
  onSearch,
  onSort,
  onOpenModal,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
        <input
          type="search"
          id="search-dropdown"
          className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
          placeholder="Search"
          value={searchTerm}
          onChange={onSearch}
          required
        />
        <button
          type="button"
          className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
        >
          <CiSearch />
        </button>
      </div>

      <div className="flex md:max-w-[350px] gap-2 w-full rounded-lg">
        <button
          className="rounded-md bg-blue-500 hover:bg-blue-600 duration-200 px-3.5 py-2.5 text-sm font-semibold w-full"
          onClick={onOpenModal}
        >
          Add User
        </button>
        <div className="w-full">
          <select
            className="cursor-pointer rounded-md border py-2 text-center bg-gray-800 border-none text-white outline-none w-full"
            name="sortBy"
            id="sortBy"
            defaultValue=""
            onChange={(e) => onSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="email_asc">Email (A-Z)</option>
            <option value="company_asc">Company (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
