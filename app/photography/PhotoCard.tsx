"use client";

interface PhotoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

export default function PhotoCard({ imageSrc, title, description, className }: PhotoCardProps) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 shadow-lg rounded-xl overflow-hidden cursor-pointer ${className}`}
    >
      <div className="w-full aspect-[4/2.5] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
