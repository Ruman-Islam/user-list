import { CiSearch } from "react-icons/ci";

export default function ActionCenter({ searchTerm, onSearch }) {
  return (
    <div className="flex justify-between gap-4">
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

      <div className="flex">
        <select
          className="cursor-pointer rounded-md border py-2 text-center bg-gray-800 border-none text-white outline-none"
          name="sortBy"
          id="sortBy"
          // onChange={(e) => onSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="year_asc">Publication Year (Oldest)</option>
          <option value="year_desc">Publication Year (Newest)</option>
        </select>
      </div>
    </div>
  );
}
