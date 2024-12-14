import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/src/media/fav.gif"
        alt="AGI Agents Logo"
        className="w-12 h-12 object-contain"
      />
      <span className="text-white font-bold text-xl">AGI Agents</span>
    </Link>
  );
}