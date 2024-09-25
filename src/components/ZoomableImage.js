import React, { useState, useRef } from 'react';
import './ZoomableImage.css';

const ZoomableImage = ({ src, alt }) => {
  const viewerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [start, setStart] = useState({ x: 0, y: 0 });

  // Zooming with mouse wheel
  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = Math.min(Math.max(scale - e.deltaY * 0.0015, 0.5), 5);
    setScale(newScale);
  };

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    viewerRef.current.style.cursor = 'grabbing';
  };

  // Dragging the image
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    viewerRef.current.style.cursor = 'grab';
  };

  return (
    <div
      ref={viewerRef}
      id="viewer-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <img
        id="zoomable-image"
        src={src}
        alt={alt}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default ZoomableImage;