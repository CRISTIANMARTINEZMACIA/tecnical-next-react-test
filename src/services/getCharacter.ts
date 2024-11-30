import { RootCharacter } from "@/model";
import axios from "axios";

export const getCharacter = async (page: number, query: string) => {
  try {
    const response = await axios.get<RootCharacter>(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`
    );
    return response.data;
  } catch (error) {
    return {
      info: {
        count: 0,
        pages: 0,
        next: "",
        prev: "",
      },
      results: [],
    } as RootCharacter;
  }
};
