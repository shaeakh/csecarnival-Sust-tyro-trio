import React, { useState } from 'react';
import './ResizableBox.css';

function ResizableBox ({ initialWidth, initialHeight }) {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  const handleResize = (event, direction) => {
    const { offsetWidth, offsetHeight } = event.target.parentElement;
    if (direction === 'right') {
      setWidth(offsetWidth);
    } else if (direction === 'bottom') {
      setHeight(offsetHeight);
    }
  };

  return (
    <div className="resizable-box" style={{ width: width, height: height }}>
      <div
        className="resize-handle resize-handle-right"
        onMouseDown={(e) => handleResize(e, 'right')}
      ></div>
      <div
        className="resize-handle resize-handle-bottom"
        onMouseDown={(e) => handleResize(e, 'bottom')}
      ></div>
    </div>
  );
};

export default ResizableBox;
