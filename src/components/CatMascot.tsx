import React from 'react';
import { CloverMascot, CloverMascotType } from './CloverMascot';

interface CatMascotProps {
  type: 'banner' | 'obat-fokus' | 'balon-helium' | 'anak-tangga' | 'scholar' | 'success' | 'getah-sanubari' | 'ranting-kata' | 'lingkar-tahun';
  className?: string;
  size?: number;
}

export const CatMascot: React.FC<CatMascotProps> = ({ type, className = '', size = 80 }) => {
  return <CloverMascot type={type as CloverMascotType} className={className} size={size} />;
};

export { CloverMascot };
