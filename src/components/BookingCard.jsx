function BookingCard({
  studentName,
  roomName,
  roomNumber,
  building,
  date,
  time,
  students,
  status,
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-[#E4DBCF] bg-white shadow-[0_8px_25px_rgba(23,32,51,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(23,32,51,0.09)]">

      {/* Accent */}

      <div className="h-1.5 bg-[#7657E8]" />

      <div className="p-6">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1EDFF] text-sm font-black text-[#7657E8]">
              {roomNumber}
            </div>

            <div className="min-w-0">

              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#9B9387]">
                Study room
              </p>

              <h3 className="mt-1 truncate text-lg font-black tracking-[-0.02em] text-[#172033]">
                {roomName}
              </h3>

            </div>

          </div>

          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#E7F8F3] px-3 py-1.5 text-[9px] font-black text-[#287A5A]">

            <span className="h-1.5 w-1.5 rounded-full bg-[#52B788]" />

            {status}

          </span>

        </div>


        {/* Location */}

        <div className="mt-5 rounded-2xl bg-[#F1EDFF] p-4">

          <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#7657E8]">
            Location
          </p>

          <p className="mt-1 text-sm font-black text-[#172033]">
            {building}
          </p>

        </div>


        {/* Date / Time */}

        <div className="mt-3 grid grid-cols-2 gap-3">

          <div className="rounded-2xl bg-[#FFF4D6] p-4">

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#9A7114]">
              Date
            </p>

            <p className="mt-1 text-sm font-black text-[#172033]">
              {date}
            </p>

          </div>

          <div className="rounded-2xl bg-[#FFF0ED] p-4">

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#B75A50]">
              Start time
            </p>

            <p className="mt-1 text-sm font-black text-[#172033]">
              {time}
            </p>

          </div>

        </div>


        {/* Booking details */}

        <div className="mt-4 flex items-center justify-between border-t border-[#EEE8DE] pt-4">

          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#9B9387]">
              Booked by
            </p>

            <p className="mt-1 max-w-[180px] truncate text-sm font-bold text-[#172033]">
              {studentName}
            </p>

          </div>

          <div className="text-right">

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#9B9387]">
              Group size
            </p>

            <p className="mt-1 text-sm font-black text-[#172033]">
              {students} students
            </p>

          </div>

        </div>

      </div>

    </article>
  );
}

export default BookingCard;