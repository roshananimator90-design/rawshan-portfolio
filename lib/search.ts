import { projects } from './projects';
import {
  bizpilotSections,
  testguardSections,
  clinisightSections,
  revflowSections,
  careNeuSections,
  enterpriseSections
} from './caseStudies';

export interface SearchResult {
  id: string;
  type: 'project' | 'case-study' | 'skill' | 'topic';
  title: string;
  description: string;
  url: string;
  category?: string;
}

const getCaseStudiesByProjectId = (projectId: string) => {
  const caseStudyMap: { [key: string]: typeof bizpilotSections } = {
    'bizpilot-ai': bizpilotSections,
    'testguard': testguardSections,
    'clinisight': clinisightSections,
    'revflow-ai': revflowSections,
    'care-neu': careNeuSections,
    'enterprise': enterpriseSections,
  };
  return caseStudyMap[projectId] || [];
};

const aiLabTopics = [
  { id: 'agentic-ux', title: 'Agentic UX', description: 'Designing autonomous AI agents that users understand and trust' },
  { id: 'ai-copilots', title: 'AI Copilots', description: 'Human-in-the-loop AI systems that augment decision-making' },
  { id: 'multi-agent-ux', title: 'Multi-Agent UX', description: 'Orchestrating multiple AI agents in coordinated workflows' },
  { id: 'human-in-loop', title: 'Human-in-the-Loop', description: 'Design patterns for AI systems with mandatory human oversight' },
  { id: 'ai-trust', title: 'AI Trust & Safety', description: 'Building transparency and confidence in AI systems' },
  { id: 'voice-ux', title: 'Voice UX', description: 'Conversational interfaces and voice-first AI design' },
  { id: 'conversational-ux', title: 'Conversational UX', description: 'Chat and dialogue-based interaction patterns' },
  { id: 'genai-interfaces', title: 'GenAI Interfaces', description: 'UI patterns for generative AI outputs and interactions' },
  { id: 'ai-design-systems', title: 'AI Design Systems', description: 'Design systems for AI-native products' },
];

const skills = [
  { id: 'product-design', title: 'Product Design & Strategy', description: 'Product thinking, user research, design strategy' },
  { id: 'ai-ux', title: 'AI/Agentic UX', description: 'Human-in-the-loop design, AI interaction patterns' },
  { id: 'design-systems', title: 'Design Systems', description: 'Component libraries, design tokens, scalable systems' },
  { id: 'healthcare-design', title: 'Healthcare Product Design', description: 'HIPAA compliance, accessibility, clinical workflows' },
  { id: 'enterprise-design', title: 'Enterprise SaaS Design', description: 'Complex workflows, B2B design, accessibility' },
  { id: 'figma', title: 'Figma & Design Tools', description: 'Design, prototyping, design systems' },
  { id: 'frontend', title: 'Frontend Development', description: 'Next.js, React, TypeScript, responsive design' },
  { id: 'leadership', title: 'Design Leadership', description: 'Team building, design culture, mentorship' },
];

export const searchIndex = (): SearchResult[] => {
  const results: SearchResult[] = [];

  // Index projects
  projects.forEach((project) => {
    results.push({
      id: project.id,
      type: 'project',
      title: project.title,
      description: project.description,
      url: `/work/${project.id}`,
      category: project.category,
    });

    // Index case study sections
    const caseStudies = getCaseStudiesByProjectId(project.id);
    caseStudies.forEach((section) => {
      results.push({
        id: `${project.id}-${section.id}`,
        type: 'case-study',
        title: `${project.title} - ${section.title}`,
        description: `Case study section from ${project.title}`,
        url: `/work/${project.id}#${section.id}`,
        category: project.category,
      });
    });
  });

  // Index AI Lab topics
  aiLabTopics.forEach((topic) => {
    results.push({
      id: topic.id,
      type: 'topic',
      title: topic.title,
      description: topic.description,
      url: '/ai-lab',
      category: 'AI Lab',
    });
  });

  // Index skills
  skills.forEach((skill) => {
    results.push({
      id: skill.id,
      type: 'skill',
      title: skill.title,
      description: skill.description,
      url: '/about',
      category: 'Skills',
    });
  });

  return results;
};

export const search = (query: string): SearchResult[] => {
  if (!query.trim()) return [];

  const lowercaseQuery = query.toLowerCase();
  const allResults = searchIndex();

  return allResults
    .filter((result) => {
      const titleMatch = result.title.toLowerCase().includes(lowercaseQuery);
      const descriptionMatch = result.description.toLowerCase().includes(lowercaseQuery);
      const categoryMatch = result.category?.toLowerCase().includes(lowercaseQuery);
      return titleMatch || descriptionMatch || categoryMatch;
    })
    .sort((a, b) => {
      // Prioritize title matches over description
      const aTitle = a.title.toLowerCase().includes(lowercaseQuery) ? 1 : 0;
      const bTitle = b.title.toLowerCase().includes(lowercaseQuery) ? 1 : 0;
      return bTitle - aTitle;
    })
    .slice(0, 20); // Return top 20 results
};
