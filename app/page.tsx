import { site } from '@/lib/site';
const work = [
  ['2026', 'BASS, final-year project', 'Ekydra by Veolia', 'End-to-end data science and AI engineering: models on noisy sensor data, MLOps in production and an LLM agent over internal documentation. Best F1 0.731.', 'PyTorch, MLflow, DVC, FastAPI, Docker, RAG'],
  ['2026', 'Job Copilot', 'Personal project', 'A job-search agent that retrieves, reranks and verifies its answers, with every run traced and evaluated.', 'LangGraph, pgvector, Pydantic, Langfuse'],
  ['2025', 'Industrial RAG assistant', 'Proditec', 'Question answering over technical documents with cited sources. Search time cut from 60 minutes to under 20 seconds.', 'OCR, ChromaDB, LangChain, Mistral 7B'],
  ['2025', 'DefectScope', 'Industrial anomaly detection', 'Visual defect detection as a reproducible, monitored service.', 'PatchCore, PaDiM, DVC, Grafana, GitHub Actions'],
];
const skills = [
  ['Data science and ML', 'PyTorch, TensorFlow, scikit-learn, statistical testing'],
  ['Generative AI and agents', 'LLMs, RAG, LangChain, LangGraph, Hugging Face'],
  ['MLOps and LLMOps', 'Docker, CI/CD, MLflow, DVC, Grafana, Langfuse, AWS, Databricks'],
  ['Backend and data', 'Python, FastAPI, PostgreSQL, MongoDB, PySpark'],
];
const path = [
  ['2026', 'Data Scientist / ML Engineer', 'Ekydra by Veolia, Bordeaux'],
  ['2025', 'Data Engineering and Scientific Computing', 'Bordeaux Astrophysics Laboratory'],
  ['2023 to 2026', 'Engineering degree, AI specialisation', 'Bordeaux-INP ENSEIRB-MATMECA'],
];
const Sec = ({ label, id, children }: { label: string; id?: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto grid max-w-6xl gap-6 border-t-2 border-ink px-6 py-14 md:grid-cols-12">
    <h2 className="font-mono text-sm md:col-span-3">{label}</h2><div className="md:col-span-9">{children}</div>
  </section>
);
export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg font-extrabold">{site.name}</span>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm font-medium">
          <a href="#work" className="hover:text-hot">Work</a><a href="#contact" className="hover:text-hot">Contact</a>
          <a href={site.cv} download className="rounded-full bg-ink px-4 py-2 text-white hover:bg-hot">Download CV</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="rise mb-6 flex items-center gap-2 text-sm"><span className="size-2.5 rounded-full bg-hot" />Open to opportunities in Europe and internationally</p>
          <h1 className="rise font-display text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[.95] tracking-[-.04em]" style={{ '--i': 1 } as React.CSSProperties}>Data science and AI engineering, from model to production.</h1>
          <p className="rise mt-8 max-w-xl text-lg text-mute" style={{ '--i': 2 } as React.CSSProperties}>I build machine learning and generative AI systems for industrial and scientific teams, and I run them once they ship.</p>
          <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ '--i': 3 } as React.CSSProperties}>
            <a href="#work" className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-hot">See my work</a>
            <a href={`mailto:${site.email}`} className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:border-hot hover:text-hot">Get in touch</a>
          </div>
        </div>
        <img src="/photo.jpg" alt="Portrait of Mohammed-Amine Salhi" width={480} height={480} className="rise aspect-square w-full max-w-xs justify-self-start border-2 border-ink object-cover md:col-span-4 md:justify-self-end" style={{ '--i': 2 } as React.CSSProperties} />
      </section>

      <Sec label="Selected work" id="work">
        <ul>{work.map(([y, t, c, d, s]) => (
          <li key={t} className="grid gap-1 border-b border-ink/20 py-7 first:pt-0 last:border-0 md:grid-cols-[5rem_1fr]">
            <span className="font-mono text-sm text-mute">{y}</span>
            <div><h3 className="font-display text-2xl font-extrabold tracking-tight">{t}</h3>
              <div className="text-sm text-mute">{c}</div><p className="mt-2 max-w-[60ch]">{d}</p>
              <p className="mt-3 font-mono text-xs text-mute">{s}</p></div>
          </li>))}</ul>
      </Sec>

      <Sec label="Skills"><dl className="grid gap-8 sm:grid-cols-2">{skills.map(([t, d]) => <div key={t}><dt className="font-display text-lg font-extrabold">{t}</dt><dd className="mt-1 text-mute">{d}</dd></div>)}</dl></Sec>

      <Sec label="Path"><ol className="space-y-6">{path.map(([y, t, o]) => (
        <li key={t} className="grid gap-1 md:grid-cols-[8rem_1fr]"><span className="font-mono text-sm text-mute">{y}</span><div><div className="font-semibold">{t}</div><div className="text-mute">{o}</div></div></li>))}</ol></Sec>

      <Sec label="Contact" id="contact">
        <p className="font-display text-4xl font-extrabold leading-tight tracking-tight">Looking for a data science or AI engineer?</p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-medium">
          <a href={`mailto:${site.email}`} className="underline decoration-2 underline-offset-4 hover:text-hot">{site.email}</a>
          <a href={site.github} className="underline decoration-2 underline-offset-4 hover:text-hot">GitHub</a>
          {site.linkedin && <a href={site.linkedin} className="underline decoration-2 underline-offset-4 hover:text-hot">LinkedIn</a>}
          <a href={site.cv} download className="underline decoration-2 underline-offset-4 hover:text-hot">CV (PDF)</a>
        </div>
      </Sec>
      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-mute">{site.name}</footer>
    </main>
  );
}
