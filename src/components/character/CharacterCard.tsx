"use client";
import Link from "next/link";
import { Origin, Location } from "../../model/character";
import Image from "next/image";
import { FcLike, FcViewDetails } from "react-icons/fc";
import clsx from "clsx";
import { useFavoriteCharacterStore } from "@/hooks";
import { useEffect, useState } from "react";
import { AlertCard } from "../atomics/AlertCard";
import { IoIosHeartEmpty } from "react-icons/io";

interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const CharacterCard = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  image,
  location,
  origin,
  episode,
  url,
  created,
}: CharacterCardProps) => {
  const [addFavorite, setAddFavorite] = useState(false);
  const { setCharacterFavorite, characterFavorite, removeCharacterFavorite } =
    useFavoriteCharacterStore();

  useEffect(() => {
    if (!addFavorite) return;
    setTimeout(() => setAddFavorite(false), 1000);
  }, [addFavorite]);

  return (
    <div>
      {addFavorite ? (
        <div className="block">
          <AlertCard
            text={
              !characterFavorite.find((item) => item.id === id)
                ? "Quitado correctamente"
                : "Agregado correctamente"
            }
            color={
              !characterFavorite.find((item) => item.id === id)
                ? "error"
                : "sucess"
            }
          />
        </div>
      ) : (
        <></>
      )}
      <div className="right-0 mt-1 w-200">
        <div className="flex justify-center items-center min-h-100">
          <div className="min-w-[600px] mx-auto pb-2">
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                <Image
                  src={image}
                  alt={`${name}'s profile picture`}
                  width={150}
                  height={300}
                />
              </div>
              <div>
                <div className="pt-4">
                  <h4 className="flex gap-3 mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    {name}{" "}
                    <div className="flex flex-wrap gap-2 items-end">
                      {characterFavorite.find((item) => item.id === id) ? (
                        <button
                          onClick={() => {
                            removeCharacterFavorite(id);
                            setAddFavorite(true);
                          }}
                        >
                          <FcLike />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setCharacterFavorite({
                              id,
                              name,
                              status,
                              species,
                              type,
                              gender,
                              image,
                              location,
                              origin,
                              episode,
                              url,
                              created,
                            });

                            setAddFavorite(true);
                          }}
                        >
                          <IoIosHeartEmpty />
                        </button>
                      )}
                      <Link href={`/character/${id}/details`}>
                        <FcViewDetails />
                      </Link>
                    </div>
                  </h4>
                  <h2 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    <div
                      className={clsx(
                        "center relative inline-block select-none whitespace-nowrap rounded-full px-1.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white",
                        {
                          "bg-green-600": status === "Alive",
                          "bg-red-600": status === "Dead",
                          "bg-gray-600": status != "Dead" && status != "Alive",
                        }
                      )}
                    ></div>{" "}
                    {status} - {species}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
