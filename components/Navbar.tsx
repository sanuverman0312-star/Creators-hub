"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
            🚀 Shashank Creator Hub
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-textDark hover:text-primary transition">
              Home
            </Link>
            <Link href="#tools" className="text-textDark hover:text-primary transition">
              Tools
            </Link>
            <Link href="#about" className="text-textDark hover:text-primary transition">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center bg-background rounded-lg px-4 py-2">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent outline-none text-sm w-40"
            />
          </div>

          <button
            type="button"
            className="md:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t pt-4">
            <Link 
              href="/" 
              className="text-textDark hover:text-primary py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#tools" 
              className="text-textDark hover:text-primary py-2"
              onClick={closeMenu}
            >
              Tools
            </Link>
            <Link 
              href="#about" 
              className="text-textDark hover:text-primary py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <div className="flex items-center bg-background rounded-lg px-4 py-2 mt-2">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={handleSearch}
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}