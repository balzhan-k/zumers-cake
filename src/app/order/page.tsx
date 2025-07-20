"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormSchema } from "@/lib/orderSchema";
import { z } from "zod";

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

moment.locale("tr");

interface OrderFormData {
  occasion: string | null;
  otherOccasionDetails: string | null;
  servings: string | null;
  otherServingsDetails: string | null;
  cakeType: string | null;
  otherCakeTypeDetails: string | null;
  filling: string[];
  otherFillingDetails: string | null;
  colors: string | null;
  otherColorsDetails: string | null;
  allergies: string | null;
  photo: string | null;
  cakeNote: string;
  specialRequests: string;
  nameSurname: string;
  phone: string | null;
  deliveryDateAndTime: Date | null;
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
      occasion: "",
      otherOccasionDetails: "",
      servings: "",
      otherServingsDetails: "",
      cakeType: "",
      otherCakeTypeDetails: "",
      filling: [],
      otherFillingDetails: "",
      colors: "",
      otherColorsDetails: "",
      allergies: "",
      cakeNote: "",
      specialRequests: "",
      photo: null,
      nameSurname: "",
      phone: "",
      deliveryDateAndTime: new Date(),
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

  return (
    <main className="px-4 py-8 bg-rose-50 pb-20">
      <TextElement variant="h2" className="text-center pb-4">
        Pasta Sipariş Formu
      </TextElement>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto px-4 py-8 pb-20 border border-rose-200 rounded-2xl shadow-md bg-stone-50">
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
            {errors.occasion && (
              <span className="text-red-500 text-sm">
                {errors.occasion.message}
              </span>
            )}
            {watch("occasion") === "Other" && (
              <FormTextInput
                isVisible
                {...register("otherOccasionDetails", {
                  required: "Doldurulması zorunlu alan",
                })}
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
            {errors.servings && (
              <span className="text-red-500 text-sm">
                {errors.servings.message}
              </span>
            )}
            {watch("servings") === "Other" && (
              <FormTextInput
                isVisible
                {...register("otherServingsDetails", {
                  required: "Doldurulması zorunlu alan",
                })}
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
            {errors.cakeType && (
              <span className="text-red-500 text-sm">
                {errors.cakeType.message}
              </span>
            )}
            {watch("cakeType") === "Other" && (
              <FormTextInput
                isVisible
                {...register("otherCakeTypeDetails", {
                  required: "Doldurulması zorunlu alan",
                })}
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

          <section className="mb-8">
            <TextElement variant="h3">4. Pasta İçeriği:</TextElement>
            <div className="flex flex-wrap gap-3 mb-4">
              {fillingOptions.map((option) => (
                <CustomFormButton
                  key={option.value}
                  value={option.value}
                  onClick={() => {
                    const currentFillings = watch("filling");
                    const isSelected = currentFillings.includes(option.value);

                    if (isSelected) {
                      setValue(
                        "filling",
                        currentFillings.filter(
                          (item) => item !== option.value
                        ) as string[]
                      );
                    } else {
                      if (currentFillings.length < 3) {
                        setValue("filling", [...currentFillings, option.value]);
                      } else {
                        alert("En fazla 3 içerik seçebilirsiniz.");
                      }
                    }
                  }}
                  isSelected={watch("filling")?.includes(option.value)}
                  text={option.text}
                />
              ))}
            </div>
            {errors.filling && (
              <span className="text-red-500 text-sm">
                {errors.filling.message}
              </span>
            )}
            {watch("filling").includes("Other") && (
              <FormTextInput
                isVisible
                {...register("otherFillingDetails", {
                  required: "Doldurulması zorunlu alan",
                })}
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
            {errors.colors && (
              <span className="text-red-500 text-sm">
                {errors.colors.message}
              </span>
            )}
            {watch("colors") === "Other" && (
              <FormTextInput
                isVisible
                {...register("otherColorsDetails", {
                  required: "Doldurulması zorunlu alan",
                })}
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

          <section className="mb-8">
            <TextElement variant="h3">
              6. Alerji veya özel diyet durumu var mı?
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
            </div>
            {errors.allergies && (
              <span className="text-red-500 text-sm">
                {errors.allergies.message}
              </span>
            )}
          </section>

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

          <section className="mb-8">
            <TextElement variant="h3">
              8.Pasta üzerine yazılacak not:
            </TextElement>
            <div className="flex flex-wrap gap-3">
              <FormTextArea
                id="cakeNote"
                placeholder="Örn: Ada 1 yaşında"
                {...register("cakeNote")}
                maxLength={100}
                rows={5}
              />
            </div>
            {errors.cakeNote && (
              <span className="text-red-500 text-sm">
                {errors.cakeNote.message}
              </span>
            )}
          </section>

          <section className="mb-8">
            <TextElement variant="h3">
              9. Pasta ile ilgili özel notlar veya istekler:
            </TextElement>
            <div className="flex flex-wrap gap-3">
              <FormTextArea
                id="specialRequests"
                placeholder="Örn: Yeşil renk ağırlıklı olsun, özel şeker hamuru figürleri kullanılsın"
                {...register("specialRequests")}
                maxLength={500}
                rows={6}
              />
            </div>
            {errors.specialRequests && (
              <span className="text-red-500 text-sm">
                {errors.specialRequests.message}
              </span>
            )}
          </section>

          <section className="mb-8">
            <TextElement variant="h3">10. İsim Soyisim:</TextElement>
            <FormTextInput
              id="nameSurname"
              placeholder="İsim Soyisim"
              {...register("nameSurname", {
                required: "Doldurulması zorunlu alan",
              })}
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
              {...register("phone", { required: "Doldurulması zorunlu alan" })}
              maxLength={11}
              label="Telefon Numarası"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </section>

          <section className="mb-8">
            <TextElement variant="h3">
              12. Pastanın Hazır Olacağı Tarih ve Saat:
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
            </div>
            {errors.deliveryDateAndTime && (
              <span className="text-red-500 text-sm">
                {errors.deliveryDateAndTime.message}
              </span>
            )}
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
