// "use client";

// import React, { useState, useEffect } from 'react';

// const CompleteGSAPGuide = () => {
//   const [activeSection, setActiveSection] = useState('basics');
//   const [searchTerm, setSearchTerm] = useState('');

//   const sections = [
//     { id: 'basics', title: 'GSAP Basics', icon: '🚀', description: 'Core concepts and getting started' },
//     { id: 'methods', title: 'Core Methods', icon: '⚡', description: 'gsap.to(), .from(), .fromTo(), .set()' },
//     { id: 'properties', title: 'Animation Properties', icon: '🎛️', description: 'All animatable properties and values' },
//     { id: 'timing', title: 'Timing & Control', icon: '⏰', description: 'Duration, delay, ease, repeat, yoyo' },
//     { id: 'timeline', title: 'Timeline', icon: '🎬', description: 'Sequencing animations with Timeline' },
//     { id: 'callbacks', title: 'Callbacks & Events', icon: '🔔', description: 'onStart, onUpdate, onComplete, etc.' },
//     { id: 'plugins', title: 'Plugins', icon: '🔌', description: 'ScrollTrigger, TextPlugin, MorphSVG, etc.' },
//     { id: 'transforms', title: 'Transforms & 3D', icon: '🎯', description: 'x, y, z, rotation, scale, skew' },
//     { id: 'performance', title: 'Performance', icon: '🏃', description: 'Optimization tips and best practices' },
//     { id: 'examples', title: 'Code Examples', icon: '💻', description: 'Practical examples and use cases' }
//   ];

//   const renderBasics = () => (
//     <div className="space-y-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-4">🚀 GSAP Basics</h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           GreenSock Animation Platform (GSAP) is the most robust, high-performance animation library for JavaScript. 
//           It works with any framework and animates anything JavaScript can touch.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🌟 Why GSAP?</h3>
//           <ul className="space-y-3 text-gray-300">
//             <li className="flex items-start gap-2">
//               <span className="text-green-400 mt-1">✓</span>
//               <span><strong>Performance:</strong> 20x faster than jQuery, uses hardware acceleration</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-green-400 mt-1">✓</span>
//               <span><strong>Compatibility:</strong> Works in all major browsers back to IE9</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-green-400 mt-1">✓</span>
//               <span><strong>Flexibility:</strong> Animates CSS, SVG, canvas, WebGL, React, Vue, etc.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-green-400 mt-1">✓</span>
//               <span><strong>Timeline:</strong> Sophisticated sequencing and control</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-green-400 mt-1">✓</span>
//               <span><strong>Plugins:</strong> Extensive ecosystem for specialized animations</span>
//             </li>
//           </ul>
//         </div>

//         <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-4">📦 Installation</h3>
//           <div className="space-y-4">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-2">NPM Installation:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-green-300">npm install gsap</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-2">Import in Next.js:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//         <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🎯 Basic Syntax</h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="text-lg font-medium text-green-400 mb-3">Structure:</h4>
//             <pre className="bg-black p-4 rounded text-sm">
//               <code className="text-blue-300">{`gsap.to(target, {
//   // Animation properties
//   x: 100,
//   y: 50,
//   rotation: 45,
//   duration: 2,
//   ease: "power2.inOut"
// });`}</code>
//             </pre>
//           </div>
//           <div>
//             <h4 className="text-lg font-medium text-green-400 mb-3">Key Components:</h4>
//             <ul className="space-y-2 text-gray-300">
//               <li><strong className="text-yellow-400">Target:</strong> What to animate (selector, element, object)</li>
//               <li><strong className="text-yellow-400">Properties:</strong> What values to change</li>
//               <li><strong className="text-yellow-400">Duration:</strong> How long the animation takes</li>
//               <li><strong className="text-yellow-400">Ease:</strong> How the animation progresses</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderMethods = () => (
//     <div className="space-y-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-4">⚡ Core Methods</h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           GSAP provides four main methods for creating animations, each serving different purposes and use cases.
//         </p>
//       </div>

