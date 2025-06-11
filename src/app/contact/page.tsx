export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">İletişim</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-foreground/80 mb-6">
          Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
        </p>
        <div className="space-y-4">
          <p>📞 Telefon: (Telefon numarası eklenecek)</p>
          <p>📧 E-posta: (E-posta adresi eklenecek)</p>
          <p>📍 Adres: (Adres bilgisi eklenecek)</p>
        </div>
      </div>
    </main>
  );
}
