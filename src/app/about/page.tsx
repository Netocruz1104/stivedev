import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { SkillsMarquee } from "@/components/sections/skills-marquee";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Habilidades e tecnologias.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sobre
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-400">
            <p>
              Transformando tecnologia em resultado real para empresas
            </p>
            <p>
              Em um mercado cada vez mais competitivo, não basta apenas estar presente no digital — é preciso estar à frente. Empresas que adotam tecnologias modernas conseguem operar com mais eficiência, reduzir custos, melhorar a experiência do cliente e tomar decisões mais estratégicas.
            </p>
            <p>
              Desenvolvo aplicações web modernas em React e TypeScript, sistemas integrados com bancos de dados em tempo real, métodos seguros de autenticação, aplicativos Android com notificações push e soluções com inteligência artificial aplicada ao contexto do negócio.
            </p>
            <p>
              Na prática, isso significa transformar processos manuais e ineficientes em plataformas digitais inteligentes, capazes de:
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Automatizar rotinas operacionais
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Centralizar informações com segurança
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Aumentar a produtividade da equipe
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Melhorar o relacionamento com clientes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Gerar dados estratégicos para tomada de decisão
              </li>
            </ul>
            <p>
              Utilizando tecnologias modernas, é possível criar sistemas sob medida, totalmente alinhados à realidade da empresa, substituindo controles manuais, planilhas fragmentadas e processos engessados por soluções ágeis, seguras e escaláveis.
            </p>
            <p>
              Além disso, a integração entre sistemas web e aplicativos móveis, somada ao uso estratégico de inteligência artificial, permite criar experiências inovadoras, como:
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Comunicação direta com clientes via notificações automáticas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Atendimento inteligente com IA treinada no contexto da empresa
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Acesso rápido a dados e relatórios em tempo real
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                Operações mais eficientes e organizadas
              </li>
            </ul>
            <p>
              Investir em tecnologia não é um custo — é uma decisão estratégica que impacta diretamente o crescimento, a eficiência operacional e a competitividade do negócio.
            </p>
            <p>
              Meu objetivo é traduzir a tecnologia em soluções práticas, entregando sistemas modernos, intuitivos, seguros e preparados para crescer junto com a empresa.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="mt-16 text-2xl font-semibold text-white">Habilidades</h2>
          <div className="mt-6">
            <SkillsMarquee />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