//       <div className="grid gap-8">
//         {/* gsap.to() */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-green-400/20">
//           <h3 className="text-2xl font-semibold text-green-400 mb-4">🎯 gsap.to()</h3>
//           <p className="text-gray-300 mb-4">Animates FROM current values TO specified end values. Most commonly used method.</p>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Basic Example:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`// Move element to x: 100px over 2 seconds
// gsap.to(".box", {
//   x: 100,
//   duration: 2
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Complex Example:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`gsap.to(".box", {
//   x: 100,
//   y: 50,
//   rotation: 360,
//   scale: 1.5,
//   duration: 2,
//   ease: "bounce.out",
//   stagger: 0.1, // For multiple elements
//   onComplete: () => console.log("Done!")
// });`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>

//         {/* gsap.from() */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-400/20">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-4">📍 gsap.from()</h3>
//           <p className="text-gray-300 mb-4">Animates FROM specified start values TO current values. Great for entrance animations.</p>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Fade In Example:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`// Element fades in from opacity 0
// gsap.from(".box", {
//   opacity: 0,
//   y: 50,
//   duration: 1
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Slide In Example:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`gsap.from(".card", {
//   x: -200,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power2.out"
// });`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>

//         {/* gsap.fromTo() */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-400/20">
//           <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔄 gsap.fromTo()</h3>
//           <p className="text-gray-300 mb-4">Define both start AND end values. Maximum control over animation.</p>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Basic Syntax:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`gsap.fromTo(".box", 
//   // FROM values
//   { x: -100, opacity: 0 },
//   // TO values  
//   { x: 100, opacity: 1, duration: 2 }
// );`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Complex Example:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`gsap.fromTo(".box",
//   { 
//     scale: 0, 
//     rotation: -180,
//     transformOrigin: "center center"
//   },
//   { 
//     scale: 1, 
//     rotation: 0,
//     duration: 1.5,
//     ease: "back.out(1.7)"
//   }
// );`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>

//         {/* gsap.set() */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-orange-400/20">
//           <h3 className="text-2xl font-semibold text-orange-400 mb-4">⚙️ gsap.set()</h3>
//           <p className="text-gray-300 mb-4">Instantly set properties without animation. Perfect for initial states.</p>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Set Initial State:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`// Set up initial state
// gsap.set(".box", {
//   x: -100,
//   opacity: 0,
//   scale: 0.5
// });

// // Then animate
// gsap.to(".box", {
//   x: 0,
//   opacity: 1,
//   scale: 1,
//   duration: 1
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-2">Responsive Setup:</h4>
//               <pre className="bg-black p-3 rounded text-sm overflow-x-auto">
//                 <code className="text-blue-300">{`// Set different states based on screen size
// gsap.set(".mobile-menu", {
//   x: window.innerWidth < 768 ? -100 : 0,
//   display: window.innerWidth < 768 ? "block" : "none"
// });`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderProperties = () => (
//     <div className="space-y-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-4">🎛️ Animation Properties</h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           GSAP can animate virtually any numeric property. Here's a comprehensive guide to all animatable properties.
//         </p>
//       </div>

//       <div className="grid gap-8">
//         {/* Transform Properties */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🎯 Transform Properties</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Position:</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">x</code> - Horizontal position (px)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">y</code> - Vertical position (px)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">z</code> - Depth position (px)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">xPercent</code> - X as percentage</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">yPercent</code> - Y as percentage</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Rotation:</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">rotation</code> - Z-axis rotation (deg)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">rotationX</code> - X-axis rotation</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">rotationY</code> - Y-axis rotation</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">rotationZ</code> - Z-axis rotation</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Scale & Skew:</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">scale</code> - Uniform scale</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">scaleX</code> - Horizontal scale</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">scaleY</code> - Vertical scale</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">skewX</code> - Horizontal skew</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">skewY</code> - Vertical skew</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* CSS Properties */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-400/20">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-4">🎨 CSS Properties</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Appearance:</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">opacity</code> - Transparency (0-1)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">backgroundColor</code> - Background color</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">color</code> - Text color</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">borderColor</code> - Border color</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">borderWidth</code> - Border thickness</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Dimensions:</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">width</code> - Element width</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">height</code> - Element height</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">top</code> - Top position</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">left</code> - Left position</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">right</code> - Right position</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">bottom</code> - Bottom position</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Effects:</h4>
//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">borderRadius</code> - Corner rounding</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">boxShadow</code> - Drop shadow</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">textShadow</code> - Text shadow</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">filter</code> - CSS filters</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Special Values */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-400/20">
//           <h3 className="text-2xl font-semibold text-purple-400 mb-4">✨ Special Values & Techniques</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Relative Values:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`// Relative to current value
// gsap.to(".box", { x: "+=100" }); // Add 100px
// gsap.to(".box", { rotation: "-=45" }); // Subtract 45deg

