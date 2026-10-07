import { useState } from "react";
import { Link } from "react-router-dom";
import rooms from "../data/rooms";

function BookRoom({ addBooking }) {
  const [formData, setFormData] = useState({
    studentName: "",
    roomId: "",
    date: "",
    time: "",
    students: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedRoom = rooms.find(
    (room) => room.id === Number(formData.roomId)
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedRoom) {
      return;
    }

    const booking = {
      studentName: formData.studentName,
      roomId: selectedRoom.id,
      roomName: selectedRoom.name,
      roomNumber: selectedRoom.roomNumber,
      building: selectedRoom.building,
      date: formData.date,
      time: formData.time,
      students: Number(formData.students),
    };

    addBooking(booking);

    setSubmitted(true);

    setFormData({
      studentName: "",
      roomId: "",
      date: "",
      time: "",
      students: "",
    });
  };

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

                <span className="rounded-full bg-[#FFF0ED] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#B75A50]">
                  Reserve a space
                </span>

                <span className="text-[#C8BFB3]">
                  /
                </span>

                <span className="text-[10px] font-bold text-[#9B9387]">
                  Book your session
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#172033] sm:text-5xl lg:text-[56px]">

                Make space for
                <span className="text-[#FF6B5E]">
                  {" "}good work.
                </span>

              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#766E63] sm:text-base">

                Choose your room, tell us when you're
                coming, and reserve a space for your group.

              </p>

            </div>

            <div className="hidden rounded-2xl bg-[#F1EDFF] px-5 py-4 sm:block">

              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#7657E8]">
                Simple booking
              </p>

              <p className="mt-1 text-sm font-black text-[#172033]">
                5 quick details
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BOOKING CONTENT
          ========================================= */}

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">

          {/* =====================================
              FORM
              ===================================== */}

          <div className="rounded-[28px] border border-[#E4DBCF] bg-white p-6 shadow-[0_10px_30px_rgba(23,32,51,0.05)] sm:p-8">

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#7657E8]">
                  Booking details
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-[#172033]">
                  Reserve your room
                </h2>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF4D6] text-sm font-black text-[#9A7114]">
                01
              </div>

            </div>


            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Student name */}

              <div>

                <label
                  htmlFor="studentName"
                  className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#8F877C]"
                >
                  Student name
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3.5 text-sm font-semibold text-[#172033] outline-none transition placeholder:text-[#B0A79B] focus:border-[#FF6B5E] focus:ring-4 focus:ring-[#FFF0ED]"
                />

              </div>


              {/* Room */}

              <div>

                <label
                  htmlFor="roomId"
                  className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#8F877C]"
                >
                  Choose a room
                </label>

                <select
                  id="roomId"
                  name="roomId"
                  value={formData.roomId}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3.5 text-sm font-semibold text-[#172033] outline-none transition focus:border-[#7657E8] focus:ring-4 focus:ring-[#F1EDFF]"
                >
                  <option value="">
                    Select a study room
                  </option>

                  {rooms.map((room) => (
                    <option
                      key={room.id}
                      value={room.id}
                      disabled={room.status === "Occupied"}
                    >
                      Room {room.roomNumber} — {room.name}
                      {room.status === "Occupied"
                        ? " — Full"
                        : ""}
                    </option>
                  ))}

                </select>

              </div>


              {/* Selected room preview */}

              {selectedRoom && (
                <div className="rounded-2xl bg-[#F1EDFF] p-4">

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#7657E8]">
                        Selected space
                      </p>

                      <p className="mt-1 text-sm font-black text-[#172033]">
                        {selectedRoom.name}
                      </p>

                      <p className="mt-1 text-[10px] text-[#766E63]">
                        {selectedRoom.building} ·{" "}
                        {selectedRoom.floor}
                      </p>

                    </div>

                    <div className="rounded-xl bg-white px-3 py-2 text-right">

                      <p className="text-[8px] font-black uppercase tracking-[0.1em] text-[#9B9387]">
                        Seats
                      </p>

                      <p className="mt-0.5 text-sm font-black text-[#7657E8]">
                        {selectedRoom.capacity -
                          selectedRoom.occupied}
                      </p>

                    </div>

                  </div>

                </div>
              )}


              {/* Date + Time */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="date"
                    className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#8F877C]"
                  >
                    Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3.5 text-sm font-semibold text-[#172033] outline-none transition focus:border-[#20BFA9] focus:ring-4 focus:ring-[#E7F8F3]"
                  />

                </div>


                <div>

                  <label
                    htmlFor="time"
                    className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#8F877C]"
                  >
                    Start time
                  </label>

                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3.5 text-sm font-semibold text-[#172033] outline-none transition focus:border-[#20BFA9] focus:ring-4 focus:ring-[#E7F8F3]"
                  />

                </div>

              </div>


              {/* Number of students */}

              <div>

                <label
                  htmlFor="students"
                  className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#8F877C]"
                >
                  Number of students
                </label>

                <input
                  id="students"
                  name="students"
                  type="number"
                  min="1"
                  max={selectedRoom?.capacity || 12}
                  value={formData.students}
                  onChange={handleChange}
                  placeholder="How many people?"
                  required
                  className="w-full rounded-xl border border-[#DED6C9] bg-[#FFFDF8] px-4 py-3.5 text-sm font-semibold text-[#172033] outline-none transition placeholder:text-[#B0A79B] focus:border-[#20BFA9] focus:ring-4 focus:ring-[#E7F8F3]"
                />

                {selectedRoom && (
                  <p className="mt-2 text-[10px] text-[#8F877C]">
                    This room can accommodate up to{" "}
                    <span className="font-black text-[#172033]">
                      {selectedRoom.capacity} students.
                    </span>
                  </p>
                )}

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#172033] py-4 text-xs font-black text-white shadow-[3px_3px_0px_#FFC857] transition duration-200 hover:-translate-y-0.5 hover:bg-[#FF6B5E] hover:shadow-[2px_2px_0px_#FFC857]"
              >
                Confirm room booking →
              </button>

            </form>


            {/* Confirmation */}

            {submitted && (
              <div className="mt-5 rounded-2xl border border-[#BFE7D8] bg-[#E7F8F3] p-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#20BFA9] text-sm font-black text-white">
                    ✓
                  </div>

                  <div>

                    <p className="text-sm font-black text-[#172033]">
                      Booking confirmed!
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#4D7164]">
                      Your room booking has been added to
                      My Bookings for this session.
                    </p>

                    <Link
                      to="/my-bookings"
                      className="mt-3 inline-block text-[10px] font-black text-[#287A5A] underline underline-offset-2"
                    >
                      View my bookings →
                    </Link>

                  </div>

                </div>

              </div>
            )}

          </div>


          {/* =====================================
              SIDE PANEL
              ===================================== */}

          <aside className="space-y-5">

            {/* Selected room / visual */}

            <div className="overflow-hidden rounded-[28px] bg-[#172033] text-white">

              <div className="relative p-6">

                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#7657E8] opacity-40 blur-2xl" />

                <div className="absolute -bottom-10 -left-5 h-24 w-24 rounded-full bg-[#FF6B5E] opacity-30 blur-2xl" />

                <div className="relative">

                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#FFC857]">
                    Before you book
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    Make the space work for you.
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[#C7C4BF]">
                    Pick a room that matches your group
                    size and the kind of work you want
                    to do.
                  </p>

                </div>

              </div>


              <div className="border-t border-white/10 p-6">

                <div className="space-y-4">

                  <div className="flex gap-3">

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF4D6] text-[10px] font-black text-[#9A7114]">
                      01
                    </span>

                    <div>

                      <p className="text-xs font-black">
                        Match the room size
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-[#A8A6A1]">
                        Choose enough seats for everyone.
                      </p>

                    </div>

                  </div>


                  <div className="flex gap-3">

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1EDFF] text-[10px] font-black text-[#7657E8]">
                      02
                    </span>

                    <div>

                      <p className="text-xs font-black">
                        Check availability
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-[#A8A6A1]">
                        Occupied rooms cannot be reserved.
                      </p>

                    </div>

                  </div>


                  <div className="flex gap-3">

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E7F8F3] text-[10px] font-black text-[#287A5A]">
                      03
                    </span>

                    <div>

                      <p className="text-xs font-black">
                        Bring your ideas
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-[#A8A6A1]">
                        The room is yours for the session.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Explore */}

            <div className="rounded-[24px] border border-[#E4DBCF] bg-white p-5">

              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#FF6B5E]">
                Still deciding?
              </p>

              <h3 className="mt-2 text-lg font-black text-[#172033]">
                Explore all rooms first.
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#766E63]">
                Compare room types, capacity,
                amenities, and availability.
              </p>

              <Link
                to="/rooms"
                className="mt-4 inline-block rounded-xl bg-[#F1EDFF] px-4 py-2.5 text-[10px] font-black text-[#7657E8] transition hover:bg-[#7657E8] hover:text-white"
              >
                Browse study rooms →
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}

export default BookRoom;