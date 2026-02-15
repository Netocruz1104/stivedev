import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos e trabalhos realizados.",
};

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Loja virtual com checkout fluido, carrinho e integração com pagamentos.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    href: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Painel de métricas em tempo real com gráficos e filtros avançados.",
    tags: ["React", "D3.js", "TypeScript"],
    href: "#",
  },
  {
    id: 3,
    title: "App de Gestão",
    description: "Sistema interno para gestão de tarefas e equipes.",
    tags: ["Next.js", "Prisma", "shadcn/ui"],
    href: "#",
  },
  {
    id: 4,
    title: "Landing Page SaaS",
    description: "Landing de conversão com formulários e animações.",
    tags: ["React", "Framer Motion"],
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projetos
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            Seleção de trabalhos recentes com foco em UX, performance e código limpo.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                href={project.href}
                className={cn(
                  "group block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                )}
              >
                <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
