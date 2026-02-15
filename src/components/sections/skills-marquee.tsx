"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Android Studio",
];

function SkillCard({ name }: { name: string }) {
  return (
    <span className="shrink-0 rounded-full border border-zinc-600 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300">
      {name}
    </span>
  );
}

export function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillCard key={i} name={skill} />
        ))}
      </motion.div>
    </div>
  );
}
