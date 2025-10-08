"use client";

import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {

    const scrollRef = useRef();
    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);
        boxes.forEach((box, i) => {
            gsap.to(box, {
                x: 150,
                duration: 1,
                rotation:360,
                ease: "linear",
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: true,
                }
            })
        });
                 

    }, []);



  return (
    <main className="flex flex-col gap-4 items-center justify-center overflow-x-hidden">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="max-w-[75vw] h-[200vh] flex flex-col items-center justify-start pt-60">
          <h1 className="mb-2 text-2xl text-center font-bold">GSAP ScrollTrigger Plugin</h1>
          <p className="mb-8 text-center text-lg text-gray-400">
            Animates elements based on the scroll position. Trigger animations when elements enter or leave the viewport.
          </p>
          <div className="flex items-center gap-2 mt-80"><h4>Scroll down to see the effect</h4><FaChevronCircleDown/></div>
        </div>

        <div className="flex gap-8" ref={scrollRef}>
          <div
            id="scroll-first"
            className="w-20 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg"
          />

          <div
            id="scroll-second"
            className="w-20 h-20 bg-gradient-to-b from-rose-500 to-green-500 rounded-lg"
          />

        </div>

        <div className="h-screen"></div>
      </div>

      
    </main>
  );
}
