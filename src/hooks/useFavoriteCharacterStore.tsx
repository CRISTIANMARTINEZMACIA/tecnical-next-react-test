import { Character } from "@/model";
import { create } from "zustand";

interface FavoriteCharacterProps {
  characterFavorite: Character[];
  setCharacterFavorite: (characterFavorite: Character) => void;
  removeCharacterFavorite: (id: number) => void;
}

export const useFavoriteCharacterStore = create<FavoriteCharacterProps>(
  (set, get) => ({
    characterFavorite: [],
    setCharacterFavorite: (characterFavorite) => {
      set({
        characterFavorite: [...get().characterFavorite, characterFavorite],
      });
      localStorage.setItem(
        `character${characterFavorite.id}`,
        Object.values(characterFavorite).join(";")
      );
    },
    removeCharacterFavorite: (id) => {
      set({
        characterFavorite: get().characterFavorite.filter(
          (item) => item.id != id
        ),
      });
      localStorage.removeItem(
        `character${id}`);
    },
  })
);
