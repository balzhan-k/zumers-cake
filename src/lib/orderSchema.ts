import { z } from "zod";

const otherFields = [
  ["occasion", "otherOccasionDetails"],
  ["servings", "otherServingsDetails"],
  ["cakeType", "otherCakeTypeDetails"],
  ["filling", "otherFillingDetails"],
  ["colors", "otherColorsDetails"],
];

const orderFormShape = {
  occasion: z.string().nullable(),
  otherOccasionDetails: z.string().nullable(),
  servings: z.string().nullable(),
  otherServingsDetails: z.string().nullable(),
  cakeType: z.string().nullable(),
  otherCakeTypeDetails: z.string().nullable(),
  filling: z.string().nullable(),
  otherFillingDetails: z.string().nullable(),
  colors: z.string().nullable(),
  otherColorsDetails: z.string().nullable(),
  allergies: z.string().nullable(),
  photo: z.string().nullable(),
  cakeNote: z.string(),
  specialRequests: z.string(),
  nameSurname: z.string(),
  phone: z.string().nullable(),
  deliveryDateAndTime: z.date().nullable(),
};

export const orderFormSchema = z.object(orderFormShape).refine(
  (data: z.infer<z.ZodObject<typeof orderFormShape>>) =>
    otherFields.every(
      ([main, other]) =>
        data[main as keyof typeof data] !== "Other" ||
        (data[other as keyof typeof data] && (data[other as keyof typeof data] as string).trim() !== "")
    ),
  {
    message: "Lütfen kendi seçiminizi belirtin",
    path: [],
  }
);

