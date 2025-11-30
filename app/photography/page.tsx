"use client";

import Header from "@/app/header";
import PhotoCard from "./PhotoCard";
import AARNChainring from "../chainring";

export default function Photography() {
  const photos = [
    {
      imageSrc: "/gang.png",
      title: "Sunset Over Boston",
      description: "A long exposure capturing the glow over the skyline.",
    },
    {
      imageSrc: "pi.jpg",
      title: "Fixed Gear Ride",
      description: "Cycling through the empty streets at dawn.",
    },
    {
      imageSrc: "/photography/night_T.jpg",
      title: "T at Night",
      description: "Experimenting with light and shadow in the city.",
    },
    {
      imageSrc: "/photos/photo4.jpg",
      title: "Forest Path",
      description: "A quiet moment in nature.",
    },
    // add more photos here
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <AARNChainring />
      <Header />

      <div className="relative z-10 max-w-8x2 mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <h1 className="text-5xl sm:text-6xl font-bold mb-12 text-center">
          Photography
        </h1>

        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
          A selection of my personal photography. Click on a photo to see more details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {photos.map((photo, idx) => (
            <PhotoCard
              key={idx}
              imageSrc={photo.imageSrc}
              title={photo.title}
              description={photo.description}
              className="hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
