"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Workouts", href: "/" },
  { name: "My Plan", href: "/myplan" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href} className="list-none">
            <Link
              href={link.href}
              className={`block rounded-full px-4 py-2 text-sm ${
                isActive
                  ? "bg-[#c6f600]/10 font-semibold text-[#c6f600]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
