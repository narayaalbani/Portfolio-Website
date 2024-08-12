export default function Navbar() {
  const NavItem = [
    { name: "Overview", href: "#overview" },
    { name: "Skills and Tools", href: "#skillsAndTools" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Certificate", href: "#certificate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex justify-between">
      <h1 className="text-2xl">Naraya Albani</h1>
      <div className="flex text-lg gap-10 items-center text-center max-xl:hidden">
        {NavItem.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative after:absolute after:bg-dark after:w-0 after:h-0.5 after:left-1/2 after:-bottom-1 after:ease-in-out after:duration-500 after:transition-all hover:after:w-full hover:after:left-0 hover:after:transition-navbar hover:after:ease-in-out hover:after:duration-500"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
