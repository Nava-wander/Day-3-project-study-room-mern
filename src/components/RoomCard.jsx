import { Link } from "react-router-dom";

function RoomCard({
  roomNumber,
  name,
  building,
  floor,
  capacity,
  occupied,
  type,
  status,
  amenities,
}) {
  const isFull = occupied >= capacity;

  const freeSeats = capacity - occupied;

  const occupancyPercentage = Math.min(
    (occupied / capacity) * 100,
    100
  );

  const typeStyles = {
    Quiet: {
      card: "bg-[#F1EDFF]",
      badge: "bg-[#E7DEFF] text-[#7657E8]",
      bar: "bg-[#7657E8]",
      icon: "Q",
    },

    Discussion: {
      card: "bg-[#FFF4D6]",
      badge: "bg-[#FFE7A3] text-[#9A7114]",
      bar: "bg-[#FFC857]",
      icon: "D",
    },

    Group: {
      card: "bg-[#E7F8F3]",
      badge: "bg-[#D2F2E8] text-[#287A5A]",
      bar: "bg-[#20BFA9]",
      icon: "G",
    },

    Project: {
      card: "bg-[#FFF0ED]",
      badge: "bg-[#FFDCD7] text-[#B75A50]",
      bar: "bg-[#FF6B5E]",
      icon: "P",
    },

    Presentation: {
      card: "bg-[#F1EDFF]",
      badge: "bg-[#E7DEFF] text-[#7657E8]",
      bar: "bg-[#7657E8]",
      icon: "P",
    },
  };

  const style = typeStyles[type] || typeStyles.Quiet;

  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-[#E4DBCF] bg-white shadow-[0_8px_25px_rgba(23,32,51,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(23,32,51,0.10)]">

      {/* Color strip */}
      <div className={`h-1.5 ${style.bar}`} />

      <div className="p-5">

        {/* Top section */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex min-w-0 items-center gap-3">

            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${style.card} ${style.badge.split(" ")[1]}`}
            >
              {style.icon}
            </div>

            <div className="min-w-0">

              <div className="flex items-center gap-2">

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#A39A8E]">
                  Room {roomNumber}
                </span>

                <span className="text-[#D3CBC0]">
                  •
                </span>

                <span
                  className={`rounded-full px-2 py-1 text-[9px] font-black ${style.badge}`}
                >
                  {type}
                </span>

              </div>

              <h3 className="mt-1 truncate text-lg font-black tracking-[-0.02em] text-[#172033]">
                {name}
              </h3>

            </div>

          </div>

          {/* Availability */}
          <div
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[9px] font-black ${
              isFull
                ? "bg-[#FFF0ED] text-[#B75A50]"
                : "bg-[#E7F8F3] text-[#287A5A]"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isFull
                  ? "bg-[#FF6B5E]"
                  : "bg-[#52B788]"
              }`}
            />

            {isFull ? "FULL" : "OPEN"}
          </div>

        </div>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2">

          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F7F3EC] text-xs font-black text-[#7657E8]">
            •
          </span>

          <div>
            <p className="text-xs font-black text-[#172033]">
              {building}
            </p>

            <p className="text-[10px] text-[#9B9387]">
              {floor}
            </p>
          </div>

        </div>

        {/* Capacity panel */}
        <div className={`mt-4 rounded-2xl ${style.card} p-4`}>

          <div className="flex items-end justify-between">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#81796E]">
                Capacity
              </p>

              <p className="mt-1 text-xl font-black text-[#172033]">
                {capacity}
                <span className="ml-1 text-xs font-bold text-[#81796E]">
                  seats
                </span>
              </p>
            </div>

            <div className="text-right">

              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#81796E]">
                Free now
              </p>

              <p
                className={`mt-1 text-xl font-black ${
                  isFull
                    ? "text-[#B75A50]"
                    : "text-[#287A5A]"
                }`}
              >
                {freeSeats}
              </p>

            </div>

          </div>

          {/* Occupancy bar */}
          <div className="mt-3">

            <div className="h-2 overflow-hidden rounded-full bg-white/80">

              <div
                className={`h-full rounded-full transition-all duration-500 ${style.bar}`}
                style={{
                  width: `${occupancyPercentage}%`,
                }}
              />

            </div>

            <div className="mt-2 flex justify-between text-[9px] font-semibold text-[#81796E]">

              <span>
                {occupied} occupied
              </span>

              <span>
                {isFull
                  ? "At capacity"
                  : `${freeSeats} available`}
              </span>

            </div>

          </div>

        </div>

        {/* Amenities */}
        <div className="mt-4">

          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#A39A8E]">
            Included
          </p>

          <div className="flex flex-wrap gap-1.5">

            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-lg border border-[#ECE5DA] bg-[#FAF7F1] px-2.5 py-1.5 text-[9px] font-bold text-[#6F675C]"
              >
                {amenity}
              </span>
            ))}

          </div>

        </div>

        {/* Bottom action */}
        <div className="mt-5 flex items-center justify-between border-t border-[#EEE8DE] pt-4">

          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#A39A8E]">
              Status
            </p>

            <p
              className={`mt-1 text-xs font-black ${
                isFull
                  ? "text-[#B75A50]"
                  : "text-[#287A5A]"
              }`}
            >
              {isFull
                ? "Currently occupied"
                : "Ready to book"}
            </p>

          </div>

          <Link
            to="/book-room"
            className={`rounded-xl px-4 py-2.5 text-[10px] font-black text-white transition-all duration-200 ${
              isFull
                ? "pointer-events-none bg-[#C5BFB7]"
                : "bg-[#172033] shadow-[2px_2px_0px_#D9D0C3] hover:-translate-y-0.5 hover:bg-[#FF6B5E] hover:shadow-[1px_1px_0px_#D9D0C3]"
            }`}
          >
            {isFull ? "Unavailable" : "Reserve →"}
          </Link>

        </div>

      </div>

    </article>
  );
}

export default RoomCard;