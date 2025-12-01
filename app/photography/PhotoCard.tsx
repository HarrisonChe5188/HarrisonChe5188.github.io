"use client";

interface PhotoCardProps {
  imageSrc: string;
  className?: string;
}

export default function PhotoCard({ imageSrc, className }: PhotoCardProps) {
  return (
    <div className={`mb-1 break-inside-avoid ${className}`}>
      <img
        src={imageSrc}
        className="w-full h-auto object-contain rounded-lg shadow-lg"
      />
    </div>
  );
}
