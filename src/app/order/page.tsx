"use client";

import { useState } from "react";
import CustomFormButton from "@/components/common/CustomFormButton";
import TextElement from "@/components/common/TextElement";
import FormTextInput from "@/components/common/FormTextInput";
import PhotoUploadField from "@/components/common/PhotouploadField";
import FormTextArea from "@/components/common/FormTextArea";

interface OrderFormData {
  occasion: string | null; //hangi kutlama/ozel gun +
  otherOccasionDetails?: string; //diğer kutlama detayları+
  servings: string | null; //kaç kisilik +
  otherServingsDetails?: string; //diğer detayları+
  cakeType: string | null; //pasta türü +
  otherCakeTypeDetails?: string; //diğer detayları+
  filling: string | null; //pasta icerigi, kat arasi malzemeler +
  otherFillingDetails?: string; //diğer detayları+
  colors: string | null; //renkler +
  otherColorsDetails?: string; //diğer detayları+
  allergies: string | null; //alergenler+
  photo: File | null; //fotoğraf
  cakeNote: string; //pasta üzerine yazılacak not
  specialRequests: string; //mesaj+
  nameSurname: string; //ad soyad
  phone: string | null; //telefon
  deliveryDate: string; //teslimat tarihi
  deliveryTime: string | null; //teslimat saati
}

interface SelectionOption {
  value: string;
  text: string;
}

const occasionOptions: SelectionOption[] = [
  { value: "Birthday", text: "Doğum Günü" },
  { value: "Wedding", text: "Düğün" },
  { value: "Anniversary", text: "Yıldönümü" },
  { value: "Other", text: "Diğer" },
];

const servingsOptions: SelectionOption[] = [
  { value: "6", text: "6 Kişilik" },
  { value: "8", text: "8 Kişilik" },
  { value: "10", text: "10 Kişilik" },
  { value: "15", text: "15 Kişilik" },
  { value: "Other", text: "Diğer" },
];

const cakeTypeOptions: SelectionOption[] = [
  { value: "Creamy", text: "Kremalı" },
  { value: "Chocolate", text: "Çikolatalı" },
  { value: "Fruit", text: "Meyveli" },
  { value: "Naked Cake", text: "Naked Cake" },
  { value: "Fondant Cake", text: "Şeker hamurlu" },
  { value: "Cupcake", text: "Cupcake" },
  { value: "Other", text: "Diğer" },
];

const fillingOptions: SelectionOption[] = [
  { value: "Strawberry", text: "Çilek" },
  { value: "Muz", text: "Muz" },
  { value: "Raspberry", text: "Frambuaz" },
  { value: "Pistachio", text: "Fıstık" },
  { value: "Hazelnut", text: "Fındık" },
  { value: "Oreo", text: "Oreo" },
  { value: "Chocolate", text: "Kakaolu kek" },
  { value: "Vanilla", text: "Vanilyalı kek" },
  { value: "Other", text: "Diğer" },
];

const colorsOptions: SelectionOption[] = [
  { value: "None", text: "Yok" },
  { value: "Other", text: "Diğer" },
];

const allergiesOptions: SelectionOption[] = [
  { value: "None", text: "Yok" },
  { value: "Egg Allergy", text: "Yumurta alerjisi" },
  { value: "Lactose Intolerance", text: "Laktoz intoleransı" },
];

