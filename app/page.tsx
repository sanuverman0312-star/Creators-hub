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
        <section
          id="about"
          className="max-w-4xl mx-auto px-6 py-16 text-center"
        >
          <h2 className="text-3xl font-bold text-textDark mb-6">About</h2>

          <div className="text-gray-600 text-base leading-relaxed space-y-5">

            <p>
              <span className="font-semibold text-gray-800">
                Shashank Creator Hub
              </span>{" "}
              is a unified dashboard where developers can access all their web tools
              from one domain. Built with <span className="font-medium">Next.js</span> and designed
              for scalability.
            </p>

            <p>
              Hi, I'm <span className="font-semibold text-gray-800">Shashank Verman</span> —
              a passionate self-taught full-stack web developer who enjoys building useful
              digital tools and experimenting with modern technologies.
            </p>

            <p>
              Web development is currently my <span className="font-medium">passion and personal interest</span>.
              I love creating practical projects, exploring new technologies, and solving
              problems through code. Although this started as a hobby, I have built multiple
              real working projects and tools, and I am fully capable of working on
              professional development projects if given the opportunity.
            </p>

            <p>
              My development stack includes <span className="font-medium">HTML, CSS, JavaScript,
              React, and Next.js</span> for creating responsive frontend applications.
              On the backend side, I work with <span className="font-medium">Node.js</span>
              to build APIs and server-side logic.
            </p>

            <p>
              I have experience working with multiple databases including
              <span className="font-medium"> MongoDB, MySQL, PostgreSQL, and Supabase</span>,
              which helps me build scalable data-driven applications.
            </p>

            <p>
              I actively use <span className="font-medium">Git and GitHub</span> for version
              control and deploy projects using modern platforms such as
              <span className="font-medium"> Vercel, Netlify, and VPS environments</span>.
            </p>

            <p>
              I enjoy building developer tools, AI utilities, and productivity platforms.
              All the projects I have created are available in the
              <span className="font-medium"> Tools section</span>.
            </p>

            <p>
              Even though this started as a personal passion, I am always open to
              <span className="font-medium"> collaborations, projects, and professional opportunities</span>
              where I can apply my skills to build impactful digital products.
            </p>

          </div>
        </section>

      <Footer />
    </div>
  );
}