import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Printer, Tablet, Headphones, Puzzle, Map, Coins, Stamp, Timer, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hero from "@/assets/hero-kid-map.jpg";

const TITLE = "Passaporte Global Kids — O Jogo Imersivo dos 195 Países";
const DESC =
  "Tire seu filho das telas com missões de 10 minutos pelos 195 países do mundo. Kit impresso e digital por R$ 29,90 com garantia de 30 dias.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA = "#oferta";

function CtaButton({ children = "Quero o Passaporte do meu filho" }: { children?: string }) {
  return (
    <a
      href={CTA}
      className="stamp inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-display text-lg font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
    >
      {children}
    </a>
  );
}

const bonuses = [
  { icon: Printer, title: "Guia Impressão Inteligente", value: "R$ 47", desc: "Imprima o kit completo por menos de R$ 0,08 a página, em P&B econômico de alto contraste." },
  { icon: Tablet, title: "Versão Zero Papel", value: "R$ 67", desc: "Caderno interativo para iPad, tablet e computador. Comece no mesmo minuto da compra." },
  { icon: Headphones, title: "Desafio 21 Dias Sem Telas", value: "R$ 97", desc: "Áudios de 2 minutos narrando cada missão. É só dar o play." },
  { icon: Puzzle, title: "Kit Adaptação Neurodiversa", value: "R$ 57", desc: "Níveis Júnior (stickers e cores) e Master (enigmas e bandeiras) para 3 a 12 anos." },
];

const faqs = [
  { q: "Preciso ter impressora?", a: "Não. Você pode usar a Versão Zero Papel no tablet ou enviar o arquivo econômico para uma gráfica rápida online seguindo nosso guia." },
  { q: "Para qual idade é indicado?", a: "De 3 a 12 anos. O Kit de Adaptação traz níveis de dificuldade para cada fase." },
  { q: "É cobrança recorrente?", a: "Não. Pagamento único de R$ 29,90 com acesso vitalício." },
  { q: "Como recebo o material?", a: "Imediatamente por e-mail após a confirmação do pagamento." },
  { q: "E se meu filho não gostar?", a: "Você tem 30 dias de garantia. Devolvemos 100% do valor e você ainda fica com os PDFs." },
];

