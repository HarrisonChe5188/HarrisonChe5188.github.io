import fs from "fs";
import path from "path";
import PhotoCard from "./PhotoCard";

// recursive file grabber
function getAllImages(dir: fs.PathLike, baseUrl: string) {
  let results: any[] = [];

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(String(dir), file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(
        getAllImages(fullPath, `${baseUrl}/${file}`)
      );
    } else {
      results.push(`${baseUrl}/${file}`);
    }
  }

  return results;
}

export default function Photography() {
  const root = path.join(process.cwd(), "public/photography");
  const images = getAllImages(root, "/photography");

  return (
    <div className="relative min-h-screen text-black dark:text-white overflow-hidden">
      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 py-24">

        <h1 className="text-5xl sm:text-6xl font-bold mb-12 text-center">
          Photography
        </h1>

        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          A selection of my personal photography.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {images.map((src, idx) => (
            <PhotoCard
              key={idx}
              imageSrc={src}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
