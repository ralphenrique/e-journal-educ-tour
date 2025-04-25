'use client'
import { useState } from "react";
import Image from "next/image";

export default function ImageModal({ src, alt, className, style }: { src: any; alt: string; className?: string; style?: React.CSSProperties }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={className + " cursor-pointer"}
        style={style} 
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-6 right-8 z-60 bg-white/80 rounded-full px-3 py-1 text-black font-bold text-lg shadow hover:bg-white"
            onClick={e => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close"
          >
            ×
          </button>
          <Image
            src={src}
            alt={alt}
            className="rounded-lg max-h-[60vh] max-w-[60vw] object-contain"
          
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}