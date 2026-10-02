export default function AILabPage() {
  const topics = [
    {
      title: 'Agentic UX',
      description: 'Designing for autonomous AI agents that make decisions within guardrails.',
    },
    {
      title: 'AI Copilots',
      description: 'Building AI assistants that augment human work, not replace it.',
    },
    {
      title: 'Multi-Agent UX',
      description: 'Coordinating multiple AI agents and surfacing their interactions to users.',
    },
    {
      title: 'Human-in-the-Loop',
      description: 'Keeping humans informed and in control of AI-assisted workflows.',
    },
    {
      title: 'AI Trust & Safety',
      description: 'Designing for transparency, verification, and user confidence.',
    },
    {
      title: 'Voice & Conversational UX',
      description: 'Natural language interfaces for complex AI interactions.',
    },
    {
      title: 'GenAI Interfaces',
      description: 'Designing generative AI experiences that feel controllable and understandable.',
    },
    {
      title: 'AI Design Systems',
      description: 'Building design systems for AI-native products at scale.',
    },
    {
      title: 'AI + Healthcare',
      description: 'Applying AI UX principles in regulated, high-stakes healthcare environments.',
    },
  ];

  return (
    <div className="bg-dark-bg min-h-screen">
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-max">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">AI Lab</h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Exploring the intersection of AI, product design, and human experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div key={topic.title} className="glass-panel p-6 hover:border-electric-blue/50 transition-all cursor-pointer group">
                <div className="text-sm font-semibold text-electric-blue mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:gradient-text transition-all">
                  {topic.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
