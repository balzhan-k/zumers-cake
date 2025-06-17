"use client";

import { useState } from "react";
import CustomFormButton from "@/components/common/CustomFormButton";
import TextElement from "@/components/common/TextElement";
import FormTextInput from "@/components/common/FormTextInput";
import PhotoUploadField from "@/components/common/PhotoUploadField";
import FormTextArea from "@/components/common/FormTextArea";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "moment/locale/tr";

moment.locale("tr");

interface OrderFormData {
  occasion: string | null; //hangi kutlama/ozel gun +
  otherOccasionDetails: string | null; //diğer kutlama detayları+
  servings: string | null; //kaç kisilik +
  otherServingsDetails: string | null; //diğer detayları+
  cakeType: string | null; //pasta türü +
  otherCakeTypeDetails: string | null; //diğer detayları+
  filling: string | null; //pasta icerigi, kat arasi malzemeler +
  otherFillingDetails: string | null; //diğer detayları+
  colors: string | null; //renkler +
  otherColorsDetails: string | null; //diğer detayları+
  allergies: string | null; //alergenler+
  photo: File | null; //fotoğraf
  cakeNote: string; //pasta üzerine yazılacak not
  specialRequests: string; //mesaj+
  nameSurname: string; //ad soyad
  phone: string | null; //telefon
  deliveryDateAndTime: Date | null; //teslimat tarihi
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
    otherOccasionDetails: null,
    servings: null,
    otherServingsDetails: null,
    cakeType: null,
    otherCakeTypeDetails: null,
    filling: null,
    otherFillingDetails: null,
    colors: null,
    otherColorsDetails: null,
    allergies: null,
    cakeNote: "",
    specialRequests: "",
    photo: null,
    nameSurname: "",
    phone: "",
    deliveryDateAndTime: null,
  });

  const handleFormChange = (
    field: keyof OrderFormData,
    value: string | null | Date // Keep Date for date/time pickers
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handlePhotoChange = (file: File | null) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/send/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Sipariş başarıyla gönderildi!");
      } else {
        alert("Gönderim sırasında hata oluştu.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Bir hata oluştu.");
    }
  };

  return (
    <main className="px-4 py-8 bg-rose-50">
      <TextElement variant="h1" className="text-center">
        Pasta Sipariş Formu
      </TextElement>
      {/* 1. Özel Gün */}
      <div className="mx-auto md:max-w-3xl p-4">
        <section className="mb-8">
          <TextElement variant="h3">1. Özel Gün:</TextElement>
          <div className="flex flex-wrap gap-3 mb-4">
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
          <div className="flex flex-wrap gap-3 mb-4">
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
          <div className="flex flex-wrap gap-3 mb-4">
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
          <div className="flex flex-wrap gap-3 mb-4">
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
              onChange={(value) =>
                handleFormChange("otherFillingDetails", value)
              }
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
          <div className="flex flex-wrap gap-3 mb-4">
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
              onChange={(value) =>
                handleFormChange("otherColorsDetails", value)
              }
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
            6. Alerji veya özel diyet durumu var mı?{" "}
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

        {/* 7. Özel tema veya konsept örneği */}
        <section className="mb-8">
          <TextElement variant="h3">
            7. Özel tema veya konsept örneği:
          </TextElement>
          <PhotoUploadField
            value={formData.photo ? URL.createObjectURL(formData.photo) : null}
            onChange={handlePhotoChange as (url: string | null) => void}
            hintText="PNG, JPG, GIF"
            maxSizeMB={5}
            acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
          />
        </section>

        {/* 8. Pasta üzerine yazılacak not */}
        <section className="mb-8">
          <TextElement variant="h3">8.Pasta üzerine yazılacak not:</TextElement>
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

        {/* 9. Pasta ile ilgili özel notlar veya istekler */}
        <section className="mb-8">
          <TextElement variant="h3">
            9. Pasta ile ilgili özel notlar veya istekler:
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

        <section className="mb-8">
          <TextElement variant="h3">10. İsim Soyisim:</TextElement>

          <FormTextInput
            id="nameSurname"
            placeholder="İsim Soyisim"
            value={formData.nameSurname}
            onChange={(value) => handleFormChange("nameSurname", value)}
            maxLength={100}
            label="İsim Soyisim"
          />
        </section>

        <section className="mb-8">
          <TextElement variant="h3">11. Telefon Numarası:</TextElement>

          <FormTextInput
            id="phone"
            placeholder="0555 555 55 55"
            value={formData.phone || ""}
            onChange={(value) => handleFormChange("phone", value)}
            maxLength={11}
            label="Telefon Numarası"
          />
        </section>

        {/* 12. Teslimat Tarihi ve Saati */}
        <section className="mb-8">
          <TextElement variant="h3">12. Teslimat Tarihi ve Saati:</TextElement>
          <div className="flex flex-wrap gap-3 w-full">
            <Datetime
              value={formData.deliveryDateAndTime || new Date()}
              onChange={(value) => {
                if (moment.isMoment(value)) {
                  handleFormChange("deliveryDateAndTime", value.toDate());
                }
              }}
              dateFormat="DD-MM-YYYY"
              timeFormat="HH:mm"
              locale="tr"
              isValidDate={(current) =>
                current.isAfter(moment().subtract(1, "day"))
              }
              inputProps={{
                placeholder: "DD-MM-YYYY HH:mm",
                className:
                  "p-3 border rounded-lg w-full text-sm focus:ring-rose-500 focus:border-rose-500 shadow-sm focus:outline-none",
              }}
              className="w-full"
            />
          </div>
        </section>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-700 transition-colors"
        >
          Sipariş Oluştur
        </button>
      </div>
    </main>
  );
}
