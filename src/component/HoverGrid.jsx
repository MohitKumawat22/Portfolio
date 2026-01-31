"use client";
import React, { useEffect, useState } from 'react';


const HoverGrid = () => {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const cellSize = 30; // 30x30 pixels

  useEffect(() => {
    const calculateGrid = () => {
      // Screen size ke hisaab se kitne columns aur rows banenge
      const cols = Math.ceil(window.innerWidth / cellSize);
      const rows = Math.ceil(window.innerHeight / cellSize);
      setGridSize({ rows, cols });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  return (
    <div className="absolute top-0 z-1 inset-0  overflow-hidden">
      <div 
        className="grid" 
        style={{ 
          gridTemplateColumns: `repeat(${gridSize.cols}, ${cellSize}px)`,
        }}
      >
        {[...Array(gridSize.rows * gridSize.cols)].map((_, i) => (
          <div
            key={i}
            style={{ width: cellSize, height: cellSize }}
            className="
              border-[0.5px] border-gray-200 z-10
              transition-all duration-200 ease-out
              hover:scale-115 hover:z-50 hover:border-none 
              hover:bg-black hover:shadow-xl
              flex items-center justify-center
            "
          >
            {/* Aap yaha text ya content bhi daal sakte hain */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverGrid;