import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'view', 'play', 'read', 'inspect', 'copy'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over element with data-cursor or specific tags
      const target = e.target.closest('[data-cursor], button, a, input, textarea');
      if (target) {
        const customType = target.getAttribute('data-cursor');
        if (customType) {
          setCursorType(customType);
          switch (customType) {
            case 'view':
              setCursorText('VIEW ↗');
              break;
            case 'play':
              setCursorText('PLAY 🎮');
              break;
            case 'read':
              setCursorText('READ 🌿');
              break;
            case 'inspect':
              setCursorText('INSPECT 💻');
              break;
            case 'copy':
              setCursorText('COPY 📋');
              break;
            default:
              setCursorText('');
          }
        } else {
          setCursorType('pointer');
          setCursorText('');
        }
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth lerp for trailing halo
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrame;
    const lerpSpeed = 0.18;

    const followMouse = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * lerpSpeed,
        y: prev.y + (position.y - prev.y) * lerpSpeed
      }));
      animationFrame = requestAnimationFrame(followMouse);
    };

    animationFrame = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const isActionCursor = Boolean(cursorText);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      
      {/* Inner Pinpoint Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isActionCursor ? 0 : 1
        }}
      />

      {/* Outer Morphing Halo / Action Pill */}
      <div
        className={`fixed flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          isActionCursor
            ? 'px-3.5 py-1.5 rounded-full bg-indigo-600 text-white font-mono text-[10px] font-bold shadow-xl shadow-indigo-600/50 scale-100'
            : cursorType === 'pointer'
            ? 'w-10 h-10 rounded-full border-2 border-indigo-400 bg-indigo-500/15 backdrop-blur-[1px] scale-110'
            : 'w-7 h-7 rounded-full border border-indigo-500/40 bg-indigo-500/5'
        }`}
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`
        }}
      >
        {isActionCursor && (
          <span className="whitespace-nowrap tracking-wider">{cursorText}</span>
        )}
      </div>

    </div>
  );
};
