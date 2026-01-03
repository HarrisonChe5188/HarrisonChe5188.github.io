"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  imageSrc,
}) => {
  return (
    <Link href={link} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
        className="
          grid grid-cols-1 lg:grid-cols-12 gap-8 items-start
          cursor-pointer
        "
      >
        {/* Image */}
        <div className="lg:col-span-7">
          <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-sm overflow-hidden relative">
            <Image
              src={imageSrc}
              alt={`${title} screenshot`}
              fill
              className="
                object-cover
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-3xl font-bold transition group-hover:text-blue-600">
            {title}
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="
                  px-3 py-1 text-xs
                  border border-zinc-200 dark:border-zinc-800
                  transition
                  group-hover:border-zinc-400 dark:group-hover:border-zinc-600
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
  