'use client'
import { SidebarItem, SidebarItemProps } from "./SidebarItem";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

const sidebarItem: SidebarItemProps[] = [
  {
    label: "Personaje",
    icon: <BsFileEarmarkPerson />,
    path: "/character",
  },
  { label: "Favoritos", icon: <IoHeartOutline />, path: "/favorite" },
  { label: "Mapa", icon: <FaMapMarkedAlt />, path: "/map" },
];

export const Sidebar = () => {

  
  return (
    <div >
      <div
        id="view"
        className="fixed top-0 left-0 w-64 h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <button
          //@click="sidenav = true"
          className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg
            className="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
          // @click.away="sidenav = false"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              R&M<span className="text-teal-600">.</span>
            </h1>
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              Ricky & Morty<span className="text-teal-600">.</span>
            </h1>

            <div id="menu" className="flex flex-col space-y-3">
              {sidebarItem.map((item) => (
                <SidebarItem key={item.path} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
