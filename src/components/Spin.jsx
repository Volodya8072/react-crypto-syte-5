import React from 'react';

const Spin = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="h-16 w-16 animate-spin"
        viewBox="0 0 50 50"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="90"
          strokeDashoffset="60"
        />
      </svg>
    </div>
  );
};

export default Spin;
