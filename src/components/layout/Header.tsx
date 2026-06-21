import Link from "next/link";
import { routes, type NavLinkId } from "@/routes/config";

export default function Header({
  activeLink = "inventory",
}: {
  activeLink?: NavLinkId;
}) {
  return (
    <header className="flex items-center gap-10 px-10 py-5 bg-white border-b border-[#edeff1]">
      <Link
        href="/"
        className="text-[22px] font-bold tracking-[-0.5px] text-pm-navy shrink-0 no-underline"
      >
        Fort-Knox
      </Link>

      <nav className="flex items-center gap-7.5 text-sm">
        {routes.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={
              activeLink === link.id
                ? "text-pm-navy font-semibold no-underline border-b-2 border-pm-navy pb-1"
                : "text-pm-gray-mid no-underline"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-4.5">
        <button
          aria-label="Notifications"
          className="flex items-center text-pm-gray-mid"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
        </button>

        <button
          aria-label="Settings"
          className="flex items-center text-pm-gray-mid"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>

        <button className="bg-pm-navy text-white text-xs font-bold tracking-[0.8px] px-5.5 py-3 cursor-pointer border-none">
          REQUEST QUOTE
        </button>

        <div className="w-9.5 h-9.5 rounded-full bg-[#f1f3f5] flex items-center justify-center shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b96a2"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a7 7 0 0 1 14 0v1" />
          </svg>
        </div>
      </div>
    </header>
  );
}
