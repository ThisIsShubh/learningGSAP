"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {

  // Register gsap context
  useGSAP(() => {
    gsap.to(".boxes", {
      y: "+=200",
      duration: 1,
      repeat: -1,
      yoyo: true,
      rotate: "+360",
      ease: "linear",
      borderRadius:"100%",
      stagger:{
        each:0.5,
        from:"center"
      },
      opacity:0
    });
  }, []);


  return (
    <main className="flex flex-col gap-4 items-center justify-center overflow-x-hidden">
      <div className="h-screen flex flex-col gap-8 items-center justify-center">
        <div className="max-w-[75vw] flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-bold">Stagger property</h1>
          <p className="mb-8 text-center text-lg text-gray-400">
        Allows you to animate a group of elements with a staggered delay, creating a cascading effect where each element starts its animation slightly after the previous one.
          </p>
        </div>
        <div className=" flex gap-8">
          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            className="boxes w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

        </div>

      </div>
    </main>
  );
}
