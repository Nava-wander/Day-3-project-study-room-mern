import { Link } from "react-router-dom";
import rooms from "../data/rooms";

function Home() {
  const availableRooms = rooms.filter(
    (room) => room.status === "Available"
  );

  const totalSeats = rooms.reduce(
    (total, room) => total + room.capacity,
    0
  );

  const featuredRooms = [
    rooms[0],
    rooms[1],
    rooms[4],
  ];

  return (
    <main className="bg-[#FFF9F0] text-[#172033]">

      {/* =========================================
          HERO
          ========================================= */}

      <section className="min-h-[calc(100vh-82px)] border-b border-[#E9E1D5] bg-[#FFF9F0]">

        <div className="mx-auto flex min-h-[calc(100vh-82px)] max-w-[1280px] items-center px-5 py-8 sm:px-6 lg:px-8">

          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">

            {/* =====================================
                LEFT HERO
                ===================================== */}

            <div className="relative z-10">

              {/* Mini brand */}

              <div className="mb-5 flex items-center gap-3">

                <div className="relative flex h-10 w-10 items-center justify-center">

                  <div className="absolute inset-0 rotate-[-6deg] rounded-[12px] bg-[#FF6B5E] shadow-[3px_3px_0px_#172033]" />

                  <span className="relative text-sm font-black text-white">
                    S
                  </span>

                </div>

                <div>

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FF6B5E]">
                    StudySpace
                  </p>

                  <p className="mt-0.5 text-[11px] font-medium text-[#81796E]">
                    Your campus. Your space.
                  </p>

                </div>

              </div>


              {/* Main heading */}

              <h1 className="max-w-[680px] text-[48px] font-black leading-[0.93] tracking-[-0.055em] text-[#172033] sm:text-[58px] lg:text-[66px]">

                Find your{" "}

                <span className="relative inline-block text-[#FF6B5E]">

                  focus

                  <span className="absolute -bottom-1 left-1 right-0 h-2 rotate-[-1deg] rounded-full bg-[#FFC857]" />

                </span>

                <br />

                <span className="text-[#7657E8]">
                  Book the space.
                </span>

              </h1>


              {/* Description */}

              <p className="mt-5 max-w-[590px] text-sm leading-6 text-[#766E63] sm:text-[15px]">

                A simpler way to discover study rooms,
                check availability, and reserve the right
                space for your next session.

              </p>


              {/* Explore CTA */}

              <div className="mt-6 flex max-w-[580px] rounded-[22px] border border-[#E1D8CC] bg-white p-2 shadow-[0_12px_30px_rgba(23,32,51,0.06)]">

                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[16px] bg-[#FFF8ED] px-4 py-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1EDFF] text-sm font-black text-[#7657E8]">
                    /
                  </div>

                  <div className="min-w-0">

                    <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#A39A8E]">
                      Start exploring
                    </p>

                    <p className="mt-0.5 truncate text-xs font-black text-[#172033] sm:text-sm">
                      Find a room on campus
                    </p>

                  </div>

                </div>

                <Link
                  to="/rooms"
                  className="flex shrink-0 items-center rounded-[16px] bg-[#172033] px-5 text-xs font-black text-white transition hover:bg-[#FF6B5E]"
                >
                  Explore rooms →
                </Link>

              </div>


              {/* Stats */}

              <div className="mt-6 flex max-w-[580px] divide-x divide-[#DDD4C7]">

                <div className="pr-7">

                  <p className="text-2xl font-black text-[#172033]">
                    {rooms.length}
                  </p>

                  <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#8F877C]">
                    Study spaces
                  </p>

                </div>

                <div className="px-7">

                  <p className="text-2xl font-black text-[#287A5A]">
                    {availableRooms.length}
                  </p>

                  <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#8F877C]">
                    Available now
                  </p>

                </div>

                <div className="pl-7">

                  <p className="text-2xl font-black text-[#7657E8]">
                    {totalSeats}
                  </p>

                  <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#8F877C]">
                    Total seats
                  </p>

                </div>

              </div>

            </div>


            {/* =====================================
                RIGHT HERO — CAMPUS MAP
                ===================================== */}

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">

              {/* Background decoration */}

              <div className="absolute -right-4 top-4 h-24 w-24 rounded-full bg-[#FFC857]/25 blur-2xl" />

              <div className="absolute -bottom-4 left-8 h-24 w-24 rounded-full bg-[#FF6B5E]/15 blur-2xl" />


              {/* Map */}

              <div className="relative rotate-[1deg] rounded-[28px] border border-[#E2D9CD] bg-white p-5 shadow-[0_20px_50px_rgba(23,32,51,0.10)]">

                {/* Map heading */}

                <div className="flex items-end justify-between border-b border-[#EAE2D7] pb-4">

                  <div>

                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#9B9387]">
                      Campus map
                    </p>

                    <h2 className="mt-1 text-lg font-black tracking-[-0.02em] text-[#172033]">
                      Today's study spots
                    </h2>

                  </div>

                  <span className="rounded-full bg-[#E7F8F3] px-3 py-1.5 text-[9px] font-black text-[#287A5A]">
                    Live
                  </span>

                </div>


                {/* Map blocks */}

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="relative h-[115px] overflow-hidden rounded-2xl bg-[#F1EDFF] p-4">

                    <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[#D9CEFF]" />

                    <p className="relative text-[8px] font-black uppercase tracking-[0.13em] text-[#7657E8]">
                      Library
                    </p>

                    <p className="relative mt-3 text-2xl font-black text-[#172033]">
                      2
                    </p>

                    <p className="relative text-[9px] text-[#766E63]">
                      rooms open
                    </p>

                    <div className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-white/80">

                      <div className="h-full w-[72%] rounded-full bg-[#7657E8]" />

                    </div>

                  </div>


                  <div className="relative h-[115px] overflow-hidden rounded-2xl bg-[#FFF4D6] p-4">

                    <div className="absolute -bottom-5 -right-5 h-16 w-16 rounded-full bg-[#FFE39A]" />

                    <p className="relative text-[8px] font-black uppercase tracking-[0.13em] text-[#9A7114]">
                      Innovation
                    </p>

                    <p className="relative mt-3 text-2xl font-black text-[#172033]">
                      2
                    </p>

                    <p className="relative text-[9px] text-[#766E63]">
                      rooms open
                    </p>

                    <div className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-white/80">

                      <div className="h-full w-[55%] rounded-full bg-[#FFC857]" />

                    </div>

                  </div>


                  <div className="relative col-span-2 h-[115px] overflow-hidden rounded-2xl bg-[#FFF0ED] p-4">

                    <div className="absolute -bottom-7 right-5 h-20 w-20 rounded-full bg-[#FFD2CC]" />

                    <p className="relative text-[8px] font-black uppercase tracking-[0.13em] text-[#B75A50]">
                      Study hub
                    </p>

                    <p className="relative mt-3 text-2xl font-black text-[#172033]">
                      2
                    </p>

                    <p className="relative text-[9px] text-[#766E63]">
                      rooms open
                    </p>

                    <div className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-white/80">

                      <div className="h-full w-[42%] rounded-full bg-[#FF6B5E]" />

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating recommendation */}

              <div className="absolute -bottom-7 left-[-20px] w-[330px] rotate-[-4deg] rounded-[24px] bg-[#172033] p-5 text-white shadow-[0_18px_40px_rgba(23,32,51,0.25)] sm:left-[-35px]">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#FFC857]">
                      Recommended
                    </p>

                    <h3 className="mt-2 text-base font-black">
                      The Quiet Corner
                    </h3>

                    <p className="mt-1 text-[10px] text-[#C7C3BE]">
                      Central Library · 2nd Floor
                    </p>

                  </div>

                  <span className="rounded-xl bg-[#FF6B5E] px-2.5 py-2 text-[10px] font-black">
                    204
                  </span>

                </div>

                <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">

                  <div>

                    <p className="text-[8px] uppercase tracking-[0.12em] text-[#A8A6A1]">
                      Free seats
                    </p>

                    <p className="mt-1 text-sm font-black">
                      4 / 6
                    </p>

                  </div>

                  <Link
                    to="/book-room"
                    className="rounded-xl bg-white px-4 py-2.5 text-[10px] font-black text-[#172033] transition hover:bg-[#FFC857]"
                  >
                    Reserve
                  </Link>

                </div>

              </div>


              {/* Focus badge */}

              <div className="absolute -right-2 -top-6 flex h-20 w-20 rotate-[7deg] flex-col items-center justify-center rounded-[20px] bg-[#FFC857] shadow-[5px_5px_0px_#172033]">

                <span className="text-xl font-black text-[#172033]">
                  01
                </span>

                <span className="mt-0.5 text-[7px] font-black uppercase tracking-[0.12em] text-[#765718]">
                  Focus
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          DISCOVER YOUR STUDY STYLE
          ========================================= */}

      <section className="border-b border-[#E9E1D5] bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FF6B5E]">
                Pick your vibe
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#172033] sm:text-4xl">
                How do you want to study?
              </h2>

            </div>

            <Link
              to="/rooms"
              className="w-fit text-xs font-black text-[#7657E8] hover:text-[#FF6B5E]"
            >
              See all rooms →
            </Link>

          </div>


          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <Link
              to="/rooms"
              className="group rounded-[24px] bg-[#F1EDFF] p-6 transition hover:-translate-y-1"
            >

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#7657E8]">
                Q
              </span>

              <h3 className="mt-6 text-xl font-black text-[#172033]">
                Quiet focus
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#766E63]">
                Low-noise spaces for deep work, reading, and solo study.
              </p>

              <span className="mt-5 inline-block text-xs font-black text-[#7657E8]">
                Find quiet rooms →
              </span>

            </Link>


            <Link
              to="/rooms"
              className="group rounded-[24px] bg-[#FFF4D6] p-6 transition hover:-translate-y-1"
            >

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#9A7114]">
                G
              </span>

              <h3 className="mt-6 text-xl font-black text-[#172033]">
                Group energy
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#766E63]">
                Bigger tables and collaborative spaces for your team.
              </p>

              <span className="mt-5 inline-block text-xs font-black text-[#9A7114]">
                Find group rooms →
              </span>

            </Link>


            <Link
              to="/rooms"
              className="group rounded-[24px] bg-[#E7F8F3] p-6 transition hover:-translate-y-1"
            >

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#287A5A]">
                P
              </span>

              <h3 className="mt-6 text-xl font-black text-[#172033]">
                Project mode
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#766E63]">
                Projectors, whiteboards, and room to turn ideas into work.
              </p>

              <span className="mt-5 inline-block text-xs font-black text-[#287A5A]">
                Find project rooms →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURED ROOMS
          ========================================= */}

      <section className="bg-[#FFF9F0]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#7657E8]">
                Rooms worth knowing
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#172033] sm:text-4xl">
                Featured study spaces
              </h2>

            </div>

            <Link
              to="/rooms"
              className="w-fit rounded-xl bg-[#172033] px-4 py-2.5 text-xs font-black text-white transition hover:bg-[#FF6B5E]"
            >
              Explore all rooms
            </Link>

          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {featuredRooms.map((room, index) => {

              const colors = [
                "bg-[#F1EDFF]",
                "bg-[#FFF4D6]",
                "bg-[#FFF0ED]",
              ];

              const accentColors = [
                "text-[#7657E8]",
                "text-[#9A7114]",
                "text-[#B75A50]",
              ];

              return (
                <article
                  key={room.id}
                  className="overflow-hidden rounded-[24px] border border-[#E4DBCF] bg-white"
                >

                  <div className={`h-2 ${colors[index]}`} />

                  <div className="p-6">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#9B9387]">
                          Room {room.roomNumber}
                        </p>

                        <h3 className="mt-2 text-xl font-black text-[#172033]">
                          {room.name}
                        </h3>

                      </div>

                      <span
                        className={`rounded-full px-3 py-1.5 text-[9px] font-black ${
                          room.status === "Available"
                            ? "bg-[#E7F8F3] text-[#287A5A]"
                            : "bg-[#FFF0ED] text-[#B75A50]"
                        }`}
                      >
                        {room.status}
                      </span>

                    </div>

                    <p className="mt-3 text-xs text-[#766E63]">
                      {room.building} · {room.floor}
                    </p>

                    <div className={`mt-5 rounded-2xl ${colors[index]} p-4`}>

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#81796E]">
                            Capacity
                          </p>

                          <p className="mt-1 text-lg font-black text-[#172033]">
                            {room.capacity} seats
                          </p>

                        </div>

                        <span className={`text-sm font-black ${accentColors[index]}`}>
                          {room.capacity - room.occupied} free
                        </span>

                      </div>

                    </div>

                    <Link
                      to="/book-room"
                      className="mt-5 block rounded-xl bg-[#172033] py-3 text-center text-xs font-black text-white transition hover:bg-[#FF6B5E]"
                    >
                      Reserve this room →
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
          ========================================= */}

      <section className="px-5 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#172033]">

          <div className="flex flex-col items-start justify-between gap-8 px-7 py-10 sm:px-10 md:flex-row md:items-center lg:px-14">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FFC857]">
                Ready when you are
              </p>

              <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Stop searching for a place.
                Start your next session.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#B8B7B3]">
                Find a room, check availability, and book
                your space in a few simple steps.
              </p>

            </div>

            <Link
              to="/rooms"
              className="shrink-0 rounded-xl bg-[#FF6B5E] px-6 py-3.5 text-xs font-black text-white shadow-[3px_3px_0px_#FFC857] transition hover:-translate-y-0.5 hover:bg-[#7657E8]"
            >
              Find my room →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;