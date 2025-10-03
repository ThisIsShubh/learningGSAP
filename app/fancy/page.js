// pages/fancy-animation.js
"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

export default function Page() {
  useEffect(() => {
    const tl = gsap.timeline();

    // Background animation
    tl.fromTo('.background-gradient', 
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
    );

    // Main title animation
    tl.fromTo('.main-title',
      { y: 100, opacity: 0, rotationX: 90 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.5, ease: 'back.out(1.7)' },
      '-=1'
    );

    // Subtitle animation
    tl.fromTo('.subtitle',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );

    // Floating shapes animation
    tl.fromTo('.floating-shape',
      { 
        scale: 0, 
        opacity: 0,
        rotation: 180 
      },
      {
        scale: 1,
        opacity: 0.8,
        rotation: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)'
      },
      '-=0.3'
    );

    // Button animation
    tl.fromTo('.action-button',
      { 
        y: 50, 
        opacity: 0,
        scale: 0.8 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'bounce.out'
      },
      '-=0.5'
    );

    // Continuous animations
    gsap.to('.floating-shape', {
      y: '+=20',
      rotation: '+=5',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

    gsap.to('.pulse-glow', {
      scale: 1.1,
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50;
      const y = (clientY / window.innerHeight - 0.5) * 50;

      gsap.to('.parallax-element', {
        x: x,
        y: y,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="background-gradient fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 opacity-0"></div>
      
      {/* Floating Shapes */}
      <div className="floating-shape absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 blur-sm"></div>
      <div className="floating-shape absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-0 blur-lg"></div>
      <div className="floating-shape absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full opacity-0 blur-md"></div>
      <div className="floating-shape absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-0 blur-xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-purple-400/20"></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center parallax-element">
          {/* Main Title */}
          <h1 className="main-title text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
              Learning GSAP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="subtitle text-2xl text-purple-200 font-light tracking-widest mb-12 opacity-0">
            Trying all the animations here
          </p>

          {/* Animated Divider */}
          <div className="relative mb-12">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-4"></div>
            <div className="pulse-glow w-32 h-32 mx-auto border-2 border-purple-400/30 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-purple-400/50 rounded-full"></div>
            </div>
          </div>

          {/* Action Button */}
          <button 
            className="action-button group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 opacity-0"
            onMouseEnter={(e) => {
              gsap.to(e.target, {
                scale: 1.05,
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)',
                duration: 0.3
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.target, {
                scale: 1,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                duration: 0.3
              });
            }}
          >
            <span className="relative z-10">ENTER EXPERIENCE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Floating Particles */}
          <div className="fixed inset-0 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-purple-400/50"></div>
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-purple-400/50"></div>
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-purple-400/50"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-purple-400/50"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .floating-shape:nth-child(odd) {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-shape:nth-child(even) {
          animation: float 4s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
}