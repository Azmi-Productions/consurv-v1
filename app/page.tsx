import Image from "next/image";
import MAINIMAGE from "@/public/what-we-do.jpg";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-center py-64">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <Image
        src={MAINIMAGE}
        unoptimized
        alt="What we do"
        className="w-screen bg-cover"
      />
    </main>
  );
}
