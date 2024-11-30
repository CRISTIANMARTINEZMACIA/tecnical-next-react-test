"use client";
import { Character } from "@/model";
import { CharacterCard } from "./CharacterCard";
import Pagination from "../atomics/pagination";
import { notFound, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { getCharacter } from "@/services";
import { useFavoriteCharacterStore } from "@/hooks";

interface CharacterProps {
  characters: Character[];
  page: number;
}

export const CharacterMap = ({ characters, page }: CharacterProps) => {
  
  
  return (
    <div className="gap-1">
      <div className="flex flex-wrap gap-6 justify-center">
        {characters.map((item) => (
          <CharacterCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination totalPages={page} />
      </div>
    </div>
  );
};

export const SuspenseWrapperFavorite =  () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams?.get("page") ?? "1");
  const startSlice = page === 1 ? 0 : (page - 1) * 3;

  const characterFavorite = useFavoriteCharacterStore(
    (s) => s.characterFavorite
  );

  const charactersSlice = characterFavorite.slice(startSlice, startSlice + 3);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CharacterMap
        characters={charactersSlice}
        page={Math.ceil(characterFavorite.length / 3)}
      />
    </Suspense>
  );
};
