"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export const SidebarItem = ({ label, icon, path }: SidebarItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={clsx(
        "text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out",
        {
          "bg-teal-500": pathName === path,
        }
      )}
    >
      <div className="flex flex-row space-x-1 align-text-top">
        <div> {icon}</div>
        <span className=""> {label}</span>
      </div>
    </Link>
  );
};
