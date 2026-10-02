import { CaseStudyLayout } from '@/components/CaseStudyLayout';
import { projects } from '@/lib/projects';
import {
  bizpilotSections,
  testguardSections,
  clinisightSections,
  revflowSections,
  careNeuSections,
  enterpriseSections,
} from '@/lib/caseStudies';
import { notFound } from 'next/navigation';

const caseStudyMap: Record<string, typeof bizpilotSections> = {
  'bizpilot-ai': bizpilotSections,
  'testguard': testguardSections,
  'clinisight': clinisightSections,
  'revflow-ai': revflowSections,
  'care-neu': careNeuSections,
  'enterprise': enterpriseSections,
};

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const sections = caseStudyMap[id];

  if (!project || !sections) {
    notFound();
  }

  return <CaseStudyLayout project={project} sections={sections} />;
}
