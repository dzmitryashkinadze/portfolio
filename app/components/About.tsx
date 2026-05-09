import Image from "next/image";

const skills = [
  { category: "Consulting", items: ["Effective Communication", "Agile & Goal-oriented"] },
  { category: "Software Development", items: ["Software Design", "Feature-driven Development"] },
  { category: "NLP / GenAI", items: ["Transformers", "LLMs", "AI Agents"] },
  { category: "Data Engineering", items: ["ETL Pipelines", "SQL", "DuckDB", "Knowledge Graphs"] },
  { category: "DevOps / MLOps", items: ["CI/CD", "Cloud Infrastructure", "Model Deployment"] },
];

const certifications = [
  "SAFe PO/PM",
  "Neo4j Professional + GDS",
  "AWS ML Specialty",
  "AWS Solution Architect",
  "AWS Cloud Practitioner",
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "Fluent" },
  { name: "Russian", level: "Native" },
];

const education = [
  { degree: "PhD in Bioinformatics", school: "ETH Zürich", period: "2018 - 2022", thesis: "Investigation of protein correlated motion and allostery" },
  { degree: "MSc ETH", school: "ETH Zürich", period: "2016 - 2018", grade: "5.1/6" },
  { degree: "BSc ETH", school: "ETH Zürich", period: "2013 - 2016", grade: "5.0/6" },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-5 border border-purple-900/30">
              <h3 className="text-purple-400 font-semibold mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="text-white/70 text-sm bg-white/5 px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30">
            <h3 className="text-purple-400 font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert, i) => (
                <li key={i} className="text-white/70 text-sm">• {cert}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30">
            <h3 className="text-purple-400 font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang, i) => (
                <li key={i} className="text-white/70 text-sm flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-purple-400/70">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30">
            <h3 className="text-purple-400 font-semibold mb-4">Education</h3>
            <ul className="space-y-3">
              {education.map((edu, i) => (
                <li key={i} className="text-white/70 text-sm">
                  <div className="text-white font-medium">{edu.degree}</div>
                  <div className="text-purple-400/70">{edu.school} | {edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

