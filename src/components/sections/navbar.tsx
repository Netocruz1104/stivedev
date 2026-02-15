"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-7xl px-6 pt-6"
    >
      <nav
        className={cn(
          "flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 backdrop-blur-xl",
          "transition-all duration-300"
        )}
      >
        <Link
          href="/"
          className="flex items-baseline text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="text-zinc-500">&lt;</span>
          <span className="text-zinc-400"> </span>
          <span className="text-cyan-400">StiveDev</span>
          <span className="text-zinc-400"> </span>
          <span className="text-zinc-500">/&gt;</span>
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