function Index() {
  return (
    <main className="overflow-hidden font-sans">
      {/* Hero */}
      <section className="map-dots">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rotate-[-2deg] rounded-full bg-accent px-4 py-1 text-sm font-extrabold uppercase tracking-wide text-accent-foreground">
              ✈ Expedição secreta · 195 países
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-secondary md:text-6xl">
              Tire seu filho das telas em <span className="text-primary">10 minutos</span> com uma expedição pelo mundo
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              O primeiro jogo infantil impresso que desenvolve repertório cultural, foco e memória afetiva em família — que ele mesmo vai implorar para jogar.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <CtaButton />
              <span className="text-sm font-semibold text-muted-foreground">Pagamento único · Acesso imediato · Garantia de 30 dias</span>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Criança feliz pintando um mapa-múndi com passaporte e selos" width={1280} height={1024} className="stamp rotate-2 rounded-3xl" />
            <div className="stamp absolute -bottom-6 -left-4 -rotate-6 rounded-2xl bg-card px-5 py-3 font-display text-secondary">
              <div className="text-3xl font-bold">195</div>
              <div className="text-sm">países para colecionar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Olhos vidrados no celular. Briga no fim da tarde. Culpa.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-85">
            A indústria da dopamina rápida foi feita para prender a atenção do seu filho. E apostilas de colorir comuns não competem: são estáticas, cansam e acabam esquecidas na gaveta.
          </p>
          <div className="mt-12 grid gap-4 text-left md:grid-cols-2">
            <div className="rounded-2xl bg-secondary-foreground/10 p-6">
              <h3 className="text-xl font-semibold">Apostilas comuns</h3>
              <ul className="mt-4 space-y-2">
                {["Decoreba de capitais", "Centenas de páginas para imprimir", "Criança perde o interesse em 2 dias"].map((t) => (
                  <li key={t} className="flex gap-2"><X className="mt-1 h-4 w-4 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <h3 className="text-xl font-semibold">Passaporte Global Kids</h3>
              <ul className="mt-4 space-y-2">
                {["Missões de 10 minutos como um jogo", "Modo econômico ou 100% digital", "Recompensas que a criança coleciona"].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center font-extrabold uppercase tracking-widest text-primary">O Mecanismo Dopamina Off-Screen</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-secondary md:text-5xl">Gamificação tripla que transforma geografia em aventura</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Map, t: "Trilha de Expedição", d: "Um tabuleiro-mapa que a criança percorre país por país, desbloqueando novas rotas." },
              { icon: Coins, t: "Moedas de Explorador", d: "Cada missão concluída rende moedas para trocar por recompensas em família." },
              { icon: Stamp, t: "Selos Consulares", d: "Adesivos oficiais para carimbar o passaporte a cada país conquistado." },
            ].map(({ icon: Icon, t, d }, i) => (
              <div key={t} className={`stamp rounded-3xl bg-card p-8 ${i === 1 ? "md:-rotate-1" : "md:rotate-1"}`}>
                <div className="inline-flex rounded-2xl bg-accent p-3 text-accent-foreground"><Icon className="h-7 w-7" /></div>
                <h3 className="mt-5 text-2xl font-semibold text-secondary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-secondary">
            {["15 min por dia", "3 a 12 anos", "Sem decoreba", "Para fazer em família"].map((t) => (
              <span key={t} className="flex items-center gap-2 font-bold"><Timer className="h-5 w-5 text-primary" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="map-dots bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold text-secondary md:text-5xl">E você ainda leva 4 bônus</h2>
          <p className="mt-3 text-center text-muted-foreground">Pensados para eliminar qualquer desculpa para não começar hoje.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bonuses.map(({ icon: Icon, title, value, desc }, i) => (
              <div key={title} className="stamp flex gap-5 rounded-3xl bg-card p-6">
                <div className="h-fit rounded-2xl bg-primary p-3 text-primary-foreground"><Icon className="h-6 w-6" /></div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-primary">Bônus {i + 1} · <span className="line-through">{value}</span> grátis</div>
                  <h3 className="mt-1 text-xl font-semibold text-secondary">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="oferta" className="py-20">
        <div className="mx-auto max-w-xl px-5">
          <div className="stamp rounded-[2rem] bg-card p-8 text-center md:p-12">
            <span className="rounded-full bg-accent px-4 py-1 text-sm font-extrabold uppercase text-accent-foreground">Oferta de lançamento</span>
            <h2 className="mt-6 text-3xl font-bold text-secondary">Passaporte Global Kids completo</h2>
            <ul className="mt-6 space-y-2 text-left">
              {["Jogo dos 195 países (Trilha, Moedas e Selos)", "Guia Impressão Inteligente", "Versão Zero Papel para tablet", "Desafio 21 Dias Sem Telas em áudio", "Kit de Adaptação Neurodiversa", "Acesso vitalício"].map((t) => (
                <li key={t} className="flex gap-2 text-foreground"><Check className="mt-1 h-5 w-5 shrink-0 text-success" />{t}</li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">De <span className="line-through">R$ 380</span> por apenas</p>
            <div className="font-display text-6xl font-bold text-primary">R$ 29,90</div>
            <p className="mt-1 font-semibold text-muted-foreground">ou 3x de R$ 10,48 · menos de R$ 0,15 por país</p>
            <div className="mt-8"><CtaButton>Garantir meu acesso agora</CtaButton></div>
            <p className="mt-4 text-sm text-muted-foreground">Pagamento único. Sem mensalidade.</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center md:flex-row md:text-left">
          <ShieldCheck className="h-24 w-24 shrink-0 text-accent" />
          <div>
            <h2 className="text-3xl font-bold">Garantia Blindada de 30 Dias "Anti-Telas"</h2>
            <p className="mt-3 opacity-85">Se seu filho não pedir para trocar o YouTube pelo mapa de explorador em até 30 dias, devolvemos 100% do seu dinheiro — e você ainda fica com todos os PDFs.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl font-bold text-secondary md:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-lg font-bold text-secondary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center"><CtaButton>Começar a expedição</CtaButton></div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Passaporte Global Kids. Todos os direitos reservados.
      </footer>
    </main>
  );
}
