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
  otherOccasionDetails: z.string(),
  servings: z.string().nonempty("Lütfen bir seçim yapın."),
  otherServingsDetails: z.string(),
  cakeType: z.string().nonempty("Lütfen bir seçim yapın."),
  otherCakeTypeDetails: z.string(),
  filling: z.array(z.string()).max(3, "En fazla 3 içerik seçebilirsiniz."),
  otherFillingDetails: z.string(),
  colors: z.string().nonempty("Lütfen bir seçim yapın."),
  otherColorsDetails: z.string(),
  allergies: z.string().nonempty("Lütfen bir seçim yapın."),
  photo: z
    .array(z.string())
    .max(3, "En fazla 3 fotoğraf yükleyebilirsiniz.")
    .nullable(),
  cakeNote: z.string().nonempty("Lütfen bu alanı doldurun."),
  specialRequests: z.string().nonempty("Lütfen bu alanı doldurun."),
  nameSurname: z.string().nonempty("Lütfen bu alanı doldurun."),
  phone: z.string().nonempty("Lütfen bu alanı doldurun."),
  deliveryDateAndTime: z
    .date({
      required_error: "Lütfen tarih ve saat seçin.",
    })
    .min(
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      "Sipariş teslim tarihi en az 3 gün sonra olmalıdır."
    ),
};

export const orderFormSchema = z
  .object(orderFormShape)
  .superRefine((data, ctx) => {
    otherFields.forEach(([mainField, otherField]) => {
      const mainValue = data[mainField as keyof typeof data];
      const otherValue = data[otherField as keyof typeof data];

      const isOtherSelected = Array.isArray(mainValue)
        ? mainValue.includes("Other")
        : mainValue === "Other";

      if (
        isOtherSelected &&
        (!otherValue || (otherValue as string).trim() === "")
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Lütfen bu alanı doldurun.",
          path: [otherField],
        });
      }
    });

    if (data.filling.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Lütfen bir seçim yapın.",
        path: ["filling"],
      });
    }
  });