// // Percentage-based
// gsap.to(".box", { x: "50%" }); // 50% of parent width
// gsap.to(".box", { xPercent: 50 }); // 50% of self width`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Random Values:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`// Random between min and max
// gsap.to(".box", { 
//   x: "random(-100, 100)",
//   rotation: "random(0, 360)",
//   scale: "random(0.5, 2)"
// });

// // Random from array
// gsap.to(".box", {
//   backgroundColor: "random(['red', 'blue', 'green'])"
// });`}</code>
//               </pre>
//             </div>
//           </div>
//           <div className="mt-6">
//             <h4 className="text-lg font-medium text-green-400 mb-3">Function-Based Values:</h4>
//             <pre className="bg-black p-3 rounded text-sm">
//               <code className="text-blue-300">{`// Function that returns different values per element
// gsap.to(".box", {
//   x: (index, element) => index * 100, // Each element offset by 100px
//   rotation: (i, el) => i * 45, // Each rotated by 45deg more
//   duration: (i) => 1 + (i * 0.1) // Staggered durations
// });`}</code>
//             </pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderTiming = () => (
//     <div className="space-y-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-4">⏰ Timing & Control</h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           Master the timing aspects of GSAP animations including duration, delay, easing, and repetition.
//         </p>
//       </div>

//       <div className="grid gap-8">
//         {/* Basic Timing */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-4">⏱️ Basic Timing Controls</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Duration & Delay:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`gsap.to(".box", {
//   x: 100,
//   duration: 2,        // 2 seconds long
//   delay: 0.5,         // Start after 0.5s
// });

// // Different delays for multiple elements
// gsap.to(".item", {
//   y: 50,
//   duration: 1,
//   delay: (i) => i * 0.1  // Each delayed by 0.1s more
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Speed Control:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li><strong>duration:</strong> Time in seconds (default: 0.5)</li>
//                 <li><strong>delay:</strong> Wait time before starting</li>
//                 <li><strong>delayedCall:</strong> Execute function after delay</li>
//                 <li><strong>timeScale:</strong> Speed multiplier (2 = 2x faster)</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Easing */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-400/20">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-4">🎢 Easing Functions</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Basic Easing:</h4>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">linear</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">power1.in</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">power1.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">power1.inOut</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">power2.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">power3.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">power4.out</code></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Special Easing:</h4>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">bounce.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">elastic.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">back.out(1.7)</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">circ.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">expo.out</code></li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">sine.inOut</code></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Custom Easing:</h4>
//               <pre className="bg-black p-2 rounded text-xs">
//                 <code className="text-blue-300">{`// Custom cubic-bezier
// ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"

// // Steps
// ease: "steps(5)"

// // Custom ease function
// ease: CustomEase.create("custom", "M0,0 C0.5,1 0.5,1 1,0")`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>

