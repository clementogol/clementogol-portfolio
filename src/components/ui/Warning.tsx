import React from 'react';

/**
 * Defines the properties (props) that the Warning component accepts.
 */
interface WarningProps {
  /**
   * The bolded title displayed at the top of the warning box.
   */
  title: string;
  /**
   * The content to be displayed inside the warning box.
   * In MDX, this will be whatever you put between the <Warning> tags.
   */
  children: React.ReactNode;
}

/**
 * A reusable component to display a styled warning or alert box.
 * It's ideal for use in MDX to highlight critical information.
 * This is a Server Component, so no "use client" directive is needed.
 */
export const Warning = ({ title, children }: WarningProps) => {
  return (
    // The main container div with styling for the box
    <div
      style={{
        backgroundColor: '#fff5f5', // A very light red background
        borderLeft: '5px solid #ef4444', // A solid red left border
        padding: '1rem',
        margin: '1.5rem 0', // Provides vertical spacing in the article
        borderRadius: '4px', // Softer, rounded corners
      }}
    >
      {/* The title of the warning box */}
      <h4
        style={{
          marginTop: 0,
          color: '#b91c1c', // A darker red color for the title text
          fontWeight: 'bold',
          fontSize: '1.1rem',
        }}
      >
        {title}
      </h4>
      {/* The main content/children of the warning box */}
      <div style={{ color: '#374151' }}>{children}</div>
    </div>
  );
};

// We export it as the default as well, which can be a good practice.
export default Warning;
