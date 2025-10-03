"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {

    const tl=gsap.timeline({
        repeat:-1,
        repeatDelay:0,
        defaults:{duration:1, ease:"back.inOut"}
    })

  // Register gsap context
  useGSAP(() => {

  // Roll right while turning into a ball
  tl.to("#box1", {
    x: 250,
    rotate: "+360",
    borderRadius: "100%",
    duration: 1.5,
    ease: "power2.inOut"
  })
  // First bounce (high)
  .to("#box1", {
    y: -80,
    duration: 0.4,
    ease: "power2.out"
  })
  .to("#box1", {
    y: 0,
    duration: 0.4,
    ease: "bounce.out"
  })
  // Second bounce (medium)
  .to("#box1", {
    y: -50,
    duration: 0.3,
    ease: "power2.out"
  })
  .to("#box1", {
    y: 0,
    duration: 0.3,
    ease: "bounce.out"
  })
  // Third bounce (low)
  .to("#box1", {
    y: -20,
    duration: 0.2,
    ease: "power2.out"
  })
  .to("#box1", {
    y: 0,
    duration: 0.2,
    ease: "bounce.out"
  })
  // Roll back to start while turning back to square
  .to("#box1", {
    x: 0,
    rotate: "-=360",
    borderRadius: "0%",
    duration: 1.5,
    ease: "power2.inOut"
  })
  
    // Roll left while turning into a ball
  .to("#box1", {
    x: -250,
    rotate: "-=360",
    borderRadius: "100%",
    duration: 1.5,
    ease: "power2.inOut"
  })
  // First bounce (high)
  .to("#box1", {
    y: -80,
    duration: 0.4,
    ease: "power2.out"
  })
  .to("#box1", {
    y: 0,
    duration: 0.4,
    ease: "bounce.out"
  })
  // Second bounce (medium)
  .to("#box1", {
    y: -50,
    duration: 0.3,
    ease: "power2.out"
  })
  .to("#box1", {
    y: 0,
    duration: 0.3,
    ease: "bounce.out"
  })
  // Third bounce (low)
  .to("#box1", {
    y: -20,
    duration: 0.2,
    ease: "power2.out"
  })
  .to("#box1", {
    y: 0,
    duration: 0.2,
    ease: "bounce.out"
  })
    // Roll back to start while turning back to square
  .to("#box1", {
    x: 0,
    rotate: "+=360",
    borderRadius: "0%",
    duration: 1.5,
    ease: "power2.inOut"
  });
}, []);

  const pausePlay = () => {
    if(tl.paused()){
        tl.play();
    }
    else{
        tl.pause();
    }
  };

  return (
    <main className="flex flex-col gap-4 items-center justify-center overflow-x-hidden">
      <div className="h-screen flex flex-col gap-8 items-center justify-center">
        <div className="max-w-[75vw] flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-bold">GSAP .timeline() animation</h1>
          <p className="mb-8 text-center text-lg text-gray-400">
            For sequencing multiple animations. Can chain multiple tweens like
            <code> gsap.from()</code> and <code> gsap.to()</code> and control their timing.
          </p>
        </div>

        <div
          id="box1"
          className="w-20 h-20 bg-gradient-to-b from-red-500 to-yellow-500 rounded-lg"
        />
          <button
            onClick={pausePlay}
            className="mt-4 bg-gradient-to-r from-yellow-500 to-orange-900 rounded-[9999px] py-2 px-8 font-bold text-white"
          >
            Pause/Play
          </button>
      </div>

      
    </main>
  );
}
