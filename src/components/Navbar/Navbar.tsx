"use client";
import "./navbar.css";
// ? types
import { navLinks } from "@/types";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/*==============================================================================================*/
// main component section
/*==============================================================================================*/

export default function Navbar() {
  const navLinks: navLinks[] = [
    { txt: "Home", link: "" },
    { txt: "All Products", link: "/products" },
    { txt: "Categories", link: "/categories" },
    { txt: "Account", link: "/account" },
    { txt: "Cart", link: "/cart" },
  ];
  const handleSearch = () => {};
  return (
    <>
      <header className="px-[2rem] py-[0.8rem] bg-slate-800 sticky top-0  max-w-[80rem] mx-auto">
        <nav className="grid grid-cols-[20%_1fr_20%] items-center">
          <span className="text-white">Ecommerce</span>
          <ul
            role="list"
            className="flex space-x-[2.5rem] text-[0.9rem] text-gray-400 place-self-center"
          >
            {navLinks.map((e, i) => {
              return (
                <li key={i} role="listitem" className="hover:text-white">
                  <a href="#">{e.txt}</a>
                </li>
              );
            })}
          </ul>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            aria-label="search btn"
            title="search"
            role="button"
            height="25"
            width="25"
            className="text-gray-500 place-self-end aspect-square hover:text-white"
            onClick={handleSearch}
          />
        </nav>
      </header>
    </>
  );
}
