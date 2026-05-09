import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "GenAI Clinical Trial Platform",
    description: "Agentic GenAI platform for structuring clinical trial protocols. Led team of 3 developers building the core AI infrastructure that automates protocol analysis and extraction for a large pharmaceutical company.",
    tech: ["GenAI", "Python", "MLOps", "Healthcare"],
  },
  {
    id: 2,
    title: "Big Data Pipeline - 50M Profiles",
    description: "Co-led development of big data pipeline that increased data completeness by 10% for over 50M scientific profiles on scilit.com. Built scalable ETL processing system handling massive academic metadata.",
    tech: ["Python", "Spark", "ETL", "NLP"],
  },
  {
    id: 3,
    title: "Rust Pipeline Optimization",
    description: "Rewrote external database dump processing pipeline in Rust achieving 1500x speedup - dropping runtime from 1 month to 30 minutes. Dramatically improved data processing efficiency for MDPI.",
    tech: ["Rust", "Performance", "ETL"],
  },
  {
    id: 4,
    title: "Transformer Spam Detection",
    description: "Developed and deployed transformer-based spam detection solution for sciprofiles.com that led to 3x reduction in spam volume. Improved platform content quality through ML-based filtering.",
    tech: ["Transformers", "ML", "Python"],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Technical Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                </div>

                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl border border-purple-900/30">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">⚡</div>
                        <div className="text-purple-400 text-sm">{project.tech[0]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

