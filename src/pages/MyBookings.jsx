import { Link } from "react-router-dom";

import BookingCard from "../components/BookingCard";

function MyBookings({ bookings }) {
  return (
    <main className="min-h-screen bg-[#FFF9F0]">

      {/* =========================================
          HEADER
          ========================================= */}

      <section className="border-b border-[#E9E1D5] bg-white">

        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="rounded-full bg-[#E7F8F3] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#287A5A]">
                  Your reservations
                </span>

                <span className="text-[#C8BFB3]">
                  /
                </span>

                <span className="text-[10px] font-bold text-[#9B9387]">
                  My bookings
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#172033] sm:text-5xl lg:text-[56px]">

                Your spaces,
                <span className="text-[#7657E8]">
                  {" "}all in one place.
                </span>

              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#766E63] sm:text-base">

                Keep track of the study rooms you've
                reserved and the details for each session.

              </p>

            </div>


            {/* Booking count */}

            <div className="rounded-[24px] bg-[#F1EDFF] p-5">

              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#7657E8]">
                Total bookings
              </p>

              <div className="mt-1 flex items-end gap-2">

                <p className="text-4xl font-black text-[#172033]">
                  {bookings.length}
                </p>

                <p className="pb-1 text-[10px] font-bold text-[#81796E]">
                  reservation
                  {bookings.length === 1 ? "" : "s"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BOOKINGS
          ========================================= */}

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

        {bookings.length > 0 ? (

          <>

            {/* Section heading */}

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#FF6B5E]">
                  Upcoming sessions
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-[#172033]">
                  Your bookings
                </h2>

              </div>

              <Link
                to="/book-room"
                className="w-fit rounded-xl bg-[#172033] px-4 py-2.5 text-xs font-black text-white transition hover:bg-[#FF6B5E]"
              >
                Book another room →
              </Link>

            </div>


            {/* Booking cards */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {bookings.map((booking) => (

                <BookingCard
                  key={booking.id}
                  studentName={booking.studentName}
                  roomName={booking.roomName}
                  roomNumber={booking.roomNumber}
                  building={booking.building}
                  date={booking.date}
                  time={booking.time}
                  students={booking.students}
                  status={booking.status}
                />

              ))}

            </div>

          </>

        ) : (

          /* =====================================
             EMPTY STATE
             ===================================== */

          <div className="mx-auto max-w-3xl rounded-[30px] border border-[#E4DBCF] bg-white px-6 py-16 text-center shadow-[0_10px_30px_rgba(23,32,51,0.04)]">

            <div className="mx-auto flex h-20 w-20 rotate-[-3deg] items-center justify-center rounded-[24px] bg-[#FFF4D6] text-2xl font-black text-[#9A7114] shadow-[4px_4px_0px_#172033]">
              S
            </div>

            <p className="mt-7 text-[9px] font-black uppercase tracking-[0.16em] text-[#FF6B5E]">
              Nothing booked yet
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#172033]">
              Your next study session starts here.
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#766E63]">

              You haven't reserved a study room yet.
              Explore the campus spaces and find one
              that works for your next session.

            </p>


            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/rooms"
                className="rounded-xl bg-[#172033] px-5 py-3 text-xs font-black text-white shadow-[3px_3px_0px_#FFC857] transition hover:-translate-y-0.5 hover:bg-[#FF6B5E]"
              >
                Explore study rooms →
              </Link>

              <Link
                to="/book-room"
                className="rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-5 py-3 text-xs font-black text-[#172033] transition hover:border-[#7657E8] hover:text-[#7657E8]"
              >
                Book directly
              </Link>

            </div>

          </div>

        )}

      </section>


      {/* =========================================
          BOTTOM TIP
          ========================================= */}

      {bookings.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-4 rounded-[24px] bg-[#172033] px-6 py-5 text-white sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#FFC857]">
                Keep exploring
              </p>

              <p className="mt-1 text-sm font-bold">
                Need another space for your next session?
              </p>

            </div>

            <Link
              to="/rooms"
              className="w-fit rounded-xl bg-white px-4 py-2.5 text-[10px] font-black text-[#172033] transition hover:bg-[#FFC857]"
            >
              Browse rooms →
            </Link>

          </div>

        </section>
      )}

    </main>
  );
}

export default MyBookings;