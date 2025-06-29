// Add "use client" if you plan to use this in Server Components
// and it has any client-side interactivity, though for this one it's not strictly needed.

import React from 'react';

// Define the type for the component's props
type InfoBoxProps = {
  title: string;
  children: React.ReactNode;
};

export const InfoBox = ({ title, children }: InfoBoxProps) => {
  return (
    <div style={{
      backgroundColor: '#e0f7fa',
      borderLeft: '5px solid #00acc1',
      padding: '1rem',
      margin: '1.5rem 0',
      borderRadius: '4px',
    }}>
      <h4 style={{ marginTop: 0, color: '#006064', fontWeight: 'bold' }}>{title}</h4>
      <div>{children}</div>
    </div>
  );
};
