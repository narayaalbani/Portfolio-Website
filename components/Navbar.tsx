import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem = [
    { name: "Overview", href: "#overview" },
    { name: "Skills and Tools", href: "#skillsAndTools" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Certificate", href: "#certificate" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <header className="">
    //   <nav className="flex justify-between items-center pt-6 mx-auto w-[92%]">
    //     <h1 className="text-lg md:text-xl lg:text-2xl">Naraya Albani</h1>
    //     <div
    //       className={
    //         'md:static md:min-h-fit md:w-auto max-md:px-5 absolute bg-light min-h-[60vh] left-0 w-full ${isMenuOpen ? "top-[-100%]" : "top-[9%]"} flex items-center'
    //       }
    //     >
    //       <ul className="flex md:flex-row flex-col md:items-center gap-[4vw]">
    //         {NavItem.map((item) => (
    //           <li key={item.name}>
    //             <a
    //               href={item.href}
    //               className="relative after:absolute after:bg-dark after:w-0 after:h-0.5 after:left-1/2 after:-bottom-1 after:ease-in-out after:duration-500 after:transition-all hover:after:w-full hover:after:left-0 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500"
    //             >
    //               {item.name}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <Image
    //       src={isMenuOpen ? "/close.svg" : "/menu.svg"}
    //       alt=""
    //       width={20}
    //       height={20}
    //       className="cursor-pointer md:hidden"
    //       onClick={toggleMenu}
    //     />
    //   </nav>
    // </header>
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="">Naraya Albani</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {NavItem.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative  after:absolute after:bg-dark after:w-0 after:h-0.5 after:left-1/2 after:-bottom-1 after:ease-in-out after:duration-500 after:transition-all hover:after:w-full hover:after:left-0 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Image
              src={isMenuOpen ? "/close.svg" : "/menu.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
            {NavItem.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative block after:absolute after:bg-dark after:w-0 after:h-0.5 after:left-1/2 after:-bottom-1 after:ease-in-out after:duration-500 after:transition-all hover:after:w-full hover:after:left-0 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
