export default function Gallery() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Galeri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gallery images will be added here */}
        <p className="text-lg text-foreground/80">
          En güzel pasta ve tatlılarımızın fotoğrafları yakında burada olacak.
        </p>
      </div>
    </main>
  );
}
