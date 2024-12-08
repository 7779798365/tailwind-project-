"use client";

import Image from "next/image";
import { useState } from "react";

export default function WorkSection() {
  const categories = [
    "All",
    "App Development",
    "Web Development",
    "Design",
    "Mentorship",
  ];
  const projects = [
    {
      title: "Smart Bank App",
      category: "App Development",
      image: "/app.jpg",
    },
    {
      title: "NEXT.js",
      category: "Web Development",
      image: "/web1.jpg",
    },
    {
      title: "Rental",
      category: "Design",
      image: "/design.jpg",
    },
    {
      title: "Tech Mentor",
      category: "Mentorship",
      image: "/tech.jpg",
    },
    {
      title: "IdeaFlow",
      category: "Web Development",
      image: "/web2.jpg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Portfolio Heading Section */}
      <div className="grid sm:grid-cols-6 items-center mb-8">
        <h2 className="text-[40px] sm:col-span-2 font-heading font-[500] uppercase text-gray-800">
          Portfolio
        </h2>
        <div className="h-1 ml-10 max-w-[300px] sm:col-span-4 bg-gradient-to-r from-primaryColor to-secondaryColor"></div>
      </div>

      {/* Categories Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              category === activeCategory
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ffe3be] p-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-52 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 bg-white rounded-lg shadow-inner">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}