export default function OrderPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    occasion: null, // Initial value is null, as nothing is selected yet
    otherOccasionDetails: "",
    servings: null,
    otherServingsDetails: "",
    cakeType: null,
    otherCakeTypeDetails: "",
    filling: null,
    otherFillingDetails: "",
    colors: null,
    otherColorsDetails: "",
    allergies: null,
    cakeNote: "",
    specialRequests: "",
    photo: null,
    nameSurname: "",
    phone: "",
    deliveryDate: "",
    deliveryTime: "",
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
      <TextElement variant="h1">Pasta Sipariş Formu</TextElement>
      {/* 1. Özel Gün */}
      <section className="mb-8">
        <TextElement variant="h3">1. Özel Gün:</TextElement>
        <div className="flex flex-wrap gap-3">
          {occasionOptions.map((option) => (
            <CustomFormButton
              key={option.value}
              value={option.value}
              onClick={(value) => handleFormChange("occasion", value)}
              isSelected={formData.occasion === option.value}
              text={option.text}
            />
          ))}
        </div>
        {formData.occasion === "Other" && (
          <FormTextInput
            isVisible={formData.occasion === "Other"}
            value={formData.otherOccasionDetails || ""}
            onChange={(value) =>
              handleFormChange("otherOccasionDetails", value)
            }
            placeholder="Örn: Mezuniyet Töreni"
            maxLength={100}
            label="Lütfen diğer özel günü belirtiniz:"
            id="otherOccasionInput"
          />
        )}
      </section>

      {/* 2. Kaç Kişilik */}
      <section className="mb-8">
        <TextElement variant="h3">2. Kaç Kişilik:</TextElement>
        <div className="flex flex-wrap gap-3">
          {servingsOptions.map((option) => (
            <CustomFormButton
              key={option.value}
              value={option.value}
              onClick={(value) => handleFormChange("servings", value)}
              isSelected={formData.servings === option.value}
              text={option.text}
            />
          ))}
        </div>
        {formData.servings === "Other" && (
          <FormTextInput
            isVisible={formData.servings === "Other"}
            value={formData.otherServingsDetails || ""}
            onChange={(value) =>
              handleFormChange("otherServingsDetails", value)
            }
            placeholder="Örn: 20 Kişilik"
            maxLength={100}
            label="Lütfen diğer kişi sayısını belirtiniz:"
            id="otherServingsInput"
          />
        )}
      </section>

      {/* 3. Pasta Türü */}
      <section className="mb-8">
        <TextElement variant="h3">3. Pasta Türü:</TextElement>
        <div className="flex flex-wrap gap-3">
          {cakeTypeOptions.map((option) => (
            <CustomFormButton
              key={option.value}
              value={option.value}
              onClick={(value) => handleFormChange("cakeType", value)}
              isSelected={formData.cakeType === option.value}
              text={option.text}
            />
          ))}
        </div>
        {formData.cakeType === "Other" && (
          <FormTextInput
            isVisible={formData.cakeType === "Other"}
            value={formData.otherCakeTypeDetails || ""}
            onChange={(value) =>
              handleFormChange("otherCakeTypeDetails", value)
            }
            placeholder="Örn: Cheesecake, Pavlova, Tiramisu"
            maxLength={100}
            label="Lütfen diğer pasta türünü belirtiniz:"
            id="otherCakeTypeInput"
          />
        )}
      </section>

      {/* 4. Pasta İçeriği */}
      <section className="mb-8">
        <TextElement variant="h3">4. Pasta İçeriği:</TextElement>
        <div className="flex flex-wrap gap-3">
          {fillingOptions.map((option) => (
            <CustomFormButton
              key={option.value}
              value={option.value}
              onClick={(value) => handleFormChange("filling", value)}
              isSelected={formData.filling === option.value}
              text={option.text}
            />
          ))}
        </div>
        {formData.filling === "Other" && (
          <FormTextInput
            isVisible={formData.filling === "Other"}
            value={formData.otherFillingDetails || ""}
            onChange={(value) => handleFormChange("otherFillingDetails", value)}
            placeholder="Örn: Kremalı, Çikolatalı, Meyveli"
            maxLength={100}
            label="Lütfen diğer pasta içeriğini belirtiniz:"
            id="otherFillingInput"
          />
        )}
      </section>

      {/* 5. Renk Tercihleri */}
      <section className="mb-8">
        <TextElement variant="h3">5. Renk Tercihleri:</TextElement>
        <div className="flex flex-wrap gap-3">
          {colorsOptions.map((option) => (
            <CustomFormButton
              key={option.value}
              value={option.value}
              onClick={(value) => handleFormChange("colors", value)}
              isSelected={formData.colors === option.value}
              text={option.text}
            />
          ))}
        </div>
        {formData.colors === "Other" && (
          <FormTextInput
            isVisible={formData.colors === "Other"}
            value={formData.otherColorsDetails || ""}
            onChange={(value) => handleFormChange("otherColorsDetails", value)}
            placeholder="Örn: Kırmızı, Mavi, Yeşil"
            maxLength={100}
            label="Lütfen diğer renk tercihlerini belirtiniz:"
            id="otherColorsInput"
          />
        )}
      </section>

      {/* 6. Alerji veya özel diyet durumu var mı? */}
      <section className="mb-8">
        <TextElement variant="h3">
          7. Alerji veya özel diyet durumu var mı?{" "}
        </TextElement>
        <div className="flex flex-wrap gap-3">
          {allergiesOptions.map((option) => (
            <CustomFormButton
              key={option.value}
              value={option.value}
              onClick={(value) => handleFormChange("allergies", value)}
              isSelected={formData.allergies === option.value}
              text={option.text}
            />
          ))}
        </div>
      </section>

      {/* 8. Özel tema veya konsept örneği-fotoğraf */}
      <section className="mb-8">
        <TextElement variant="h3">
          8. Özel tema veya konsept örneği:
        </TextElement>
        <div className="flex flex-wrap gap-3">
          <PhotoUploadField
            value={formData.photo}
            onChange={(file) =>
              setFormData((prev) => ({ ...prev, photo: file }))
            }
            hintText="PNG, JPG, GIF (max. 10MB)"
            maxSizeMB={10}
            acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
          />
        </div>
      </section>

      {/* 9. Pasta üzerine yazılacak not */}
      <section className="mb-8">
        <TextElement variant="h3">9.Pasta üzerine yazılacak not:</TextElement>
        <div className="flex flex-wrap gap-3">
          <FormTextArea
            id="cakeNote"
            placeholder="Örn: Ada 1 yaşında"
            value={formData.cakeNote}
            onChange={(value) => handleFormChange("cakeNote", value)}
            maxLength={100}
            rows={5}
          />
        </div>
      </section>

      {/* 10. Pasta ile ilgili özel notlar veya istekler */}
      <section className="mb-8">
        <TextElement variant="h3">
          10. Pasta ile ilgili özel notlar veya istekler:
        </TextElement>
        <div className="flex flex-wrap gap-3">
          <FormTextArea
            id="specialRequests"
            placeholder="Örn: Yeşil renk ağırlıklı olsun, özel şeker hamuru figürleri kullanılsın"
            value={formData.specialRequests}
            onChange={(value) => handleFormChange("specialRequests", value)}
            maxLength={500}
            rows={6}
          />
        </div>
      </section>
    </main>
  );
}
