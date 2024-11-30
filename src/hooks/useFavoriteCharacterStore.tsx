import { Character } from "@/model";
import { create } from "zustand";

interface FavoriteCharacterProps {
  characterFavorite: Character[];
  setCharacterFavorite: (characterFavorite: Character) => void;
  removeCharacterFavorite: (id: number) => void;
}

export const useFavoriteCharacterStore = create<FavoriteCharacterProps>(
  (set, get) => ({
    characterFavorite:
      JSON.parse(localStorage.getItem(`characters`) ?? "") ?? [],
    setCharacterFavorite: (characterFavorite) => {
      set({
        characterFavorite: [...get().characterFavorite, characterFavorite],
      });

      localStorage.setItem(
        `characters`,
        JSON.stringify([...get().characterFavorite])
      );
    },
    removeCharacterFavorite: (id) => {
      set({
        characterFavorite: get().characterFavorite.filter(
          (item) => item.id != id
        ),
      });
      localStorage.setItem(
        `characters`,
        JSON.stringify([...get().characterFavorite])
      );
    },
  })
);
