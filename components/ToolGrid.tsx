"use client";

import ToolCard from "./ToolCard";
import tools from "@/data/tools.json";

interface ToolGridProps {
  searchQuery?: string;
}

export default function ToolGrid({ searchQuery = "" }: ToolGridProps) {
  const filteredTools = tools.filter((tool) => {
    const query = searchQuery.toLowerCase();
    return (
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    );
  });

  return (
    <section id="tools" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-textDark mb-3 sm:mb-4">
        🛠️ All Tools
      </h2>
      <p className="text-center text-gray-500 mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base">
        Click any tool to get started
      </p>

      {filteredTools.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          No tools found for "{searchQuery}"
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
              slug={tool.slug}
              category={tool.category}
            />
          ))}
        </div>
      )}
    </section>
  );
}