import React from 'react';

export type CloverMascotType =
  | 'banner'
  | 'getah-sanubari'
  | 'obat-fokus'
  | 'ranting-kata'
  | 'balon-helium'
  | 'lingkar-tahun'
  | 'anak-tangga'
  | 'kata-baku'
  | 'sentence'
  | 'success'
  | 'scholar';

interface CloverMascotProps {
  type: CloverMascotType;
  className?: string;
  size?: number;
}

export const CloverMascot: React.FC<CloverMascotProps> = ({ type, className = '', size = 80 }) => {
  // Common Four-Leaf Clover Leaf Path Helper
  const renderCloverLeaf = (cx: number, cy: number, scale = 1, rotation = 0) => (
    <g transform={`translate(${cx}, ${cy}) rotate(${rotation}) scale(${scale})`}>
      {/* 4 heart shaped petals of four-leaf clover */}
      <path d="M0 0 C-4 -6 -10 -6 -10 0 C-10 6 0 10 0 10 C0 10 10 6 10 0 C10 -6 4 -6 0 0 Z" fill="#10B981" transform="rotate(0)" />
      <path d="M0 0 C-4 -6 -10 -6 -10 0 C-10 6 0 10 0 10 C0 10 10 6 10 0 C10 -6 4 -6 0 0 Z" fill="#059669" transform="rotate(90)" />
      <path d="M0 0 C-4 -6 -10 -6 -10 0 C-10 6 0 10 0 10 C0 10 10 6 10 0 C10 -6 4 -6 0 0 Z" fill="#10B981" transform="rotate(180)" />
      <path d="M0 0 C-4 -6 -10 -6 -10 0 C-10 6 0 10 0 10 C0 10 10 6 10 0 C10 -6 4 -6 0 0 Z" fill="#34D399" transform="rotate(270)" />
      <circle cx="0" cy="0" r="2.5" fill="#F59E0B" />
    </g>
  );

  // 1. BANNER / HERO MASCOT: Mochi with clover hood and glowing lucky star
  if (type === 'banner' || type === 'scholar') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Soft Shadow */}
        <ellipse cx="50" cy="88" rx="26" ry="6" fill="#2D2319" opacity="0.15" />

        {/* Clover Hood Cape (Back layer) */}
        <path d="M22 55 C20 40 30 18 50 18 C70 18 80 40 78 55 C78 72 68 82 50 82 C32 82 22 72 22 55 Z" fill="#059669" />
        <path d="M25 58 C23 45 32 23 50 23 C68 23 77 45 75 58 C75 70 66 78 50 78 C34 78 25 70 25 58 Z" fill="#10B981" />

        {/* Four-Leaf Clover Stem & Crown on Top of Hood */}
        <path d="M50 20 Q52 10 58 8" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {renderCloverLeaf(58, 8, 0.7, 15)}

        {/* White Mochi Body & Face (Puffy, Round, Soft) */}
        <ellipse cx="50" cy="54" rx="22" ry="19" fill="#FFFFFF" stroke="#2D2319" strokeWidth="2" />
        
        {/* Rosy Cheeks */}
        <circle cx="36" cy="57" r="3.5" fill="#FDA4AF" />
        <circle cx="64" cy="57" r="3.5" fill="#FDA4AF" />

        {/* Round Smart Spectacles */}
        <circle cx="40" cy="51" r="6" stroke="#2D2319" strokeWidth="1.8" fill="rgba(255,255,255,0.7)" />
        <circle cx="60" cy="51" r="6" stroke="#2D2319" strokeWidth="1.8" fill="rgba(255,255,255,0.7)" />
        <line x1="46" y1="51" x2="54" y2="51" stroke="#2D2319" strokeWidth="1.8" />

        {/* Cute Sparkly Eyes */}
        <circle cx="40" cy="51" r="2.5" fill="#2D2319" />
        <circle cx="60" cy="51" r="2.5" fill="#2D2319" />
        <circle cx="41.2" cy="49.8" r="0.9" fill="#FFFFFF" />
        <circle cx="61.2" cy="49.8" r="0.9" fill="#FFFFFF" />

        {/* Happy W-shaped Mochi Mouth */}
        <path d="M47 58 Q50 61 53 58" stroke="#2D2319" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Tiny Mochi Hands holding a Glowing Golden Leaf */}
        <ellipse cx="37" cy="67" rx="4.5" ry="3.5" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.5" />
        <ellipse cx="63" cy="67" rx="4.5" ry="3.5" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.5" />
        
        {/* Warm Terracotta Scarf Knot */}
        <rect x="44" y="66" width="12" height="6" rx="3" fill="#D97706" stroke="#2D2319" strokeWidth="1.2" />
        <circle cx="50" cy="69" r="2" fill="#F59E0B" />
      </svg>
    );
  }

  // 2. GETAH SANUBARI (Obat Fokus): Mochi reading book under clover hood
  if (type === 'getah-sanubari' || type === 'obat-fokus') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="50" cy="88" rx="24" ry="5" fill="#2D2319" opacity="0.15" />
        
        {/* Clover Hood in Deep Emerald */}
        <path d="M24 52 C22 38 32 18 50 18 C68 18 78 38 76 52 C76 68 66 78 50 78 C34 78 24 68 24 52 Z" fill="#065F46" />
        <path d="M27 54 C25 42 34 22 50 22 C66 22 75 42 73 54 C73 66 64 74 50 74 C36 74 27 66 27 54 Z" fill="#10B981" />

        {/* Sprouting 4-leaf clover on top */}
        <path d="M50 18 Q48 10 44 6" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {renderCloverLeaf(44, 6, 0.6, -20)}

        {/* White Mochi Face */}
        <ellipse cx="50" cy="50" rx="20" ry="17" fill="#FFFFFF" stroke="#2D2319" strokeWidth="2" />
        <circle cx="37" cy="53" r="3" fill="#FDA4AF" />
        <circle cx="63" cy="53" r="3" fill="#FDA4AF" />

        {/* Happy focused eyes */}
        <path d="M37 47 Q40 44 43 47" stroke="#2D2319" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M57 47 Q60 44 63 47" stroke="#2D2319" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M48 54 Q50 56 52 54" stroke="#2D2319" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Open Book in Earth Tone */}
        <path d="M32 64 L50 67 L68 64 L66 78 L50 81 L34 78 Z" fill="#FEF3C7" stroke="#2D2319" strokeWidth="1.5" />
        <path d="M50 67 L50 81" stroke="#2D2319" strokeWidth="1.5" />
        <path d="M36 68 L46 70 M36 72 L46 74 M54 70 L64 68 M54 74 L64 72" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />

        {/* Tiny Paws holding book */}
        <ellipse cx="33" cy="69" rx="3.5" ry="3" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
        <ellipse cx="67" cy="69" rx="3.5" ry="3" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
      </svg>
    );
  }

  // 3. RANTING KATA (Balon Helium): Mochi floating with clover balloon
  if (type === 'ranting-kata' || type === 'balon-helium') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Floating Clover Balloon on top */}
        <g transform="translate(50, 24)">
          <ellipse cx="0" cy="0" rx="22" ry="18" fill="#F59E0B" />
          <ellipse cx="0" cy="0" rx="19" ry="15" fill="#FBBF24" />
          {/* Clover Leaf print on balloon */}
          <path d="M0 -4 C-2 -7 -5 -7 -5 -4 C-5 -1 0 1 0 1 C0 1 5 -1 5 -4 C5 -7 2 -7 0 -4 Z" fill="#047857" />
          <path d="M0 4 C-2 7 -5 7 -5 4 C-5 1 0 -1 0 -1 C0 -1 5 1 5 4 C5 7 2 7 0 4 Z" fill="#047857" />
          <circle cx="0" cy="0" r="1.5" fill="#FEF3C7" />
          {/* Balloon basket ropes */}
          <line x1="-12" y1="14" x2="-6" y2="28" stroke="#78350F" strokeWidth="1.2" />
          <line x1="12" y1="14" x2="6" y2="28" stroke="#78350F" strokeWidth="1.2" />
        </g>

        {/* Woven Wooden Basket */}
        <rect x="36" y="52" width="28" height="18" rx="3" fill="#B45309" stroke="#2D2319" strokeWidth="1.5" />
        <line x1="36" y1="58" x2="64" y2="58" stroke="#78350F" strokeWidth="1" />
        <line x1="36" y1="64" x2="64" y2="64" stroke="#78350F" strokeWidth="1" />

        {/* Mochi with Clover Hood peeking from basket */}
        <path d="M38 52 C38 42 43 38 50 38 C57 38 62 42 62 52 Z" fill="#10B981" stroke="#2D2319" strokeWidth="1.5" />
        <ellipse cx="50" cy="49" rx="10" ry="8" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
        <circle cx="44" cy="50" r="1.5" fill="#FDA4AF" />
        <circle cx="56" cy="50" r="1.5" fill="#FDA4AF" />
        <circle cx="46" cy="48" r="1.2" fill="#2D2319" />
        <circle cx="54" cy="48" r="1.2" fill="#2D2319" />
        <path d="M49 51 Q50 52 51 51" stroke="#2D2319" strokeWidth="1" fill="none" />

        {/* Clover Sprout on head */}
        {renderCloverLeaf(50, 36, 0.45, 0)}

        {/* Little Paws holding basket rim */}
        <ellipse cx="43" cy="54" rx="2.5" ry="2" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1" />
        <ellipse cx="57" cy="54" rx="2.5" ry="2" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1" />
      </svg>
    );
  }

  // 4. LINGKAR TAHUN (Anak Tangga): Mochi on tree growth rings holding math clover banner
  if (type === 'lingkar-tahun' || type === 'anak-tangga') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Tree growth rings (Lingkar Tahun) as steps */}
        <ellipse cx="50" cy="85" rx="38" ry="11" fill="#78350F" stroke="#2D2319" strokeWidth="1.5" />
        <ellipse cx="50" cy="82" rx="30" ry="8.5" fill="#B45309" stroke="#2D2319" strokeWidth="1.2" />
        <ellipse cx="50" cy="79" rx="22" ry="6" fill="#D97706" stroke="#2D2319" strokeWidth="1.2" />
        <ellipse cx="50" cy="76" rx="14" ry="4" fill="#FDE68A" stroke="#2D2319" strokeWidth="1" />

        {/* Mochi with Clover Hood */}
        <path d="M30 52 C28 38 38 22 50 22 C62 22 72 38 70 52 C70 66 60 74 50 74 C40 74 30 66 30 52 Z" fill="#047857" />
        <path d="M33 54 C31 42 39 26 50 26 C61 26 69 42 67 54 C67 64 58 70 50 70 C42 70 33 64 33 54 Z" fill="#10B981" />

        {/* Clover sprout on head */}
        <path d="M50 22 Q52 14 56 10" stroke="#047857" strokeWidth="2" strokeLinecap="round" fill="none" />
        {renderCloverLeaf(56, 10, 0.55, 20)}

        {/* Face */}
        <ellipse cx="50" cy="50" rx="16" ry="14" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.8" />
        <circle cx="39" cy="52" r="2.5" fill="#FDA4AF" />
        <circle cx="61" cy="52" r="2.5" fill="#FDA4AF" />
        <circle cx="43" cy="48" r="2" fill="#2D2319" />
        <circle cx="57" cy="48" r="2" fill="#2D2319" />
        <circle cx="44" cy="47" r="0.7" fill="#FFFFFF" />
        <circle cx="58" cy="47" r="0.7" fill="#FFFFFF" />
        <path d="M48 53 Q50 55 52 53" stroke="#2D2319" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Math Sign Flag in Hand */}
        <line x1="68" y1="36" x2="68" y2="68" stroke="#2D2319" strokeWidth="2" strokeLinecap="round" />
        <rect x="68" y="34" width="22" height="15" rx="3" fill="#F59E0B" stroke="#2D2319" strokeWidth="1.5" />
        <text x="71" y="45" fontSize="10" fontWeight="900" fill="#2D2319" fontFamily="monospace">+ ÷ ×</text>

        {/* Little Hands */}
        <ellipse cx="40" cy="62" rx="3.5" ry="3" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
        <ellipse cx="66" cy="54" rx="3.5" ry="3" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
      </svg>
    );
  }

  // 5. KATA BAKU MASCOT: Mochi with magnifying glass
  if (type === 'kata-baku') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="50" cy="86" rx="24" ry="5" fill="#2D2319" opacity="0.15" />
        
        {/* Clover Hood */}
        <path d="M26 52 C24 38 34 20 50 20 C66 20 76 38 74 52 C74 68 64 78 50 78 C36 78 26 68 26 52 Z" fill="#047857" />
        <path d="M29 54 C27 42 36 24 50 24 C64 24 73 42 71 54 C71 66 62 74 50 74 C38 74 29 66 29 54 Z" fill="#10B981" />
        {renderCloverLeaf(50, 14, 0.6, 0)}

        {/* White Mochi Face */}
        <ellipse cx="50" cy="50" rx="19" ry="16" fill="#FFFFFF" stroke="#2D2319" strokeWidth="2" />
        <circle cx="38" cy="53" r="3" fill="#FDA4AF" />
        <circle cx="62" cy="53" r="3" fill="#FDA4AF" />
        <circle cx="43" cy="48" r="2.5" fill="#2D2319" />
        <circle cx="57" cy="48" r="2.5" fill="#2D2319" />
        <path d="M48 54 Q50 57 52 54" stroke="#2D2319" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Magnifying Glass checking 'KBBI' */}
        <g transform="translate(62, 54)">
          <circle cx="8" cy="8" r="10" stroke="#2D2319" strokeWidth="2" fill="#FEF3C7" />
          <line x1="15" y1="15" x2="22" y2="22" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          <text x="3" y="11" fontSize="7" fontWeight="900" fill="#047857" fontFamily="sans-serif">✓ A</text>
        </g>

        {/* Hands */}
        <ellipse cx="38" cy="64" rx="4" ry="3" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
        <ellipse cx="64" cy="62" rx="4" ry="3" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.2" />
      </svg>
    );
  }

  // 6. SENTENCE DRILL MASCOT: Mochi with quill pen & scroll
  if (type === 'sentence') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="50" cy="86" rx="24" ry="5" fill="#2D2319" opacity="0.15" />
        
        {/* Clover Hood */}
        <path d="M26 52 C24 38 34 20 50 20 C66 20 76 38 74 52 C74 68 64 78 50 78 C36 78 26 68 26 52 Z" fill="#059669" />
        <path d="M29 54 C27 42 36 24 50 24 C64 24 73 42 71 54 C71 66 62 74 50 74 C38 74 29 66 29 54 Z" fill="#34D399" />
        {renderCloverLeaf(50, 14, 0.6, 10)}

        {/* Face */}
        <ellipse cx="50" cy="50" rx="19" ry="16" fill="#FFFFFF" stroke="#2D2319" strokeWidth="2" />
        <circle cx="38" cy="53" r="3" fill="#FDA4AF" />
        <circle cx="62" cy="53" r="3" fill="#FDA4AF" />
        <circle cx="43" cy="48" r="2.5" fill="#2D2319" />
        <circle cx="57" cy="48" r="2.5" fill="#2D2319" />
        <path d="M48 54 Q50 56 52 54" stroke="#2D2319" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Quill Feather */}
        <path d="M68 36 C74 30 78 30 82 26 C80 34 76 44 70 50 Z" fill="#F59E0B" stroke="#2D2319" strokeWidth="1.2" />
        <line x1="70" y1="50" x2="68" y2="56" stroke="#2D2319" strokeWidth="1.5" />

        {/* Scroll Paper */}
        <rect x="28" y="66" width="36" height="14" rx="2" fill="#FEF3C7" stroke="#2D2319" strokeWidth="1.5" />
        <line x1="32" y1="71" x2="58" y2="71" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="32" y1="75" x2="52" y2="75" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 7. SUCCESS / CELEBRATION MASCOT
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="46" fill="#FEF3C7" />
      <circle cx="50" cy="50" r="43" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Floating clovers around */}
      {renderCloverLeaf(20, 28, 0.45, -20)}
      {renderCloverLeaf(80, 28, 0.45, 20)}
      {renderCloverLeaf(24, 76, 0.35, 45)}
      {renderCloverLeaf(76, 76, 0.35, -45)}

      {/* Clover Hood in Gold & Jade */}
      <path d="M26 50 C24 36 34 18 50 18 C66 18 76 36 74 50 C74 66 64 76 50 76 C36 76 26 66 26 50 Z" fill="#047857" />
      <path d="M29 52 C27 40 36 22 50 22 C64 22 73 40 71 52 C71 64 62 72 50 72 C38 72 29 64 29 52 Z" fill="#10B981" />
      {renderCloverLeaf(50, 12, 0.7, 0)}

      {/* White Mochi Body */}
      <ellipse cx="50" cy="49" rx="19" ry="16" fill="#FFFFFF" stroke="#2D2319" strokeWidth="2" />
      <circle cx="37" cy="52" r="3.5" fill="#FDA4AF" />
      <circle cx="63" cy="52" r="3.5" fill="#FDA4AF" />

      {/* Joyful Happy Curved Eyes */}
      <path d="M37 47 Q42 42 47 47" stroke="#2D2319" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M53 47 Q58 42 63 47" stroke="#2D2319" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Big Happy Open Smile */}
      <path d="M44 54 Q50 62 56 54 Z" fill="#EF4444" stroke="#2D2319" strokeWidth="1.5" />

      {/* Golden Star Leaf Crown on Top */}
      <polygon points="38,22 43,12 50,19 57,12 62,22" fill="#F59E0B" stroke="#B45309" strokeWidth="1.2" />

      {/* Jumping Raised Paws */}
      <ellipse cx="30" cy="46" rx="4" ry="3.5" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.5" />
      <ellipse cx="70" cy="46" rx="4" ry="3.5" fill="#FFFFFF" stroke="#2D2319" strokeWidth="1.5" />
    </svg>
  );
};
