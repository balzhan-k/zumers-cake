"use client";

import { useState } from "react";
import CustomFormButton from "@/components/common/CustomFormButton";

interface OrderFormData {
  occasion: string | null; //hangi kutlama
  servings: string | null; //kaç kisilik
  cakeType: string | null; //pasta türü
  filling: string | null; //pasta icerigi, kat arasi malzemeler
  colors: string[]; //renkler
  allergies: string[]; //alergenler
  personalMessage: string; //mesaj
  photo: string; //fotoğraf
  deliveryDate: string; //teslimat tarihi
  deliveryTime: string; //teslimat saati
  nameSurname: string; //ad soyad
  phone: string; //telefon
}

export default function OrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    occasion: null, // Initial value is null, as nothing is selected yet
    servings: null,
    cakeType: null,
    filling: null,
    colors: [],
    allergies: [],
    personalMessage: "",
    photo: "",
    deliveryDate: "",
    deliveryTime: "",
    nameSurname: "",
    phone: "",
  });

  const handleFormChange = (
    field: keyof OrderFormData,
    value: string | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <main className="container mx-auto px-4 py-8 bg-rose-50">
      <h1 className="text-xl font-bold mb-6">Pasta Sipariş Formu</h1>

      <section className="mb-8">
        <h3 className="text-md font-bold mb-4">Özel Gün</h3>
        <div className="flex flex-wrap gap-3">
          <CustomFormButton
            value="Birthday"
            onClick={(value) => handleFormChange("occasion", value)}
            isSelected={formData.occasion === "Birthday"}
            text="Doğum Günü"
          />

          <CustomFormButton
            value="Wedding" // Value for data
            onClick={(value) => handleFormChange("occasion", value)}
            isSelected={formData.occasion === "Wedding"}
            text="Düğün"
          />

          <CustomFormButton
            value="Cupcakes" // Value for data
            onClick={(value) => handleFormChange("occasion", value)}
            isSelected={formData.occasion === "Cupcakes"}
            text="Cupcake"
          />

          <CustomFormButton
            value="Anniversary"
            onClick={(value) => handleFormChange("occasion", value)}
            isSelected={formData.occasion === "Anniversary"}
            text="Yıldönümü"
          />

          <CustomFormButton
            value="Other"
            onClick={(value) => handleFormChange("occasion", value)}
            isSelected={formData.occasion === "Other"}
            text="Diğer"
          />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-md font-bold mb-4">Kaç Kişilik</h3>
        <div className="flex flex-wrap gap-3">
          <CustomFormButton
            value="6"
            onClick={(value) => handleFormChange("servings", value)}
            isSelected={formData.servings === "6"}
            text="6 Kişilik"
          />

          <CustomFormButton
            value="8"
            onClick={(value) => handleFormChange("servings", value)}
            isSelected={formData.servings === "8"}
            text="8 Kişilik"
          />

          <CustomFormButton
            value="10"
            onClick={(value) => handleFormChange("servings", value)}
            isSelected={formData.servings === "10"}
            text="10 Kişilik"
          />

          <CustomFormButton
            value="15"
            onClick={(value) => handleFormChange("servings", value)}
            isSelected={formData.servings === "15"}
            text="15 Kişilik"
          />

          <CustomFormButton
            value="Diğer"
            onClick={(value) => handleFormChange("servings", value)}
            isSelected={formData.servings === "Diğer"}
            text="Diğer"
          />
        </div>
      </section>
    </main>
  );
}
