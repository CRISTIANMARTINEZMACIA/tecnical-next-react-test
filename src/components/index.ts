"use client";
import dynamic from "next/dynamic";

export { Sidebar } from "./navbar/Sidebar";
export { CharacterCard } from "./character/CharacterCard";
export {
  CharacterMap,
  SuspenseWrapperFavorite,
} from "./character/CharacterMap";
export { DetailCharacterCard } from "./character/DetailCharacterCard";
export { AlertCard } from "./atomics/AlertCard";
export { Search } from "./atomics/search";

const MapLeaflet = dynamic(() => import("./map/MapLeaflet"), { ssr: false });
export default MapLeaflet;
