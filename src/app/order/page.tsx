"use client";

import { useState } from "react";
import CustomFormButton from "@/components/common/CustomButton";
import TextElement from "@/components/common/TextElement";
import FormTextInput from "@/components/common/FormTextInput";
import PhotoUploadField from "@/components/common/PhotoUploadField";
import FormTextArea from "@/components/common/FormTextArea";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "moment/locale/tr";
import SuccessPopup from "@/components/common/SuccessPopup";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormSchema } from "@/lib/orderSchema";
import { z } from "zod";
import { set } from "zod/v4-mini";

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
  photo: string | null; //fotoğraf
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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      occasion: null,
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
    },
  });

  const onSubmit = async (data: z.infer<typeof orderFormSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } else {
        alert("Gönderim sırasında hata oluştu.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Bir hata oluştu.");
    }
  };

  // ...existing code...
  return (
    <main className="px-4 py-8 bg-rose-50 pb-20">
      <TextElement variant="h2" className="text-center pb-4">
        Pasta Sipariş Formu
      </TextElement>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto md:max-w-3xl p-8 border border-rose-200 rounded-2xl shadow-md bg-stone-50">
          <section className="mb-8">
            <TextElement variant="h3">1. Özel Gün:</TextElement>
            <div className="flex flex-wrap gap-3 mb-4">
              {occasionOptions.map((option) => (
                <CustomFormButton
                  key={option.value}
                  value={option.value}
                  onClick={() => setValue("occasion", option.value)}
                  isSelected={watch("occasion") === option.value}
                  text={option.text}
                />
              ))}
            </div>
            {watch("occasion") === "Other" && (
              <FormTextInput
                isVisible
                value={watch("otherOccasionDetails") || ""}
                onChange={(value) => setValue("otherOccasionDetails", value)}
                placeholder="Örn: Mezuniyet Töreni"
                maxLength={100}
                label="Lütfen diğer özel günü belirtiniz:"
                id="otherOccasionInput"
              />
            )}
            {errors.otherOccasionDetails && (
              <span className="text-red-500 text-sm">
                {errors.otherOccasionDetails.message}
              </span>
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
                  onClick={() => setValue("servings", option.value)}
                  isSelected={watch("servings") === option.value}
                  text={option.text}
                />
              ))}
            </div>
            {watch("servings") === "Other" && (
              <FormTextInput
                isVisible
                value={watch("otherServingsDetails") || ""}
                onChange={(value) => setValue("otherServingsDetails", value)}
                placeholder="Örn: 10 kişilik"
                maxLength={100}
                label="Lütfen diğer kişi sayısını belirtiniz:"
                id="otherServingsInput"
              />
            )}
            {errors.otherServingsDetails && (
              <span className="text-red-500 text-sm">
                {errors.otherServingsDetails.message}
              </span>
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
                  onClick={() => setValue("cakeType", option.value)}
                  isSelected={watch("cakeType") === option.value}
                  text={option.text}
                />
              ))}
            </div>
            {watch("cakeType") === "Other" && (
              <FormTextInput
                isVisible
                value={watch("otherCakeTypeDetails") || ""}
                onChange={(value) => setValue("otherCakeTypeDetails", value)}
                placeholder="Örn: Cheese Cake, Tiramisu"
                maxLength={100}
                label="Lütfen diğer pasta türünü belirtiniz:"
                id="otherCakeTypeInput"
              />
            )}
            {errors.otherCakeTypeDetails && (
              <span className="text-red-500 text-sm">
                {errors.otherCakeTypeDetails.message}
              </span>
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
                  onClick={() => setValue("filling", option.value)}
                  isSelected={watch("filling") === option.value}
                  text={option.text}
                />
              ))}
            </div>
            {watch("filling") === "Other" && (
              <FormTextInput
                isVisible
                value={watch("otherFillingDetails") || ""}
                onChange={(value) => setValue("otherFillingDetails", value)}
                placeholder="Örn: Kremalı, Çikolatalı, Meyveli"
                maxLength={100}
                label="Lütfen diğer pasta içeriğini belirtiniz:"
                id="otherFillingInput"
              />
            )}
            {errors.otherFillingDetails && (
              <span className="text-red-500 text-sm">
                {errors.otherFillingDetails.message}
              </span>
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
                  onClick={() => setValue("colors", option.value)}
                  isSelected={watch("colors") === option.value}
                  text={option.text}
                />
              ))}
            </div>
            {watch("colors") === "Other" && (
              <FormTextInput
                isVisible={watch("colors") === "Other"}
                value={watch("otherColorsDetails") || ""}
                onChange={(value) => setValue("otherColorsDetails", value)}
                placeholder="Örn: Kırmızı, Mavi, Yeşil"
                maxLength={100}
                label="Lütfen diğer renk tercihlerini belirtiniz:"
                id="otherColorsInput"
              />
            )}
            {errors.otherColorsDetails && (
              <span className="text-red-500 text-sm">
                {errors.otherColorsDetails.message}
              </span>
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
                  onClick={() => setValue("allergies", option.value)}
                  isSelected={watch("allergies") === option.value}
                  text={option.text}
                />
              ))}
              {errors.allergies && (
                <span className="text-red-500 text-sm">
                  {errors.allergies.message}
                </span>
              )}
            </div>
          </section>

          {/* 7. Özel tema veya konsept örneği */}
          <section className="mb-8">
            <TextElement variant="h3">
              7. Özel tema veya konsept örneği:
            </TextElement>
            <PhotoUploadField
              value={watch("photo")}
              onChange={(url) => setValue("photo", url)}
              hintText="PNG, JPG, GIF"
              maxSizeMB={10}
              acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
            />
            {errors.photo && (
              <span className="text-red-500 text-sm">
                {errors.photo.message}
              </span>
            )}
          </section>

          {/* 8. Pasta üzerine yazılacak not */}
          <section className="mb-8">
            <TextElement variant="h3">
              8.Pasta üzerine yazılacak not:
            </TextElement>
            <div className="flex flex-wrap gap-3">
              <FormTextArea
                id="cakeNote"
                placeholder="Örn: Ada 1 yaşında"
                value={watch("cakeNote") || ""}
                onChange={(value) => setValue("cakeNote", value)}
                maxLength={100}
                rows={5}
              />
              {errors.cakeNote && (
                <span className="text-red-500 text-sm">
                  {errors.cakeNote.message}
                </span>
              )}
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
                value={watch("specialRequests") || ""}
                onChange={(value) => setValue("specialRequests", value)}
                maxLength={500}
                rows={6}
              />
              {errors.specialRequests && (
                <span className="text-red-500 text-sm">
                  {errors.specialRequests.message}
                </span>
              )}
            </div>
          </section>

          <section className="mb-8">
            <TextElement variant="h3">10. İsim Soyisim:</TextElement>
            <FormTextInput
              id="nameSurname"
              placeholder="İsim Soyisim"
              value={watch("nameSurname") || ""}
              onChange={(value) => setValue("nameSurname", value)}
              maxLength={100}
              label="İsim Soyisim"
            />
            {errors.nameSurname && (
              <span className="text-red-500 text-sm">
                {errors.nameSurname.message}
              </span>
            )}
          </section>

          <section className="mb-8">
            <TextElement variant="h3">11. Telefon Numarası:</TextElement>
            <FormTextInput
              id="phone"
              placeholder="0555 555 55 55"
              value={watch("phone") || ""}
              onChange={(value) => setValue("phone", value)}
              maxLength={11}
              label="Telefon Numarası"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </section>

          {/* 12. Teslimat Tarihi ve Saati */}
          <section className="mb-8">
            <TextElement variant="h3">
              12. Teslimat Tarihi ve Saati:
            </TextElement>
            <div className="flex flex-wrap gap-3 w-full">
              <Datetime
                value={watch("deliveryDateAndTime") || new Date()}
                onChange={(value) => {
                  if (moment.isMoment(value)) {
                    setValue("deliveryDateAndTime", value.toDate());
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
              {errors.deliveryDateAndTime && (
                <span className="text-red-500 text-sm">
                  {errors.deliveryDateAndTime.message}
                </span>
              )}
            </div>
          </section>

          <button
            type="submit"
            className="w-full py-3 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-700 transition-colors"
          >
            Sipariş Oluştur
          </button>
        </div>
        <SuccessPopup
          message="Siparişiniz başarıyla gönderildi!"
          isVisible={showSuccessPopup}
        />
      </form>
    </main>
  );
}
