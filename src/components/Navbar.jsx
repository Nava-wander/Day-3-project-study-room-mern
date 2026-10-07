import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Rooms",
      path: "/rooms",
    },
    {
      name: "Book",
      path: "/book-room",
    },
    {
      name: "My Bookings",
      path: "/my-bookings",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7DED1] bg-[#FFF9F0]/95 backdrop-blur-xl">

      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* =====================================
            BRAND
            ===================================== */}

        <NavLink
          to="/"
          className="group flex items-center gap-3"
        >

          {/* Logo */}

          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">

            <div className="absolute inset-0 rotate-[-7deg] rounded-[15px] bg-[#FF6B5E] shadow-[4px_4px_0px_#172033] transition duration-300 group-hover:rotate-0 group-hover:shadow-[2px_2px_0px_#172033]" />

            <span className="relative text-lg font-black text-white">
              S
            </span>

            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#FFF9F0] bg-[#FFC857]" />

          </div>

          {/* Brand text */}

          <div className="hidden sm:block">

            <div className="flex items-center gap-1">

              <h1 className="text-[19px] font-black tracking-[-0.04em] text-[#172033]">
                Study
              </h1>

              <h1 className="text-[19px] font-black tracking-[-0.04em] text-[#7657E8]">
                Space
              </h1>

            </div>

            <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#9B9387]">
              Find your focus
            </p>

          </div>

        </NavLink>

        {/* =====================================
            DESKTOP NAVIGATION
            ===================================== */}

        <nav className="hidden items-center rounded-2xl border border-[#E5DDD2] bg-white/80 p-1.5 shadow-sm md:flex">

          {navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative rounded-xl px-4 py-2.5 text-xs font-black transition-all duration-200 ${
                  isActive
                    ? "bg-[#172033] text-white shadow-sm"
                    : "text-[#81796E] hover:bg-[#F6F0E6] hover:text-[#172033]"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        {/* =====================================
            RIGHT SIDE
            ===================================== */}

        <div className="flex items-center gap-2.5">

          {/* Live status */}

          <div className="hidden items-center gap-2 rounded-xl border border-[#CFEDE2] bg-[#E7F8F3] px-3.5 py-2.5 lg:flex">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#52B788] opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#52B788]" />

            </span>

            <span className="text-[10px] font-black text-[#287A5A]">
              Campus live
            </span>

          </div>

          {/* Desktop CTA */}

          <NavLink
            to="/book-room"
            className="hidden rounded-xl bg-[#FF6B5E] px-4 py-2.5 text-xs font-black text-white shadow-[3px_3px_0px_#172033] transition duration-200 hover:-translate-y-0.5 hover:bg-[#7657E8] hover:shadow-[2px_2px_0px_#172033] sm:block"
          >
            Book a room
          </NavLink>

          {/* Mobile menu button */}

          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDD4C7] bg-white text-[#172033] transition hover:border-[#FF6B5E] hover:text-[#FF6B5E] md:hidden"
          >
            <span className="text-lg leading-none">
              ☰
            </span>
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;