import { z } from "zod";

export const orderSchema = z.object({
  occasion: z.string().min(1, "Lütfen bir özel gün seçin"),
  
  
  nameSurname: z.string().min(1, "İsim soyisim zorunlu"),
  phone: z.string().min(10, "Telefon numarası eksik"),
  // etc.
});

export type OrderSchema = z.infer<typeof orderSchema>;