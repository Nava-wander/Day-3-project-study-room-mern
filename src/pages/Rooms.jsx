import { useEffect, useState } from "react";

import rooms from "../data/rooms";

import RoomCard from "../components/RoomCard";
import SearchBar from "../components/SearchBar";

function Rooms() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] =
    useState("All");

  useEffect(() => {
    document.title = "Study Rooms | StudySpace";
  }, []);

  const filteredRooms = rooms.filter((room) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      room.name.toLowerCase().includes(searchValue) ||
      room.building.toLowerCase().includes(searchValue) ||
      room.type.toLowerCase().includes(searchValue) ||
      room.roomNumber.toLowerCase().includes(searchValue);

    const matchesType =
      typeFilter === "All" ||
      room.type === typeFilter;

    const matchesAvailability =
      availabilityFilter === "All" ||
      (availabilityFilter === "Available"
        ? room.status === "Available"
        : room.status === "Occupied");

    return (
      matchesSearch &&
      matchesType &&
      matchesAvailability
    );
  });

  const availableCount = rooms.filter(
    (room) => room.status === "Available"
  ).length;

  const occupiedCount = rooms.filter(
    (room) => room.status === "Occupied"
  ).length;

  const totalSeats = rooms.reduce(
    (total, room) => total + room.capacity,
    0
  );

  const freeSeats = rooms.reduce(
    (total, room) => total + (room.capacity - room.occupied),
    0
  );

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All");
    setAvailabilityFilter("All");
  };

  const filtersActive =
    search !== "" ||
    typeFilter !== "All" ||
    availabilityFilter !== "All";

  return (
    <main className="min-h-screen bg-[#FFF9F0]">

      {/* =========================================
          PAGE HEADER
          ========================================= */}

      <section className="border-b border-[#E9E1D5] bg-white">

        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="rounded-full bg-[#F1EDFF] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#7657E8]">
                  Campus rooms
                </span>

                <span className="text-[#C8BFB3]">
                  /
                </span>

                <span className="text-[10px] font-bold text-[#9B9387]">
                  Find your space
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#172033] sm:text-5xl lg:text-[56px]">

                Find a room that
                <span className="text-[#7657E8]">
                  {" "}fits your focus.
                </span>

              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#766E63] sm:text-base">

                Search by room, building, or study style.
                Compare capacity and availability before
                choosing your space.

              </p>

            </div>


            {/* =====================================
                QUICK NUMBERS
                ===================================== */}

            <div className="grid grid-cols-3 gap-2 sm:gap-3">

              <div className="min-w-[82px] rounded-2xl bg-[#F1EDFF] p-4">

                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#7657E8]">
                  Rooms
                </p>

                <p className="mt-1 text-2xl font-black text-[#172033]">
                  {rooms.length}
                </p>

              </div>

              <div className="min-w-[82px] rounded-2xl bg-[#E7F8F3] p-4">

                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#287A5A]">
                  Open
                </p>

                <p className="mt-1 text-2xl font-black text-[#172033]">
                  {availableCount}
                </p>

              </div>

              <div className="min-w-[82px] rounded-2xl bg-[#FFF4D6] p-4">

                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#9A7114]">
                  Free seats
                </p>

                <p className="mt-1 text-2xl font-black text-[#172033]">
                  {freeSeats}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          SEARCH AREA
          ========================================= */}

      <section className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">

        <div className="rounded-[26px] border border-[#E4DBCF] bg-white p-5 shadow-[0_8px_25px_rgba(23,32,51,0.045)] sm:p-6">

          <div className="flex items-center gap-3">

            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0ED] text-sm font-black text-[#FF6B5E] sm:flex">
              /
            </div>

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#9B9387]">
                Find your room
              </p>

              <p className="mt-1 text-xs font-semibold text-[#766E63]">
                Search and narrow down the spaces below.
              </p>

            </div>

          </div>


          <div className="mt-5">

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

          </div>


          {/* Filters */}

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">

            <div>

              <label
                htmlFor="space-type"
                className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#9B9387]"
              >
                Space type
              </label>

              <select
                id="space-type"
                value={typeFilter}
                onChange={(event) =>
                  setTypeFilter(event.target.value)
                }
                className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3 text-xs font-bold text-[#172033] outline-none transition focus:border-[#7657E8] focus:ring-4 focus:ring-[#F1EDFF]"
              >
                <option value="All">
                  All types
                </option>

                <option value="Quiet">
                  Quiet
                </option>

                <option value="Discussion">
                  Discussion
                </option>

                <option value="Group">
                  Group
                </option>

                <option value="Project">
                  Project
                </option>

                <option value="Presentation">
                  Presentation
                </option>
              </select>

            </div>


            <div>

              <label
                htmlFor="availability"
                className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#9B9387]"
              >
                Availability
              </label>

              <select
                id="availability"
                value={availabilityFilter}
                onChange={(event) =>
                  setAvailabilityFilter(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3 text-xs font-bold text-[#172033] outline-none transition focus:border-[#7657E8] focus:ring-4 focus:ring-[#F1EDFF]"
              >
                <option value="All">
                  All rooms
                </option>

                <option value="Available">
                  Available now
                </option>

                <option value="Occupied">
                  Currently occupied
                </option>
              </select>

            </div>


            <div className="flex items-end">

              <button
                type="button"
                onClick={clearFilters}
                disabled={!filtersActive}
                className={`w-full rounded-xl px-5 py-3 text-xs font-black transition sm:w-auto ${
                  filtersActive
                    ? "bg-[#172033] text-white shadow-[2px_2px_0px_#D9D0C3] hover:-translate-y-0.5 hover:bg-[#FF6B5E]"
                    : "cursor-not-allowed bg-[#F2EEE7] text-[#B4ACA1]"
                }`}
              >
                Clear
              </button>

            </div>

          </div>


          {/* Result information */}

          <div className="mt-5 flex flex-col gap-3 border-t border-[#EEE8DE] pt-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-[#766E63]">

              Showing{" "}

              <span className="font-black text-[#172033]">
                {filteredRooms.length}
              </span>

              {" "}of{" "}

              <span className="font-black text-[#172033]">
                {rooms.length}
              </span>

              {" "}study rooms

            </p>


            <div className="flex flex-wrap items-center gap-2">

              {filtersActive && (
                <span className="rounded-full bg-[#F1EDFF] px-3 py-1.5 text-[9px] font-black text-[#7657E8]">
                  Filters active
                </span>
              )}

              <span className="rounded-full bg-[#E7F8F3] px-3 py-1.5 text-[9px] font-black text-[#287A5A]">
                {availableCount} open
              </span>

              <span className="rounded-full bg-[#FFF0ED] px-3 py-1.5 text-[9px] font-black text-[#B75A50]">
                {occupiedCount} occupied
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ROOM COLLECTION
          ========================================= */}

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">

        <div className="mb-5 flex items-end justify-between">

          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#FF6B5E]">
              Available spaces
            </p>

            <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-[#172033]">
              Choose your room
            </h2>

          </div>

          <p className="hidden text-[10px] font-bold text-[#9B9387] sm:block">
            {totalSeats} total seats across campus
          </p>

        </div>


        {filteredRooms.length > 0 ? (

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredRooms.map((room) => (

              <RoomCard
                key={room.id}
                roomNumber={room.roomNumber}
                name={room.name}
                building={room.building}
                floor={room.floor}
                capacity={room.capacity}
                occupied={room.occupied}
                type={room.type}
                status={room.status}
                amenities={room.amenities}
              />

            ))}

          </div>

        ) : (

          <div className="rounded-[28px] border border-dashed border-[#D8CFC2] bg-white px-6 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF0ED] text-2xl font-black text-[#FF6B5E]">
              ?
            </div>

            <h2 className="mt-5 text-xl font-black text-[#172033]">
              No rooms found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#766E63]">

              Try another room name, building,
              or space type. There may be a better
              study space waiting for you.

            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-[#172033] px-5 py-3 text-xs font-black text-white shadow-[2px_2px_0px_#D9D0C3] transition hover:-translate-y-0.5 hover:bg-[#FF6B5E]"
            >
              Reset search
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default Rooms;