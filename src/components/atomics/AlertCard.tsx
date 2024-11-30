import clsx from "clsx";

export const AlertCard = ({
  text,
  color,
}: {
  text: string;
  color: "sucess" | "error";
}) => {
  return (
    <>
      <div className="m-12 space-y-6">
        <div
          className={clsx(
            "bg-green-100 border-t border-b px-4 py-3",
            {
              "border-green-500  text-green-700": color === "sucess",
            },
            {
              "border-red-500  text-red-700": color === "error",
            }
          )}
          role="alert"
        >
          <p className="font-bold">{text}</p>
        </div>
      </div>
    </>
  );
};
