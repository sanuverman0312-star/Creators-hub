"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ToolGrid from "@/components/ToolGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar onSearch={handleSearch} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textDark mb-4 sm:mb-6">
          Welcome to <span className="text-primary">Shashank Creator Hub</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          All your favorite web tools in one unified platform. Fast, modern, and easy to use.
        </p>
        <a
          href="#tools"
          className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-accent transition shadow-glow"
        >
          Explore Tools 🚀
        </a>
      </section>

      {/* Tools Grid */}
      <ToolGrid searchQuery={searchQuery} />

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-textDark mb-4">About</h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Shashank Creator Hub is a unified dashboard where developers can access all their web tools from one domain. Built with Next.js and designed for scalability.
        </p>
      </section>

      <Footer />
    </div>
  );
}