//         {/* Repeat & Yoyo */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-green-400/20">
//           <h3 className="text-2xl font-semibold text-green-400 mb-4">🔄 Repeat & Yoyo</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-3">Repeat Options:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`gsap.to(".box", {
//   x: 100,
//   duration: 1,
//   repeat: 3,          // Repeat 3 times (total: 4 plays)
//   repeat: -1,         // Infinite repeat
//   repeatDelay: 0.5,   // Pause between repeats
//   yoyo: true,         // Reverse each repeat
//   yoyoEase: "power2.in" // Different ease for reverse
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-3">Repeat Behavior:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li><strong>repeat:</strong> Number of repeats (-1 = infinite)</li>
//                 <li><strong>repeatDelay:</strong> Pause between cycles</li>
//                 <li><strong>yoyo:</strong> Reverse animation on alternate cycles</li>
//                 <li><strong>yoyoEase:</strong> Different easing for yoyo</li>
//                 <li><strong>repeatRefresh:</strong> Recalculate values each cycle</li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-6">
//             <h4 className="text-lg font-medium text-yellow-400 mb-3">Advanced Repeat Example:</h4>
//             <pre className="bg-black p-3 rounded text-sm">
//               <code className="text-blue-300">{`// Complex repeat with refresh for random values
// gsap.to(".particle", {
//   x: "random(-200, 200)",
//   y: "random(-200, 200)",
//   rotation: "random(0, 360)",
//   duration: 2,
//   repeat: -1,
//   repeatDelay: 1,
//   yoyo: true,
//   repeatRefresh: true, // Recalculate random values each cycle
//   ease: "power2.inOut"
// });`}</code>
//             </pre>
//           </div>
//         </div>

//         {/* Stagger */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-400/20">
//           <h3 className="text-2xl font-semibold text-purple-400 mb-4">📐 Stagger Effects</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Basic Stagger:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`// Simple stagger - each element delayed by 0.1s
// gsap.to(".item", {
//   y: 50,
//   duration: 1,
//   stagger: 0.1
// });

