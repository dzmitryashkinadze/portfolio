import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlight?: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Senior Data Science Consultant",
    company: "BASE Life Science",
    location: "Basel",
    period: "01.2026 - present",
    description: "Team coordination and development of the agentic GenAI platform structuring clinical trial protocols for a large pharmaceutical company",
    highlight: "GenAI Platform Lead",
  },
  {
    id: 2,
    title: "NLP Engineer",
    company: "MDPI",
    location: "Basel",
    period: "07.2024 - 12.2025",
    description: "Co-lead development of the big data pipeline that increased completeness by 10% for over 50M scientific profiles. Developed transformer-based spam detection (3x reduction) and ML model for name annotation (+8% accuracy). Rewrote external database dump processing pipeline in Rust achieving 1500x speedup (1 month → 30min)",
    highlight: "Rust Pipeline: 1500x Speedup",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Accenture",
    location: "Zürich",
    period: "05.2022 - 06.2024",
    description: "Led GenAI stream of 3 developers for 6 months developing 5 GenAI applications. Co-developed patient-trial matching platform extracting health data from EHR. Built ETL pipeline for FHIR/HL7/OMOP medical data with NLP annotation using SNOMED/LOINC ontologies",
    highlight: "5 GenAI Applications Deployed",
  },
  {
    id: 4,
    title: "Research Assistant / PhD Candidate",
    company: "ETHZ",
    location: "Zürich",
    period: "05.2018 - 04.2022",
    description: "Developed a novel statistical approach for the extraction of protein correlated motion. Published four first-author papers in bioinformatics",
    highlight: "PhD in Bioinformatics",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium">
                    {card.company}
                  </p>
                </div>
                {card.highlight && (
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full whitespace-nowrap">
                    {card.highlight}
                  </span>
                )}
              </div>
              <p className="text-white/50 text-xs mb-3">
                {card.location} | {card.period}
              </p>
              <p className="text-white/70 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

