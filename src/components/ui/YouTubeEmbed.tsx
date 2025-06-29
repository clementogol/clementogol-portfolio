import React from 'react';

/**
 * Props for the YouTubeEmbed component.
 */
interface YouTubeEmbedProps {
  /**
   * The unique ID of the YouTube video.
   * e.g., for "https://www.youtube.com/watch?v=dQw4w9WgXcQ", the ID is "dQw4w9WgXcQ".
   */
  videoId: string;
  /**
   * A descriptive title for the video embed, crucial for accessibility.
   */
  title: string;
}

/**
 * A responsive component for embedding YouTube videos.
 * It maintains a 16:9 aspect ratio.
 * This is a Server Component, so no "use client" is needed.
 */
export const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  if (!videoId) {
    return <div>Error: YouTube video ID is missing.</div>;
  }

  return (
    // The wrapper div creates the responsive container
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // This creates the 16:9 aspect ratio (9 / 16 = 0.5625)
        height: 0,
        overflow: 'hidden',
        borderRadius: '8px', // Adds nice rounded corners
        margin: '2rem 0', // Provides vertical spacing in the article
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Optional subtle shadow
      }}
    >
      {/* The iframe is positioned to fill the wrapper */}
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '0', // Removes the default iframe border
        }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title} // Essential for accessibility
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
