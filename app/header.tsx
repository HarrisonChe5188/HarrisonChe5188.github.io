"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (section: string) => {
    if (pathname === "/") {
      // Already on home page, scroll to section
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to home page then scroll
      router.push(`/#${section}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-sm tracking-wider">
            <button
            onClick={() => goToSection("")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            车向东 chē xiàng dōng 
          </button>
        </div>
        <div className="flex gap-8 items-center text-sm">
          <button
            onClick={() => goToSection("work")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            work
          </button>
          
          <button
            onClick={() => router.push("/photography")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            photography
          </button>
          <button
            onClick={() => goToSection("about")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            about
          </button>
          
        </div>
      </div>
    </nav>
  );
}
