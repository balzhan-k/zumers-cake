import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Hoş Geldiniz</h1>
      <p className="text-lg text-foreground/80">
        Zumers Cake'e hoş geldiniz. En lezzetli pasta ve tatlılarımızı keşfedin.
      </p>
    </main>
  );
}
