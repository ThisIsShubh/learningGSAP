import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-18">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-rose-500 bg-clip-text text-transparent">Learning GSAP</h1>
      <div className="flex flex-wrap w-full items-center gap-4 justify-center mt-8">
        <Link href="/gsapTo" className="text-lg bg-white/5 rounded-[99999px] py-4 px-8 hover:bg-white/15 hover:scale-105 transition-all">
        GSAP .to()
        </Link>

        <Link href="/gsapFrom" className="text-lg bg-white/5 rounded-[99999px] py-4 px-8 hover:bg-white/15 hover:scale-105 transition-all">
        GSAP .from()
        </Link>

        <Link href="/gsapFromTo" className="text-lg bg-white/5 rounded-[99999px] py-4 px-8 hover:bg-white/15 hover:scale-105 transition-all">
        GSAP .fromTo()
        </Link>

       

      </div>
    </main>
  );
}
