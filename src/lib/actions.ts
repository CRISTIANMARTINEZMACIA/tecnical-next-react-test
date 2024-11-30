"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  status: z.enum(["Dead", "Alive", "Unknwon"], {
    invalid_type_error: "Please select an character status.",
  }),
});

export type State = {
  errors?: {
    name?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createCharacter(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  try {
    const { name, status } = validatedFields.data;

    console.log(name);
    console.log(status);
  } catch (error) {
    console.error("Error en la peticion:", error);
    return { message: "Failed to create of invoice" };
  }

  revalidatePath("/character");
  redirect("/character");
}

