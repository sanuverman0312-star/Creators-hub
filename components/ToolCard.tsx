"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ToolCardProps {
  id: number;
  name: string;
  description: string;
  icon: string;
  slug: string;
  category: string;
}

export default function ToolCard({ name, description, icon, slug, category }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-card glow-effect cursor-pointer border border-transparent hover:border-primary/30 flex flex-col"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4">{icon}</div>
      
      <span className="text-[10px] sm:text-xs bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full w-fit">
        {category}
      </span>
      
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-textDark mt-1.5 sm:mt-2 md:mt-3 mb-1 sm:mb-2 line-clamp-1">
        {name}
      </h3>
      
      <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 line-clamp-2 flex-grow">
        {description}
      </p>
      
      <Link
        href={`/${slug}`}
        className="inline-block bg-primary text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-accent transition font-medium text-[10px] sm:text-xs md:text-sm lg:text-base text-center w-full"
      >
        Open Tool
      </Link>
    </motion.div>
  );
}