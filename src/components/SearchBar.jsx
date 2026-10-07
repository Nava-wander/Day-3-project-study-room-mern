function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative">

      <div className="pointer-events-none absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-[#F1EDFF] text-sm font-black text-[#7657E8]">
        /
      </div>

      <input
        type="text"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        placeholder="Search by room name, building or type..."
        className="w-full rounded-2xl border border-[#DED6C9] bg-white py-4 pl-16 pr-5 text-sm font-medium text-[#172033] outline-none transition placeholder:text-[#A39A8E] focus:border-[#7657E8] focus:ring-4 focus:ring-[#F1EDFF]"
      />

    </div>
  );
}

export default SearchBar;