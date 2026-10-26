import Link from "next/link";

const links = [
  { name: "Workouts", href: "/" },
  { name: "My Plan", href: "/myplan" },
];

const NavLinksFallback = () => {
  return (
    <>
      {links.map((link) => (
        <li key={link.href} className="list-none">
          <Link
            href={link.href}
            className="block rounded-full px-4 py-2 text-sm text-gray-300 hover:text-white"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinksFallback;
