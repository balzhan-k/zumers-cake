import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Zumers&apos;s Cake
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Delicious homemade cakes made with love and the finest ingredients
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-black px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Order Now
            </button>
            <button className="border border-primary text-green-500 px-8 py-3 rounded-full hover:bg-primary/10 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
