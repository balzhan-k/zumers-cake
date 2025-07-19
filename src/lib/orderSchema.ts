import { z } from "zod";

const otherFields = [
  ["occasion", "otherOccasionDetails"],
  ["servings", "otherServingsDetails"],
  ["cakeType", "otherCakeTypeDetails"],
  ["filling", "otherFillingDetails"],
  ["colors", "otherColorsDetails"],
];

const orderFormShape = {
  occasion: z.string().nonempty("Lütfen bir seçim yapın."),
  otherOccasionDetails: z.string(), // Bu alan zaten refine-правилом управляется
  servings: z.string().nonempty("Lütfen bir seçim yapın."),
  otherServingsDetails: z.string(), // Этот поле уже управляется правилом refine
  cakeType: z.string().nonempty("Lütfen bir seçim yapın."),
  otherCakeTypeDetails: z.string(), // Этот поле уже управляется правилом refine
  filling: z.array(z.string()), // ИЗМЕНЕНИЕ ЗДЕСЬ: Убрали .nonempty() из самого определения
  otherFillingDetails: z.string(), // Этот поле уже управляется правилом refine
  colors: z.string().nonempty("Lütfen bir seçim yapın."),
  otherColorsDetails: z.string(), // Этот поле уже управляется правилом refine
  allergies: z.string().nonempty("Lütfen bir seçim yapın."),
  photo: z.string().nullable(),
  cakeNote: z.string().nonempty("Doldurulması zorunlu alan"),
  specialRequests: z.string().nonempty("Doldurulması zorunlu alan"),
  nameSurname: z.string().nonempty("Doldurulması zorunlu alan"),
  phone: z.string().nonempty("Doldurulması zorunlu alan"),
  deliveryDateAndTime: z.date(),
};

export const orderFormSchema = z
  .object(orderFormShape)
  .superRefine((data, ctx) => {
    otherFields.forEach(([mainField, otherField]) => {
      const mainValue = data[mainField as keyof typeof data];
      const otherValue = data[otherField as keyof typeof data];

      if (
        mainValue === "Other" &&
        (!otherValue || (otherValue as string).trim() === "")
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Doldurulması zorunlu alan.",
          path: [otherField],
        });
      }
    });

    if (data.filling.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Lütfen en az 3 dolgu seçin.",
        path: ["filling"],
      });
    }
  });
