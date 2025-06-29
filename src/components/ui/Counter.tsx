"use client"; // This is essential for interactive components in Next.js App Router

import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
      marginTop: '1rem',
    }}>
      <p style={{ fontSize: '1.2rem', margin: '0 0 1rem 0' }}>
        Current Count: <strong style={{ color: '#0070f3' }}>{count}</strong>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Click Me!
      </button>
    </div>
  );
};
