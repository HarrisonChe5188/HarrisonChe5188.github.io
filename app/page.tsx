"use client";

import { motion } from "framer-motion";
import AARNChainring from "./chainring";
import ProjectCard from "./ProjectCard";
import Header from "./header";
export default function Home() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "API Design", "System Architecture"] },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased relative overflow-hidden">
      

      {/* Abstract cycling geometry animation */}
      <AARNChainring />
      <Header />
      

      {/* HERO */}
      <header className="min-h-screen flex items-center relative px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2 mb-8">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter">
                Harrison Che
              </h1>
              <div className="flex items-center gap-3 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                <span>full-stack engineer</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span>boston</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span>new york</span>
              </div>
            </div>

            <div className="mt-12 flex gap-6 text-sm">
              <a href="#work" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition">
                view work
              </a>
              <a href="mailto:your-email@example.com" className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 transition">
                get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* WORK */}
      <main className="relative z-10">
        <section id="work" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <h2 className="text-5xl font-bold tracking-tight mb-16">Selected Work</h2>
          <div className="space-y-24 mb-24">
            <ProjectCard
              title="AutoQueue"
              description="A generator to create Spotify playlists from songs within Youtube playlists."
              tags={["Python", "React", "Flask", "PostgreSQL", "TypeScript", "Spotify API"]}
              link="autoqueue"
              imageSrc="/filler.png" // <-- public folder path
            />
          </div>

          <div className="space-y-24 mb-24">
            <ProjectCard
              title="Coghead"
              description="From concept to production—full-stack ownership."
              tags={["React", "Next.js", "Node.js", "TypeScript"]}
              link="coghead"
              imageSrc="/filler.png" // <-- public folder path
            />
          </div>

          <div className="space-y-24 mb-24">
            <ProjectCard
              title="Steam Review Sentiment Analysis"
              description="New game's out! But I ain't reading all those reviews. So I built a tool that uses NLP to analyze and summarize user reviews for any game on Steam, helping gamers make informed decisions quickly."
              tags={["Python", "NLP", "Data Visualization"]}
              link="steam-reviews-sentiment-analysis"
              imageSrc="/topN.png" // <-- public folder path
            />
          </div>

          <div className="space-y-24 mb-24">
            <ProjectCard
              title="Redstone Rewired"
              description= "Minecraft Redstone, but I can play with it in real life."
              tags={["C++", "Embedded Systems", "Hardware Design"]}
              link="redstone-rewired"
              imageSrc="/gang.png" // <-- public folder path
            />
          </div>

          

          <div className="space-y-24 mb-24">
            <ProjectCard
              title="Pi as a Wifi Access Point"
              description="Hobbyist parts? The treasury couldn't afford such an expense. So I took a Raspberry Pi and configured it to act as a mini router. "
              tags={["Micropython", "Raspberry Pi", "Networking"]}
              link="pi-as-wifi-access-point"
              imageSrc="/pi.jpg" // <-- public folder path
            />
          </div>

          

          
        </section>

        {/* TECH STACK */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Technical Stack</h2>
              <div className="space-y-6">
                {skills.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((it, idx) => (
                        <span key={idx} className="text-sm text-zinc-700 dark:text-zinc-300">
                          {it}{idx < group.items.length - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </section>
        <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">About</h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I got into programming the same way I got into fixed-gear cycling — drawn to the elegance of simplicity and the satisfaction of mastery through constraint.
              </p>
              <p>
                These days I'm building full-stack applications with a focus on performance and maintainability. I care about the craft: writing code that future-me (or future-teammates) won't curse at.
              </p>
              <p>
                When I'm not coding, you'll find me riding around Boston on a fixed gear or shooting film photography. Both taught me to be more intentional — you can't coast, you can't undo, you have to commit.
              </p>
            </div>

            <div className="mt-12 flex gap-6 text-sm">
              <a href="https://github.com/yourusername" className="hover:text-blue-600 transition">github →</a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-600 transition">linkedin →</a>
              <a href="mailto:your-email@example.com" className="hover:text-blue-600 transition">email →</a>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-zinc-500">
              <div>© {new Date().getFullYear()} Harrison Che</div>
              <div className="flex gap-6">
                <a href="https://github.com/yourusername" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">LinkedIn</a>
                <a href="mailto:your-email@example.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Email</a>
              </div>
            </div>
          </div>
        </footer>
        
      </main>
    </div>
  );
}
