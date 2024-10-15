import React from "react";
import { LoaderProps } from "@/components/interfaces/LoaderProps";

const Loader: React.FC<LoaderProps> = ({
  message = "Loading...",
  size = 40,
  color = "#3498db",
  className = ""
}) => {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      aria-live="polite"
    >
      <div
        className="loader"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderTopColor: color // Dynamic border-top color
        }}
      ></div>
      <span className="ml-2">{message}</span> {/* Optional message */}
      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3; /* Light grey */
          border-top: 4px solid; /* Will be set by inline style */
          border-radius: 50%;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
