"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {

  // Register gsap context
  useGSAP(() => {
    gsap.from("#box3", {
      x: "+=200",
      duration: 1,
      repeat: -1,
      yoyo: true,
      rotate: "+360",
      ease: "linear",
    });
  }, []);

  useGSAP(() => {
    gsap.from("#box2", {
      x: "-=200",
      duration: 1,
      repeat: -1,
      yoyo: true,
      rotate: "-360",
      ease: "linear",
    });
  }, []);

  const back = () => {
    gsap.from('#box1', { x: "-=100", rotate: "-=180", duration: 1, ease: "power2.out" });
  };

  const ahead = () => {
    gsap.from('#box1', { x: "+=100", rotate: "+=180", duration: 1, ease: "power2.out" });
  };


  return (
    <main className="flex flex-col gap-4 items-center justify-center overflow-x-hidden">
      <div className="h-screen flex flex-col gap-8 items-center justify-center">
        <div className="max-w-[75vw] flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-bold">GSAP .from() animation</h1>
          <p className="mb-8 text-center text-lg text-gray-400">
            Animates elements from new state to their current state. Similar to
            <code> gsap.to()</code> but reversed.
          </p>
        </div>
        <div className="flex gap-8">
          <div
            id="box2"
            className="w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            id="box3"
            className="w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

        </div>

        <div
          id="box1"
          className="w-20 h-20 bg-gradient-to-b from-red-500 to-yellow-500 rounded-lg"
        />

        <div className="flex gap-4">
          <button
            onClick={back}
            className="mt-4 bg-gradient-to-r from-yellow-500 to-orange-900 rounded-[9999px] py-2 px-8 font-bold text-white"
          >
            Backward
          </button>

          <button
            onClick={ahead}
            className="mt-4 bg-gradient-to-r from-green-500 to-green-900 rounded-[9999px] py-2 px-8 font-bold text-white"
          >
            Forward
          </button>
        </div>
      </div>

      
    </main>
  );
}
