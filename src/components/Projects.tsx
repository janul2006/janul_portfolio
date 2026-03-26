"use client";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Featured <span className="text-[#FF3B3B]">Projects</span>
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-3 gap-6"
      >
        {profile.projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            variants={item}
            className={`${project.span === 2 ? "md:col-span-2" : "md:col-span-1"} glass p-5 rounded-xl glow cursor-pointer block`}
          >
            <h3 className={project.highlight ? "text-2xl font-bold" : "font-bold"}>
              {project.title}
            </h3>
            {project.highlight && (
              <p className="text-[#FF3B3B] font-bold text-xl">{project.highlight}</p>
            )}
            <p className="text-gray-400 mt-2">{project.description}</p>
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
}