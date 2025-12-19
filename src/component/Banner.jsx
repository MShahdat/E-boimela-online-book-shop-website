import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router'; // unchanged
import { IoStar } from "react-icons/io5"; // unchanged
import { motion } from 'framer-motion'
/* ---------- Small, dependency-free counter ---------- */
const CountUp = ({
  end,
  duration = 3500,           // ms
  decimals = 0,
  formatter,                 // optional (value:number)=>string
  prefix = "",
  suffix = "",
  easing = true
}) => {
  const [display, setDisplay] = useState(prefix + (formatter ? formatter(0) : (0).toFixed(decimals)) + suffix);
  const rafRef = useRef();

  useEffect(() => {
    const start = performance.now();
    const from = 0;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const p = easing ? easeOutCubic(t) : t;
      const value = from + (end - from) * p;

      let text;
      if (formatter) {
        text = formatter(value);
      } else {
        // default: decimals + thousand separators
        const fixed = value.toFixed(decimals);
        const [i, d] = fixed.split('.');
        text = Number(i).toLocaleString() + (d ? '.' + d : '');
      }
      setDisplay(prefix + text + suffix);

      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, decimals, formatter, prefix, suffix, easing]);

  return <>{display}</>;
};
/* ---------------------------------------------------- */

const Banner = () => {
  return (
    <div className="bg-[#09122C]">
      <div className=''>
        <motion.div
      className="flex flex-col items-center justify-center relative min-h-[91vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1649860771747-ee7be7afa585?q=80&w=1269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >

      {/* Overlay (slightly darker for legibility) */}
      <div className="pointer-events-none absolute inset-0 bg-black/75"></div>

      {/* Soft animated radial highlights */}
      <div
        className="pointer-events-none absolute -inset-20 opacity-75 animate-slow-pan"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 40%),' +
            'radial-gradient(circle at 80% 0%, rgba(255,255,255,0.10), transparent 35%),' +
            'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 40%)',
        }}
      />

      {/* Floating blurred blobs */}
      <div className="pointer-events-none absolute -top-12 -left-12 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-10 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl animate-float-slower" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-fast" />

      {/* ===== Content ===== */}
      <div className="relative z-10 text-white">
        <h2 className='font-lugrasimo text-4xl sm:text-5xl lg:text-6xl text-center font-bold px-2'>Exclusive Bangla Stories</h2>
        <p className="text-center px-2 tracking-wide mt-6 max-w-5xl mx-auto text-[16px] sm:text-lg md:text-xl leading-relaxed text-white/90">
          <span className='font-marko-one font-bold'>E-boimela</span> — Your gateway to the finest Bangla eBooks. Explore over 10,000 titles anytime, anywhere. Make every moment better with a book by your side.
        </p>

        {/* === Marked Stats (animated gradients + dark glass underlay) === */}
        <div className='flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center mt-10 mb-10 sm:divide-x sm:divide-white/10'>

          {/* Reviews */}
          <div className="px-0 sm:px-8 text-center stat-card grad-reviews">
            <div className="relative z-10">
              <div className='flex gap-2 items-center justify-center'>
                <h1 className='text-3xl font-bold text-white'>
                  {/* Count to 4.4 with one decimal */}
                  <CountUp end={4.4} decimals={1} duration={1200} />
                </h1>
                <IoStar className='text-3xl text-yellow-300 drop-shadow' />
              </div>
              <p className='mt-1'>
                <span className='inline-block rounded-full bg-white/10 border border-white/25 px-3 py-1 text-xs font-semibold tracking-wide text-white/90'>
                  {/* Count to 19,000 with commas and + */}
                  <CountUp end={19000} duration={1200} formatter={(v)=>Math.round(v).toLocaleString()} suffix="+ reviews" />
                </span>
              </p>
            </div>
          </div>

          {/* User Installs */}
          <div className="px-0 sm:px-8 text-center stat-card grad-installs">
            <div className="relative z-10">
              <h2 className='text-3xl font-bold text-white'>
                {/* Count to 3.5M, show as 3.5M+ */}
                <CountUp
                  end={3500000}
                  duration={1400}
                  formatter={(v)=> (v/1_000_000).toFixed(1)}
                  suffix="M+"
                />
              </h2>
              <p className='mt-1'>
                <span className='inline-block rounded-full bg-white/10 border border-white/25 px-3 py-1 text-xs font-semibold tracking-wide text-white/90'>
                  User Installs
                </span>
              </p>
            </div>
          </div>

          {/* Books */}
          <div className="px-0 sm:px-8 text-center stat-card grad-books">
            <div className="relative z-10">
              <h1 className='text-3xl font-bold text-white'>
                {/* Count to 10,000 with commas and + */}
                <CountUp
                  end={10000}
                  duration={1400}
                  formatter={(v)=>Math.round(v).toLocaleString()}
                  suffix="+"
                />
              </h1>
              <p className='mt-1'>
                <span className='inline-block rounded-full bg-white/10 border border-white/25 px-3 py-1 text-xs font-semibold tracking-wide text-white/90'>
                  Books
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        /* existing animations (unchanged) */
        @keyframes slowPan {
          0%   { transform: translate3d(0, 0, 0) scale(1.0); }
          50%  { transform: translate3d(2%, -2%, 0) scale(1.03); }
          100% { transform: translate3d(0, 0, 0) scale(1.0); }
        }
        .animate-slow-pan { animation: slowPan 18s ease-in-out infinite; }
        @keyframes floatY { 0% { transform: translateY(0px); } 100% { transform: translateY(-20px); } }
        .animate-float-slow   { animation: floatY 6s  ease-in-out infinite alternate; }
        .animate-float-slower { animation: floatY 12s ease-in-out infinite alternate; }
        .animate-float-fast   { animation: floatY 4s  ease-in-out infinite alternate; }

        /* ===== Animated gradient cards with dark glass underlay ===== */
        .stat-card {
          position: relative;
          border-radius: 1rem;
          padding: 0.75rem;
          overflow: hidden;
          isolation: isolate;
          box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }
        .stat-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-size: 220% 220%;
          animation: gradientShift 12s ease-in-out infinite;
          z-index: 0;
          opacity: .85;
        }
        .stat-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          z-index: 0;
        }
        .grad-reviews::before { background-image: linear-gradient(135deg,#B45309,#D97706,#F59E0B,#F472B6); }
        .grad-installs::before { background-image: linear-gradient(135deg,#065F46,#059669,#0EA5E9,#2563EB); }
        .grad-books::before { background-image: linear-gradient(135deg,#6D28D9,#A21CAF,#DB2777,#F43F5E); }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </motion.div>
      </div>
    </div>
  );
};

export default Banner;
