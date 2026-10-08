import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "About",
    path: "/about",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: "Projects",
    path: "/project",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 8 3 3-3 3" />
        <line x1="15" x2="15.01" y1="16" y2="16" />
      </svg>
    ),
  },
  {
    name: "Contact",
    path: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const BottomNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[420px] -translate-x-1/2 sm:bottom-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between rounded-full border border-white/12 bg-[#0c0e14]/90 p-1.5 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-2xl">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            aria-label={item.name}
            className={({ isActive }) =>
              `relative flex h-10 min-w-0 flex-1 items-center justify-center rounded-full px-2 transition-all duration-300 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400/60 ${
                isActive
                  ? "bg-white/[0.09] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                  : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex min-w-0 items-center gap-1.5">
                <span
                  className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                    isActive ? "scale-105 text-[#e5af3a]" : ""
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`truncate text-xs tracking-tight transition-all duration-300 ${
                    isActive
                      ? "font-medium text-white"
                      : "hidden min-[380px]:inline text-neutral-400"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;