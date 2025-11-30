"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageSrc: string; // just the path in public
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <div className="lg:col-span-7">
        <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-sm overflow-hidden relative">
          <Image
            src={imageSrc}
            alt={`${title} screenshot`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-3xl font-bold">{title}</h3>
          <a href={link} className="text-sm hover:text-blue-600 transition">
            view →
          </a>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs border border-zinc-200 dark:border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
