"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Experience() {
  const timelineItems = [
    ...profile.experience.map((exp) => ({
      title: exp.title,
      description: exp.description,
      subDescription: undefined as string | undefined,
      side: exp.side,
    })),
    ...profile.education.map((edu) => ({
      title: edu.title,
      description: "institution" in edu ? edu.institution : undefined,
      subDescription: edu.description,
      side: edu.side,
    })),
  ];

  return (
    <motion.section
      id="experience"
      className="px-10 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Professional Journey
      </h2>

      <div className="relative max-w-3xl mx-auto">

        {/* VERTICAL LINE */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#FF3B3B] transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {timelineItems.map((entry, index) => (
            <div
              key={index}
              className={`flex ${entry.side === "right" ? "justify-end" : "justify-start"}`}
            >
              <div className="w-[45%] glass p-5 rounded-xl glow">
                <h3 className="font-bold text-lg">{entry.title}</h3>
                {entry.description && (
                  <p className="text-gray-400">{entry.description}</p>
                )}
                {entry.subDescription && (
                  <p className="text-gray-400 text-sm">{entry.subDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.section>
  );
}