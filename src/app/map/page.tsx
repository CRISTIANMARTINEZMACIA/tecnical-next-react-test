
import MapLeaflet from "@/components";
import { Suspense } from "react";


const MapPage = () => {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <MapLeaflet />
    </Suspense>
  );
};

export default MapPage;
