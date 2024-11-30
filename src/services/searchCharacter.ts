import { Character } from "@/model";
import axios from "axios";

export const searchCharacter = async (id: string) => {
  const response = await axios.get<Character>(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response;
};
