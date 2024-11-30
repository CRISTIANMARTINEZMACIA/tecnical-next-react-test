import { DetailCharacterCard } from "@/components";
import { searchCharacter } from "@/services";
import Link from "next/link";

export default async function DetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const character = await searchCharacter(id);

  return (
    <>
      <DetailCharacterCard {...character.data} />
      <div className="flex justify-start">
        <Link
          href="/character?page=1"
          className="flex m-5 h-10 items-center rounded-lg bg-red-400 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
      </div>
    </>
  );
}
