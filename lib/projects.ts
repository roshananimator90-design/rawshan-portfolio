export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image?: string;
  gradient: string;
  role: string;
  industry: string[];
  outcome: string;
  client?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'bizpilot-ai',
    title: 'BizPilot AI',
    description: 'AI-powered finance operations platform for modern teams.',
    longDescription: 'An intelligent financial operations platform that uses AI to automate invoicing, cash flow forecasting, and payment approvals. Built with human-in-the-loop workflows for enterprise finance teams.',
    category: 'AI Product Design',
    tags: ['Agentic AI', 'GenAI', 'Enterprise SaaS', 'AI Copilot', 'Voice UX', 'Human-in-the-Loop'],
    gradient: 'from-electric-blue/20 to-cyan-500/20',
    role: 'Senior Product Designer',
    industry: ['FinTech', 'Enterprise SaaS'],
    outcome: 'Concept Platform',
    year: 2024,
  },
  {
    id: 'testguard',
    title: 'TestGuard',
    description: 'AI-native quality engineering platform with autonomous agents.',
    longDescription: 'Next-generation quality engineering platform powered by AI agents. Automates test planning, exploratory testing, and risk assessment while maintaining human oversight and control.',
    category: 'Agentic AI',
    tags: ['Agentic AI', 'QA Automation', 'Enterprise', 'AI Agents', 'Human-in-the-Loop'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    role: 'Senior Product Designer',
    industry: ['DevTools', 'Enterprise SaaS'],
    outcome: 'Concept Platform',
    year: 2024,
  },
  {
    id: 'clinisight',
    title: 'CliniSight UX Auditor',
    description: 'AI-powered healthcare UI auditing and accessibility analysis.',
    longDescription: 'Intelligent platform for auditing healthcare application UX using AI vision models. Analyzes screenshots, identifies accessibility issues, and provides WCAG-compliant recommendations with human verification workflows.',
    category: 'Healthcare',
    tags: ['Healthcare', 'AI Product Design', 'Accessibility', 'Design Systems', 'Human-in-the-Loop'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    role: 'Senior Product Designer, UX Researcher',
    industry: ['Healthcare Tech', 'SaaS'],
    outcome: 'Concept Platform',
    year: 2024,
  },
  {
    id: 'revflow-ai',
    title: 'RevFlow AI',
    description: 'AI-assisted healthcare revenue cycle management platform.',
    longDescription: 'Intelligent revenue cycle platform for healthcare organizations. Uses AI to identify claim denials, predict revenue risks, and recommend actions, all with mandatory human review and approval workflows.',
    category: 'Healthcare',
    tags: ['Healthcare', 'Enterprise SaaS', 'AI Copilot', 'Human-in-the-Loop', 'Compliance'],
    gradient: 'from-orange-500/20 to-red-500/20',
    role: 'Product Designer',
    industry: ['Healthcare', 'FinTech'],
    outcome: 'Concept Platform',
    year: 2024,
  },
  {
    id: 'care-neu',
    title: 'Care Neu',
    description: 'AI-native healthcare coordination platform for better patient outcomes.',
    longDescription: 'Patient care coordination platform leveraging AI agents to streamline communication between patients, providers, and care teams. Designed with agentic UX principles and human-in-the-loop decision making.',
    category: 'Healthcare',
    tags: ['Healthcare', 'AI Product Design', 'Agentic AI', 'Patient Experience', 'Provider Experience'],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    role: 'Senior Product Designer',
    industry: ['Healthcare', 'Enterprise SaaS'],
    outcome: 'Concept Platform',
    year: 2024,
  },
  {
    id: 'enterprise',
    title: 'Enterprise SaaS & Product Work',
    description: 'Design systems, workflows, and product strategy for high-stakes SaaS.',
    longDescription: 'Years of experience designing enterprise products including design systems, complex workflows, data visualization, and AI-native experiences for financial, healthcare, and logistics platforms.',
    category: 'Enterprise SaaS',
    tags: ['Enterprise SaaS', 'Design Systems', 'Product Strategy', 'UX Architecture', 'Leadership'],
    gradient: 'from-slate-500/20 to-zinc-500/20',
    role: 'Senior Product Designer, Lead',
    industry: ['Enterprise SaaS', 'Various'],
    outcome: 'Production Portfolio',
    year: 2024,
  },
];

export const categories = [
  'All',
  'AI Product Design',
  'Agentic AI',
  'GenAI',
  'AI Copilot',
  'Human-in-the-Loop',
  'Healthcare',
  'Enterprise SaaS',
  'Design Systems',
  'Voice UX',
  'AI QA / Automation',
];
