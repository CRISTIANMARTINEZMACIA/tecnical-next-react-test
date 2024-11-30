import { Origin, Location } from "@/model";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";


interface DetailCharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  created: string;
  episode: string[];
}

export const DetailCharacterCard = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  created,
}: DetailCharacterCardProps) => {
  return (
    <>
      <div className="flex justify-center items-center max-h-screen gap-8">
        <div className="max-w-[600px]">
          <div className="relative flex w-full max-w-[45rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <Image
                src={image}
                alt={`${name}'s profile picture`}
                width={400}
                height={500}
              />
              
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  {name} - {type}
                </h5>
                <h2 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  <div
                    className={clsx(
                      "center relative inline-block select-none whitespace-nowrap rounded-full px-1.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white",
                      {
                        "bg-green-600": status === "Alive",
                        "bg-red-600": status === "Dead",
                        "bg-gray-600": status != "Dead" && status != "Alive",
                      }
                    )}
                  ></div>
                  {status} - {species} - {gender}
                </h2>
              </div>

              <div>
                <h2 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Last known location:
                </h2>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  <Link href={location.url}>{location.name}</Link>
                </h4>
              </div>
              <div>
                <h2 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  First seen in:
                </h2>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  <Link href={origin.url}>{origin.name}</Link>
                </h4>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                Creacion : {created}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
