import React from "react";

interface AdBlockProps {
  width?: number;
  height?: number;
  position?: "inline" | "fixed";
  className?: string;
}

const AdBlock = ({
  width = 300,
  height = 250,
  position = "inline",
  className = "",
}: AdBlockProps) => {
  // This is a placeholder component for Google AdSense
  // In a real implementation, you would use the actual Google AdSense script
  return (
    <div
      className={`bg-gray-100 flex items-center justify-center ${position === "fixed" ? "fixed bottom-4 right-4" : ""} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: "200px",
        minHeight: "200px",
      }}
    >
      <div className="text-center p-4">
        <p className="text-gray-500 text-sm">Advertisement</p>
        <p className="text-gray-400 text-xs mt-2">
          {width}x{height}
        </p>
      </div>
    </div>
  );
};

export default AdBlock;