// // Stagger with different directions
// gsap.to(".item", {
//   scale: 1.2,
//   stagger: {
//     amount: 1,      // Total stagger time
//     from: "center", // Start from center
//     grid: "auto"    // Auto-detect grid
//   }
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Advanced Stagger:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`gsap.to(".grid-item", {
//   x: 100,
//   rotation: 360,
//   stagger: {
//     each: 0.1,        // Delay between each
//     from: "random",   // Random starting point
//     grid: [4, 4],     // 4x4 grid layout
//     ease: "power2.inOut",
//     repeat: -1,
//     yoyo: true
//   }
// });`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderTimeline = () => (
//     <div className="space-y-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-4">🎬 Timeline</h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           Timeline is GSAP's most powerful feature for sequencing animations. Create complex, perfectly timed animation sequences.
//         </p>
//       </div>

//       <div className="grid gap-8">
//         {/* Timeline Basics */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🚀 Timeline Basics</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Creating a Timeline:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`// Basic timeline
// const tl = gsap.timeline();

// tl.to(".box1", { x: 100, duration: 1 })
//   .to(".box2", { y: 50, duration: 1 })
//   .to(".box3", { rotation: 360, duration: 1 });

// // Timeline with defaults
// const tl2 = gsap.timeline({
//   defaults: { duration: 1, ease: "power2.out" }
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Timeline Benefits:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li>🎯 <strong>Sequencing:</strong> Chain animations perfectly</li>
//                 <li>⏯️ <strong>Control:</strong> Play, pause, reverse, seek</li>
//                 <li>🎛️ <strong>Timing:</strong> Precise control over timing</li>
//                 <li>🔄 <strong>Reusable:</strong> Play timeline multiple times</li>
//                 <li>🎨 <strong>Complex:</strong> Build sophisticated sequences</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Timeline Methods */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-400/20">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-4">🔧 Timeline Methods</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Animation Methods:</h4>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.to()</code> - Animate to values</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.from()</code> - Animate from values</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.fromTo()</code> - Define start & end</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.set()</code> - Set properties instantly</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.add()</code> - Add animation or timeline</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.call()</code> - Execute function</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Control Methods:</h4>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.play()</code> - Play timeline</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.pause()</code> - Pause timeline</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.reverse()</code> - Play in reverse</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.restart()</code> - Restart from beginning</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.seek()</code> - Jump to specific time</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.kill()</code> - Stop and remove</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Information:</h4>
//               <ul className="space-y-1 text-sm text-gray-300">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.duration()</code> - Get/set duration</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.totalDuration()</code> - Total time including repeats</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.progress()</code> - Get/set progress (0-1)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.time()</code> - Get/set current time</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">.isActive()</code> - Check if playing</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Position Parameters */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-green-400/20">
//           <h3 className="text-2xl font-semibold text-green-400 mb-4">📍 Position Parameters</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-3">Timing Control:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`const tl = gsap.timeline();

// // Default - animations play in sequence
// tl.to(".box1", { x: 100, duration: 1 })
//   .to(".box2", { y: 50, duration: 1 })   // Starts after box1
  
// // Absolute positioning
//   .to(".box3", { rotation: 360 }, 0)     // Starts at 0 seconds
//   .to(".box4", { scale: 2 }, 1.5)        // Starts at 1.5 seconds
  
// // Relative positioning  
//   .to(".box5", { opacity: 0 }, "-=0.5")  // 0.5s before previous ends
//   .to(".box6", { x: -100 }, "+=1");      // 1s after previous ends`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-yellow-400 mb-3">Position Types:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">2</code> - Absolute time (2 seconds)</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">"+=1"</code> - 1 second after previous</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">"-=0.5"</code> - 0.5 seconds before previous ends</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">{"&lt;"}</code> - Same time as previous</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">{"&gt;"}</code> - Right after previous</li>
//                 <li><code className="bg-gray-700 px-2 py-1 rounded">"myLabel"</code> - At a specific label</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Labels */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-400/20">
//           <h3 className="text-2xl font-semibold text-purple-400 mb-4">🏷️ Labels</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Using Labels:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`const tl = gsap.timeline();

// tl.to(".box1", { x: 100, duration: 1 })
//   .addLabel("midpoint")                   // Add label
//   .to(".box2", { y: 50, duration: 1 })
//   .to(".box3", { rotation: 360 }, "midpoint") // Start at label
//   .addLabel("end")
//   .call(() => console.log("Done!"), null, "end");

// // Control with labels
// tl.play("midpoint");     // Play from midpoint
// tl.tweenFromTo("start", "midpoint"); // Play section`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Label Benefits:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li>🎯 <strong>Reference Points:</strong> Easy navigation</li>
//                 <li>🔄 <strong>Reusability:</strong> Jump to specific sections</li>
//                 <li>🎬 <strong>Organization:</strong> Structure complex timelines</li>
//                 <li>⏯️ <strong>Control:</strong> Play specific sections</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Complex Timeline Example */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-orange-400/20">
//           <h3 className="text-2xl font-semibold text-orange-400 mb-4">🎭 Complex Timeline Example</h3>
//           <pre className="bg-black p-4 rounded text-sm overflow-x-auto">
//             <code className="text-blue-300">{`// Advanced timeline with all features
// const masterTimeline = gsap.timeline({
//   defaults: { duration: 1, ease: "power2.out" },
//   repeat: -1,
//   yoyo: true,
//   onComplete: () => console.log("Timeline complete!"),
//   onUpdate: function() {
//     console.log("Progress:", this.progress());
//   }
// });

// masterTimeline
//   // Scene 1: Introduction
//   .addLabel("intro")
//   .from(".hero-title", { y: 50, opacity: 0 })
//   .from(".hero-subtitle", { y: 30, opacity: 0 }, "-=0.5")
//   .from(".hero-button", { scale: 0, opacity: 0 }, "-=0.3")
  
//   // Scene 2: Content reveal
//   .addLabel("content", "+=0.5")
//   .to(".hero", { y: -100, opacity: 0.5 }, "content")
//   .fromTo(".content-section", 
//     { y: 100, opacity: 0 },
//     { y: 0, opacity: 1, stagger: 0.2 }, "content+=0.3")
  
//   // Scene 3: Interactive elements
//   .addLabel("interactive")
//   .to(".card", {
//     rotationY: 360,
//     stagger: {
//       each: 0.1,
//       from: "random"
//     }
//   }, "interactive")
  
//   // Scene 4: Finale
//   .addLabel("finale", "+=1")
//   .to(".particle", {
//     x: "random(-200, 200)",
//     y: "random(-200, 200)",
//     scale: "random(0.5, 2)",
//     rotation: "random(0, 360)",
//     stagger: 0.02,
//     duration: 2,
//     ease: "back.out(1.7)"
//   }, "finale");

// // Control the timeline
// masterTimeline.pause(); // Start paused
// document.querySelector(".play-btn").onclick = () => masterTimeline.play();
// document.querySelector(".reverse-btn").onclick = () => masterTimeline.reverse();`}</code>
//           </pre>
//         </div>
//       </div>
//     </div>
//   );

//   const renderCallbacks = () => (
//     <div className="space-y-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-4">🔔 Callbacks & Events</h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           Callbacks allow you to execute code at specific points during animations. Essential for chaining animations and creating interactive experiences.
//         </p>
//       </div>

//       <div className="grid gap-8">
//         {/* Basic Callbacks */}
//         <div className="bg-gray-800/50 p-6 rounded-xl border border-yellow-400/20">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🎯 Basic Callbacks</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Core Callbacks:</h4>
//               <pre className="bg-black p-3 rounded text-sm">
//                 <code className="text-blue-300">{`gsap.to(".box", {
//   x: 100,
//   duration: 2,
  
//   onStart: () => {
//     console.log("Animation started!");
//   },
  
//   onUpdate: function() {
//     console.log("Progress:", this.progress());
//   },
  
//   onComplete: () => {
//     console.log("Animation finished!");
//     // Chain another animation
//     gsap.to(".box", { y: 50 });
//   }
// });`}</code>
//               </pre>
//             </div>
//             <div>
//               <h4 className="text-lg font-medium text-green-400 mb-3">Available Callbacks:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li><strong>onStart:</strong> When animation begins</li>
//                 <li><strong>onUpdate:</strong> Every frame during animation</li>
//                 <li><strong>onComplete:</strong> When animation finishes</li>
//                 <li><strong>onRepeat:</strong> At start of each repeat cycle</li>
//                 <li><strong>onReverseComplete:</strong> When reverse finishes</li>
//                 <li><strong>onOverwrite:</strong> When animation is overwritten</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* More callback sections... */}
//       </div>
//     </div>
//   );

//   const filteredSections = sections.filter(section =>
//     section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     section.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'basics': return renderBasics();
//       case 'methods': return renderMethods();
//       case 'properties': return renderProperties();
//       case 'timing': return renderTiming();
//       case 'timeline': return renderTimeline();
//       case 'callbacks': return renderCallbacks();
//       default: return renderBasics();
//     }
//   };

//   return (
//     <div className="min-h-screen mt-18 text-white">
//       <div className="container mx-auto px-6 py-8">
//         {/* Hero Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
//             GSAP Animation
//           </h1>
//         </div>

//         {/* Navigation */}
//         <div className="mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//             {filteredSections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => setActiveSection(section.id)}
//                 className={`p-4 rounded-xl border-2 transition-all duration-300 ${
//                   activeSection === section.id
//                     ? 'border-yellow-400 bg-yellow-400/10 scale-105'
//                     : 'border-gray-600 bg-gray-800/50 hover:border-yellow-400/50 hover:bg-yellow-400/5'
//                 }`}
//               >
//                 <div className="text-2xl mb-2">{section.icon}</div>
//                 <h3 className="font-semibold text-white mb-1">{section.title}</h3>
//                 <p className="text-sm text-gray-400">{section.description}</p>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="section-content">
//           {renderContent()}
//         </div>

//         {/* Footer */}
//         <footer className="mt-20 text-center border-t border-gray-700 pt-8">
//           <div className="mb-6">
//             <h3 className="text-2xl font-bold text-yellow-400 mb-4">Ready to Animate?</h3>
//             <p className="text-gray-300 mb-4">
//               This guide covers everything you need to master GSAP. Start with the basics and work your way up to advanced techniques.
//             </p>
//             <div className="flex justify-center gap-4">
//               <a 
//                 href="https://greensock.com/docs/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
//               >
//                 Official GSAP Docs
//               </a>
//               <a 
//                 href="https://codepen.io/collection/nLaQYR" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-colors"
//               >
//                 CodePen Examples
//               </a>
//             </div>
//           </div>
//           <div className="text-gray-500 text-sm">
//             <p>GSAP is a trademark of GreenSock Inc. This guide is for educational purposes.</p>
//             <p className="mt-2">Built with Next.js and Tailwind CSS</p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default CompleteGSAPGuide;