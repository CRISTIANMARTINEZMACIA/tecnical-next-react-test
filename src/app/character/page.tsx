import { CharacterMap, Search } from "@/components";
import { getCharacter } from "@/services";
import { Suspense } from "react";

export default async function DashboardPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const page = parseInt(searchParams?.page ?? "1");
  const response = await getCharacter(page, query);

  return (
    <>
      <div className="mb-4">
        <Search placeholder="Buscando personaje" />
      </div>

      <Suspense fallback={<span>Cargando....</span>}>
        <CharacterMap
          characters={response.results ?? []}
          page={response.info.pages}
        />
      </Suspense>
    </>
  );
}
